import { Mail, Linkedin, Globe2 } from "lucide-react";

export function CortexClarivoPositioning() {
  return (
    <section className="py-24 bg-[#020617] relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
          Market Development Through Clarivo Advisory
        </h2>
        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          Clarivo Advisory facilitates strategic market development, technology evaluation, and high-level introductions for the Cortex Markets ecosystem across global financial centers.
        </p>

        <div className="glassmorphism rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto inline-block text-left w-full">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-24 h-24 rounded-full bg-gold/20 border-2 border-gold/40 flex-shrink-0 flex items-center justify-center overflow-hidden">
              {/* Optional: Insert Shiv's photo here. Falling back to initials. */}
              <span className="font-serif text-3xl text-gold">SK</span>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-serif text-2xl font-bold text-white mb-1">Shiv Kumar</h3>
              <p className="text-gold font-mono text-sm uppercase tracking-widest mb-4">Clarivo Advisory</p>
              
              <p className="text-gray-400 text-sm mb-6 max-w-md">
                With 25+ years of experience across 20+ countries in Financial Markets and FinTech, Shiv Kumar assists institutional clients in navigating complex technology integrations.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
                <a href="mailto:shiv@clarivoadvisory.com" className="flex items-center gap-2 text-gray-300 hover:text-gold transition-colors">
                  <Mail className="w-4 h-4" />
                  shiv@clarivoadvisory.com
                </a>
                <span className="hidden sm:inline text-white/20">•</span>
                <a href="https://www.linkedin.com/in/shiv-kkumar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn Profile
                </a>
                <span className="hidden sm:inline text-white/20">•</span>
                <a href="https://www.clarivoadvisory.com/" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                  <Globe2 className="w-4 h-4" />
                  clarivoadvisory.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
