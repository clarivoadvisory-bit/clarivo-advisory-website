import { Network } from "lucide-react";

export function CortexInstitutionalBanner() {
  return (
    <div className="w-full bg-[#030a15] border-b border-white/5 py-3 overflow-hidden mt-16 relative z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-center items-center">
        <div className="flex items-center gap-4 text-xs font-mono tracking-[0.2em] text-gray-500 uppercase flex-wrap justify-center">
          <Network className="w-4 h-4 text-gold" />
          <span>Cortex Markets</span>
          <span className="text-white/20">•</span>
          <span>B2B Trading Technology</span>
          <span className="text-white/20">•</span>
          <span className="text-gold/80">AI Intelligence</span>
          <span className="text-white/20">•</span>
          <span>White-Label</span>
          <span className="text-white/20">•</span>
          <span>Institutional</span>
        </div>
      </div>
    </div>
  );
}
