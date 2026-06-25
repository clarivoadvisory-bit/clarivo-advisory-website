import { BrainCircuit, Globe, LineChart, CreditCard, Filter, GraduationCap } from "lucide-react";

export function Services() {
  const services = [
    {
      id: "01",
      title: "AI Automation",
      icon: <BrainCircuit className="w-8 h-8 text-gold" />,
      featured: true,
      features: "AI Workflow Design & Implementation · Business Process Automation · Document Intelligence · WhatsApp Business API Automation · CRM Automation · Reporting & Analytics Automation · Python / n8n / OpenAI Integration · AI Agent Design & Deployment",
      outcome: "Built AI document automation pipeline for a cross-border project team, reducing manual review time by 60%.",
      time: "4–12 weeks to live deployment"
    },
    {
      id: "02",
      title: "Trade Intelligence",
      icon: <Globe className="w-8 h-8 text-gold" />,
      features: "International Buyer Discovery · HS Code & Tariff Analysis · Export Market Research · Trade CRM Implementation · GCC / Africa / ASEAN Market Entry · Competitor Intelligence · Export Pipeline Automation · Digital Trade Infrastructure",
      outcome: "Built 160-lead global buyer database across Automotive, Footwear and Furniture verticals for Gujarat manufacturer.",
      time: "6–12 weeks to first pipeline"
    },
    {
      id: "03",
      title: "Financial Markets Automation",
      icon: <LineChart className="w-8 h-8 text-gold" />,
      features: "NIFTY / BANK NIFTY / SENSEX Options · MT5/MQL5 Expert Advisors (XAUUSD/Forex) · Interactive Brokers API Automation · SPY / QQQ / US Markets · Risk Analytics & Position Sizing · Trade Journal & Decision Intelligence",
      outcome: "Deployed MT5 system across XAUUSD, EURUSD, GBPUSD with Markov regime classification for institutional client.",
      time: "4–8 weeks to live deployment"
    },
    {
      id: "04",
      title: "Fintech Advisory",
      icon: <CreditCard className="w-8 h-8 text-gold" />,
      features: "Fintech Product Strategy & Architecture · SEBI / RBI / FCA Compliance Frameworks · Payment & KYC Infrastructure · Blockchain & Digital Asset Advisory · Fintech Market Entry: India · UAE · SEA · Real Estate Tokenisation Platforms",
      outcome: "Led fintech expansion into UAE, Saudi Arabia, Egypt, Kenya, Nigeria, Bangladesh, Indonesia and Cambodia as VP-Algorithm at mBnk.",
      time: "8–16 weeks to market-ready"
    },
    {
      id: "05",
      title: "Growth & CRM Intelligence",
      icon: <Filter className="w-8 h-8 text-gold" />,
      features: "CRM Architecture & Implementation · Lead Scoring & Intent Systems · Sales Intelligence Platforms · Executive Dashboards & Analytics · Export Pipeline Automation · Performance Tracking Systems",
      outcome: "Built export CRM pipeline tracking 160 qualified international leads across 6 verticals with automated outreach sequences.",
      time: "4–8 weeks to first live pipeline"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-in fade-up">
          <h2 className="font-serif text-4xl md:text-5xl text-navy-deep mb-4">Five Advisory Practices</h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">Specialist capability across AI, Trade, Markets, Fintech and Growth.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {services.map((svc, i) => (
            <div 
              key={svc.id} 
              className={`bg-white rounded-xl p-8 hover-lift animate-in fade-up ${svc.featured ? 'border-2 border-gold shadow-lg' : 'border border-gray-200 shadow-sm'}`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-navy-deep rounded-lg">{svc.icon}</div>
                <span className="text-3xl font-serif text-gray-200 font-bold">{svc.id}</span>
              </div>
              <h3 className="font-serif text-2xl text-navy-deep font-bold mb-4">{svc.title}</h3>
              <div className="mb-6">
                <p className="text-sm text-gray-600 leading-relaxed font-medium">
                  {svc.features.split(' · ').map((feat, idx) => (
                    <span key={idx} className="inline-block mr-2 mb-2 px-2 py-1 bg-gray-50 text-gray-700 rounded border border-gray-100">{feat}</span>
                  ))}
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-100 mb-4">
                <p className="text-sm text-navy-deep italic font-serif">"{svc.outcome}"</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                <span className="text-gold">⏱</span> {svc.time}
              </div>
            </div>
          ))}
          
          <div className="bg-navy-deep rounded-xl p-8 hover-lift animate-in fade-up flex flex-col justify-between" style={{ animationDelay: '500ms' }}>
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-white/10 rounded-lg"><GraduationCap className="w-8 h-8 text-gold" /></div>
                <span className="text-3xl font-serif text-white/10 font-bold">06</span>
              </div>
              <h3 className="font-serif text-2xl text-white font-bold mb-4">Speaking & Corporate Training</h3>
              <div className="mb-6 text-sm text-gray-300 leading-relaxed font-medium space-y-2">
                <p>● AI in Business — Practical Applications</p>
                <p>● Financial Markets & Algorithmic Trading</p>
                <p>● International Trade & Export Strategy</p>
                <p>● Fintech & Blockchain for Corporates</p>
                <p>● MBA Guest Faculty (LJ · SVGU · BK School)</p>
                <p>● Financial Exhibition Speaker</p>
              </div>
            </div>
            <div>
               <p className="text-sm text-gold mb-6 font-medium">Keynotes · Half-day · Full-day workshops</p>
               <a href="#contact" className="inline-flex items-center text-white hover:text-gold font-bold transition-colors">
                 Book Shiv Kumar as speaker →
               </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
