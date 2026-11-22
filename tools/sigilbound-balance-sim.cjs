// Sigilbound balance sim: a simulated player progresses through the campaign with the real game rules.
// Usage: node tools/sigilbound-balance-sim.cjs   (override the curve with CURVE='{"end":1.9}')
const fs=require('fs'),vm=require('vm');
const dir=require('path').join(__dirname,'../public/game/');
function boot(){
  const ctx={process,localStorage:{getItem(){return null},setItem(){}},console,Math,Date,JSON,Object,Array};
  vm.createContext(ctx);
  vm.runInContext(['data.js','state.js','battle.js'].map(f=>fs.readFileSync(dir+f,'utf8')).join('\n')+
  `;Object.assign(ENEMY_CURVE, JSON.parse(process.env.CURVE||'{}'));globalThis.X={get G(){return G},addHero,summon,autoEquip,heroStats,power,giveXp,xpToCap,canRankUp,rankUp,rankUpFodder,
    stageWaves,stageRewards,rollStageGear,grant,unitFromHero,unitFromEnemy,Battle,TOTAL_STAGES,maxLevelFor,makeGear,equip,
    gearOwner,sellGear,upgradeGear,gearUpgradeCost,releaseHero,HERO,RARITY,TRAIN_XP_PER_GOLD,MAX_STARS,rankUpGold,STAGES_PER_CHAPTER,
    titanUnit,TITAN_TURNS,TITAN_TIERS,LOGIN_REWARDS,ensureDaily};`,ctx);
  return ctx.X;
}
function fight(X,b){let n=0;while(!b.over&&n++<3000){const u=b.nextActor();const {skip}=b.beginTurn(u);if(!skip){const c=b.aiChoose(u);b.act(u,c.skill,c.target);}b.endTurn(u);}return b;}
function run(seedLabel, BATTLES_PER_DAY=40){
  const X=boot(); const G=X.G;
  const a=X.addHero('ysolde'),b=X.addHero('pell'),c=X.addHero('odo'); G.team=[a.uid,b.uid,c.uid]; G.started=true;
  for(const h of [a,b,c]) X.equip(h,X.makeGear(1,'weapon'));
  let battles=0, day=0; const perChapter=[]; let chapterStart=0; let firstTry=[],stuck=false;
  const manage=()=>{
    for(const k of ['common','mystic','radiant']) if(G.shards[k]) X.summon(k,G.shards[k]);
    const team=()=>G.team.map(u=>G.heroes.find(h=>h.uid===u));
    // pick best 4 by "potential": stars then power
    const ranked=[...G.heroes].sort((p,q)=>q.stars-p.stars||X.power(X.heroStats(q))-X.power(X.heroStats(p)));
    const heals=h=>X.HERO[h.id].skills.some(sk=>sk.fx.some(f=>f.t==='heal'||f.t==='regen'));
    const pickT=[]; const seen=new Set();
    const healer=ranked.find(heals); if(healer){pickT.push(healer);seen.add(healer.id);}
    for(const h of ranked){ if(pickT.length>=4)break; if(seen.has(h.id))continue; pickT.push(h); seen.add(h.id); }
    for(const h of ranked){ if(pickT.length>=4)break; if(!pickT.includes(h)) pickT.push(h); }
    G.team=pickT.map(h=>h.uid);
    for(const h of team()) X.autoEquip(h);
    // upgrade team gear cheaply (keep 40% of gold for training)
    for(const h of team()) for(const s of Object.values(h.gear)){const g=G.gear.find(x=>x.uid===s); while(g&&g.level<10&&X.gearUpgradeCost(g)<G.gold*0.08) X.upgradeGear(g);}
    // sell junk
    for(const g of [...G.gear]) if(!X.gearOwner(g) && G.gear.length>30) X.sellGear(g);
    // train team to cap with gold
    for(const h of team()){const need=Math.ceil(X.xpToCap(h)/X.TRAIN_XP_PER_GOLD); const spend=Math.min(need,Math.floor(G.gold*0.5)); if(spend>0){G.gold-=spend;X.giveXp(h,spend*X.TRAIN_XP_PER_GOLD);} }
    // rank up team members when possible
    for(const h of team()) if(X.canRankUp(h)){const f=X.rankUpFodder(h).sort((p,q)=>p.level-q.level).slice(0,h.stars); X.rankUp(h,f.map(x=>x.uid));}
    // build fodder: rank up lowest non-team heroes toward the team's min star level
    const minStar=Math.min(...team().map(h=>h.stars));
    for(let s=1;s<minStar;s++){
      for(const h of G.heroes.filter(h=>h.stars===s&&!G.team.includes(h.uid))){
        if(G.gold<X.rankUpGold(s)*3) break;
        const need=Math.ceil(X.xpToCap(h)/X.TRAIN_XP_PER_GOLD); if(need>G.gold*0.3) continue;
        G.gold-=need; X.giveXp(h,need*X.TRAIN_XP_PER_GOLD);
        if(X.canRankUp(h)){const f=X.rankUpFodder(h).sort((p,q)=>p.level-q.level).slice(0,h.stars); X.rankUp(h,f.map(x=>x.uid));}
      }
    }
  };
  const newDay=()=>{ day++; X.grant(X.LOGIN_REWARDS[(day-1)%7]); X.grant({gold:2000+1500+3000,common:2,mystic:2});
    // titan x3
    for(let i=0;i<3;i++){const team=G.team.map(u=>G.heroes.find(h=>h.uid===u)); const tp=team.reduce((s,h)=>s+X.power(X.heroStats(h)),0)/team.length*4;
      const bt=fight(X,new X.Battle(team.map(X.unitFromHero),[[X.titanUnit(tp)]],{titan:true,turnLimit:X.TITAN_TURNS}));
      let tier=X.TITAN_TIERS[0]; for(const t of X.TITAN_TIERS) if((bt.titanDamage||0)>=t.dmg) tier=t; X.grant(tier); if(i==0&&day%5==0) dmgLog.push(Math.round(bt.titanDamage));}
  };
  const dmgLog=[];
  manage();
  let attemptsOnStage=0;
  while(G.cleared<X.TOTAL_STAGES){
    const idx=G.cleared;
    const team=G.team.map(u=>G.heroes.find(h=>h.uid===u));
    const bt=fight(X,new X.Battle(team.map(X.unitFromHero),X.stageWaves(idx).map(w=>w.map(X.unitFromEnemy))));
    battles++; if(battles%BATTLES_PER_DAY===0) newDay();
    attemptsOnStage++;
    let win=bt.result==='victory';
    if(win){ const r=X.stageRewards(idx,true); X.grant(r); for(const h of team) X.giveXp(h,r.xp); X.rollStageGear(idx); G.cleared++;
      firstTry.push(attemptsOnStage===1); attemptsOnStage=0; }
    else {
      // farm previous stage 5 times then retry
      for(let k=0;k<5;k++){ const pidx=Math.max(0,idx-1);
        const fb=fight(X,new X.Battle(team.map(X.unitFromHero),X.stageWaves(pidx).map(w=>w.map(X.unitFromEnemy))));
        battles++; if(battles%BATTLES_PER_DAY===0) newDay();
        if(fb.result==='victory'){const r=X.stageRewards(pidx,false); X.grant(r); for(const h of team) X.giveXp(h,r.xp); X.rollStageGear(pidx);} }
    }
    manage();
    if(G.cleared%X.STAGES_PER_CHAPTER===0 && win){ perChapter.push(battles-chapterStart); chapterStart=battles; }
    if(battles>6000){stuck=true;break;}
  }
  const team=G.team.map(u=>G.heroes.find(h=>h.uid===u));
  return {battles,days:day,perChapter,stuckAt:stuck?G.cleared:null,firstTry:firstTry.filter(Boolean).length/firstTry.length,
    team:team.map(h=>`${h.id}${h.stars}★L${h.level}`).join(' '),dmgLog};
}
const r=run(0); console.log(JSON.stringify({b:r.battles,d:r.days,ch:r.perChapter,stuck:r.stuckAt,ft:+r.firstTry.toFixed(2),team:r.team,titan:r.dmgLog.slice(0,3)}));
