import { useEffect, useRef } from "react";
import { X, Calendar } from "lucide-react";
import { trackBookingClick } from "../lib/analytics";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
}

const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL as string | undefined;

export function BookingModal({ isOpen, onClose, source = "modal" }: BookingModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      trackBookingClick(source);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen, source]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(4,14,30,0.92)", backdropFilter: "blur(8px)" }}
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
    >
      <div className="relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-navy-mid flex flex-col" style={{ maxHeight: "90vh" }}>
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-gold" />
            </div>
            <div>
              <h3 className="font-serif text-white text-lg">Book a Free Strategy Call</h3>
              <p className="text-gray-400 text-xs">30 minutes · No pitch · Just clarity</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 overflow-hidden">
          {CALENDLY_URL ? (
            <iframe
              src={CALENDLY_URL}
              className="w-full h-full"
              style={{ minHeight: "580px", border: 0 }}
              title="Book a strategy call with Shiv Kumar"
              allow="camera; microphone; fullscreen"
            />
          ) : (
            <div className="flex flex-col items-center justify-center py-16 px-8 text-center">
              <Calendar className="w-16 h-16 text-gold/40 mb-6" />
              <h4 className="font-serif text-2xl text-white mb-3">Booking Coming Soon</h4>
              <p className="text-gray-400 mb-8 max-w-sm">
                Our online booking system is being set up. In the meantime, reach Shiv directly:
              </p>
              <div className="flex flex-col gap-4 w-full max-w-xs">
                <a
                  href="https://wa.me/917600048237?text=Hi%20Shiv%2C%20I%27d%20like%20to%20book%20a%20strategy%20call."
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#20bd5a] transition-colors"
                >
                  Chat on WhatsApp
                </a>
                <a
                  href="mailto:shiv@clarivoadvisory.com?subject=Strategy%20Call%20Request"
                  className="flex items-center justify-center gap-2 border border-gold/30 text-gold font-bold py-3 px-6 rounded-lg hover:bg-gold/10 transition-colors"
                >
                  Send an Email
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
