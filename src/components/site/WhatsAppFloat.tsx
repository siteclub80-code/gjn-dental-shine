import { whatsappLink } from "@/lib/clinic";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Agendar avaliação pelo WhatsApp"
      className="fixed right-4 bottom-4 z-50 flex items-center gap-3 rounded-full bg-whatsapp px-5 py-3.5 text-sm font-medium text-ink shadow-[0_18px_40px_-18px_oklch(0.68_0.16_148/0.8)] transition-transform hover:scale-[1.03] md:right-7 md:bottom-7"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 shrink-0">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm5.8 14.06c-.24.68-1.4 1.3-1.93 1.35-.53.05-1.02.07-1.75-.11-.42-.1-.97-.28-1.67-.58-2.94-1.27-4.86-4.23-5.01-4.43-.15-.2-1.19-1.58-1.19-3.02 0-1.43.75-2.14 1.02-2.43.27-.29.58-.36.78-.36l.56.01c.18.01.42-.07.66.5.24.58.82 2 .89 2.14.07.15.12.32.02.51-.1.2-.15.32-.3.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.61.17.29.75 1.24 1.61 2.01 1.11.99 2.04 1.3 2.33 1.45.29.15.46.12.63-.07.17-.2.73-.85.92-1.14.2-.29.39-.24.66-.15.27.1 1.69.8 1.98.94.29.15.49.22.56.34.07.13.07.73-.17 1.41Z" />
      </svg>
      Agendar avaliação
    </a>
  );
}
