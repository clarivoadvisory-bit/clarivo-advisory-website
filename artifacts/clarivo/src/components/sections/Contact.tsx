import { useState, useRef } from "react";
import { CheckCircle2, Mail, Phone, ExternalLink, Loader2, AlertCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { trackFormSubmit, trackWhatsAppClick } from "../../lib/analytics";

type FormStatus = "idle" | "loading" | "success" | "error";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

function validateEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
}

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);
  const submittingRef = useRef(false);

  const clearFieldError = (field: string) =>
    setFieldErrors((prev) => { const next = { ...prev }; delete next[field]; return next; });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submittingRef.current || status === "loading") return;

    const formData = new FormData(e.currentTarget);
    const name = (formData.get("name") as string).trim();
    const email = (formData.get("email") as string).trim();
    const phone = (formData.get("phone") as string).trim();
    const message = (formData.get("message") as string).trim();

    const errs: Record<string, string> = {};
    if (!name || name.length < 2) errs.name = "Please enter your full name.";
    if (name.length > 100) errs.name = "Name is too long.";
    if (!email || !validateEmail(email)) errs.email = "Please enter a valid email address.";
    if (!phone) errs.phone = "Please enter your phone number.";
    if (!message || message.length < 10) errs.message = "Message must be at least 10 characters.";

    if (Object.keys(errs).length > 0) {
      setFieldErrors(errs);
      return;
    }
    setFieldErrors({});

    submittingRef.current = true;
    setStatus("loading");
    setErrorMsg("");

    const payload = {
      name,
      company: (formData.get("company") as string).trim(),
      email,
      phone,
      projectType: formData.get("projectType") as string,
      budget: formData.get("budget") as string,
      message,
      _honeypot: formData.get("_honeypot") as string,
      sourcePage: "contact",
    };

    setSubmittedName(name);

    try {
      const res = await fetch(`${BASE}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data: unknown = await res.json();
      if (!res.ok) {
        const msg = (data as { error?: string }).error ?? "Submission failed. Please try again.";
        throw new Error(msg);
      }

      setStatus("success");
      trackFormSubmit("success");
      formRef.current?.reset();
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong.";
      setErrorMsg(message);
      setStatus("error");
      trackFormSubmit("error");
    } finally {
      submittingRef.current = false;
    }
  };

  const handleWhatsApp = (source: string) => {
    trackWhatsAppClick(source);
  };

  return (
    <section id="contact" className="py-24 bg-navy-mid relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-gold/5 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16">

        {/* Left Col */}
        <div className="animate-in fade-right">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">Start a Conversation</h2>
          <p className="text-xl text-gray-400 font-light mb-12">
            Book a complimentary 30-minute strategy session. No pitch, no pressure — just clarity on what's possible for your business.
          </p>

          <div className="space-y-6 mb-12">
            <a href="mailto:shiv@clarivoadvisory.com" className="flex items-center gap-4 text-white hover:text-gold transition-colors text-lg">
              <div className="w-12 h-12 rounded-full bg-navy-deep border border-white/10 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              shiv@clarivoadvisory.com
            </a>
            <a href="tel:+917600048237" className="flex items-center gap-4 text-white hover:text-gold transition-colors text-lg">
              <div className="w-12 h-12 rounded-full bg-navy-deep border border-white/10 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              +91-7600048237
            </a>
            <a href="https://linkedin.com/in/shiv-kkumar" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-white hover:text-blue-accent transition-colors text-lg">
              <div className="w-12 h-12 rounded-full bg-navy-deep border border-white/10 flex items-center justify-center">
                <ExternalLink className="w-5 h-5" />
              </div>
              linkedin.com/in/shiv-kkumar
            </a>
          </div>

          <a
            href="https://wa.me/917600048237?text=Hi%20Shiv%2C%20I%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noreferrer"
            onClick={() => handleWhatsApp("contact_section")}
            className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded font-bold text-lg hover:bg-[#20bd5a] transition-colors mb-12 shadow-[0_0_20px_rgba(37,211,102,0.3)]"
          >
            <FaWhatsapp size={24} /> Chat on WhatsApp
          </a>

          <div className="space-y-4">
            <div className="glassmorphism p-6 rounded-xl border border-white/10 flex items-center gap-4">
              <span className="text-2xl">⚡</span>
              <div>
                <h4 className="font-bold text-white mb-1">Response Within 24 Hours</h4>
                <p className="text-sm text-gray-400">All enquiries responded to within one business day.</p>
              </div>
            </div>
            <div className="glassmorphism p-6 rounded-xl border border-white/10 border-l-4 border-l-blue-500 flex items-center gap-4">
              <span className="text-2xl">🌐</span>
              <div>
                <h4 className="font-bold text-white mb-1">Global Reach</h4>
                <p className="text-sm text-gray-400">Serving clients across India, GCC, ASEAN, Africa and Europe.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Col / Form */}
        <div className="animate-in fade-left">
          <div className="glassmorphism rounded-2xl p-8 md:p-10 border border-white/10 shadow-2xl relative overflow-hidden min-h-[600px] flex items-center">

            {status === "success" ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-navy-deep z-20 p-8 text-center" style={{animation: "fadeUp 0.4s ease-out both"}}>
                <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="font-serif text-3xl text-white mb-3">Thank you, {submittedName}!</h3>
                <p className="text-gray-300 mb-2">Your enquiry has been received and stored.</p>
                <p className="text-gray-400 text-sm mb-8">
                  Shiv will personally respond within 24 hours. A confirmation has been sent to your email.
                </p>
                <a
                  href="https://wa.me/917600048237?text=Hi%20Shiv%2C%20I%20just%20submitted%20an%20enquiry%20on%20your%20website."
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => handleWhatsApp("post_form_success")}
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded font-bold hover:bg-[#20bd5a] transition-colors mb-4"
                >
                  <FaWhatsapp size={20} /> Also message on WhatsApp
                </a>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 w-full relative z-10" noValidate>
                {/* Honeypot — hidden from real users */}
                <input
                  type="text"
                  name="_honeypot"
                  tabIndex={-1}
                  autoComplete="off"
                  style={{ position: "absolute", left: "-9999px", opacity: 0 }}
                  aria-hidden="true"
                />

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold tracking-widest text-gray-400 uppercase mb-2">Full Name *</label>
                    <input
                      name="name"
                      type="text"
                      maxLength={100}
                      disabled={status === "loading"}
                      onChange={() => clearFieldError("name")}
                      className={`w-full bg-navy-deep border rounded px-4 py-3 text-white focus:outline-none transition-colors disabled:opacity-50 ${fieldErrors.name ? "border-red-500 focus:border-red-400" : "border-white/10 focus:border-gold"}`}
                    />
                    {fieldErrors.name && <p className="text-red-400 text-xs mt-1">{fieldErrors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-bold tracking-widest text-gray-400 uppercase mb-2">Company / Organisation</label>
                    <input
                      name="company"
                      type="text"
                      disabled={status === "loading"}
                      className="w-full bg-navy-deep border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors disabled:opacity-50"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold tracking-widest text-gray-400 uppercase mb-2">Email *</label>
                    <input
                      name="email"
                      type="text"
                      inputMode="email"
                      autoComplete="email"
                      disabled={status === "loading"}
                      onChange={() => clearFieldError("email")}
                      className={`w-full bg-navy-deep border rounded px-4 py-3 text-white focus:outline-none transition-colors disabled:opacity-50 ${fieldErrors.email ? "border-red-500 focus:border-red-400" : "border-white/10 focus:border-gold"}`}
                    />
                    {fieldErrors.email && <p className="text-red-400 text-xs mt-1">{fieldErrors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-bold tracking-widest text-gray-400 uppercase mb-2">Phone / WhatsApp *</label>
                    <input
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+91 / +971 / +44 ..."
                      disabled={status === "loading"}
                      onChange={() => clearFieldError("phone")}
                      className={`w-full bg-navy-deep border rounded px-4 py-3 text-white focus:outline-none transition-colors disabled:opacity-50 placeholder:text-white/20 ${fieldErrors.phone ? "border-red-500 focus:border-red-400" : "border-white/10 focus:border-gold"}`}
                    />
                    {fieldErrors.phone && <p className="text-red-400 text-xs mt-1">{fieldErrors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-widest text-gray-400 uppercase mb-2">Project Type</label>
                  <select
                    name="projectType"
                    disabled={status === "loading"}
                    className="w-full bg-navy-deep border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors appearance-none cursor-pointer disabled:opacity-50"
                  >
                    <option>AI Automation</option>
                    <option>Trade Intelligence</option>
                    <option>FinTech Consulting</option>
                    <option>Market Research / Financial Markets</option>
                    <option>Business Strategy</option>
                    <option>Speaking / Training</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-widest text-gray-400 uppercase mb-2">Budget Range</label>
                  <select
                    name="budget"
                    disabled={status === "loading"}
                    className="w-full bg-navy-deep border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors appearance-none cursor-pointer disabled:opacity-50"
                  >
                    <option>Under ₹2L</option>
                    <option>₹2L–₹5L</option>
                    <option>₹5L–₹15L</option>
                    <option>₹15L+</option>
                    <option>Prefer to discuss</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-widest text-gray-400 uppercase mb-2">Message / Project Brief *</label>
                  <textarea
                    name="message"
                    rows={4}
                    disabled={status === "loading"}
                    onChange={() => clearFieldError("message")}
                    className={`w-full bg-navy-deep border rounded px-4 py-3 text-white focus:outline-none transition-colors resize-none disabled:opacity-50 ${fieldErrors.message ? "border-red-500 focus:border-red-400" : "border-white/10 focus:border-gold"}`}
                  />
                  {fieldErrors.message && <p className="text-red-400 text-xs mt-1">{fieldErrors.message}</p>}
                </div>

                {status === "error" && (
                  <div className="flex items-start gap-3 bg-red-900/20 border border-red-500/30 rounded-lg px-4 py-3">
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <p className="text-red-300 text-sm">{errorMsg || "Submission failed. Please try again."}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full font-bold py-4 rounded text-lg transition-all gold-glow flex items-center justify-center gap-3 disabled:cursor-not-allowed"
                  style={{
                    background: status === "error" ? "#ef4444" : "#F4B400",
                    color: "#040E1E",
                    opacity: status === "loading" ? 0.8 : 1,
                  }}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : status === "error" ? (
                    <>
                      <AlertCircle className="w-5 h-5" />
                      Try Again
                    </>
                  ) : (
                    "Send Enquiry"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
