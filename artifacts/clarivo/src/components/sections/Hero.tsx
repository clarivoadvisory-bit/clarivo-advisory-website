import { useEffect, useState } from "react";
import { BrainCircuit, Globe, LineChart, CreditCard, ChevronDown } from "lucide-react";

interface HeroProps {
  onBookCall?: () => void;
}

export function Hero({ onBookCall }: HeroProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center pt-36 overflow-hidden bg-[#040E1E]">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] bg-gold/5 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[10%] right-[20%] w-[30vw] h-[30vw] bg-blue-accent/5 rounded-full blur-[100px] mix-blend-screen" />
        
        {/* Animated grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid lg:grid-cols-12 gap-12">
        
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col justify-center animate-in">
          <div className="inline-block border border-white/10 bg-white/5 rounded-full px-4 py-1.5 mb-8 w-fit backdrop-blur-sm">
            <span className="text-xs font-mono text-gold tracking-wider uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              Global Business Advisor · Shiv Kumar
            </span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] leading-[0.95] tracking-tight mb-8">
            <span className="block text-white">AUTOMATE.</span>
            <span className="block text-white">ANALYZE.</span>
            <span className="block text-gold">EXECUTE.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mb-6">
            Helping businesses build intelligent systems for AI automation, trade intelligence, financial markets automation and operational excellence.
          </p>

          <p className="text-gray-400 max-w-xl mb-10">
            Supporting exporters, manufacturers, fintech companies and market participants through AI, data and strategic execution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button onClick={onBookCall} className="bg-gold text-navy-deep px-8 py-4 rounded font-bold text-lg hover:bg-gold-dark transition-all gold-glow text-center">
              Book a Strategy Call
            </button>
            <a href="https://www.linkedin.com/in/shiv-kkumar" target="_blank" rel="noreferrer" className="border border-white/20 text-white px-8 py-4 rounded font-semibold text-lg hover:bg-white/5 transition-all text-center">
              Connect on LinkedIn
            </a>
          </div>

          <div className="border-t border-white/10 pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-400 font-medium">
            <div><strong className="text-white block text-lg mb-1">25+</strong> Years Global Experience</div>
            <div><strong className="text-white block text-lg mb-1">20+</strong> Countries Covered</div>
            <div><strong className="text-white block text-lg mb-1">5</strong> Advisory Practices</div>
            <div><strong className="text-white block text-lg mb-1">100%</strong> AI-First Methodology</div>
          </div>
        </div>

        {/* Right Floating Cards */}
        <div className="lg:col-span-5 hidden lg:flex items-center justify-center relative h-[600px]">
          <div 
            className="absolute inset-0 w-full h-full transition-transform duration-300 ease-out"
            style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
          >
            {/* Card 1 */}
            <div className="absolute top-[10%] right-[10%] w-64 glassmorphism p-6 rounded-xl border-t-2 border-t-gold hover-lift animate-[float_6s_ease-in-out_infinite]">
              <BrainCircuit className="text-gold w-8 h-8 mb-4" />
              <h3 className="font-serif text-xl font-bold text-white mb-2">AI Automation</h3>
              <p className="text-xs text-gray-400">Intelligent workflow design & deployment</p>
            </div>

            {/* Card 2 */}
            <div className="absolute top-[35%] left-[0%] w-64 glassmorphism p-6 rounded-xl border-t-2 border-t-blue-accent hover-lift animate-[float_8s_ease-in-out_infinite_1s]">
              <Globe className="text-blue-accent w-8 h-8 mb-4" />
              <h3 className="font-serif text-xl font-bold text-white mb-2">Trade Intelligence</h3>
              <p className="text-xs text-gray-400">Global buyer discovery & CRM</p>
            </div>

            {/* Card 3 */}
            <div className="absolute bottom-[25%] right-[20%] w-64 glassmorphism p-6 rounded-xl border-t-2 border-t-green-500 hover-lift animate-[float_7s_ease-in-out_infinite_2s]">
              <LineChart className="text-green-500 w-8 h-8 mb-4" />
              <h3 className="font-serif text-xl font-bold text-white mb-2">Market Analytics</h3>
              <p className="text-xs text-gray-400">Systematic trading & execution</p>
            </div>
            
            {/* Card 4 */}
            <div className="absolute bottom-[5%] left-[10%] w-64 glassmorphism p-6 rounded-xl border-t-2 border-t-white hover-lift animate-[float_9s_ease-in-out_infinite_0.5s]">
              <CreditCard className="text-white w-8 h-8 mb-4" />
              <h3 className="font-serif text-xl font-bold text-white mb-2">FinTech Solutions</h3>
              <p className="text-xs text-gray-400">Product strategy & expansion</p>
            </div>
          </div>
        </div>

      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#founder" className="text-white/50 hover:text-gold transition-colors">
          <ChevronDown size={32} />
        </a>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
}
