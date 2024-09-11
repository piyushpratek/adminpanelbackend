import express from "express";
import { adminOnly } from "../middlewares/auth.js";
import {
  getBarCharts,
  getDashboardStats,
  getLineCharts,
  getPieCharts,
} from "../controllers/stats.js";

const router = express.Router();

// route - /api/v1/dashboard/stats
router.route("/stats").get(adminOnly, getDashboardStats)

// route - /api/v1/dashboard/pie
router.route("/pie").get(adminOnly, getPieCharts)

// route - /api/v1/dashboard/bar
router.route("/bar").get(adminOnly, getBarCharts)

// route - /api/v1/dashboard/line
router.route("/line").get(adminOnly, getLineCharts)

export default router;
