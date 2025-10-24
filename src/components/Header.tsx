import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Chi Siamo', path: '/chi-siamo' },
    { name: 'Servizi', path: '/servizi' },
    { name: 'Contatti', path: '/contatti' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 flex items-center justify-center">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path
                  d="M20 4L4 14v12c0 10 8 14 16 14s16-4 16-14V14L20 4z"
                  fill="hsl(231 48% 35%)"
                  opacity="0.1"
                />
                <path
                  d="M20 4L4 14v12c0 10 8 14 16 14s16-4 16-14V14L20 4z"
                  stroke="hsl(231 48% 35%)"
                  strokeWidth="2"
                  fill="none"
                />
                <rect x="14" y="18" width="12" height="14" fill="hsl(231 48% 35%)" />
                <rect x="14" y="12" width="5" height="5" fill="hsl(231 48% 35%)" />
                <rect x="21" y="12" width="5" height="5" fill="hsl(231 48% 35%)" />
              </svg>
            </div>
            <span className="text-xl font-serif font-normal text-foreground">Emoiara</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`link-underline text-sm font-medium ${
                  location.pathname === item.path ? 'text-primary' : 'text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a href="#orderFormAnchor" className="btn-primary text-sm px-6 py-2.5">
              Richiedi Consulenza
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-3 px-4 text-base ${
                  location.pathname === item.path ? 'text-primary font-medium' : 'text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 pt-4">
              <a href="#orderFormAnchor" className="btn-primary w-full text-center block">
                Richiedi Consulenza
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
