import type { Champion } from "../../shared/types";

export function initChampionPicker(
  searchInput: HTMLInputElement,
  resultsContainer: HTMLElement,
  champions: Champion[],
  ownedIds: () => Set<string>,
  onAdd: (championId: string) => void,
): void {
  function render(query: string) {
    resultsContainer.innerHTML = "";
    const q = query.trim().toLowerCase();
    if (!q) return;

    const owned = ownedIds();
    const matches = champions
      .filter((c) => !owned.has(c.id) && c.name.toLowerCase().includes(q))
      .slice(0, 12);

    for (const champion of matches) {
      const item = document.createElement("div");
      item.className = "search-result";
      item.setAttribute("role", "option");
      item.tabIndex = 0;
      item.textContent = `${champion.name} — ${champion.rarity} · ${champion.affinity} · ${champion.faction}`;
      const add = () => {
        onAdd(champion.id);
        searchInput.value = "";
        resultsContainer.innerHTML = "";
        searchInput.focus();
      };
      item.addEventListener("click", add);
      item.addEventListener("keydown", (e) => {
        if (e.key === "Enter") add();
      });
      resultsContainer.appendChild(item);
    }
  }

  searchInput.addEventListener("input", () => render(searchInput.value));
}
