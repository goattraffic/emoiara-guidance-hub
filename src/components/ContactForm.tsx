import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot check
    if (formData.get('__hp')) {
      navigate('/grazie');
      return;
    }

    // Add technical fields
    const urlParams = new URLSearchParams(window.location.search);
    const technicalData = {
      __ts: Date.now().toString(),
      utm_source: sessionStorage.getItem('utm_source') || urlParams.get('utm_source') || '',
      utm_medium: sessionStorage.getItem('utm_medium') || urlParams.get('utm_medium') || '',
      utm_campaign: sessionStorage.getItem('utm_campaign') || urlParams.get('utm_campaign') || '',
      utm_term: sessionStorage.getItem('utm_term') || urlParams.get('utm_term') || '',
      utm_content: sessionStorage.getItem('utm_content') || urlParams.get('utm_content') || '',
      gclid: sessionStorage.getItem('gclid') || urlParams.get('gclid') || '',
      fbclid: sessionStorage.getItem('fbclid') || urlParams.get('fbclid') || '',
      referrer: document.referrer,
      path: window.location.pathname + window.location.hash,
    };

    Object.entries(technicalData).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const response = await fetch('/api/lead.php', {
        method: 'POST',
        headers: {
          'X-Requested-With': 'fetch',
        },
        body: formData,
      });

      const result = await response.json();

      if (result.ok) {
        navigate('/grazie');
      } else {
        setError(result.error || 'Si è verificato un errore. Riprova più tardi.');
      }
    } catch (err) {
      setError('Errore di connessione. Verifica la tua connessione e riprova.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="orderFormAnchor" className="py-20 bg-accent-light">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Richiedi una Consulenza Gratuita</h2>
            <div className="section-divider"></div>
            <p className="text-muted-foreground">
              Compila il modulo e ti contatteremo per discutere le tue esigenze di investimento immobiliare.
            </p>
          </div>

          <form id="leadForm" onSubmit={handleSubmit} className="card-elegant">
            {/* Honeypot */}
            <input type="text" name="__hp" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="first_name" className="block text-sm font-medium mb-2">
                  Nome *
                </label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  required
                  className="w-full px-4 py-3 border border-input rounded focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="last_name" className="block text-sm font-medium mb-2">
                  Cognome *
                </label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  required
                  className="w-full px-4 py-3 border border-input rounded focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-input rounded focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Telefono *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-4 py-3 border border-input rounded focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="mb-6">
              <label className="flex items-start space-x-2">
                <input type="checkbox" name="consent" required className="mt-1 w-4 h-4" />
                <span className="text-sm text-muted-foreground">
                  Acconsento al trattamento dei miei dati personali secondo la{' '}
                  <a href="/#/privacy-policy" className="text-primary underline">
                    Privacy Policy
                  </a>
                  . *
                </span>
              </label>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded text-sm text-red-800" role="alert">
                {error}
              </div>
            )}

            <button type="submit" disabled={isSubmitting} className="btn-primary w-full">
              {isSubmitting ? 'Invio in corso...' : 'Invia Richiesta'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
