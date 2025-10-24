import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
                  <path
                    d="M20 4L4 14v12c0 10 8 14 16 14s16-4 16-14V14L20 4z"
                    stroke="hsl(231 48% 35%)"
                    strokeWidth="2"
                    fill="none"
                  />
                  <rect x="14" y="18" width="12" height="14" fill="hsl(231 48% 35%)" />
                </svg>
              </div>
              <span className="text-lg font-serif text-foreground">Emoiara</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Centro di consulenza per investimenti immobiliari sicuri e consapevoli.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-serif text-base mb-4">Navigazione</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/chi-siamo" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Chi Siamo
                </Link>
              </li>
              <li>
                <Link to="/servizi" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Servizi
                </Link>
              </li>
              <li>
                <Link to="/contatti" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-serif text-base mb-4">Informazioni Legali</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/termini-condizioni" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Termini e Condizioni
                </Link>
              </li>
              <li>
                <Link to="/politica-rimborsi" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Politica Rimborsi
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-serif text-base mb-4">Orari di Apertura</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Lunedì - Venerdì: 9:00 - 18:00</p>
              <p>Sabato: 10:00 - 14:00</p>
              <p>Domenica: Chiuso</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Emoiara. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
