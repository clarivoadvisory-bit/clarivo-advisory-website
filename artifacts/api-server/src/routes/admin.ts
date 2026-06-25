import { Router } from "express";
import { db, leadsTable } from "@workspace/db";
import { desc } from "drizzle-orm";
import { adminRateLimit } from "../middlewares/rateLimit";
import type { Request, Response } from "express";

const router = Router();

function authenticate(req: Request, res: Response): boolean {
  const adminToken = process.env["ADMIN_TOKEN"];
  if (!adminToken) {
    res.status(503).json({ error: "Admin access not configured." });
    return false;
  }
  const auth = req.headers["authorization"];
  if (!auth || auth !== `Bearer ${adminToken}`) {
    res.status(401).json({ error: "Unauthorized" });
    return false;
  }
  return true;
}

router.get("/admin/leads", adminRateLimit, async (req, res) => {
  if (!authenticate(req, res)) return;

  try {
    const leads = await db
      .select()
      .from(leadsTable)
      .orderBy(desc(leadsTable.createdAt))
      .limit(200);

    res.json({
      total: leads.length,
      leads,
    });
  } catch (err) {
    req.log.error({ err }, "Failed to fetch leads");
    res.status(500).json({ error: "Failed to fetch leads" });
  }
});

export default router;
