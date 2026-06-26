// @ts-nocheck
import app from "../artifacts/api-server/src/app.js";

export default async function handler(req, res) {
  return app(req, res);
}
