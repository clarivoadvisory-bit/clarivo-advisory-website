import { useState, useEffect, useCallback } from "react";
import { ArrowRight, ChevronDown, ChevronUp, X, Clock, Tag, TrendingUp, Lightbulb, Globe } from "lucide-react";

interface Article {
  tag: string;
  title: string;
  excerpt: string;
  meta: string;
  insights?: string[];
  takeaways?: string[];
  industryRelevance?: string;
}

const mainInsight: Article = {
  tag: "AI Automation",
  title: "Why Most AI Automation Projects Fail — And What to Do Differently",
  excerpt: "The problem isn't the technology. It's the sequencing. Three implementation mistakes that derail AI projects before they deliver value — and the framework to avoid them.",
  meta: "June 2025 · 8 min read",
  insights: [
    "Organisations often automate broken processes, compounding inefficiency at machine speed",
    "Lack of data infrastructure is the single biggest barrier to realising AI value",
    "Most AI projects fail in the handoff from pilot to production — not in ideation",
    "Success requires a sequence: data → workflow → automation — not the reverse"
  ],
  takeaways: [
    "Audit your workflow before selecting any AI tool or vendor",
    "Build data infrastructure as a first-class deliverable, not an afterthought",
    "Design for production from day one — pilots that can't scale are expensive experiments"
  ],
  industryRelevance: "Relevant across manufacturing, financial services, exports, and fintech — any organisation considering AI-led transformation."
};

