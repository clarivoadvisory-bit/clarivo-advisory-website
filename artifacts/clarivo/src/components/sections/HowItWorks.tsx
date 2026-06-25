import { Search, BarChart3, Settings2, Rocket } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: <Search className="w-8 h-8 text-gold" />,
      title: "Discover",
      desc: "Deep-dive audit of your current systems, workflows, data infrastructure and market position."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-gold" />,
      title: "Analyze",
      desc: "Intelligence synthesis: identifying highest-leverage automation, market and technology opportunities."
    },
    {
      icon: <Settings2 className="w-8 h-8 text-gold" />,
      title: "Build",
      desc: "Hands-on system development and deployment — Shiv builds the systems himself, alongside your team."
    },
    {
      icon: <Rocket className="w-8 h-8 text-gold" />,
      title: "Scale",
      desc: "Post-launch optimisation, monitoring and iterative improvement to maximise return on every system built."
    }
  ];

  return (
    <section className="py-24 bg-[#0a1526]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-in fade-up">
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-4">How Clarivo Works</h2>
          <p className="text-xl text-gray-400 font-light">A structured engagement model built for outcomes — not retainers.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative mb-16">
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          
          {steps.map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center animate-in fade-up" style={{ animationDelay: `${i * 150}ms` }}>
              <div className="w-24 h-24 rounded-full bg-navy-deep border border-gold/30 flex items-center justify-center mb-6 shadow-lg shadow-gold/10 relative">
                <div className="absolute inset-0 rounded-full border border-gold/50 animate-ping opacity-20" style={{ animationDuration: '3s', animationDelay: `${i}s` }} />
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{i + 1}. {step.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto glassmorphism border-red-900/30 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-center gap-6 animate-in fade-up">
          <div className="text-red-400 font-bold tracking-widest uppercase text-sm whitespace-nowrap">
            NOT FOR:
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
            <span className="flex items-center gap-2"><span className="text-red-500">✕</span> Mass-market audiences</span>
            <span className="flex items-center gap-2"><span className="text-red-500">✕</span> Short-term tactical work</span>
            <span className="flex items-center gap-2"><span className="text-red-500">✕</span> Slide-deck-only engagements</span>
          </div>
        </div>
      </div>
    </section>
  );
}
