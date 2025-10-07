import { Shield, Award, Clock, MapPin } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Seguridad Garantizada",
      description:
        "Todos nuestros trabajos cumplen con las normativas SEC y estándares de seguridad más exigentes.",
    },
    {
      icon: Award,
      title: "Experiencia Comprobada",
      description:
        "Más de 10 años de experiencia en instalaciones eléctricas residenciales y comerciales.",
    },
    {
      icon: Clock,
      title: "Respuesta Rápida",
      description:
        "Atención oportuna para emergencias y proyectos. Estamos cuando nos necesitas.",
    },
    {
      icon: MapPin,
      title: "Servicio Local",
      description:
        "Basados en Villa Prat, atendiendo toda la zona de Curicó con cercanía y compromiso.",
    },
  ];

  return (
    <section id="sobre-mi" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 px-4">
              Sobre <span className="text-primary">Daniel Herrera</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Electricista profesional comprometido con la seguridad y calidad en cada proyecto
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="space-y-6 animate-fade-in">
              <p className="text-lg text-foreground leading-relaxed">
                Soy <strong className="text-primary">Daniel Herrera</strong>, electricista profesional con base en Villa Prat, cerca de Curicó. Con más de una década de experiencia, me especializo en brindar soluciones eléctricas seguras y eficientes para hogares, oficinas y pequeñas empresas.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Mi compromiso es garantizar que cada instalación cumpla con los más altos estándares de seguridad, utilizando materiales de calidad y técnicas modernas. Trabajo con certificación SEC y me mantengo actualizado en las últimas normativas y tecnologías del sector eléctrico.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Cada proyecto es una oportunidad para construir relaciones de confianza con mis clientes, ofreciendo un servicio personalizado, transparente y de excelencia.
              </p>
            </div>

            {/* Image Placeholder */}
            <div className="relative animate-fade-in">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 shadow-card">
                <div className="aspect-square bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center overflow-hidden shadow-glow">
                  <img
                    src="/trabajoImagen.jpg"
                    alt="Trabajo imagen"
                    className="object-cover w-full h-full rounded-xl transition-transform duration-500 hover:scale-105 hover:brightness-110"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent text-safety-dark px-6 py-3 rounded-lg font-bold shadow-lg">
                Certificado SEC
              </div>
            </div>
          </div> {/* ← Este cierre faltaba */}

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1 animate-fade-in border border-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
