import { FaWhatsapp, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-navy-deep border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-navy-deep border border-gold rounded-lg flex items-center justify-center">
              <span className="text-gold font-serif font-bold text-xl">C</span>
            </div>
            <div className="font-serif text-lg tracking-wide">
              <span className="text-white">Clarivo</span>{" "}
              <span className="text-gold italic">Advisory</span>
            </div>
          </a>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 font-medium">
            <a href="#home" className="hover:text-gold transition-colors">Home</a>
            <a href="#founder" className="hover:text-gold transition-colors">About</a>
            <a href="#services" className="hover:text-gold transition-colors">Services</a>
            <a href="#markets" className="hover:text-gold transition-colors">Markets</a>
            <a href="#casestudies" className="hover:text-gold transition-colors">Results</a>
            <a href="#resources" className="hover:text-gold transition-colors">Resources</a>
            <a href="#insights" className="hover:text-gold transition-colors">Insights</a>
            <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
          </div>

          {/* Social */}
          <div className="flex gap-4">
            <a href="https://wa.me/917600048237" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-green-500 hover:bg-white/10 transition-all">
              <FaWhatsapp size={20} />
            </a>
            <a href="https://www.linkedin.com/in/shiv-kkumar" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-blue-accent hover:bg-white/10 transition-all">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Middle Row */}
        <div className="text-center border-t border-white/5 pt-8 pb-8 text-gray-400 text-sm flex flex-col md:flex-row justify-center gap-2 md:gap-6">
          <a href="mailto:shiv@clarivoadvisory.com" className="hover:text-gold">shiv@clarivoadvisory.com</a>
          <span className="hidden md:inline text-white/20">|</span>
          <a href="tel:+917600048237" className="hover:text-gold">+91-7600048237</a>
          <span className="hidden md:inline text-white/20">|</span>
          <span>Ahmedabad, Gujarat, India</span>
        </div>

        {/* Bottom Row */}
        <div className="text-center text-xs text-gray-500 font-medium">
          © {new Date().getFullYear()} Clarivo Advisory. All rights reserved. <span className="mx-2">|</span> clarivoadvisory.com
        </div>
      </div>
    </footer>
  );
}
