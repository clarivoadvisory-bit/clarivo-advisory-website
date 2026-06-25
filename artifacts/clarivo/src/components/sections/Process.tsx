import { useEffect, useRef, useState } from "react";

export function Process() {
  const steps = [
    {
      title: "Discover",
      desc: "We begin with a deep audit of your systems, workflows, data and goals. No assumptions, no templates."
    },
    {
      title: "Analyze",
      desc: "Intelligence synthesis: identifying highest-leverage automation, market and technology opportunities specific to your business."
    },
    {
      title: "Strategize",
      desc: "A precise engagement plan: what gets built, in what sequence, with what outcomes expected at each stage."
    },
    {
      title: "Automate",
      desc: "Hands-on system development and deployment. Shiv builds alongside your team — not beside it."
    },
    {
      title: "Scale",
      desc: "Post-launch optimisation, monitoring and iterative improvement. We stay until the system performs."
    }
  ];

  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (rect.height + window.innerHeight * 0.5)));
      const currentStep = Math.min(Math.floor(scrollProgress * steps.length), steps.length - 1);
      setActiveStep(currentStep);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [steps.length]);

  return (
    <section className="py-24 bg-white" ref={sectionRef}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 animate-in fade-up">
          <h2 className="font-serif text-4xl md:text-5xl text-navy-deep mb-4">How We Work Together</h2>
          <p className="text-xl text-gray-600 font-light">A proven engagement model from first contact to live systems.</p>
        </div>

        <div className="relative pl-8 md:pl-0">
          {/* Connector Line */}
          <div className="absolute top-0 bottom-0 left-[31px] md:left-1/2 w-1 bg-gray-100 md:-translate-x-1/2 rounded-full overflow-hidden">
             <div 
               className="w-full bg-gold transition-all duration-500 ease-out" 
               style={{ height: `${(activeStep / (steps.length - 1)) * 100}%` }}
             />
          </div>

          <div className="space-y-12">
            {steps.map((step, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 transition-all duration-500 ${activeStep >= i ? 'opacity-100' : 'opacity-40'}`}>
                {/* Number Badge */}
                <div className="absolute -left-12 md:left-1/2 md:-translate-x-1/2 w-16 h-16 rounded-full bg-white border-4 border-gray-100 flex items-center justify-center shadow-sm z-10">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold font-serif transition-colors duration-500 ${activeStep >= i ? 'bg-gold text-navy-deep' : 'bg-gray-100 text-gray-400'}`}>
                    {i + 1}
                  </div>
                </div>

                {/* Content Left (Even) or Right (Odd) */}
                <div className={`w-full md:w-1/2 ${i % 2 === 0 ? 'md:pr-20 md:text-right' : 'md:pl-20 md:ml-auto md:text-left'}`}>
                  <h3 className={`font-serif text-2xl font-bold mb-3 transition-colors ${activeStep >= i ? 'text-navy-deep' : 'text-gray-400'}`}>
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
