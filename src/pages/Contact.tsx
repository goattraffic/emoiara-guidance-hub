import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-12 bg-accent-light">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Contattaci</h1>
            <div className="section-divider"></div>
            <p className="text-lg text-muted-foreground">
              Compila il modulo per richiedere una consulenza gratuita. Ti risponderemo entro 24 ore.
            </p>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-serif mb-2">Orari</h3>
                <p className="text-sm text-muted-foreground">Lun-Ven: 9:00 - 18:00</p>
                <p className="text-sm text-muted-foreground">Sab: 10:00 - 14:00</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-serif mb-2">Risposta</h3>
                <p className="text-sm text-muted-foreground">Entro 24 ore lavorative</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-serif mb-2">Consulenza</h3>
                <p className="text-sm text-muted-foreground">Primo incontro gratuito</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <ContactForm />
    </>
  );
};

export default Contact;
