import templates from "../../data/templates.json";
import { json } from "../lib/http";

// GET /api/templates — the starter Clan Boss team archetypes.
export const onRequestGet: PagesFunction = async () => json(templates);
