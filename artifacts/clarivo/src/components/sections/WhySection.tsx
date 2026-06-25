import { Database, Zap, Globe2, Handshake, ShieldCheck } from "lucide-react";

export function WhySection() {
  const pillars = [
    {
      icon: <Database className="text-gold w-6 h-6" />,
      title: "Data-Led, Always",
      desc: "Every recommendation grounded in live intelligence — not instinct, not industry generics."
    },
    {
      icon: <Zap className="text-gold w-6 h-6" />,
      title: "Implementation, Not Just Advice",
      desc: "We build, integrate, deploy and train. You walk away with systems that work — not decks that gather dust."
    },
    {
      icon: <Globe2 className="text-gold w-6 h-6" />,
      title: "Cross-Border Execution",
      desc: "Hands-on experience across 20+ countries: India, UAE, Kenya, Cambodia, Nigeria, UK and beyond."
    },
    {
      icon: <Handshake className="text-gold w-6 h-6" />,
      title: "Founder-to-Founder Engagement",
      desc: "You speak directly with Shiv Kumar — an experienced operator who understands business pressures from the inside."
    },
    {
      icon: <ShieldCheck className="text-gold w-6 h-6" />,
      title: "Academic & Regulatory Depth",
      desc: "MBA International Business, Certified Blockchain & AI Specialist. Guest Faculty at 3 leading management institutions."
    }
  ];

  return (
    <section id="why" className="py-24 bg-navy-deep relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-navy mix-blend-screen opacity-50 blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="animate-in fade-right">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-8 leading-tight">
            Advisory with <span className="text-gold">Accountability</span>
          </h2>
          
          <div className="space-y-6 text-lg text-gray-300 font-light leading-relaxed mb-10">
            <p>
              Most consulting engagements produce slide decks. Clarivo engagements produce working systems. Shiv Kumar embeds directly with your team, implements the systems himself, and stays accountable to outcomes — not presentations.
            </p>
            <p>
              With 25+ years operating across financial markets, international trade corridors, technology businesses and regulatory environments in India, the Middle East, Africa and South-East Asia, every recommendation carries the weight of real-world execution.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mb-10 border-y border-white/10 py-6">
            <div className="px-4 border-l-2 border-gold first:border-0">
              <div className="text-3xl font-bold text-white mb-1">25+</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="px-4 border-l-2 border-gold">
              <div className="text-3xl font-bold text-white mb-1">20+</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">Countries</div>
            </div>
            <div className="px-4 border-l-2 border-gold">
              <div className="text-3xl font-bold text-white mb-1">5</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">Practice Areas</div>
            </div>
          </div>

          <a href="#contact" className="inline-block bg-gold text-navy-deep px-8 py-4 rounded font-bold text-lg hover:bg-gold-dark transition-colors gold-glow">
            Work With Shiv Kumar
          </a>
        </div>

        <div className="space-y-4 animate-in fade-left">
          {pillars.map((pillar, i) => (
            <div key={i} className="glassmorphism p-6 rounded-xl border border-white/5 hover:border-gold/30 transition-colors flex gap-5 group">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/10 transition-colors">
                {pillar.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{pillar.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
