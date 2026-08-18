import { ArrowRight, BarChart3, Building2, Briefcase, Network, Layers, ShieldCheck } from "lucide-react";

export function CortexTargetCustomers() {
  const scrollToForm = () => {
    document.getElementById("cortex-lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const verticals = [
    {
      title: "FX & CFD Brokers",
      icon: <BarChart3 className="w-8 h-8 text-gold" />,
      context: "Differentiate in a crowded market beyond standard platforms.",
      capability: "Cortex Retail & Pro offer an AI-native interface, advanced analytics, and deeper client engagement tools.",
      discussion: "Explore how upgrading your trading infrastructure can improve retention and increase trading volumes."
    },
    {
      title: "Prop Trading Firms",
      icon: <Building2 className="w-8 h-8 text-blue-accent" />,
      context: "Managing scale, risk, and trader evaluation efficiently.",
      capability: "Built-in risk analytics, Trade Journal, and evaluation modules via Cortex KYRO.",
      discussion: "Discuss integration of customized evaluation metrics and risk frameworks."
    },
    {
      title: "Fund Managers",
      icon: <Briefcase className="w-8 h-8 text-emerald-400" />,
      context: "Executing complex strategies while managing multiple investor accounts.",
      capability: "Cortex Fund Manager provides MAM/PAMM equivalent architecture with seamless allocation.",
      discussion: "Review the allocation algorithms and institutional execution tools."
    },
    {
      title: "Institutional Brokers",
      icon: <ShieldCheck className="w-8 h-8 text-purple-400" />,
      context: "Serving professional clients requiring advanced order routing and deep liquidity.",
      capability: "Cortex Pro offers institutional-grade market depth, footprint charts, and raw execution.",
      discussion: "Evaluate our FIX API integrations and institutional liquidity readiness."
    },
    {
      title: "Master Distributors",
      icon: <Network className="w-8 h-8 text-rose-400" />,
      context: "Providing technology stacks to sub-brokers globally.",
      capability: "Comprehensive white-label capabilities for seamless multi-brand deployment.",
      discussion: "Discover the commercial model for distributing the Cortex ecosystem."
    },
    {
      title: "FinTech Institutions",
      icon: <Layers className="w-8 h-8 text-amber-500" />,
      context: "Adding financial market access to existing apps or services.",
      capability: "Cortex Mobile and API integrations for embedding trading functionality.",
      discussion: "Explore API readiness and custom integration pathways."
    }
  ];

  return (
    <section className="py-24 bg-[#020617] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">Target Verticals</h2>
          <p className="text-gray-400 text-lg">
            Cortex Markets is built to solve specific infrastructure challenges across the financial services spectrum.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {verticals.map((v, i) => (
            <div key={i} className="glassmorphism p-8 rounded-2xl border border-white/5 hover:border-gold/30 transition-all group flex flex-col h-full">
              <div className="mb-6 bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {v.icon}
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-4">{v.title}</h3>
              
              <div className="space-y-4 mb-8 flex-grow">
                <div>
                  <h4 className="text-xs font-mono text-gold uppercase tracking-wider mb-1">Business Context</h4>
                  <p className="text-gray-400 text-sm">{v.context}</p>
                </div>
                <div>
                  <h4 className="text-xs font-mono text-blue-accent uppercase tracking-wider mb-1">Cortex Capability</h4>
                  <p className="text-gray-300 text-sm">{v.capability}</p>
                </div>
                <div>
                  <h4 className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-1">Why Discuss</h4>
                  <p className="text-gray-400 text-sm">{v.discussion}</p>
                </div>
              </div>

              <button 
                onClick={scrollToForm}
                className="mt-auto text-gold font-semibold flex items-center gap-2 hover:gap-3 transition-all text-sm uppercase tracking-wider"
              >
                Discuss Your Requirements <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