const insights: Article[] = [
  {
    tag: "NIFTY Automation",
    title: "Building a NIFTY Options Automation System: Architecture, Regime Scoring & Risk Controls",
    excerpt: "A practitioner's guide to building production-ready NIFTY options automation — regime composite scoring, VIX kill switches and live Telegram monitoring.",
    meta: "May 2025 · 12 min read",
    insights: ["Regime scoring replaces discretionary judgment with systematic decision logic", "VIX-based kill switches prevent trading during structurally adverse conditions", "Telegram integration enables real-time monitoring without manual oversight"],
    takeaways: ["Never deploy an EA without a documented regime scoring methodology", "Kill switches are not optional — they are essential risk management infrastructure", "Real-time monitoring alerts are the difference between automation and abandonment"],
    industryRelevance: "Directly applicable to NIFTY, BANK NIFTY and SENSEX options traders building systematic strategies."
  },
  {
    tag: "MT5 Automation",
    title: "XAUUSD Automation on MT5: Markov Regimes, Session Filters and Multi-TP Management",
    excerpt: "How to build an institutional-grade Gold trading EA on MT5 — Markov classification, session-aware execution, grade filtering and TP1/TP2/TP3 management.",
    meta: "April 2025 · 10 min read",
    insights: ["Markov classification identifies structural market regimes in real time", "Session-aware filters prevent trading during structurally low-probability windows", "Multi-tier take profit structures outperform single-TP approaches on Gold"],
    takeaways: ["Grade A/B regime filtering is the primary edge in XAUUSD automation", "Session filters reduce drawdown without reducing annual returns significantly", "TP1/TP2/TP3 architecture requires careful expectancy modelling before deployment"],
    industryRelevance: "Critical for Forex traders automating Gold (XAUUSD) and other commodity pairs on MetaTrader 5."
  },
  {
    tag: "Trade Intelligence",
    title: "The Export Intelligence Stack: What Data Every Indian Exporter Should Track",
    excerpt: "From HS code analytics to buyer intent signals — the intelligence layer separating reactive exporters from strategic ones competing globally.",
    meta: "March 2025 · 6 min read",
    insights: ["HS code analytics reveal import patterns, buyer concentration and competitive landscape", "Buyer intent signals from trade databases shorten the discovery-to-contact cycle", "Most Indian exporters rely on anecdotal intelligence — a structural competitive disadvantage"],
    takeaways: ["Build a systematic data pipeline before attending a single trade show", "Qualify markets by HS code import volume before allocating business development budget", "Intent signal tracking turns cold outreach into warm lead generation"],
    industryRelevance: "Essential for Indian manufacturers, SMEs and export-oriented businesses targeting GCC, Africa, ASEAN and European markets."
  },
  {
    tag: "Export Growth",
    title: "GCC Market Entry for Indian Manufacturers: What Works and What Doesn't",
    excerpt: "Lessons from multiple GCC market entry engagements — buyer intelligence, relationship protocols and compliance layers that separate successful entries from failed ones.",
    meta: "February 2025 · 9 min read",
    insights: ["Relationship-first protocols are non-negotiable in GCC B2B commerce", "Most failed entries lack a qualified local intermediary with category expertise", "Compliance and halal certification requirements are frequently underestimated"],
    takeaways: ["Invest in in-market intelligence before your first trip", "Identify and qualify a local partner before committing to market entry costs", "Budget for certification and compliance as a line item, not an afterthought"],
    industryRelevance: "Directly applicable to Indian manufacturers targeting UAE, Saudi Arabia, Qatar, Kuwait and Oman markets."
  },
  {
    tag: "Fintech",
    title: "India to UAE Fintech Expansion: Regulatory Map, Market Entry and GTM Strategy",
    excerpt: "A practitioner's guide to entering the UAE fintech market from India — regulatory frameworks, partnership channels and go-to-market sequencing that works.",
    meta: "January 2025 · 7 min read",
    insights: ["DIFC and ADGM provide two distinct regulatory pathways with different capital requirements", "Banking partnerships are the fastest GTM channel for India-UAE payment flows", "Most Indian fintech firms underestimate compliance timelines by 6–12 months"],
    takeaways: ["Map regulatory requirements before product architecture decisions", "Engage a local regulatory consultant from day one — not after a failed application", "Build a UAE-specific GTM, not an India GTM with localisation layered on top"],
    industryRelevance: "Critical for Indian fintech founders, payment companies and financial services firms targeting UAE expansion."
  },
  {
    tag: "IBKR Automation",
    title: "SPY Options Automation via Interactive Brokers: Building a Systematic US Strategy",
    excerpt: "How to build a production-ready SPY options automation system via IBKR Python API — from scanner design to execution logic to portfolio-level risk controls.",
    meta: "December 2024 · 11 min read",
    insights: ["IBKR's Python API provides institutional-grade execution access at retail cost", "SPY options automation requires explicit handling of earnings events and FOMC dates", "Portfolio-level risk controls must be coded independently of position-level logic"],
    takeaways: ["Test API connectivity and paper trading thoroughly before live deployment", "Build economic calendar awareness into your strategy logic — not as an exception handler", "Define maximum portfolio drawdown thresholds as hard stops in code"],
    industryRelevance: "Applicable to algorithmic traders and quants building systematic US equity strategies via Interactive Brokers."
  },
  {
    tag: "AI Automation",
    title: "The AI Agent Stack: Which Tools Are Actually Production-Ready in 2025",
    excerpt: "Cutting through the noise — an honest assessment of which AI agent frameworks, automation platforms and integration tools are ready for real business deployment.",
    meta: "November 2024 · 7 min read",
    insights: ["Most AI agent frameworks are pre-production and unsuitable for enterprise deployment", "n8n and Make.com lead for workflow automation at the SME tier", "LLM reliability for structured business outputs requires careful prompt engineering and output validation"],
    takeaways: ["Evaluate tools on production stability, not demo performance", "Build human-in-the-loop checkpoints for any AI output that drives business decisions", "Start with one well-scoped automation before building an agent stack"],
    industryRelevance: "Relevant for any business leader or technology team evaluating AI automation tools for real deployment."
  }
];

