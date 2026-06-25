import { useState, useEffect, useCallback } from "react";
import { X, Clock, Users, Target, TrendingUp, BookOpen } from "lucide-react";

interface Resource {
  id: string;
  title: string;
  desc: string;
  features: string[];
  readTime: string;
  forWhom: string;
  outcomes: string[];
  tag: string;
}

const resources: Resource[] = [
  {
    id: "01",
    tag: "Trade Intelligence",
    title: "Export Buyer Discovery Framework",
    desc: "A structured methodology for identifying, qualifying and approaching international buyers across GCC, Africa, ASEAN and Europe — built from live export intelligence campaigns.",
    features: ["Target market segmentation model", "Buyer qualification criteria", "Outreach sequencing playbook"],
    readTime: "15 min read",
    forWhom: "Indian exporters, manufacturers and SMEs looking to expand into international markets systematically.",
    outcomes: [
      "A prioritised list of target markets ranked by opportunity",
      "A qualified buyer list with outreach strategy",
      "A repeatable framework for ongoing buyer discovery"
    ]
  },
  {
    id: "02",
    tag: "AI Automation",
    title: "AI Automation Readiness Checklist",
    desc: "40-point diagnostic covering data infrastructure, workflow maturity, team readiness and automation ROI potential — with scoring guidance and priority action plan.",
    features: ["40-point diagnostic framework", "ROI potential scoring model", "Priority automation opportunity map"],
    readTime: "20 min read",
    forWhom: "Business owners, operations heads and technology leaders evaluating AI automation for their organisation.",
    outcomes: [
      "A clear automation readiness score with gap analysis",
      "Identified high-ROI automation opportunities",
      "A prioritised implementation roadmap"
    ]
  },
  {
    id: "03",
    tag: "CRM Strategy",
    title: "CRM Intelligence Playbook",
    desc: "Transform your CRM from a data graveyard into a revenue engine. Lead scoring architecture, pipeline automation, intent signals and executive dashboard design.",
    features: ["Lead scoring model template", "Pipeline automation blueprint", "Executive dashboard framework"],
    readTime: "18 min read",
    forWhom: "Sales leaders, founders and CRM administrators who want to turn their CRM into a genuine revenue intelligence platform.",
    outcomes: [
      "A working lead scoring model tailored to your pipeline",
      "Automated pipeline workflows that reduce manual effort",
      "An executive dashboard that surfaces real revenue signals"
    ]
  },
  {
    id: "04",
    tag: "NIFTY Automation",
    title: "NIFTY Options Automation Blueprint",
    desc: "The architecture behind Clarivo's NIFTY options automation. Regime scoring, VIX kill switches, strike selection logic and risk management — fully explained.",
    features: ["11-regime composite scoring logic", "VIX kill switch configuration", "Delta-optimised strike selection"],
    readTime: "25 min read",
    forWhom: "Options traders and systematic trading professionals looking to build production-ready NIFTY automation.",
    outcomes: [
      "Understanding of the full automation architecture",
      "A blueprint for building your own regime-scoring system",
      "Risk management principles for live options automation"
    ]
  },
  {
    id: "05",
    tag: "IBKR Automation",
    title: "SPY / US Markets Automation Blueprint",
    desc: "Structured blueprint for building systematic US equity automation via Interactive Brokers — market scanning, position management, risk controls and execution workflow.",
    features: ["IBKR API integration guide", "SPY/QQQ strategy architecture", "Risk management checklist"],
    readTime: "22 min read",
    forWhom: "Algorithmic traders and quants building US equity automation via Interactive Brokers.",
    outcomes: [
      "A working architecture for IBKR-connected automation",
      "Clear SPY/QQQ strategy design principles",
      "A risk control framework for live US market trading"
    ]
  },
  {
    id: "06",
    tag: "MT5 Automation",
    title: "MT5 Automation Checklist",
    desc: "35-point pre-deployment checklist before going live with any MT5 Expert Advisor — covering execution logic, risk controls, session filters and broker compatibility.",
    features: ["35-point pre-deployment checklist", "Broker compatibility matrix", "Live vs demo validation steps"],
    readTime: "12 min read",
    forWhom: "Forex traders and EA developers preparing to deploy a MetaTrader 5 Expert Advisor to a live broker.",
    outcomes: [
      "Confidence that your EA is production-ready",
      "A broker compatibility verification process",
      "A structured sign-off process before going live"
    ]
  }
];

interface ModalProps {
  resource: Resource | null;
  onClose: () => void;
}

