import { useEffect, useState } from "react";
import { ChevronRight, ArrowUpRight, ShieldCheck, Database, Cpu } from "lucide-react";

export function CortexHero() {
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

  const scrollToForm = () => {
    document.getElementById("cortex-lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90dvh] flex items-center pt-20 overflow-hidden bg-[#040E1E]">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-[50vw] h-[50vw] bg-gold/5 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[0%] left-[20%] w-[40vw] h-[40vw] bg-blue-accent/5 rounded-full blur-[100px] mix-blend-screen" />
        {/* Animated grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col justify-center animate-in">
          <div className="inline-block border border-gold/30 bg-gold/5 rounded-full px-4 py-1.5 mb-8 w-fit backdrop-blur-sm">
            <span className="text-xs font-mono text-gold tracking-wider uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              White-label trading infrastructure
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.05] tracking-tight mb-8 text-white">
            AI-Native Trading <br/>
            <span className="text-gold">Infrastructure</span> for Modern Financial Markets
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mb-6 leading-relaxed">
            Launch a differentiated trading experience under your own brand without having to build an entire trading technology ecosystem from the ground up.
          </p>

          <p className="text-gray-400 max-w-xl mb-10 text-lg">
            Cortex Markets brings AI intelligence, trading, and institutional capabilities into a connected B2B ecosystem. <span className="text-white font-medium block mt-2">End-to-end strategic deployment and infrastructure integration by Clarivo Advisory.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button onClick={scrollToForm} className="bg-gold text-navy-deep px-8 py-4 rounded font-bold text-lg hover:bg-gold-dark transition-all gold-glow text-center flex items-center justify-center gap-2">
              Request a Private Cortex Demonstration
              <ChevronRight className="w-5 h-5" />
            </button>
            <button onClick={() => {
              document.getElementById("cortex-architecture")?.scrollIntoView({ behavior: "smooth" });
            }} className="border border-white/20 text-white px-8 py-4 rounded font-semibold text-lg hover:bg-white/5 transition-all text-center flex items-center justify-center gap-2">
              Explore the Architecture
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="pt-4 flex items-center gap-3 text-xs md:text-sm text-gray-500 font-mono uppercase tracking-widest flex-wrap">
            <span>Built for:</span>
            <span className="text-gray-400">Brokers</span>
            <span className="text-white/20">•</span>
            <span className="text-gray-400">Prop Firms</span>
            <span className="text-white/20">•</span>
            <span className="text-gray-400">Fund Managers</span>
            <span className="text-white/20">•</span>
            <span className="text-gray-400">Institutional Trading Businesses</span>
            <span className="text-white/20">•</span>
            <span className="text-gray-400">FinTechs</span>
          </div>
        </div>

        {/* Right Floating Visual */}
        <div className="lg:col-span-5 hidden lg:flex items-center justify-center relative h-[600px]">
          <div 
            className="absolute inset-0 w-full h-full transition-transform duration-300 ease-out flex items-center justify-center"
            style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
          >
            {/* Abstract Tech Stack Representation */}
            <div className="relative w-full max-w-md aspect-square">
              {/* Central Core */}
              <div className="absolute inset-1/4 bg-gradient-to-br from-[#071B3B] to-[#040E1E] rounded-2xl border border-gold/30 shadow-[0_0_50px_rgba(244,180,0,0.15)] flex items-center justify-center z-20 backdrop-blur-md overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(244,180,0,0.1),transparent_70%)]" />
                <div className="text-center relative z-10">
                  <Cpu className="w-16 h-16 text-gold mx-auto mb-4" />
                  <div className="text-white font-serif text-2xl font-bold tracking-widest">CORTEX</div>
                  <div className="text-gold text-xs font-mono tracking-widest mt-1">ENGINE</div>
                </div>
              </div>

              {/* Orbiting Elements */}
              <div className="absolute top-[10%] right-[10%] w-32 glassmorphism p-4 rounded-xl border-t-2 border-t-gold hover-lift animate-[float_6s_ease-in-out_infinite] z-30">
                <ShieldCheck className="text-gold w-6 h-6 mb-2" />
                <h3 className="font-serif font-bold text-white text-sm">Institutional</h3>
                <p className="text-[10px] text-gray-400">Grade Security</p>
              </div>

              <div className="absolute bottom-[10%] left-[5%] w-32 glassmorphism p-4 rounded-xl border-t-2 border-t-blue-accent hover-lift animate-[float_7s_ease-in-out_infinite_1s] z-30">
                <Database className="text-blue-accent w-6 h-6 mb-2" />
                <h3 className="font-serif font-bold text-white text-sm">AI Native</h3>
                <p className="text-[10px] text-gray-400">Architecture</p>
              </div>
              
              {/* Connective rings */}
              <div className="absolute inset-4 border border-white/5 rounded-full" />
              <div className="absolute inset-12 border border-white/10 rounded-full border-dashed animate-[spin_60s_linear_infinite]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
