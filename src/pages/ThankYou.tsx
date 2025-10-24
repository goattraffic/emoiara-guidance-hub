import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const ThankYou = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-background pt-20">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-24 h-24 mx-auto mb-8 flex items-center justify-center bg-primary/10 rounded-full">
            <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="mb-6">Grazie per il Tuo Interesse!</h1>
          <p className="text-lg text-muted-foreground mb-8">
            I tuoi dati sono stati inviati con successo. Il nostro team ti contatterà entro 24 ore lavorative per
            discutere le tue esigenze di investimento immobiliare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn-primary">
              Torna alla Home
            </Link>
            <Link to="/servizi" className="btn-secondary">
              Scopri i Servizi
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
