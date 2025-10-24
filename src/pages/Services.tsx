import { Link } from 'react-router-dom';
import { services } from '@/data/services';
import consultationImg from '@/assets/service-consultation.jpg';
import analysisImg from '@/assets/service-analysis.jpg';
import portfolioImg from '@/assets/service-portfolio.jpg';
import ContactForm from '@/components/ContactForm';

const Services = () => {
  const imageMap: Record<string, string> = {
    '/src/assets/service-consultation.jpg': consultationImg,
    '/src/assets/service-analysis.jpg': analysisImg,
    '/src/assets/service-portfolio.jpg': portfolioImg,
  };

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-12 bg-accent-light">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">I Nostri Servizi</h1>
            <div className="section-divider"></div>
            <p className="text-lg text-muted-foreground">
              Consulenze specializzate per ogni fase del tuo investimento immobiliare, dalla valutazione iniziale alla
              gestione del portafoglio.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.slug} className="card-elegant group">
                <div className="mb-4 overflow-hidden rounded">
                  <img
                    src={imageMap[service.image] || analysisImg}
                    alt={service.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{service.short}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-start text-sm text-muted-foreground">
                      <svg
                        className="w-5 h-5 text-primary mr-2 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                  <span className="font-medium text-primary">{service.price}</span>
                  <Link to={`/servizi/${service.slug}`} className="text-primary text-sm link-underline">
                    Scopri di più →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="mb-6 text-primary-foreground">Non Trovi il Servizio che Cerchi?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Contattaci per una consulenza personalizzata. Saremo lieti di studiare una soluzione su misura per le tue
            esigenze.
          </p>
          <a href="#orderFormAnchor" className="btn-secondary bg-background text-primary hover:bg-background/90">
            Richiedi Consulenza
          </a>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </>
  );
};

export default Services;
