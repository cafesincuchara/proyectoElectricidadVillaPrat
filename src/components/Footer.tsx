import { Zap, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-background to-muted border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground">ElectroServicios</h3>
                  <p className="text-sm text-muted-foreground">Daniel Herrera</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4 max-w-sm">
                Servicios eléctricos profesionales en Villa Prat y Curicó. Tu seguridad eléctrica en buenas manos.
              </p>
              
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                {['Inicio', 'Sobre Mí', 'Servicios', 'Proyectos', 'Contacto'].map((link) => (
                  <li key={link}>
                    <a 
                      href={`#${link.toLowerCase().replace(' ', '-')}`}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contacto</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm">
                  <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <a href="tel:+56912345678" className="text-muted-foreground hover:text-primary transition-colors">
                    +56 9 3564 6022
                  </a>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <a href="mailto:contacto@electroservicios.cl" className="text-muted-foreground hover:text-primary transition-colors">
                    delectric.d@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Villa Prat, Curicó, Chile
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground text-center sm:text-left">
                © {currentYear} ElectroServicios Daniel Herrera. Todos los derechos reservados.
              </p>
              <div className="flex gap-4 text-sm text-muted-foreground">
                <a href="#" className="hover:text-primary transition-colors">
                  Política de Privacidad
                </a>
                <span>•</span>
                <a href="#" className="hover:text-primary transition-colors">
                  Términos de Servicio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
