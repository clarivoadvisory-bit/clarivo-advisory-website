import { useState } from "react";
import { Maximize2 } from "lucide-react";

export function CortexPlatformGallery() {
  const [activeTab, setActiveTab] = useState("terminal");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: "terminal", label: "Terminal & Workspaces" },
    { id: "ai", label: "AI Intelligence" },
    { id: "risk", label: "Risk Management" },
    { id: "fund", label: "Fund & Copy Trading" },
    { id: "ecosystem", label: "Ecosystem" },
  ];

  const images: Record<string, { src: string; title: string; desc: string }[]> = {
    terminal: [
      { src: "/Cortex Platform.png", title: "Cortex Pro Terminal", desc: "Institutional-grade execution surface." },
      { src: "/Cortex Platform Light Dark mode.png", title: "Light & Dark Modes", desc: "Native theming support out of the box." },
      { src: "/Cortex Platform - Platform as per retails clients.png", title: "Retail Workspace", desc: "Simplified views for retail engagement." },
      { src: "/Cortex Platform - Pattern menu.png", title: "Pattern Detection", desc: "Automated technical pattern recognition." },
    ],
    ai: [
      { src: "/Cortex Platform Risk Mgmt AI Intelligence.png", title: "AI Intelligence Dashboard", desc: "Central hub for automated market insights." },
      { src: "/Cortex Platform Risk Mgmt AI cortex intelligence.png", title: "Intelligence Agents", desc: "Multi-agent analysis workflows." },
      { src: "/Cortex Platform Risk Mgmt AI narrator.png", title: "Narrator", desc: "Natural language market translation." },
      { src: "/Cortex Platform Risk Mgmt AI Cognos.png", title: "Cognos", desc: "Advanced cognitive trading assistance." },
      { src: "/Cortex Platform Risk Mgmt AI Atlas.png", title: "Atlas", desc: "Macro-economic mapping and mapping." },
      { src: "/Cortex Platform Risk Mgmt AI Session replay.png", title: "Session Replay", desc: "AI-driven historical session analysis." },
      { src: "/Cortex Platform - Research AI menu.png", title: "Research AI", desc: "Embedded research and analytics." },
    ],
    risk: [
      { src: "/Cortex Platform Risk Mgmt AI Risk mgmt.png", title: "Risk Management Hub", desc: "Firm-wide exposure controls." },
      { src: "/Cortex Platform Risk Mgmt AI Draw down mode.png", title: "Drawdown Protection", desc: "Automated loss prevention parameters." },
      { src: "/Cortex Platform Risk Mgmt AI Vacuum.png", title: "Liquidity Vacuum", desc: "Detects order book imbalances." },
      { src: "/Cortex Platform Risk Mgmt AI Velocity void.png", title: "Velocity Void", desc: "Execution speed and slippage monitoring." },
    ],
    fund: [
      { src: "/Cortex Platform - Fund manager 1.png", title: "Fund Manager Hub", desc: "MAM/PAMM allocation oversight." },
      { src: "/Cortex Platform - Fund manager 2.png", title: "Investor Dashboards", desc: "Sub-account performance tracking." },
      { src: "/Cortex Platform Risk Mgmt AI cortex copy trading.png", title: "Copy Trading", desc: "Seamless signal distribution." },
    ],
    ecosystem: [
      { src: "/Cortex Platform Risk Mgmt AI cortex app store.png", title: "Cortex App Store", desc: "Extensible widget and plugin marketplace." },
      { src: "/Cortex Platform Risk Mgmt AI cortex help center.png", title: "Help Center", desc: "Integrated support and documentation." },
      { src: "/Cortex Platform - File.png", title: "File Management", desc: "Workspace configuration." },
      { src: "/Cortex Platform - Product menu.png", title: "Product Navigation", desc: "Asset class selection." },
      { src: "/Cortex Platform - Setting menu.png", title: "Settings", desc: "Deep platform customization." },
      { src: "/Cortex Platform - Account menu.png", title: "Account Hub", desc: "Trader profile and secure settings." },
      { src: "/Cortex Platform - News menu.png", title: "Integrated News", desc: "Real-time macro and event feeds." },
    ],
  };

  return (
    <section className="py-24 bg-[#020617] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">Platform Deep Dive</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore the vast capabilities of the Cortex ecosystem across retail, institutional, AI, and risk management surfaces.
          </p>
        </div>

        {/* Custom Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all border ${
                activeTab === cat.id 
                  ? "bg-gold text-navy-deep border-gold gold-glow" 
                  : "bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images[activeTab]?.map((img, idx) => (
            <div 
              key={idx} 
              className="glassmorphism rounded-xl border border-white/10 overflow-hidden group cursor-pointer"
              onClick={() => setSelectedImage(img.src)}
            >
              <div className="aspect-[16/9] relative overflow-hidden bg-black/50">
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="bg-black/50 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm border border-white/10 transform scale-90 group-hover:scale-100">
                    <Maximize2 className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-4 bg-gradient-to-b from-transparent to-black/20">
                <h4 className="text-white font-bold mb-1 font-serif">{img.title}</h4>
                <p className="text-gray-400 text-xs">{img.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-[#020617]/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 animate-in fade-in cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl w-full h-full flex items-center justify-center">
            <img 
              src={selectedImage} 
              alt="Expanded view" 
              className="max-w-full max-h-full rounded-lg shadow-2xl border border-white/10"
            />
            <div className="absolute bottom-4 right-4 bg-black/50 text-white text-xs px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
              Click anywhere to close
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
