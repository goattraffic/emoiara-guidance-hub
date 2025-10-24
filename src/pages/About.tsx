import { useState } from 'react';
import ContactForm from '@/components/ContactForm';

const About = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Quali servizi offrite per gli investimenti immobiliari?',
      answer: 'Offriamo consulenza completa per investimenti immobiliari, inclusa analisi di mercato, valutazione immobili, gestione portafoglio, consulenza fiscale e assistenza nella compravendita. Ogni servizio è personalizzato in base alle esigenze del cliente.',
    },
    {
      question: 'Come funziona la consulenza iniziale?',
      answer: 'La consulenza iniziale è gratuita. Durante l\'incontro, ascoltiamo i tuoi obiettivi, valutiamo il tuo profilo di investitore e ti presentiamo le opzioni disponibili. Solo dopo aver concordato il servizio più adatto, procediamo con l\'analisi approfondita.',
    },
    {
      question: 'Quali zone coprite per le vostre analisi?',
      answer: 'Ci occupiamo principalmente di investimenti nelle principali città italiane e nelle zone a maggiore potenziale. Le nostre analisi si basano su dati aggiornati e su una conoscenza approfondita dei mercati locali.',
    },
    {
      question: 'Quanto tempo richiede un\'analisi di mercato?',
      answer: 'Un\'analisi di mercato completa richiede generalmente tra i 7 e i 14 giorni lavorativi, a seconda della complessità e delle zone da analizzare. Ti forniamo un report dettagliato con tutti i dati raccolti.',
    },
    {
      question: 'Offrite garanzie sui risultati degli investimenti?',
      answer: 'No, non offriamo garanzie sui rendimenti. Il nostro ruolo è fornire analisi accurate e consulenze basate su dati oggettivi per aiutarti a prendere decisioni consapevoli. Gli investimenti immobiliari comportano sempre un margine di rischio.',
    },
    {
      question: 'Posso richiedere una consulenza anche se non ho ancora un budget definito?',
      answer: 'Sì, possiamo aiutarti a definire un budget realistico in base ai tuoi obiettivi e alla tua situazione finanziaria. La consulenza iniziale serve proprio a chiarire questi aspetti.',
    },
  ];

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-12 bg-accent-light">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Chi Siamo</h1>
            <div className="section-divider"></div>
            <p className="text-lg text-muted-foreground">
              Un centro di consulenza specializzato in investimenti immobiliari, dedicato ad offrire supporto
              professionale e trasparente a privati e piccole imprese.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8 text-center">La Nostra Missione</h2>
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Emoiara nasce con l'obiettivo di rendere gli investimenti immobiliari accessibili, comprensibili e sicuri
                per tutti. Crediamo che ogni investitore, indipendentemente dal livello di esperienza, meriti una
                consulenza professionale e trasparente.
              </p>
              <p className="text-lg leading-relaxed">
                Il nostro approccio si basa sull'analisi oggettiva dei dati, sulla conoscenza approfondita dei mercati
                locali e su un dialogo costante con i clienti. Non promettiamo rendimenti miracolosi, ma offriamo strumenti
                concreti per prendere decisioni consapevoli e costruire un patrimonio immobiliare solido nel tempo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <h2 className="mb-12 text-center">I Nostri Valori</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl mb-3">Trasparenza</h3>
              <p className="text-muted-foreground text-sm">
                Forniamo informazioni chiare e complete, senza nascondere i rischi o le incertezze.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl mb-3">Competenza</h3>
              <p className="text-muted-foreground text-sm">
                Basiamo ogni consulenza su dati aggiornati, analisi rigorose e conoscenza del mercato.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl mb-3">Personalizzazione</h3>
              <p className="text-muted-foreground text-sm">
                Ogni cliente è unico. Adattiamo i nostri servizi alle esigenze e agli obiettivi specifici.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-12 text-center">Domande Frequenti</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-border rounded-lg overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between bg-background hover:bg-secondary transition-colors"
                  >
                    <span className="font-medium text-foreground">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-primary transition-transform ${
                        openFaq === index ? 'transform rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 py-4 bg-secondary border-t border-border">
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </>
  );
};

export default About;
