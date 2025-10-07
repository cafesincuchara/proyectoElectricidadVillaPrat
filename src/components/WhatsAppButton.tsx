import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const handleWhatsApp = () => {
    const message = "Hola, me gustaría solicitar información sobre sus servicios eléctricos.";
    const phone = "56957143222"; // Replace with actual phone number
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsApp}
      size="lg"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 rounded-full w-14 h-14 sm:w-16 sm:h-16 p-0 shadow-glow bg-accent hover:bg-accent/90 text-safety-dark animate-fade-in hover:scale-110 transition-transform"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
    </Button>
  );
};

export default WhatsAppButton;
