import { useEffect } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Nav } from "../components/sections/Nav";
import { Footer } from "../components/sections/Footer";
import { CortexHero } from "../components/cortex/CortexHero";
import { CortexInstitutionalBanner } from "../components/cortex/CortexInstitutionalBanner";
import { CortexTargetCustomers } from "../components/cortex/CortexTargetCustomers";
import { CortexExistingInfrastructure } from "../components/cortex/CortexExistingInfrastructure";
import { CortexProductEcosystem } from "../components/cortex/CortexProductEcosystem";
import { CortexProductInAction } from "../components/cortex/CortexProductInAction";
import { CortexPlatformGallery } from "../components/cortex/CortexPlatformGallery";
import { CortexAiIntelligence } from "../components/cortex/CortexAiIntelligence";
import { CortexInnovations } from "../components/cortex/CortexInnovations";
import { CortexWhiteLabel } from "../components/cortex/CortexWhiteLabel";
import { CortexClarivoPositioning } from "../components/cortex/CortexClarivoPositioning";
import { CortexLeadForm } from "../components/cortex/CortexLeadForm";

export default function CortexMarkets() {
  useScrollAnimation();

  useEffect(() => {
    document.title = "Cortex Markets | AI-Native Trading Technology for Brokers & Financial Businesses";

    const metaTags = {
      description: "Launch a differentiated trading experience under your own brand. Cortex Markets brings AI intelligence, trading, fund management, and institutional capabilities into a connected B2B technology ecosystem.",
      keywords: "Cortex Markets, AI trading technology, white label trading platform, institutional trading infrastructure, B2B trading tech, broker technology, prop firm technology",
      canonical: "https://www.clarivoadvisory.com/cortex-markets",
      "og:title": "Cortex Markets | AI-Native Trading Technology",
      "og:description": "Launch a differentiated trading experience under your own brand without having to build an entire ecosystem from the ground up.",
      "og:url": "https://www.clarivoadvisory.com/cortex-markets",
      "og:image": "https://www.clarivoadvisory.com/og-image.png",
      "twitter:card": "summary_large_image"
    };

    Object.entries(metaTags).forEach(([name, content]) => {
      let element = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        if (name.startsWith("og:") || name.startsWith("twitter:")) {
          element.setAttribute("property", name);
        } else {
          element.setAttribute("name", name);
        }
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    });
    
    // Analytics tracking for page view
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "cortex_page_view", {
        page_title: document.title,
        page_path: "/cortex-markets",
      });
    }

    return () => {
      Object.keys(metaTags).forEach((name) => {
        const element = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
        if (element) element.remove();
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-amber-500/30 font-sans overflow-x-hidden">
      <Nav />
      <main>
        <CortexHero />
        <CortexInstitutionalBanner />
        <CortexTargetCustomers />
        <CortexExistingInfrastructure />
        <CortexProductEcosystem />
        <CortexProductInAction />
        <CortexPlatformGallery />
        <CortexAiIntelligence />
        <CortexInnovations />
        <CortexWhiteLabel />
        <CortexClarivoPositioning />
        <CortexLeadForm />
      </main>
      <Footer />
    </div>
  );
}
