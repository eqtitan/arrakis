import type { Template } from "../../shared/types";

export function renderTemplateGallery(container: HTMLElement, templates: Template[]): void {
  container.innerHTML = "";
  for (const template of templates) {
    const card = document.createElement("div");
    card.className = "template-card";

    const heading = document.createElement("h3");
    heading.textContent = template.name;
    card.appendChild(heading);

    const desc = document.createElement("p");
    desc.textContent = template.description;
    card.appendChild(desc);

    const tags = document.createElement("div");
    tags.className = "template-tags";
    tags.textContent = `${template.purpose} · ${template.style}`;
    card.appendChild(tags);

    container.appendChild(card);
  }
}
