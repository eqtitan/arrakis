import type { Champion, TeamSuggestion } from "../../shared/types";

export function renderResults(
  container: HTMLElement,
  suggestions: TeamSuggestion[],
  championsById: Map<string, Champion>,
): void {
  container.innerHTML = "";

  if (suggestions.length === 0) {
    const empty = document.createElement("p");
    empty.textContent = "Add champions to your roster to see suggested teams.";
    container.appendChild(empty);
    return;
  }

  suggestions.forEach((suggestion, index) => {
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

    const members = document.createElement("div");
    members.className = "team-members";
    members.textContent = suggestion.championIds
      .map((id) => championsById.get(id)?.name ?? id)
      .join(", ") || "No champions available";
    card.appendChild(members);

    for (const warning of suggestion.warnings) {
      const w = document.createElement("p");
      w.className = "warning";
      w.textContent = warning;
      card.appendChild(w);
    }

    container.appendChild(card);
  });
}