const moreTopics = [
  { tag: "MT5", title: "MQL5 Expert Advisor Architecture: From Strategy Logic to Live Deployment" },
  { tag: "NIFTY", title: "NIFTY Options: Why Most Retail Traders Fail and What Automation Solves" },
  { tag: "EURUSD", title: "EURUSD Automation: Session Analysis, Entry Logic and Risk Management on MT5" },
  { tag: "Trade Intelligence", title: "How to Use HS Code Data to Find Your Best Export Markets" },
  { tag: "Interactive Brokers", title: "IBKR Python API: Building Your First Automated Trading System" },
  { tag: "BANK NIFTY", title: "BANK NIFTY OI Flow Analysis: How to Read Open Interest for Options Trading" },
  { tag: "XAUUSD", title: "Gold Trading Automation: Why Regime Detection Changes Everything" },
  { tag: "Export Growth", title: "Africa Market Intelligence: Finding B2B Buyers in Nigeria, Kenya and Ghana" },
  { tag: "Fintech", title: "Building Compliance Into Product Architecture — Not Bolting It On Later" },
  { tag: "SPY", title: "SPY Options Automation: Building a Systematic US Equity Strategy via IBKR" },
  { tag: "Risk Management", title: "Position Sizing for Options Traders: Why Fixed Lots Kill Accounts" },
  { tag: "AI Automation", title: "The AI Automation Stack Every Indian SME Should Build in 2025" }
];

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

