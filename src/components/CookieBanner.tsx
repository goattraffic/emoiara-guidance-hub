import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const consentData = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const consentData = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    handleRejectAll();
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t-2 border-primary shadow-elegant"
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
    >
      <div className="container-custom py-6">
        {!showPreferences ? (
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="font-serif text-lg mb-2">Utilizzo dei Cookie</h3>
              <p className="text-sm text-muted-foreground max-w-2xl">
                Utilizziamo cookie necessari per il funzionamento del sito. Non utilizziamo cookie di terze parti o
                tracciamento. Per maggiori informazioni, consulta la nostra{' '}
                <Link to="/cookie-policy" className="text-primary underline">
                  Cookie Policy
                </Link>{' '}
                e{' '}
                <Link to="/privacy-policy" className="text-primary underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button onClick={handleRejectAll} className="btn-secondary text-sm px-6 py-2.5 whitespace-nowrap">
                Rifiuta
              </button>
              <button
                onClick={() => setShowPreferences(true)}
                className="btn-secondary text-sm px-6 py-2.5 whitespace-nowrap"
              >
                Preferenze
              </button>
              <button onClick={handleAcceptAll} className="btn-primary text-sm px-6 py-2.5 whitespace-nowrap">
                Accetta Tutti
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h3 className="font-serif text-lg mb-4">Preferenze Cookie</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-start justify-between p-4 bg-secondary rounded">
                <div className="flex-1">
                  <h4 className="font-medium mb-1">Cookie Necessari</h4>
                  <p className="text-sm text-muted-foreground">
                    Essenziali per il funzionamento del sito. Non possono essere disabilitati.
                  </p>
                </div>
                <div className="ml-4">
                  <input type="checkbox" checked disabled className="w-5 h-5" />
                </div>
              </div>
              <div className="flex items-start justify-between p-4 bg-secondary rounded opacity-50">
                <div className="flex-1">
                  <h4 className="font-medium mb-1">Cookie Analitici</h4>
                  <p className="text-sm text-muted-foreground">Non utilizzati in questo sito.</p>
                </div>
                <div className="ml-4">
                  <input type="checkbox" disabled className="w-5 h-5" />
                </div>
              </div>
              <div className="flex items-start justify-between p-4 bg-secondary rounded opacity-50">
                <div className="flex-1">
                  <h4 className="font-medium mb-1">Cookie Marketing</h4>
                  <p className="text-sm text-muted-foreground">Non utilizzati in questo sito.</p>
                </div>
                <div className="ml-4">
                  <input type="checkbox" disabled className="w-5 h-5" />
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <button onClick={() => setShowPreferences(false)} className="btn-secondary text-sm px-6 py-2.5">
                Indietro
              </button>
              <button onClick={handleSavePreferences} className="btn-primary text-sm px-6 py-2.5">
                Salva Preferenze
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieBanner;
