Drop real 3D hero models here to replace the placeholder shapes.

Name each prefab after the hero's id (for example "ysolde.prefab", "vaelith.prefab").
Hero ids are listed in Assets/Sigilbound/Core/GameData.cs.

- The model should stand on the origin, facing +Z, about 2 units tall.
- If it has an Animator, the game fires these triggers: Attack, Cast, Hit, Die.
  Idle should be the default state.
- Heroes without a prefab here keep using the placeholder look.
