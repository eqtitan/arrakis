import champions from "../../data/champions.json";
import { json } from "../lib/http";

// GET /api/champions — the curated Clan Boss champion seed dataset.
export const onRequestGet: PagesFunction = async () => json(champions);
