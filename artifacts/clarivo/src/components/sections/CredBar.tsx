export function CredBar() {
  return (
    <div className="w-full bg-navy-deep py-6 border-b border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-gold font-serif font-bold text-sm tracking-widest uppercase flex-shrink-0 animate-in fade-right">
          TRUSTED ADVISOR:
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm text-gray-300 font-medium animate-in">
          <span>AI Automation</span>
          <span className="w-1 h-1 rounded-full bg-gold/50" />
          <span>Trade Intelligence</span>
          <span className="w-1 h-1 rounded-full bg-gold/50" />
          <span>Financial Markets</span>
          <span className="w-1 h-1 rounded-full bg-gold/50" />
          <span>Fintech</span>
          <span className="w-1 h-1 rounded-full bg-gold/50" />
          <span>CRM Intelligence</span>
          <span className="w-1 h-1 rounded-full bg-gold/50" />
          <span>Speaking</span>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0 animate-in fade-left">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium text-white">Accepting New Engagements</span>
        </div>
      </div>
    </div>
  );
}
