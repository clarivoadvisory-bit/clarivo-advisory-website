import { FaWhatsapp, FaLinkedin } from "react-icons/fa";

export function Founder() {
  const milestones = [
    { year: "1999", title: "International Trade & Export Development" },
    { year: "2008", title: "Financial Markets & Algorithmic Trading" },
    { year: "2016", title: "FinTech Solutions & Digital Strategy" },
    { year: "2023", title: "Strategic Advisory & Clarivo Founded" },
    { year: "2026", title: "AI Automation Expansion" },
  ];

  return (
    <section id="founder" className="py-24 bg-navy-mid relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-16">
        
        {/* Left Column - Sticky Profile */}
        <div className="lg:col-span-4 relative">
          <div className="sticky top-32 space-y-6">
            <div className="w-full aspect-[4/5] rounded-2xl bg-gradient-to-br from-navy-deep to-navy p-1 border border-gold/30 shadow-2xl relative group overflow-hidden">
              <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none rounded-2xl" />
              <img
                src={`${import.meta.env.BASE_URL}shiv-kumar.jpg`}
                alt="Shiv Kumar — Founder & Principal Advisor, Clarivo Advisory"
                className="w-full h-full rounded-xl object-cover object-top"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  const t = e.currentTarget;
                  t.style.display = "none";
                  const fallback = t.nextElementSibling as HTMLElement | null;
                  if (fallback) fallback.style.display = "flex";
                }}
              />
              <div className="w-full h-full rounded-xl bg-navy-deep items-center justify-center relative z-10 border border-white/5 hidden">
                <span className="font-serif text-6xl text-gold/80">SK</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 bg-blue-accent/10 border border-blue-accent/30 text-blue-accent py-2 rounded-full font-medium text-sm">
              <div className="w-2 h-2 rounded-full bg-blue-accent" />
              Connected on LinkedIn
            </div>

            <div className="glassmorphism rounded-xl p-5 space-y-4">
              <a href="#contact" className="w-full block text-center bg-gold text-navy-deep py-3 rounded font-bold hover:bg-gold-dark transition-colors gold-glow">
                Book a Strategy Call
              </a>
              <a 
                href="https://wa.me/917600048237?text=Hi%20Shiv%2C%20I%20would%20like%20to%20discuss%20a%20project." 
                target="_blank" rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded font-bold hover:bg-[#20bd5a] transition-colors"
              >
                <FaWhatsapp size={20} />
                WhatsApp Shiv Kumar
              </a>
            </div>

            <div className="glassmorphism rounded-xl p-5">
              <h4 className="font-serif text-gold mb-4 text-sm tracking-widest uppercase">Credentials</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold" /> MBA International Business</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold" /> Certified Blockchain Specialist</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold" /> Certified AI Specialist</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gold" /> 20+ Countries Active</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column - Bio & Timeline */}
        <div className="lg:col-span-8 animate-in fade-up">
          <div className="text-gold font-bold text-sm tracking-widest uppercase mb-4">FOUNDER & PRINCIPAL ADVISOR</div>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-2">Shiv Kumar</h2>
          <h3 className="text-gold text-lg md:text-xl font-medium mb-8">Founder & Principal Advisor — Clarivo Advisory</h3>
          
          <blockquote className="border-l-4 border-gold pl-6 py-2 mb-10 text-xl md:text-2xl font-serif text-gray-300 italic">
            "Clarity breeds execution. Intelligence without action is just data."
          </blockquote>

          <div className="space-y-6 text-gray-300 leading-relaxed text-lg font-light mb-12">
            <p>
              Shiv Kumar is the Founder and Principal Advisor of Clarivo Advisory — a specialist practice combining AI Automation, Trade Intelligence, Financial Markets Automation and Fintech Strategy into a single, integrated advisory offering.
            </p>
            <p>
              With 25+ years of hands-on experience operating across India, the Middle East, Africa and South-East Asia, Shiv brings rare depth across domains that most advisors treat as separate: the ability to automate trading systems on MT5, map global buyer corridors in export markets, design fintech compliance architectures across 9 countries and implement AI workflows that actually ship to production.
            </p>
            <p>
              Clarivo Advisory is built on a simple belief: the most valuable advisory produces working systems, not slide decks. Shiv embeds directly with clients, builds the systems himself, and stays accountable to outcomes — not engagements.
            </p>
          </div>

          <h4 className="font-serif text-xl text-white mb-6 border-b border-white/10 pb-2">Core Expertise</h4>
          <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 mb-12 text-gray-300">
            <div className="flex items-center gap-2"><span className="text-gold">●</span> AI Workflow Automation</div>
            <div className="flex items-center gap-2"><span className="text-gold">●</span> Financial Markets (NIFTY/MT5)</div>
            <div className="flex items-center gap-2"><span className="text-gold">●</span> Trade Intelligence</div>
            <div className="flex items-center gap-2"><span className="text-gold">●</span> XAUUSD/Forex Automation</div>
            <div className="flex items-center gap-2"><span className="text-gold">●</span> Fintech Advisory</div>
            <div className="flex items-center gap-2"><span className="text-gold">●</span> Interactive Brokers API</div>
            <div className="flex items-center gap-2"><span className="text-gold">●</span> CRM Intelligence</div>
            <div className="flex items-center gap-2"><span className="text-gold">●</span> Export Market Development</div>
          </div>

          <h4 className="font-serif text-xl text-white mb-6 border-b border-white/10 pb-2">Global Footprint</h4>
          <div className="flex flex-wrap gap-4 mb-16">
            {["🇮🇳 India", "🇦🇪 UAE", "🇰🇪 Kenya", "🇳🇬 Nigeria", "🇬🇧 UK", "🇰🇭 Cambodia", "🇸🇦 Saudi Arabia", "🇪🇬 Egypt"].map((geo) => (
              <span key={geo} className="px-4 py-2 rounded-full border border-white/10 bg-navy-deep text-sm text-gray-300">
                {geo}
              </span>
            ))}
          </div>

          <div className="mb-12">
            <h4 className="font-serif text-2xl text-white mb-8">25 Years of Experience</h4>
            <div className="relative border-l border-white/20 ml-4 space-y-12">
              {milestones.map((m, i) => (
                <div key={i} className="relative pl-8 animate-in fade-up" style={{ animationDelay: `${i * 150}ms` }}>
                  <div className="absolute -left-2.5 top-1.5 w-5 h-5 rounded-full bg-navy-deep border-2 border-gold" />
                  <div className="text-gold font-mono font-bold mb-1">{m.year}</div>
                  <div className="text-white text-lg">{m.title}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-white/10">
            <a href="#contact" className="bg-gold text-navy-deep px-8 py-4 rounded font-bold text-center hover:bg-gold-dark transition-colors gold-glow">
              Work With Shiv Kumar
            </a>
            <a href="https://www.linkedin.com/in/shiv-kkumar" target="_blank" rel="noreferrer" className="border border-white/20 text-white px-8 py-4 rounded font-semibold text-center hover:bg-white/5 transition-colors">
              View on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
