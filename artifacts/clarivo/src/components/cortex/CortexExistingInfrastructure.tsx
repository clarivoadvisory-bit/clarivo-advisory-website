import { ServerCog, ArrowRight } from "lucide-react";

export function CortexExistingInfrastructure() {
  const scrollToForm = () => {
    document.getElementById("cortex-lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-[#040E1E] relative border-y border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(244,180,0,0.05),transparent_50%)]" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-gold/20">
          <ServerCog className="w-8 h-8 text-gold" />
        </div>
        
        <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">Existing Trading Infrastructure</h2>
        
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 font-light leading-relaxed">
          We understand that established financial businesses operate with legacy or complex technology infrastructure. Cortex is the intelligence layer that allows brokers to modernize without replacing the infrastructure they've spent years building.
        </p>

        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Brokers can deploy the Cortex platform while continuing to use their existing trading infrastructure, including <strong className="text-white font-medium">MetaTrader 5</strong>, <strong className="text-white font-medium">cTrader</strong>, bridge technology, liquidity providers, and risk management systems. The platform is execution-layer independent.
        </p>

        <button 
          onClick={scrollToForm}
          className="inline-flex items-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-gold/50 transition-all text-white px-8 py-4 rounded font-semibold text-lg"
        >
          Discuss Your Infrastructure Integration <ArrowRight className="w-5 h-5 text-gold" />
        </button>
      </div>
    </section>
  );
}
