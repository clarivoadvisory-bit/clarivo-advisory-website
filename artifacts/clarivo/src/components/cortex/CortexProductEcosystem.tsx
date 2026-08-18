import { LayoutGrid, Smartphone, Box, Briefcase, Blocks } from "lucide-react";

export function CortexProductEcosystem() {
  const products = [
    {
      name: "Cortex Pro",
      icon: <LayoutGrid className="w-6 h-6 text-gold" />,
      description: "Advanced institutional-grade trading interface with footprint charts, market depth, and professional execution capabilities."
    },
    {
      name: "Cortex Retail",
      icon: <Box className="w-6 h-6 text-blue-accent" />,
      description: "An intuitive, engaging platform designed to maximize user retention and simplify the trading experience for retail clients."
    },
    {
      name: "Cortex KYRO",
      icon: <Blocks className="w-6 h-6 text-purple-400" />,
      description: "Integrated ecosystem modules for evaluation, risk management, and administration, purpose-built for Prop Firms."
    },
    {
      name: "Cortex Fund Manager",
      icon: <Briefcase className="w-6 h-6 text-emerald-400" />,
      description: "Sophisticated MAM/PAMM architecture allowing seamless allocation and management of multiple investor accounts."
    },
    {
      name: "Cortex Mobile",
      icon: <Smartphone className="w-6 h-6 text-rose-400" />,
      description: "A fully featured mobile application delivering the complete Cortex experience on iOS and Android devices."
    }
  ];

  return (
    <section className="py-24 bg-[#020617] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-mono uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-gold"></span>
            The Cortex Ecosystem
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-6 max-w-3xl">
            A Complete Suite of Trading Applications
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Cortex Markets provides specialized interfaces and infrastructure tailored to the distinct needs of different market participants.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <div key={i} className="bg-[#040E1E] p-8 rounded-2xl border border-white/5 hover:border-gold/20 transition-colors">
              <div className="bg-white/5 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                {p.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-3">{p.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
