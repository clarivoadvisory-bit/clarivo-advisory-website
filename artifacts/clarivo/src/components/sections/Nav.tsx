import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";

interface NavProps {
  onBookCall?: () => void;
}

export function Nav({ onBookCall }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#founder" },
    { name: "Services", href: "#services" },
    { name: "Markets", href: "#markets" },
    { name: "Results", href: "#casestudies" },
    { name: "Resources", href: "#resources" },
    { name: "Insights", href: "#insights" },
    { name: "Contact", href: "#contact" },
  ];

  const tickerItems = [
    "XAUUSD ▲ Live Systems Active",
    "NIFTY ▲ Automation Ready",
    "EURUSD ▲ MT5 Deployed",
    "SENSEX ▲ Options Analytics Live",
    "IBKR ▲ API Integration Active",
    "GBPUSD ▲ Strategy Monitoring",
    "BANK NIFTY ▲ Risk Systems Live",
    "SPY ▲ US Markets Automation",
    "XAUUSD ▲ Grade A/B Regime Active",
    "NIFTY ▲ VIX Kill Switch Armed",
    "MT5 ▲ Expert Advisor Live",
    "QQQ ▲ Systematic Strategy Active",
  ];

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300">
      {/* Ticker Tape — seamless Bloomberg-style */}
      <div className="w-full bg-navy-deep border-b border-white/5 overflow-hidden py-2 select-none">
        <div
          className="inline-flex whitespace-nowrap"
          style={{ animation: "clarivo-ticker 40s linear infinite" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.animationPlayState = "paused"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.animationPlayState = "running"; }}
        >
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 text-xs font-mono text-gold px-6 border-r border-gold/10 last:border-r-0"
              aria-hidden={i >= tickerItems.length ? "true" : undefined}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block opacity-80" />
              {item}
            </span>
          ))}
        </div>
        <style>{`
          @keyframes clarivo-ticker {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>

      {/* Main Nav */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled ? "glassmorphism border-b border-white/10 py-3 shadow-lg" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-navy-deep border border-gold rounded-lg flex items-center justify-center group-hover:gold-glow transition-all">
              <span className="text-gold font-serif font-bold text-xl">C</span>
            </div>
            <div className="font-serif text-lg tracking-wide hidden sm:block">
              <span className="text-white">Clarivo</span>{" "}
              <span className="text-gold italic">Advisory</span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-6">
            <ul className="flex items-center gap-6 text-sm text-gray-300 font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-gold transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 border-l border-white/10 pl-6">
              <a
                href="https://wa.me/917600048237?text=Hi%20Shiv%2C%20I%20visited%20clarivoadvisory.com%20and%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-green-500 transition-colors"
                title="WhatsApp"
              >
                <FaWhatsapp size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/shiv-kkumar"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-blue-accent transition-colors"
                title="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <button
                onClick={onBookCall}
                className="bg-gold text-navy-deep px-5 py-2 rounded font-semibold text-sm hover:bg-gold-dark transition-colors gold-glow"
              >
                Book a Call
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-navy-mid border-b border-white/10 py-6 px-6 flex flex-col gap-4 shadow-xl">
            {navLinks.map((link) => (
               <a 
                 key={link.name} 
                 href={link.href} 
                 className="text-white hover:text-gold font-medium py-2 border-b border-white/5"
                 onClick={() => setMobileMenuOpen(false)}
               >
                 {link.name}
               </a>
            ))}
            <button
              onClick={() => { setMobileMenuOpen(false); onBookCall?.(); }}
              className="bg-gold text-navy-deep px-5 py-3 rounded font-semibold text-center mt-4 w-full"
            >
              Book a Call
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
