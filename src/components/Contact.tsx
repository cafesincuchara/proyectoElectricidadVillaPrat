import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  // Aquí irá handleSubmit...
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // evita recargar la página
  
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      if (data.ok) {
        alert("Mensaje enviado correctamente!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("Error al enviar el mensaje.");
        console.error(data.error);
      }
    } catch (error) {
      alert("Error al enviar el mensaje.");
      console.error(error);
    }
  };
  
  const handleWhatsApp = () => {
    const message = "Hola, me gustaría solicitar información sobre sus servicios eléctricos.";
    const phone = "56957143222"; // Replace with actual phone number
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      content: "+56 9 35646022",
      link: "tel:+56935646022"
    },
    {
      icon: Mail,
      title: "Email",
      content: "delectric.d@gmail.com",
      link: "mailto:delectric.d@gmail.com"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      content: "Villa Prat, Curicó, Chile",
      link: "https://maps.google.com/?q=Villa+Prat+Curicó+Chile"
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 px-4">
              Solicita tu <span className="text-primary">Presupuesto</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Contáctanos y cuéntanos sobre tu proyecto eléctrico
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Información de Contacto
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-start gap-4 p-4 bg-card rounded-xl hover:shadow-card transition-all group border border-border"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{info.title}</p>
                        <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {info.content}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-gradient-to-br from-primary to-primary/80 p-8 rounded-xl text-white shadow-glow">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="w-8 h-8" />
                  <h4 className="text-2xl font-bold">¿Necesitas ayuda urgente?</h4>
                </div>
                <p className="mb-6 text-white/90">
                  Escríbenos por WhatsApp y te responderemos lo antes posible
                </p>
                <Button 
                  onClick={handleWhatsApp}
                  className="w-full bg-accent hover:bg-accent/90 text-safety-dark font-semibold"
                  size="lg"
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Chatear por WhatsApp
                </Button>
              </div>

              {/* Map Placeholder */}
              <div className="bg-muted rounded-xl overflow-hidden shadow-card h-64">
                <iframe
                  title="Ubicación Villa Prat"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26247.89!2d-71.2395!3d-34.9831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9665c6a22c7b8f5b%3A0x4e8b8e8e8e8e8e8e!2sVilla%20Prat%2C%20Curic%C3%B3!5e0!3m2!1ses!2scl!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in">
              <form onSubmit={handleSubmit} className="bg-card p-8 rounded-xl shadow-card border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Envíanos un Mensaje
                </h3>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nombre Completo *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Tu nombre"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="tu@email.com"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Teléfono
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+56 9 1234 5678"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Mensaje *
                    </label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Cuéntanos sobre tu proyecto o consulta..."
                      className="w-full min-h-[150px]"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold"
                    size="lg"
                  >
                    <Send className="mr-2 w-5 h-5" />
                    Enviar Mensaje
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground mt-4 text-center">
                  * Campos obligatorios
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
