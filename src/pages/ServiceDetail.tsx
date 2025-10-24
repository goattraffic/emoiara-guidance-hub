import { useParams, Link, Navigate } from 'react-router-dom';
import { services } from '@/data/services';
import consultationImg from '@/assets/service-consultation.jpg';
import analysisImg from '@/assets/service-analysis.jpg';
import portfolioImg from '@/assets/service-portfolio.jpg';
import ContactForm from '@/components/ContactForm';

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  const imageMap: Record<string, string> = {
    '/src/assets/service-consultation.jpg': consultationImg,
    '/src/assets/service-analysis.jpg': analysisImg,
    '/src/assets/service-portfolio.jpg': portfolioImg,
  };

  if (!service) {
    return <Navigate to="/servizi" replace />;
  }

  return (
    <>
      {/* Breadcrumbs */}
      <section className="pt-32 pb-8 bg-background">
        <div className="container-custom">
          <nav className="flex text-sm text-muted-foreground" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link to="/servizi" className="hover:text-primary">
              Servizi
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{service.title}</span>
          </nav>
        </div>
      </section>

      {/* Header */}
      <section className="pb-12 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="mb-6">{service.title}</h1>
            <div className="section-divider" style={{ margin: '0 0 2rem 0' }}></div>
            <p className="text-xl text-muted-foreground mb-8">{service.short}</p>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-2xl font-serif text-primary">{service.price}</span>
              <a href="#orderFormAnchor" className="btn-primary">
                Richiedi Questo Servizio
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="pb-12 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <img
              src={imageMap[service.image] || analysisImg}
              alt={service.title}
              className="w-full h-auto rounded-lg shadow-elegant"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-12 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div
              dangerouslySetInnerHTML={{ __html: service.contentHtml }}
              style={{
                lineHeight: '1.8',
                color: 'hsl(var(--muted-foreground))',
              }}
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-secondary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8 text-center">Cosa Include Questo Servizio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-start bg-background p-4 rounded-lg shadow-sm">
                  <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="mb-6 text-primary-foreground">Interessato a Questo Servizio?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Compila il modulo qui sotto per richiedere una consulenza gratuita. Ti contatteremo al più presto per
            discutere le tue esigenze.
          </p>
          <a href="#orderFormAnchor" className="btn-secondary bg-background text-primary hover:bg-background/90">
            Vai al Modulo
          </a>
        </div>
      </section>

      {/* Back Link */}
      <section className="py-8 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Link to="/servizi" className="inline-flex items-center text-primary link-underline">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Torna all'Elenco Servizi
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </>
  );
};

export default ServiceDetail;
