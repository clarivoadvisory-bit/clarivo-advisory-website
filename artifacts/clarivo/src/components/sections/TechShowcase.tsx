import { SiOpenai, SiPython, SiWhatsapp, SiTradingview, SiTelegram } from "react-icons/si";

export function TechShowcase() {
  const row1 = [
    { name: "OpenAI", icon: <SiOpenai className="w-8 h-8" /> },
    { name: "Python", icon: <SiPython className="w-8 h-8" /> },
    { name: "Power BI", icon: null },
    { name: "Interactive Brokers", icon: null },
    { name: "MetaTrader 5", icon: null },
    { name: "MQL5", icon: null },
    { name: "Dhan API", icon: null },
  ];

  const row2 = [
    { name: "Excel", icon: null },
    { name: "CRM Platforms", icon: null },
    { name: "WhatsApp Business", icon: <SiWhatsapp className="w-8 h-8" /> },
    { name: "TradingView", icon: <SiTradingview className="w-8 h-8" /> },
    { name: "Pine Script", icon: null },
    { name: "n8n", icon: null },
    { name: "Telegram API", icon: <SiTelegram className="w-8 h-8" /> },
  ];

  return (
    <section className="py-24 bg-navy-deep relative overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-12 animate-in fade-up">
        <h2 className="font-serif text-3xl md:text-4xl text-white text-center">Powered by Leading Technology Platforms</h2>
      </div>

      <div className="flex flex-col gap-8 relative z-10 w-full overflow-hidden">
        {/* Row 1 - Left to Right */}
        <div className="flex w-fit animate-marquee hover:[animation-play-state:paused] gap-8">
          {[...row1, ...row1, ...row1, ...row1].map((tech, i) => (
            <div key={`r1-${i}`} className="flex items-center gap-4 glassmorphism px-8 py-4 rounded-full border border-white/10 whitespace-nowrap min-w-max">
              {tech.icon && <div className="text-gold">{tech.icon}</div>}
              {!tech.icon && <div className="w-8 h-8 rounded-full bg-navy flex items-center justify-center border border-white/10 text-xs text-gold font-bold">{tech.name.charAt(0)}</div>}
              <span className="text-white font-medium text-lg">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Row 2 - Right to Left */}
        <div className="flex w-fit animate-marquee-reverse hover:[animation-play-state:paused] gap-8" style={{ animationDirection: "reverse" }}>
          {[...row2, ...row2, ...row2, ...row2].map((tech, i) => (
            <div key={`r2-${i}`} className="flex items-center gap-4 glassmorphism px-8 py-4 rounded-full border border-white/10 whitespace-nowrap min-w-max">
              {tech.icon && <div className="text-gold">{tech.icon}</div>}
              {!tech.icon && <div className="w-8 h-8 rounded-full bg-navy flex items-center justify-center border border-white/10 text-xs text-gold font-bold">{tech.name.charAt(0)}</div>}
              <span className="text-white font-medium text-lg">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
