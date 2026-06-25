import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote: "Shiv's ability to take complex financial market concepts and translate them into working automated systems is exceptional. The NIFTY options system he built for us handles regime detection, position sizing and risk management in ways I didn't think possible at this price point.",
      author: "Indian Options Trader, Ahmedabad",
      role: "Financial Markets"
    },
    {
      quote: "What sets Clarivo apart is that Shiv actually builds the systems. We've worked with consultants who produce frameworks and leave. Shiv delivered a live MT5 system across four pairs within the engagement timeline. That's rare.",
      author: "Institutional Trading Client, UK",
      role: "Financial Markets Automation"
    },
    {
      quote: "The trade intelligence work Clarivo delivered transformed our approach to international markets. We went from reactive to proactive in 90 days — with a qualified database of 160 buyers and a CRM that actually works.",
      author: "Manufacturer, Gujarat, India",
      role: "Trade Intelligence"
    },
    {
      quote: "Shiv brought genuine regulatory depth to our fintech expansion. He understood the compliance landscape across UAE, Kenya and Nigeria — not just theoretically, but from having operated there. Invaluable for our market entry.",
      author: "Fintech Founder, India",
      role: "Fintech Advisory"
    }
  ];

  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isHovered, testimonials.length]);

  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);

  return (
    <section className="py-24 bg-navy-mid relative overflow-hidden">
      <div className="absolute top-[10%] left-[10%] w-[30vw] h-[30vw] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-in fade-up">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">What Clients Say</h2>
          <div className="flex justify-center gap-1">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 fill-gold text-gold" />)}
          </div>
        </div>

        <div 
          className="relative glassmorphism rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl animate-in fade-up"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="overflow-hidden relative min-h-[250px] md:min-h-[200px]">
            {testimonials.map((t, i) => (
              <div 
                key={i} 
                className={`absolute inset-0 transition-all duration-700 ease-in-out flex flex-col justify-center ${
                  i === current ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12 pointer-events-none'
                }`}
              >
                <blockquote className="font-serif text-xl md:text-3xl text-white leading-relaxed mb-8 italic">
                  "{t.quote}"
                </blockquote>
                <div>
                  <div className="text-gold font-bold text-lg">{t.author}</div>
                  <div className="text-sm text-gray-400 uppercase tracking-widest mt-1">{t.role}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mt-12 pt-8 border-t border-white/10">
            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <button 
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-gold w-8' : 'bg-white/20 hover:bg-white/40'}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            
            <div className="flex gap-4">
              <button 
                onClick={prev}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:text-gold transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={next}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:text-gold transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