function ResourceModal({ resource, onClose }: ModalProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (resource) {
      requestAnimationFrame(() => setVisible(true));
      document.body.style.overflow = "hidden";
    }
    return () => { document.body.style.overflow = ""; };
  }, [resource]);

  const handleClose = useCallback(() => {
    setVisible(false);
    setTimeout(onClose, 250);
  }, [onClose]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") handleClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [handleClose]);

  if (!resource) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center p-4"
      style={{
        background: "rgba(4,14,30,0.85)",
        backdropFilter: "blur(12px)",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.25s ease",
      }}
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label={resource.title}
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
        style={{
          background: "rgba(7,27,59,0.95)",
          transform: visible ? "scale(1) translateY(0)" : "scale(0.96) translateY(16px)",
          transition: "transform 0.25s cubic-bezier(0.34,1.56,0.64,1), opacity 0.25s ease",
          opacity: visible ? 1 : 0,
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        {/* Gold top border */}
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-gold to-transparent" />

        {/* Header */}
        <div className="px-8 pt-8 pb-6 border-b border-white/10">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <span className="inline-block text-[10px] font-bold tracking-widest uppercase text-gold bg-gold/10 border border-gold/20 px-3 py-1 rounded-full mb-3">
                {resource.tag}
              </span>
              <h2 className="font-serif text-2xl md:text-3xl text-white leading-tight">{resource.title}</h2>
            </div>
            <button
              onClick={handleClose}
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-colors flex-shrink-0 mt-1"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-2 mt-4 text-gray-400 text-sm">
            <Clock className="w-4 h-4" />
            <span>{resource.readTime}</span>
          </div>
        </div>

        {/* Body */}
        <div className="px-8 py-6 space-y-6">
          {/* Description */}
          <p className="text-gray-300 leading-relaxed">{resource.desc}</p>

          {/* Key Benefits */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="w-4 h-4 text-gold" />
              <h3 className="text-sm font-bold tracking-widest text-gold uppercase">What's Inside</h3>
            </div>
            <ul className="space-y-2">
              {resource.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-200">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          {/* Who It's For */}
          <div className="glassmorphism rounded-xl p-5 border border-white/10">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-4 h-4 text-blue-400" />
              <h3 className="text-sm font-bold tracking-widest text-blue-400 uppercase">Who It's For</h3>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">{resource.forWhom}</p>
          </div>

          {/* Expected Outcomes */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <h3 className="text-sm font-bold tracking-widest text-green-400 uppercase">Expected Outcomes</h3>
            </div>
            <ul className="space-y-2">
              {resource.outcomes.map((outcome, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-200">
                  <Target className="w-3.5 h-3.5 text-green-400 mt-0.5 flex-shrink-0" />
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 pb-8 pt-4 border-t border-white/10">
          <a
            href="#contact"
            onClick={handleClose}
            className="block w-full bg-gold text-navy-deep font-bold py-4 rounded text-center hover:bg-gold-dark transition-colors gold-glow"
          >
            Request This Framework
          </a>
          <p className="text-center text-xs text-gray-500 mt-3">Free · No spam · Direct response from Shiv Kumar</p>
        </div>
      </div>
    </div>
  );
}

export function Resources() {
  const [activeResource, setActiveResource] = useState<Resource | null>(null);

  return (
    <section id="resources" className="py-24 bg-[#040E1E] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-in fade-up">
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-4">6 Frameworks You Can Apply Immediately</h2>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Practical tools and playbooks distilled from real engagements — no theory, no fluff.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((res, i) => (
            <div
              key={res.id}
              className="glassmorphism p-8 rounded-xl border border-white/10 flex flex-col h-full hover-lift animate-in fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="text-gold font-serif text-3xl font-bold mb-4 opacity-50">{res.id}</div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-gold/70 mb-2 block">{res.tag}</span>
              <h3 className="font-serif text-xl font-bold text-white mb-4">{res.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-grow">{res.desc}</p>

              <ul className="space-y-2 mb-8">
                {res.features.map((feat, idx) => (
                  <li key={idx} className="text-xs text-gray-300 flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {res.readTime}
                </span>
                <button
                  onClick={() => setActiveResource(res)}
                  className="bg-transparent border border-gold text-gold py-2 px-5 rounded font-bold hover:bg-gold hover:text-navy-deep transition-colors text-sm"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ResourceModal resource={activeResource} onClose={() => setActiveResource(null)} />
    </section>
  );
}
