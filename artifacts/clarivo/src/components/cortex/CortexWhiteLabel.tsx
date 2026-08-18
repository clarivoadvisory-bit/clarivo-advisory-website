import { Palette, Share2, Shield, Settings } from "lucide-react";

export function CortexWhiteLabel() {
  const features = [
    {
      icon: <Palette className="w-5 h-5 text-gold" />,
      title: "Full Brand Control",
      desc: "Customize the interface, colors, logos, and communication touchpoints to reflect your institutional brand."
    },
    {
      icon: <Share2 className="w-5 h-5 text-gold" />,
      title: "Modular SaaS Architecture",
      desc: "License the full Cortex ecosystem or integrate specific AI and analytics modules into your existing framework."
    },
    {
      icon: <Settings className="w-5 h-5 text-gold" />,
      title: "Admin & Operations",
      desc: "Comprehensive back-office tools to manage clients, risk parameters, and platform configurations."
    },
    {
      icon: <Shield className="w-5 h-5 text-gold" />,
      title: "Institutional Reliability",
      desc: "Built on high-availability infrastructure designed to handle significant transaction volume and strict latency requirements."
    }
  ];

  return (
    <section className="py-24 bg-[#040E1E] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-gold/5 rounded-3xl transform rotate-3" />
            <div className="absolute inset-0 bg-blue-accent/5 rounded-3xl transform -rotate-3" />
            
            <div className="relative glassmorphism rounded-3xl p-8 border border-white/10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((f, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="mb-4 bg-gold/10 w-10 h-10 rounded-lg flex items-center justify-center border border-gold/20">
                      {f.icon}
                    </div>
                    <h4 className="text-white font-bold mb-2">{f.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">
              The White-Label Technology Model
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Cortex Markets is designed as a pure B2B technology provider. We empower financial institutions to deploy state-of-the-art trading systems under their own identity.
            </p>
            <p className="text-gray-400 mb-8">
              Whether you require a complete turnkey platform replacement or are seeking to license specific AI intelligence modules to augment your current MT5/cTrader setup, our SaaS model provides the flexibility to scale your technology footprint strategically.
            </p>

            <ul className="space-y-3 text-gray-300 font-medium">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                No retail brokerage conflict of interest
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                Rapid deployment timelines
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                Dedicated technical integration support
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                Custom API and FIX connectivity
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
}
