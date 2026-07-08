import { ArrowRight, MessageCircle } from "lucide-react";

const whatsappText = encodeURIComponent(
  "Olá, Julaine! Quero agendar minha Sessão Diagnóstica e saber os próximos horários disponíveis."
);

const WHATSAPP_URL = `https://wa.me/5543999637029?text=${whatsappText}`;

type WhatsAppButtonProps = {
  label: string;
  variant?: "solid" | "light";
  className?: string;
};

export default function WhatsAppButton({
  label,
  variant = "solid",
  className = "",
}: WhatsAppButtonProps) {
  const isLight = variant === "light";

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-flex items-center justify-center px-7 py-3.5 gap-2 
        rounded-full text-xs md:text-sm text-white font-bold tracking-wide transition-all 
        duration-300 hover:-translate-y-0.5 hover:shadow-lg animate-glow-green 
        ${isLight
          ? "bg-[#7A9B8E] hover:bg-[#4F6F63]"
          : "bg-[#4F6F63] hover:bg-[#3d5a50]"
        } ${className}`}
    >
      <MessageCircle className="h-4 w-4" />
      <span>{label}</span>
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}