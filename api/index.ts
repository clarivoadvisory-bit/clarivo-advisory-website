// @ts-nocheck
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export default async function handler(req, res) {
  const { default: router } = await import("../artifacts/api-server/src/routes/index.js");
  app.use("/api", router);
  return app(req, res);
}
