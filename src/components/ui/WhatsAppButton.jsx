import { FaWhatsapp } from "react-icons/fa6";
import { contactInfo } from "../../data/content";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hello Prudence Property, I would like to inquire about your property management services."
  );
  const href = `https://wa.me/${contactInfo.whatsapp}?text=${message}`;

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-7 sm:right-6 z-[9999] group flex flex-col items-end gap-2 pointer-events-none">
      <span className="pointer-events-none hidden sm:block rounded-full bg-primary/90 text-white text-xs font-medium px-3 py-1.5 shadow-lg opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 mr-1">
        Chat with us
      </span>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Prudence Property on WhatsApp"
        className="whatsapp-float pointer-events-auto group relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40 hover:bg-[#20bd5a] hover:scale-110 active:scale-95 transition-transform duration-300"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        <span className="absolute inset-0 rounded-full ring-4 ring-[#25D366]/30" />
        <FaWhatsapp className="relative w-7 h-7 sm:w-8 sm:h-8" />
      </a>
    </div>
  );
}
