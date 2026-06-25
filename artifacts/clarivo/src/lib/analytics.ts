declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    clarity?: (command: string, ...args: unknown[]) => void;
  }
}

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
): void {
  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, params ?? {});
    }
    if (typeof window.clarity === "function") {
      window.clarity("event", eventName);
    }
  } catch {
    // silent fail — analytics should never break the app
  }
}

export function trackWhatsAppClick(source: string): void {
  trackEvent("whatsapp_click", { source_cta: source });
}

export function trackFormSubmit(status: "success" | "error"): void {
  trackEvent("contact_form_submit", { status });
}

export function trackBookingClick(source: string): void {
  trackEvent("book_call_click", { source_cta: source });
}

export function trackResourceDownload(resourceName: string): void {
  trackEvent("resource_download", { resource_name: resourceName });
}

export function injectGA4(measurementId: string): void {
  if (!measurementId || document.querySelector(`script[data-ga4]`)) return;
  const s1 = document.createElement("script");
  s1.async = true;
  s1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  s1.setAttribute("data-ga4", "1");
  document.head.appendChild(s1);

  const s2 = document.createElement("script");
  s2.setAttribute("data-ga4", "2");
  s2.text = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${measurementId}',{page_path:window.location.pathname});`;
  document.head.appendChild(s2);
}

export function injectClarity(projectId: string): void {
  if (!projectId || document.querySelector(`script[data-clarity]`)) return;
  const s = document.createElement("script");
  s.setAttribute("data-clarity", "1");
  s.text = `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${projectId}");`;
  document.head.appendChild(s);
}
