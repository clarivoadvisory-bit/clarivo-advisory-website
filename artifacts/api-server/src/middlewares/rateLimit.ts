import rateLimit from "express-rate-limit";

export const leadsRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many submissions. Please try again later." },
  validate: { xForwardedForHeader: false },
});

export const adminRateLimit = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many requests." },
  validate: { xForwardedForHeader: false },
});
