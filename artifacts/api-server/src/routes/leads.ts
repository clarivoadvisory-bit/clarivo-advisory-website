// @ts-nocheck
import { Router } from "express";
import { db, leadsTable } from "@workspace/db";
import { sendOwnerNotification, sendUserConfirmation } from "../lib/email";
import { leadsRateLimit } from "../middlewares/rateLimit";

const router = Router();

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

interface LeadPayload {
  name: unknown;
  email: unknown;
  company?: unknown;
  phone?: unknown;
  projectType?: unknown;
  budget?: unknown;
  message: unknown;
  sourcePage?: unknown;
  jobTitle?: unknown;
  country?: unknown;
  companyType?: unknown;
  currentSituation?: unknown;
  currentInfrastructure?: unknown;
  areasOfInterest?: unknown;
  implementationTimeline?: unknown;
  linkedinUrl?: unknown;
  howDidYouHearAboutUs?: unknown;
  utmSource?: unknown;
  utmMedium?: unknown;
  utmCampaign?: unknown;
  utmContent?: unknown;
  landingPage?: unknown;
  _honeypot?: unknown;
}

router.post("/leads", leadsRateLimit, async (req, res) => {
  const body = req.body as LeadPayload;

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const company = typeof body.company === "string" ? body.company.trim() || null : null;
  const phone = typeof body.phone === "string" ? body.phone.trim() || null : null;
  const projectType = typeof body.projectType === "string" ? body.projectType.trim() || null : null;
  const budget = typeof body.budget === "string" ? body.budget.trim() || null : null;
  const sourcePage = typeof body.sourcePage === "string" ? body.sourcePage.trim() || "contact" : "contact";
  
  // Cortex fields
  const jobTitle = typeof body.jobTitle === "string" ? body.jobTitle.trim() || null : null;
  const country = typeof body.country === "string" ? body.country.trim() || null : null;
  const companyType = typeof body.companyType === "string" ? body.companyType.trim() || null : null;
  const currentSituation = typeof body.currentSituation === "string" ? body.currentSituation.trim() || null : null;
  const currentInfrastructure = typeof body.currentInfrastructure === "string" ? body.currentInfrastructure.trim() || null : null;
  const areasOfInterest = typeof body.areasOfInterest === "string" ? body.areasOfInterest.trim() || null : null;
  const implementationTimeline = typeof body.implementationTimeline === "string" ? body.implementationTimeline.trim() || null : null;
  const linkedinUrl = typeof body.linkedinUrl === "string" ? body.linkedinUrl.trim() || null : null;
  const howDidYouHearAboutUs = typeof body.howDidYouHearAboutUs === "string" ? body.howDidYouHearAboutUs.trim() || null : null;
  const utmSource = typeof body.utmSource === "string" ? body.utmSource.trim() || null : null;
  const utmMedium = typeof body.utmMedium === "string" ? body.utmMedium.trim() || null : null;
  const utmCampaign = typeof body.utmCampaign === "string" ? body.utmCampaign.trim() || null : null;
  const utmContent = typeof body.utmContent === "string" ? body.utmContent.trim() || null : null;
  const landingPage = typeof body.landingPage === "string" ? body.landingPage.trim() || null : null;

  const honeypot = typeof body._honeypot === "string" ? body._honeypot : "";

  const errors: string[] = [];
  if (!name || name.length < 2) errors.push("Name must be at least 2 characters");
  if (!email || !isValidEmail(email)) errors.push("Valid email is required");
  // Cortex form may have a shorter or empty message if they just tick boxes. Relax message requirement if sourcePage is cortex.
  if (sourcePage !== "cortex-markets" && (!message || message.length < 10)) {
    errors.push("Message must be at least 10 characters");
  }
  if (name.length > 100) errors.push("Name too long");
  if (message.length > 2000) errors.push("Message too long");

  if (errors.length > 0) {
    res.status(400).json({ error: errors[0] });
    return;
  }

  // Honeypot — silent pass for bots
  if (honeypot.length > 0) {
    res.status(200).json({ success: true });
    return;
  }

  try {
    const [lead] = await db
      .insert(leadsTable)
      .values({ 
        name, email, company, phone, projectType, budget, message, sourcePage,
        jobTitle, country, companyType, currentSituation, currentInfrastructure,
        areasOfInterest, implementationTimeline, linkedinUrl, howDidYouHearAboutUs,
        utmSource, utmMedium, utmCampaign, utmContent, landingPage, status: "NEW"
      })
      .returning();

    req.log.info({ leadId: lead?.id }, "Lead stored");

    await Promise.all([
      sendOwnerNotification({ 
        name, email, company, phone, projectType, budget, message,
        jobTitle, country, companyType, currentSituation, currentInfrastructure,
        areasOfInterest, implementationTimeline, linkedinUrl, howDidYouHearAboutUs,
        utmSource, utmMedium, utmCampaign, utmContent, landingPage
      }),
      sendUserConfirmation({ 
        name, email, company, phone, projectType, budget, message,
        jobTitle, country, companyType, currentSituation, currentInfrastructure,
        areasOfInterest, implementationTimeline, linkedinUrl, howDidYouHearAboutUs,
        utmSource, utmMedium, utmCampaign, utmContent, landingPage
      }),
    ]);

    res.status(201).json({ success: true, id: lead?.id });
  } catch (err) {
    req.log.error({ err }, "Failed to store lead");
    res.status(500).json({ error: "Failed to submit enquiry. Please try again." });
  }
});

export default router;
