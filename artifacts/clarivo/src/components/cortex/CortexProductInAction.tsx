export function CortexProductInAction() {
  return (
    <section className="py-24 bg-[#040E1E] relative border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(37,99,235,0.05),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">Product In Action</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience the depth of Cortex Pro. A terminal built for precision, intelligence, and execution.
          </p>
        </div>

        {/* Central Dashboard Display */}
        <div className="relative mx-auto max-w-5xl rounded-xl border border-white/10 bg-[#020617] shadow-2xl overflow-hidden group">
          {/* Top Bar Mockup */}
          <div className="h-12 bg-white/5 border-b border-white/5 flex items-center px-4 gap-4">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-rose-500/50" />
              <div className="w-3 h-3 rounded-full bg-amber-500/50" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
            </div>
            <div className="text-xs font-mono text-gray-500 tracking-wider">CORTEX PRO TERMINAL</div>
          </div>
          
          {/* Actual Cortex Pro screenshot provided by user */}
          <div className="relative flex flex-col items-center justify-center border-t border-white/5">
            <img 
              src="/Cortex platform layout.png" 
              alt="Cortex Markets Platform Interface" 
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
          <div className="border border-white/5 bg-white/5 p-6 rounded-xl backdrop-blur-sm">
            <h4 className="text-white font-bold mb-2">Market State & Screener</h4>
            <p className="text-gray-400 text-sm">Advanced filtering and real-time state analysis across instruments.</p>
          </div>
          <div className="border border-white/5 bg-white/5 p-6 rounded-xl backdrop-blur-sm">
            <h4 className="text-white font-bold mb-2">Footprint & Tape</h4>
            <p className="text-gray-400 text-sm">Granular order flow visualization, River, and Absorb metrics for institutional execution.</p>
          </div>
          <div className="border border-white/5 bg-white/5 p-6 rounded-xl backdrop-blur-sm">
            <h4 className="text-white font-bold mb-2">Cortex Intelligence OS</h4>
            <p className="text-gray-400 text-sm">Embedded AI modules including Twin, Mirror, and intelligent Trade Journaling.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
