import { useEffect, useState, useCallback } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Nav } from "../components/sections/Nav";
import { Hero } from "../components/sections/Hero";
import { CredBar } from "../components/sections/CredBar";
import { Founder } from "../components/sections/Founder";
import { HowItWorks } from "../components/sections/HowItWorks";
import { Services } from "../components/sections/Services";
import { Markets } from "../components/sections/Markets";
import { CaseStudies } from "../components/sections/CaseStudies";
import { WhySection } from "../components/sections/WhySection";
import { Industries } from "../components/sections/Industries";
import { TechShowcase } from "../components/sections/TechShowcase";
import { Process } from "../components/sections/Process";
import { Resources } from "../components/sections/Resources";
import { Insights } from "../components/sections/Insights";
import { Testimonials } from "../components/sections/Testimonials";
import { Contact } from "../components/sections/Contact";
import { Footer } from "../components/sections/Footer";
import { BookingModal } from "../components/BookingModal";
import { injectGA4, injectClarity } from "../lib/analytics";

const GA4_ID = import.meta.env.VITE_GA4_ID as string | undefined;
const CLARITY_ID = import.meta.env.VITE_CLARITY_ID as string | undefined;

export default function Home() {
  useScrollAnimation();
  const [bookingOpen, setBookingOpen] = useState(false);
  const openBooking = useCallback(() => setBookingOpen(true), []);
  const closeBooking = useCallback(() => setBookingOpen(false), []);

  useEffect(() => {
    document.title = "Shiv Kumar | AI Automation, Trade Intelligence & Financial Markets Consultant — Clarivo Advisory";

    const metaTags = {
      description: "Shiv Kumar — Founder, Clarivo Advisory. 25+ years global experience in AI Automation, Trade Intelligence, Financial Markets Automation (NIFTY, SENSEX, MT5, XAUUSD, Interactive Brokers), Fintech Strategy and International Business Development.",
      keywords: "AI automation consultant India, trade intelligence consultant, NIFTY automation, SENSEX automation, BANK NIFTY automation, MT5 automation, XAUUSD automation, EURUSD automation, Interactive Brokers automation, fintech consultant India, algorithmic trading consultant, export growth consultant, Shiv Kumar, Clarivo Advisory",
      canonical: "https://clarivoadvisory.com",
      "og:title": "Shiv Kumar | Clarivo Advisory — Automate. Analyze. Execute.",
      "og:description": "25+ years global experience in AI Automation, Trade Intelligence, Financial Markets Automation and Fintech.",
      "og:url": "https://clarivoadvisory.com",
      "og:image": "https://clarivoadvisory.com/og-image.png",
      "twitter:card": "summary_large_image"
    };

    Object.entries(metaTags).forEach(([name, content]) => {
      let element = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        if (name.startsWith("og:")) {
          element.setAttribute("property", name);
        } else if (name === "canonical") {
          element = document.createElement("link");
          element.setAttribute("rel", "canonical");
          element.setAttribute("href", content);
          document.head.appendChild(element);
          return;
        } else {
          element.setAttribute("name", name);
        }
        document.head.appendChild(element);
      }
      if (element.tagName === "META") {
        element.setAttribute("content", content);
      }
    });

    const schemaObj = [{"@context":"https://schema.org","@type":"Person","name":"Shiv Kumar","jobTitle":"Founder & Principal Advisor","description":"Senior Fintech and Financial Markets Professional with 25+ years global experience.","url":"https://clarivoadvisory.com","email":"shiv@clarivoadvisory.com","telephone":"+91-7600048237","sameAs":["https://www.linkedin.com/in/shiv-kkumar"],"knowsAbout":["AI Automation","Algorithmic Trading","NIFTY Options","MT5 MQL5","XAUUSD","Trade Intelligence","Fintech","Blockchain","Interactive Brokers"],"knowsLanguage":["English","Hindi","Gujarati","Tamil"]},{"@context":"https://schema.org","@type":"ProfessionalService","name":"Clarivo Advisory","url":"https://clarivoadvisory.com","email":"shiv@clarivoadvisory.com","telephone":"+91-7600048237","address":{"@type":"PostalAddress","addressLocality":"Ahmedabad","addressRegion":"Gujarat","addressCountry":"IN"},"founder":{"@type":"Person","name":"Shiv Kumar"},"foundingDate":"2023","serviceType":["AI Automation","Trade Intelligence","Financial Markets Automation","Fintech Consulting","CRM Automation"]}];

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schemaObj);
    document.head.appendChild(script);

    if (GA4_ID) injectGA4(GA4_ID);
    if (CLARITY_ID) injectClarity(CLARITY_ID);

    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-navy-deep min-h-screen font-sans text-white scroll-smooth overflow-x-hidden">
      <Nav onBookCall={openBooking} />
      <Hero onBookCall={openBooking} />
      <CredBar />
      <Founder />
      <HowItWorks />
      <Services />
      <Markets />
      <CaseStudies />
      <WhySection />
      <Industries />
      <TechShowcase />
      <Process />
      <Testimonials />
      <Resources />
      <Insights />
      <Contact />
      <Footer />
      <BookingModal isOpen={bookingOpen} onClose={closeBooking} source="home" />
    </div>
  );
}
