import type { Champion, TeamSuggestion } from "../../shared/types";

function renderMembers(container: HTMLElement, suggestion: TeamSuggestion, championsById: Map<string, Champion>): void {
  const members = document.createElement("div");
  members.className = "team-members";
  members.textContent =
    suggestion.championIds.map((id) => championsById.get(id)?.name ?? id).join(", ") ||
    "No champions available";
  container.appendChild(members);

  for (const warning of suggestion.warnings) {
    const w = document.createElement("p");
    w.className = "warning";
    w.textContent = warning;
    container.appendChild(w);
  }
}

function renderComparisonCard(
  container: HTMLElement,
  aiSuggestion: TeamSuggestion,
  communityTeam: TeamSuggestion,
  championsById: Map<string, Champion>,
  isTopPick: boolean,
): void {
  const card = document.createElement("div");
  card.className = "result-card comparison-card" + (isTopPick ? " top-pick" : "");

  const heading = document.createElement("h3");
  heading.textContent = aiSuggestion.templateName;
  card.appendChild(heading);

  const columns = document.createElement("div");
  columns.className = "comparison-columns";

  const communityCol = document.createElement("div");
  communityCol.className = "comparison-column";
  const communityHeading = document.createElement("h4");
  communityHeading.textContent = `Community pick — ${communityTeam.score}/100`;
  communityCol.appendChild(communityHeading);
  renderMembers(communityCol, communityTeam, championsById);
  columns.appendChild(communityCol);

  const aiCol = document.createElement("div");
  aiCol.className = "comparison-column";
  const aiHeading = document.createElement("h4");
  aiHeading.textContent = `AI-optimized from your roster — ${aiSuggestion.score}/100`;
  aiCol.appendChild(aiHeading);
  renderMembers(aiCol, aiSuggestion, championsById);
  columns.appendChild(aiCol);

  card.appendChild(columns);

  const verdict = document.createElement("p");
  verdict.className = "comparison-verdict";
  if (aiSuggestion.score > communityTeam.score) {
    verdict.textContent = `Your roster supports a stronger lineup than the standard comp (+${aiSuggestion.score - communityTeam.score}).`;
  } else if (communityTeam.score > aiSuggestion.score) {
    verdict.textContent = `The standard comp beats what else your roster can field here (+${communityTeam.score - aiSuggestion.score}) — worth investing in the named champions you're missing.`;
  } else {
    verdict.textContent = "Your roster matches the standard comp — no stronger alternative found.";
  }
  card.appendChild(verdict);

  container.appendChild(card);
}

export function renderResults(
  container: HTMLElement,
  suggestions: TeamSuggestion[],
  championsById: Map<string, Champion>,
  communityTeams: Map<string, TeamSuggestion> = new Map(),
): void {
  container.innerHTML = "";

  if (suggestions.length === 0) {
    const empty = document.createElement("p");
    empty.textContent = "Add champions to your roster to see suggested teams.";
    container.appendChild(empty);
    return;
  }

  suggestions.forEach((suggestion, index) => {
    const communityTeam = communityTeams.get(suggestion.templateId);
    if (communityTeam) {
      renderComparisonCard(container, suggestion, communityTeam, championsById, index === 0);
      return;
    }

    const card = document.createElement("div");
    card.className = "result-card" + (index === 0 ? " top-pick" : "");

    const heading = document.createElement("h3");
    const title = document.createElement("span");
    title.textContent = suggestion.templateName;
    const score = document.createElement("span");
    score.className = "score";
    score.textContent = `${suggestion.score}/100`;
    heading.appendChild(title);
    heading.appendChild(score);
    card.appendChild(heading);

    renderMembers(card, suggestion, championsById);

    container.appendChild(card);
  });
}