function ArticleModal({ article, onClose }: ArticleModalProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (article) {
      requestAnimationFrame(() => setVisible(true));
      document.body.style.overflow = "hidden";
    }
    return () => { document.body.style.overflow = ""; };
  }, [article]);

  const handleClose = useCallback(() => {
    setVisible(false);
    setTimeout(onClose, 250);
  }, [onClose]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") handleClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [handleClose]);

  if (!article) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center p-4"
      style={{
        background: "rgba(4,14,30,0.88)",
        backdropFilter: "blur(14px)",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.25s ease",
      }}
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label={article.title}
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
        style={{
          background: "rgba(7,27,59,0.97)",
          transform: visible ? "scale(1) translateY(0)" : "scale(0.95) translateY(20px)",
          transition: "transform 0.28s cubic-bezier(0.34,1.56,0.64,1), opacity 0.25s ease",
          opacity: visible ? 1 : 0,
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        {/* Colored top bar */}
        <div className="h-1 w-full bg-gradient-to-r from-gold via-gold/60 to-transparent" />

        {/* Featured "image" band */}
        <div className="w-full h-28 bg-gradient-to-br from-navy-deep via-[#071B3B] to-[#0D2952] relative overflow-hidden flex items-center px-8">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(244,180,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(244,180,0,0.04)_1px,transparent_1px)] bg-[size:30px_30px]" />
          <div className="relative z-10">
            <span className="inline-block text-[10px] font-bold tracking-widest uppercase text-gold bg-gold/10 border border-gold/20 px-3 py-1 rounded-full mb-2">
              {article.tag}
            </span>
            <div className="text-white/30 text-xs font-mono">{article.meta}</div>
          </div>
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full border border-white/10 bg-navy-deep/60 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="px-8 py-6 space-y-6">
          <h2 className="font-serif text-2xl md:text-3xl text-white leading-tight">{article.title}</h2>
          <p className="text-gray-300 leading-relaxed">{article.excerpt}</p>

          {article.insights && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="w-4 h-4 text-gold" />
                <h3 className="text-sm font-bold tracking-widest text-gold uppercase">Main Insights</h3>
              </div>
              <ul className="space-y-2">
                {article.insights.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-200">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {article.takeaways && (
            <div className="glassmorphism rounded-xl p-5 border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <h3 className="text-sm font-bold tracking-widest text-green-400 uppercase">Key Takeaways</h3>
              </div>
              <ul className="space-y-2">
                {article.takeaways.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-200">
                    <ArrowRight className="w-3.5 h-3.5 text-green-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {article.industryRelevance && (
            <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
              <Globe className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-xs font-bold tracking-widest text-blue-400 uppercase mb-1">Industry Relevance</div>
                <p className="text-sm text-gray-300">{article.industryRelevance}</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-8 pb-8 pt-2 border-t border-white/10">
          <a
            href="#contact"
            onClick={handleClose}
            className="flex items-center justify-center gap-2 w-full bg-gold text-navy-deep font-bold py-4 rounded text-center hover:bg-gold-dark transition-colors gold-glow"
          >
            Discuss This Topic with Shiv <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-center text-xs text-gray-500 mt-3">Full articles available to advisory clients</p>
        </div>
      </div>
    </div>
  );
}

export function Insights() {
  const [expanded, setExpanded] = useState(false);
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  return (
    <section id="insights" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-in fade-up">
          <h2 className="font-serif text-4xl md:text-5xl text-navy-deep mb-4">Intelligence for Business Leaders & Traders</h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Practical perspectives on AI, trade, fintech and financial markets — written by Shiv Kumar from 25+ years in the field.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Main Featured */}
          <div className="lg:col-span-2 bg-navy-deep text-white p-8 md:p-12 rounded-2xl hover-lift animate-in fade-up flex flex-col">
            <div className="bg-white/10 text-gold px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase inline-block mb-6 w-fit">
              {mainInsight.tag}
            </div>
            <h3 className="font-serif text-3xl md:text-4xl font-bold mb-6 leading-tight flex-grow">{mainInsight.title}</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">{mainInsight.excerpt}</p>
            <div className="flex items-center justify-between border-t border-white/10 pt-6">
              <span className="text-sm text-gray-400 font-medium flex items-center gap-2">
                <Clock className="w-4 h-4" /> {mainInsight.meta}
              </span>
              <button
                onClick={() => setActiveArticle(mainInsight)}
                className="flex items-center gap-2 text-gold font-bold hover:text-white transition-colors"
              >
                Read Article <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Side Small */}
          <div className="flex flex-col justify-between gap-8">
            {insights.slice(0, 2).map((ins, i) => (
              <div key={i} className="bg-gray-50 border border-gray-100 p-6 rounded-2xl hover-lift h-full flex flex-col justify-between animate-in fade-up">
                <div>
                  <div className="text-navy-deep font-bold text-xs tracking-widest uppercase mb-3 flex items-center gap-1">
                    <Tag className="w-3 h-3" /> {ins.tag}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-navy-deep mb-3 leading-snug">{ins.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-3 mb-4">{ins.excerpt}</p>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs text-gray-500 font-medium">{ins.meta}</span>
                  <button onClick={() => setActiveArticle(ins)} className="text-gold font-bold text-sm hover:text-navy-deep transition-colors">
                    Read →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grid Smaller */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {insights.slice(2).map((ins, i) => (
            <div key={i} className="bg-white border border-gray-200 p-6 rounded-2xl hover:border-gold hover-lift flex flex-col justify-between animate-in fade-up">
              <div>
                <div className="text-navy-deep font-bold text-xs tracking-widest uppercase mb-3">{ins.tag}</div>
                <h3 className="font-serif text-lg font-bold text-navy-deep mb-3 leading-snug">{ins.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-2 mb-4">{ins.excerpt}</p>
              </div>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                <span className="text-xs text-gray-500 font-medium">{ins.meta}</span>
                <button onClick={() => setActiveArticle(ins)} className="text-gold font-bold text-sm hover:text-navy-deep transition-colors">
                  Read →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Expandable Topics */}
        <div className="border-t border-gray-200 pt-8 animate-in fade-up">
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-full flex items-center justify-between text-left text-xl font-serif text-navy-deep font-bold hover:text-gold transition-colors"
          >
            More from the Clarivo Intelligence Brief — 50 Topics
            {expanded ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
          </button>

          <div className={`grid md:grid-cols-2 gap-x-8 gap-y-4 overflow-hidden transition-all duration-500 ${expanded ? 'max-h-[1000px] mt-8 opacity-100' : 'max-h-0 opacity-0'}`}>
            {moreTopics.map((topic, i) => (
              <a key={i} href="#contact" className="group flex items-start gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-100">
                <div className="bg-navy-deep/5 text-navy-deep px-2 py-1 rounded text-[10px] font-bold tracking-widest uppercase flex-shrink-0 mt-1 w-24 text-center">
                  {topic.tag}
                </div>
                <div className="text-sm font-bold text-gray-700 group-hover:text-navy-deep transition-colors leading-snug">
                  {topic.title} <span className="text-gold ml-1">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <ArticleModal article={activeArticle} onClose={() => setActiveArticle(null)} />
    </section>
  );
}
