import { Router } from "express";
import analyzeGuestProfiles from "../utils/anlyze";

export const router = Router();

router.get("/analyze", analyzeGuestProfiles);
