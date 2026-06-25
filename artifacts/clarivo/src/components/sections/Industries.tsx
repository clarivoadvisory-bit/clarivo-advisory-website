import { Factory, Ship, CandlestickChart, Landmark, Pill, Briefcase, TrainTrack, Cpu, Users } from "lucide-react";

export function Industries() {
  const industries = [
    {
      icon: <Factory className="w-6 h-6 text-gold" />,
      title: "Manufacturing",
      desc: "AI automation, process intelligence and export growth systems for Indian manufacturers scaling globally."
    },
    {
      icon: <Ship className="w-6 h-6 text-gold" />,
      title: "Export & Int. Trade",
      desc: "Trade intelligence, buyer discovery and cross-border market entry systems for businesses expanding into GCC, Africa, ASEAN and Europe."
    },
    {
      icon: <CandlestickChart className="w-6 h-6 text-gold" />,
      title: "Financial Markets",
      desc: "Trading automation, market intelligence platforms and decision support systems for retail and institutional market participants."
    },
    {
      icon: <Landmark className="w-6 h-6 text-gold" />,
      title: "Fintech",
      desc: "Product strategy, algorithmic systems, compliance architecture and fintech market entry for financial technology businesses."
    },
    {
      icon: <Pill className="w-6 h-6 text-gold" />,
      title: "Pharmaceuticals",
      desc: "Regulatory intelligence, market entry strategy and export development for Indian pharmaceutical manufacturers targeting international markets."
    },
    {
      icon: <Briefcase className="w-6 h-6 text-gold" />,
      title: "SMEs & Family Biz",
      desc: "Enterprise-grade AI and intelligence systems scaled for the realities of growing Indian businesses competing globally."
    },
    {
      icon: <TrainTrack className="w-6 h-6 text-gold" />,
      title: "Rail Infrastructure",
      desc: "B2B intelligence, buyer discovery and export market development for rail infrastructure and engineering product manufacturers."
    },
    {
      icon: <Cpu className="w-6 h-6 text-gold" />,
      title: "Technology Cos.",
      desc: "AI implementation, product data architecture and go-to-market intelligence for technology businesses scaling in emerging markets."
    },
    {
      icon: <Users className="w-6 h-6 text-gold" />,
      title: "Professional Services",
      desc: "CRM intelligence, business development automation and client acquisition systems for consulting, legal and advisory firms."
    }
  ];

  return (
    <section id="industries" className="py-24 bg-[#040E1E]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-in fade-up">
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-4">Built for the Businesses That Move the Economy</h2>
          <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">
            From Ahmedabad factories to Dubai trading desks to Nairobi fintech firms — Clarivo Advisory serves clients where business actually happens.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <div 
              key={i} 
              className="bg-navy-mid/50 border border-white/5 p-8 rounded-xl hover:border-gold hover-lift transition-all animate-in fade-up group"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-navy flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {ind.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-3">{ind.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
