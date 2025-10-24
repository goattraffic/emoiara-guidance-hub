import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-blueprint.jpg';
import consultationImg from '@/assets/service-consultation.jpg';
import analysisImg from '@/assets/service-analysis.jpg';
import portfolioImg from '@/assets/service-portfolio.jpg';
import ContactForm from '@/components/ContactForm';

const Home = () => {
  const services = [
    {
      title: 'Consulenza Investimenti',
      description: 'Analisi personalizzata delle opportunità di investimento più adatte ai tuoi obiettivi.',
      price: 'Da €1.500',
      image: consultationImg,
      link: '/servizi/consulenza-investimenti',
    },
    {
      title: 'Analisi di Mercato',
      description: 'Studio dettagliato delle dinamiche di mercato e delle tendenze nelle zone di interesse.',
      price: 'Da €800',
      image: analysisImg,
      link: '/servizi/analisi-mercato',
    },
    {
      title: 'Gestione Portafoglio',
      description: 'Supporto continuativo per la gestione ottimale del tuo patrimonio immobiliare.',
      price: 'Da €2.000/anno',
      image: portfolioImg,
      link: '/servizi/gestione-portafoglio',
    },
    {
      title: 'Valutazione Immobili',
      description: 'Stima accurata del valore di mercato di immobili residenziali e commerciali.',
      price: 'Da €500',
      image: analysisImg,
      link: '/servizi/valutazione-immobili',
    },
    {
      title: 'Consulenza Fiscale',
      description: 'Supporto per comprendere gli aspetti fiscali legati a acquisto e gestione.',
      price: 'Da €600',
      image: consultationImg,
      link: '/servizi/consulenza-fiscale',
    },
    {
      title: 'Assistenza Compravendita',
      description: 'Accompagnamento completo in tutte le fasi dell\'acquisto o vendita.',
      price: 'Da €1.200',
      image: portfolioImg,
      link: '/servizi/assistenza-compravendita',
    },
  ];

  const stats = [
    { number: '500+', label: 'Clienti Soddisfatti' },
    { number: '€50M+', label: 'Investimenti Gestiti' },
    { number: '15+', label: 'Anni di Esperienza' },
    { number: '98%', label: 'Tasso di Soddisfazione' },
  ];

  const testimonials = [
    {
      name: 'Marco R.',
      role: 'Imprenditore',
      text: 'Ho trovato in Emoiara un partner affidabile per i miei investimenti immobiliari. La consulenza è stata precisa e mi ha permesso di prendere decisioni consapevoli.',
      rating: 5,
    },
    {
      name: 'Giulia M.',
      role: 'Professionista',
      text: 'Servizio eccellente. L\'analisi di mercato che ho ricevuto era dettagliata e chiara. Mi sono sentita seguita in ogni fase del processo.',
      rating: 5,
    },
    {
      name: 'Antonio P.',
      role: 'Piccolo Imprenditore',
      text: 'Consiglio Emoiara a chiunque voglia investire in immobili con un approccio professionale e trasparente. Ottimo rapporto qualità-prezzo.',
      rating: 5,
    },
  ];

  const caseStudies = [
    {
      title: 'Investimento Residenziale a Milano',
      description: 'Assistenza completa nell\'acquisto di un appartamento in zona Porta Nuova con analisi di mercato e stima del potenziale di rivalutazione.',
    },
    {
      title: 'Portfolio Immobiliare Diversificato',
      description: 'Creazione di un portfolio bilanciato con proprietà residenziali e commerciali per un cliente privato.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animation-fade-in">
              <h1 className="mb-6 text-balance">
                Centro Investimenti in Immobiliare
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                Consulenza professionale per investimenti immobiliari sicuri e consapevoli. 
                Ti affianchiamo nella scelta, valutazione e gestione dei tuoi immobili.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#orderFormAnchor" className="btn-primary">
                  Richiedi Consulenza Gratuita
                </a>
                <Link to="/servizi" className="btn-secondary">
                  Scopri i Servizi
                </Link>
              </div>
            </div>
            <div className="animation-slide-up">
              <img
                src={heroImage}
                alt="Piano architettonico di investimento immobiliare"
                className="w-full h-auto rounded-lg shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-serif mb-2">{stat.number}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">I Nostri Servizi</h2>
            <div className="section-divider"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Offriamo consulenze specializzate per ogni fase del tuo investimento immobiliare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card-elegant group">
                <div className="mb-4 overflow-hidden rounded">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                  <span className="font-medium text-primary">{service.price}</span>
                  <Link to={service.link} className="text-primary text-sm link-underline">
                    Scopri di più →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Casi di Studio</h2>
            <div className="section-divider"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {caseStudies.map((study, index) => (
              <div key={index} className="card-elegant">
                <h3 className="text-xl mb-3">{study.title}</h3>
                <p className="text-muted-foreground text-sm">{study.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Cosa Dicono i Nostri Clienti</h2>
            <div className="section-divider"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-elegant">
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </>
  );
};

export default Home;
