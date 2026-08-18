import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Send, Loader2, AlertCircle, CheckCircle2 } from "lucide-react";

type CortexLeadFormData = {
  first_name: string;
  last_name: string;
  business_email: string;
  company: string;
  job_title: string;
  country: string;
  company_type: string;
  current_situation?: string;
  current_infrastructure?: string;
  areas_of_interest?: string;
  implementation_timeline?: string;
  message?: string;
  linkedin_url?: string;
  how_did_you_hear_about_us?: string;
  consent: boolean;
  _honeypot: string; // Anti-spam
};

export function CortexLeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [utmParams, setUtmParams] = useState<Record<string, string>>({});

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CortexLeadFormData>();

  useEffect(() => {
    // Capture UTM parameters
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      setUtmParams({
        utm_source: urlParams.get("utm_source") || "",
        utm_medium: urlParams.get("utm_medium") || "",
        utm_campaign: urlParams.get("utm_campaign") || "",
        utm_content: urlParams.get("utm_content") || "",
      });
    }
  }, []);

  const onSubmit = async (data: CortexLeadFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Map to the backend expected payload structure
      const payload = {
        name: `${data.first_name} ${data.last_name}`,
        email: data.business_email,
        company: data.company,
        jobTitle: data.job_title,
        country: data.country,
        companyType: data.company_type,
        currentSituation: data.current_situation,
        currentInfrastructure: data.current_infrastructure,
        areasOfInterest: data.areas_of_interest,
        implementationTimeline: data.implementation_timeline,
        linkedinUrl: data.linkedin_url,
        howDidYouHearAboutUs: data.how_did_you_hear_about_us,
        message: data.message || "Cortex Markets B2B Enquiry", // Providing default since backend might require message
        sourcePage: "cortex-markets",
        landingPage: window.location.href,
        ...utmParams,
        _honeypot: data._honeypot,
      };

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit request.");
      }

      setSubmitStatus("success");
      reset();
    } catch (err: any) {
      console.error("Submission error:", err);
      setSubmitStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === "success") {
    return (
      <section id="cortex-lead-form" className="py-24 bg-[#040E1E] relative">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/20">
            <CheckCircle2 className="w-10 h-10 text-emerald-400" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">Request Received</h2>
          <p className="text-gray-300 text-lg">
            Thank you for your interest in Cortex Markets. Shiv Kumar from Clarivo Advisory will review your requirements and contact you shortly to schedule a private demonstration.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="cortex-lead-form" className="py-24 bg-[#020617] relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">
            Request a Private Demonstration
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Provide details about your current infrastructure and requirements to help us tailor the demonstration to your specific business model.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 glassmorphism p-8 md:p-12 rounded-3xl border border-white/10">
          {submitStatus === "error" && (
            <div className="bg-rose-500/10 border border-rose-500/20 text-rose-400 p-4 rounded-xl flex items-center gap-3">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <p className="text-sm">{errorMessage}</p>
            </div>
          )}

          {/* Honeypot field - hidden from users */}
          <input type="text" {...register("_honeypot")} className="hidden" tabIndex={-1} autoComplete="off" />

          {/* Section 1: Core Contact */}
          <div>
            <h3 className="text-white font-serif text-xl mb-4 border-b border-white/10 pb-2">Contact Details</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">First Name *</label>
                <input
                  type="text"
                  {...register("first_name", { required: "First name is required" })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                />
                {errors.first_name && <span className="text-rose-400 text-xs mt-1 block">{errors.first_name.message}</span>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Last Name *</label>
                <input
                  type="text"
                  {...register("last_name", { required: "Last name is required" })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                />
                {errors.last_name && <span className="text-rose-400 text-xs mt-1 block">{errors.last_name.message}</span>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Business Email *</label>
                <input
                  type="email"
                  {...register("business_email", { 
                    required: "Business email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                />
                {errors.business_email && <span className="text-rose-400 text-xs mt-1 block">{errors.business_email.message}</span>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">LinkedIn URL</label>
                <input
                  type="url"
                  {...register("linkedin_url")}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                  placeholder="https://linkedin.com/in/..."
                />
              </div>
            </div>
          </div>

          {/* Section 2: Business Profile */}
          <div>
            <h3 className="text-white font-serif text-xl mb-4 border-b border-white/10 pb-2">Business Profile</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Company Name *</label>
                <input
                  type="text"
                  {...register("company", { required: "Company name is required" })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                />
                {errors.company && <span className="text-rose-400 text-xs mt-1 block">{errors.company.message}</span>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Job Title *</label>
                <input
                  type="text"
                  {...register("job_title", { required: "Job title is required" })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                />
                {errors.job_title && <span className="text-rose-400 text-xs mt-1 block">{errors.job_title.message}</span>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Country *</label>
                <input
                  type="text"
                  {...register("country", { required: "Country is required" })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                />
                {errors.country && <span className="text-rose-400 text-xs mt-1 block">{errors.country.message}</span>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Company Type *</label>
                <select
                  {...register("company_type", { required: "Please select a company type" })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors [&>option]:bg-[#040E1E]"
                >
                  <option value="">Select an option...</option>
                  <option value="Broker">Retail Broker (FX/CFD)</option>
                  <option value="Prop Firm">Proprietary Trading Firm</option>
                  <option value="Fund Manager">Fund Manager / Asset Management</option>
                  <option value="Institutional">Institutional Broker / Dealing Desk</option>
                  <option value="White Label">White Label / Distributor</option>
                  <option value="Fintech">FinTech / Payment Provider</option>
                  <option value="Other">Other</option>
                </select>
                {errors.company_type && <span className="text-rose-400 text-xs mt-1 block">{errors.company_type.message}</span>}
              </div>
            </div>
          </div>

          {/* Section 3: Technical Context */}
          <div>
            <h3 className="text-white font-serif text-xl mb-4 border-b border-white/10 pb-2">Technical Context</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Current Infrastructure</label>
                <select
                  {...register("current_infrastructure")}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors [&>option]:bg-[#040E1E]"
                >
                  <option value="">Select an option...</option>
                  <option value="MT4/MT5">MT4 / MT5</option>
                  <option value="cTrader">cTrader</option>
                  <option value="Custom/Proprietary">Custom / Proprietary</option>
                  <option value="None/Starting">None (Starting New)</option>
                  <option value="Multiple">Multiple Platforms</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Implementation Timeline</label>
                <select
                  {...register("implementation_timeline")}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors [&>option]:bg-[#040E1E]"
                >
                  <option value="">Select an option...</option>
                  <option value="Immediate">Immediate (0-1 Months)</option>
                  <option value="Short Term">Short Term (1-3 Months)</option>
                  <option value="Medium Term">Medium Term (3-6 Months)</option>
                  <option value="Exploring">Exploring / Educational</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-400 mb-2">Areas of Interest (Select all that apply)</label>
                <input
                  type="text"
                  {...register("areas_of_interest")}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                  placeholder="e.g. AI tools, Pro Terminal, Mobile App, White-label"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-400 mb-2">Additional Message / Current Situation</label>
                <textarea
                  {...register("message")}
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none"
                  placeholder="Please describe your specific requirements or current challenges..."
                ></textarea>
              </div>
            </div>
          </div>

          {/* Consent */}
          <div className="bg-white/5 p-4 rounded-xl border border-white/10">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                {...register("consent", { required: "You must accept the privacy policy to proceed" })}
                className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 text-gold focus:ring-gold focus:ring-offset-[#040E1E]"
              />
              <span className="text-sm text-gray-400">
                I consent to Clarivo Advisory processing my data to contact me regarding Cortex Markets. I understand this information will be used exclusively for B2B engagement and in accordance with the Privacy Policy. *
              </span>
            </label>
            {errors.consent && <span className="text-rose-400 text-xs mt-2 block">{errors.consent.message}</span>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gold text-navy-deep px-8 py-4 rounded-xl font-bold text-lg hover:bg-gold-dark transition-all gold-glow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-6 h-6 animate-spin" />
                Processing Request...
              </>
            ) : (
              <>
                Submit Institutional Enquiry
                <Send className="w-5 h-5" />
              </>
            )}
          </button>

          <p className="text-center text-xs text-gray-500 font-mono">
            SECURE FORM • B2B ENQUIRIES ONLY • PROTECTED BY RECAPTCHA
          </p>
        </form>
      </div>
    </section>
  );
}
