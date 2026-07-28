import type { Champion, Template } from "../../shared/types";

export async function fetchChampions(): Promise<Champion[]> {
  const res = await fetch("/api/champions");
  if (!res.ok) throw new Error(`Failed to load champions (${res.status})`);
  return res.json();
}

export async function fetchTemplates(): Promise<Template[]> {
  const res = await fetch("/api/templates");
  if (!res.ok) throw new Error(`Failed to load templates (${res.status})`);
  return res.json();
}
