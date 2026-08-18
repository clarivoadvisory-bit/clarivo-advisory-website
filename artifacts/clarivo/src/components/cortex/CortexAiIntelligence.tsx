import { Brain, MessageSquare, Workflow } from "lucide-react";

export function CortexAiIntelligence() {
  return (
    <section className="py-24 bg-[#020617] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-accent/10 border border-blue-accent/20 text-blue-accent text-xs font-mono uppercase tracking-widest mb-6">
              <Brain className="w-4 h-4" />
              AI Intelligence
            </div>
            
            <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">
              Trading Workflows Enhanced by Artificial Intelligence
            </h2>
            
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Cortex integrates proprietary AI capabilities directly into the core terminal to support analysis, risk evaluation, and consensus building. Our technology is designed to assist professional traders, not replace them.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="mt-1 w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Brain className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Market Twin & Oracle</h3>
                  <p className="text-gray-400 text-sm">
                    Advanced contextual analysis models that evaluate historical patterns and real-time market data to provide structured, objective insights.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5 text-blue-accent" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Debate Engine</h3>
                  <p className="text-gray-400 text-sm">
                    A multi-agent consensus system that debates opposing market viewpoints, helping traders uncover blind spots in their thesis before execution.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Workflow className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Intelligent Trade Journal</h3>
                  <p className="text-gray-400 text-sm">
                    Automated tagging and analysis of trade execution quality, psychological factors, and adherence to strategy rules.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Box */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-gold/10 to-blue-accent/10 rounded-2xl blur-3xl mix-blend-screen" />
            <div className="glassmorphism rounded-2xl border border-white/10 p-8 relative z-10 backdrop-blur-xl">
              <div className="mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
                <Brain className="text-gold w-6 h-6" />
                <span className="text-white font-serif text-xl font-bold">Cortex Debate</span>
              </div>
              
              <div className="space-y-4 font-mono text-sm">
                <div className="bg-black/40 p-4 rounded-lg border border-white/5">
                  <span className="text-blue-400 block mb-1">Agent Alpha (Bullish Case):</span>
                  <p className="text-gray-300">Volume absorption at key support indicates accumulation. Order flow suggests institutional buying.</p>
                </div>
                <div className="bg-black/40 p-4 rounded-lg border border-white/5">
                  <span className="text-rose-400 block mb-1">Agent Beta (Bearish Case):</span>
                  <p className="text-gray-300">Macro indicators remain restrictive. Liquidity sweep above current levels may precede a distribution phase.</p>
                </div>
                <div className="bg-gold/10 p-4 rounded-lg border border-gold/20">
                  <span className="text-gold block mb-1">Consensus Oracle:</span>
                  <p className="text-gray-200">Mixed signals. Wait for confirmation of structure break above resistance before committing size.</p>
                </div>
              </div>
            </div>

            {/* Strict Regulatory Disclaimer */}
            <div className="mt-6 p-4 border border-rose-500/20 bg-rose-500/5 rounded-lg">
              <p className="text-xs text-gray-500 leading-relaxed text-justify">
                <strong className="text-gray-400 block mb-1">Important Risk Disclaimer:</strong>
                Cortex AI modules (including Twin, Oracle, and Debate) are analytical tools designed to assist in decision-making. They do not constitute financial advice, investment recommendations, or guaranteed predictions. Financial markets carry a high degree of risk. Past performance or AI-generated consensus does not guarantee future results. Cortex technology is provided exclusively for B2B institutional and professional use.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
