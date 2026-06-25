import { useCountUp } from "../../hooks/useCountUp";
import { ArrowRight } from "lucide-react";

export function CaseStudies() {
  const cases = [
    {
      domain: "Trade Intelligence",
      client: "Artificial Leather Manufacturer — Gujarat, India",
      challenge: "No international buyer database. Exporting reactively — waiting for enquiries instead of creating them. Target markets: GCC, Europe, South-East Asia.",
      approach: "Built 160-lead global buyer database across Automotive, Footwear and Furniture verticals. Implemented Trade CRM with automated outreach sequences. Developed 3 product brochures. Launched South India outreach campaign across 6 verticals.",
      metrics: [
        { value: 160, label: "Qualified buyers" },
        { value: 6, label: "Verticals" },
        { value: 90, label: "Days to pipeline", suffix: "" }
      ]
    },
    {
      domain: "Financial Markets Automation",
      client: "Institutional Fintech Client — UK (Remote)",
      challenge: "Manual OTC trading across XAUUSD, EURUSD, GBPUSD. Inconsistent position sizing, no regime detection, no systematic TP management.",
      approach: "Architected and deployed MT5/MQL5 automation across 4 pairs. Implemented Markov regime classification, session-aware execution, Grade A/B trade filtering, Greek-based position management and multi-tier TP1/TP2/TP3.",
      metrics: [
        { value: 4, label: "Pairs automated" },
        { value: 1, label: "H1 Live MT5", prefix: "H" },
        { value: 15, label: "Monthly target", prefix: "~", suffix: "%" }
      ]
    },
    {
      domain: "Fintech Market Expansion",
      client: "Fintech Platform — India (VP-level, mBnk)",
      challenge: "India-only fintech platform seeking cross-border expansion. No market intelligence, no channel partners, no local compliance frameworks.",
      approach: "Led fintech expansion strategy and execution across 9 countries. Established broker partnerships including 5paisa. Delivered product training on blockchain and algorithmic trading. Integrated fractionalised real estate investment platforms.",
      metrics: [
        { value: 9, label: "Countries entered" },
        { value: 5, label: "Broker partners", prefix: "Multi" },
        { value: 3, label: "Live Regions", prefix: "UAE, KE, NG" }
      ]
    },
    {
      domain: "NIFTY Options Automation",
      client: "Indian Options Trader — Ahmedabad",
      challenge: "Manual NIFTY options trading with emotional entries, no systematic exit framework, inconsistent position sizing. Significant drawdowns during high-VIX periods.",
      approach: "Deployed intraday options automation via Dhan API. Implemented 11-regime composite scoring, VIX kill switch, delta-optimised strike selection, premium velocity gates, OI flow corrections and Telegram alert delivery.",
      metrics: [
        { value: 11, label: "Regimes scored" },
        { value: 1, label: "Tue Expiry auto" },
        { value: 100, label: "Alerts", prefix: "Live " }
      ]
    },
    {
      domain: "AI Automation",
      client: "Cross-Border Projects — Canada / USA",
      challenge: "Multiple concurrent technology projects with no centralised project intelligence, manual status tracking and disconnected teams across time zones.",
      approach: "Led end-to-end project lifecycle across UI/UX, development, marketing and quant teams. Implemented blockchain-driven real estate tokenisation platform with investor dashboards, KYC, compliance and fractional ownership workflows.",
      metrics: [
        { value: 4, label: "Projects delivered" },
        { value: 1, label: "Live Platform" },
        { value: 2, label: "Borders crossed", prefix: "Cross" }
      ]
    },
    {
      domain: "Advisory Experience",
      client: "Cortex Markets — Strategic Marketing & Global Growth",
      challenge: "Global visibility initiatives, strategic marketing support, international outreach, partnership development and market expansion for an emerging markets financial technology platform.",
      approach: "Strategic advisory on global market positioning, international partnership frameworks and market entry intelligence for target geographies across Asia and the Middle East.",
      metrics: [
        { value: 100, label: "Visibility", prefix: "Global " },
        { value: 100, label: "Outreach", prefix: "Intl " },
        { value: 100, label: "Developed", prefix: "Partners " }
      ]
    }
  ];

  return (
    <section id="casestudies" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-in fade-up">
          <h2 className="font-serif text-4xl md:text-5xl text-navy-deep mb-4">What Gets Built. What Gets Delivered.</h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Real outcomes from real engagements. Clients anonymised where requested.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {cases.map((cs, i) => (
            <div key={i} className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover-lift animate-in fade-up group">
              <div className="text-gold font-bold text-xs tracking-widest uppercase mb-2">{cs.domain}</div>
              <h3 className="font-serif text-xl font-bold text-navy-deep mb-6 pb-4 border-b border-gray-100">{cs.client}</h3>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" /> Challenge
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{cs.challenge}</p>
                </div>
                <div className="pl-3.5 border-l-2 border-gray-100">
                  <ArrowRight className="w-4 h-4 text-gray-300 -ml-[23px] bg-white pb-1" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Approach
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{cs.approach}</p>
                </div>
              </div>

              <div className="bg-navy-deep rounded-lg p-5 grid grid-cols-3 gap-4 border-t-2 border-gold">
                {cs.metrics.map((metric, idx) => {
                  const { count, countRef } = useCountUp(typeof metric.value === 'number' ? metric.value : 0, 2000);
                  const isNumber = typeof metric.value === 'number' && metric.value < 100;
                  
                  return (
                    <div key={idx} className="text-center">
                      <span className="text-lg md:text-2xl font-bold text-white mb-1 block" ref={countRef}>
                        {("prefix" in metric ? metric.prefix : "") || ""}
                        {isNumber ? count : metric.value}
                        {("suffix" in metric ? metric.suffix : "") || ""}
                      </span>
                      <div className="text-xs text-gray-400 font-medium leading-tight">{metric.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
