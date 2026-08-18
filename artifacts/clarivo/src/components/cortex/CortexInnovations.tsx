import { Watch, Glasses, BrainCircuit, ExternalLink } from "lucide-react";

export function CortexInnovations() {
  return (
    <section className="py-24 bg-[#040E1E] relative border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(244,180,0,0.05),transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-mono uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
            Beyond Desktop
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">Omnichannel & AI Edge</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Cortex Markets pushes the boundaries of retail engagement, offering trading surfaces on next-generation wearables and integrating with leading LLMs.
          </p>
        </div>

        {/* Wearables Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Smartwatch */}
          <div className="glassmorphism rounded-2xl p-6 border border-white/10 group">
            <div className="flex items-center gap-3 mb-6">
              <Watch className="w-6 h-6 text-gold" />
              <h3 className="font-serif text-xl text-white font-bold">Smartwatch Trading</h3>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-black">
              <video 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                autoPlay 
                muted 
                loop 
                playsInline
              >
                <source src="/Cortex platform on samsung watch 2.mp4" type="video/mp4" />
                <source src="/Cortex platform on samsung watch.mp4" type="video/mp4" />
              </video>
            </div>
            <p className="text-gray-400 text-sm">
              Instant risk control, alerts, and market monitoring delivered directly to Samsung and WearOS smartwatches.
            </p>
          </div>

          {/* AI Glasses */}
          <div className="glassmorphism rounded-2xl p-6 border border-white/10 group">
            <div className="flex items-center gap-3 mb-6">
              <Glasses className="w-6 h-6 text-blue-accent" />
              <h3 className="font-serif text-xl text-white font-bold">AI Glasses Surface</h3>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-black">
              <video 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                autoPlay 
                muted 
                loop 
                playsInline
                poster="/Cortex platform - First FX terminal on AI glasses.jpeg"
              >
                <source src="/Cortex platform on AI glasses.mp4" type="video/mp4" />
              </video>
            </div>
            <p className="text-gray-400 text-sm">
              The first FX terminal optimized for augmented reality and AI glasses, creating a heads-up intelligence layer.
            </p>
          </div>
        </div>

        {/* Claude Integration & Press */}
        <div className="grid lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-7 glassmorphism rounded-2xl p-8 border border-white/10 flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2 relative rounded-xl overflow-hidden border border-white/10">
              <img 
                src="/claude integration with cortex fx terminal and it is generating two layer of intelligence.jpeg" 
                alt="Claude AI integration with Cortex Terminal" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-3 mb-4">
                <BrainCircuit className="w-6 h-6 text-emerald-400" />
                <h3 className="font-serif text-2xl text-white font-bold">Claude Integration</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                Cortex Markets natively integrates with Anthropic's Claude, generating multi-layered intelligence directly within the terminal workflow.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-gold/10 to-transparent border border-gold/20 rounded-2xl p-8 flex flex-col justify-center">
            <div className="text-xs font-mono text-gold uppercase tracking-widest mb-4">Industry News</div>
            <h3 className="font-serif text-2xl text-white font-bold mb-4">
              CortexMarkets Bets on AI Platform for Brokers and Traders
            </h3>
            <p className="text-gray-300 text-sm mb-8 leading-relaxed">
              "Cortex is the intelligence layer that allows brokers to modernise without replacing the infrastructure they've spent years building."
            </p>
            <a 
              href="https://www.financemagnates.com/forex/cortexmarkets-bets-on-ai-platform-for-both-brokers-and-retail-traders-in-a-crowded-field/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 border border-white/10 px-6 py-3 rounded-lg text-sm font-semibold transition-colors w-fit"
            >
              Read on Finance Magnates <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
