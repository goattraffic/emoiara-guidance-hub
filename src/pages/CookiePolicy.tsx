const CookiePolicy = () => {
  return (
    <section className="pt-32 pb-20 bg-background">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-8">Cookie Policy</h1>
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p>
              <strong>Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}</strong>
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">1. Introduzione</h2>
            <p>
              Questa Cookie Policy spiega come Emoiara utilizza i cookie e tecnologie simili sul proprio sito web. La
              presente policy è parte integrante della nostra Privacy Policy.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">2. Cosa Sono i Cookie</h2>
            <p>
              I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo quando visiti un sito web.
              I cookie permettono al sito di riconoscere il tuo dispositivo e di memorizzare alcune informazioni sulle tue
              preferenze o azioni passate.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">3. Tipi di Cookie Utilizzati</h2>
            
            <h3 className="font-serif text-xl text-foreground mt-6 mb-3">3.1 Cookie Tecnici Necessari</h3>
            <p>
              Utilizziamo esclusivamente cookie tecnici necessari per il funzionamento del sito. Questi cookie sono
              essenziali per consentirti di navigare sul sito e utilizzare le sue funzionalità. Non raccolgono
              informazioni personali identificabili.
            </p>
            <p>Esempi di cookie tecnici necessari:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cookie di sessione per mantenere l'accesso alle aree del sito</li>
              <li>Cookie per memorizzare le tue preferenze sui cookie</li>
            </ul>

            <h3 className="font-serif text-xl text-foreground mt-6 mb-3">3.2 Cookie Analitici</h3>
            <p>
              Attualmente non utilizziamo cookie analitici o di profilazione. Non tracciamo il comportamento degli utenti
              a fini statistici o di marketing.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">4. Cookie di Terze Parti</h2>
            <p>
              Il nostro sito non include cookie di terze parti, script di tracciamento o plugin di social media che
              potrebbero raccogliere informazioni sugli utenti.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">5. Gestione dei Cookie</h2>
            <p>
              Puoi controllare e/o eliminare i cookie come desideri. Puoi eliminare tutti i cookie già presenti sul tuo
              computer e puoi impostare la maggior parte dei browser in modo da impedire che vengano memorizzati.
            </p>
            <p>Per gestire i cookie nel tuo browser:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Chrome:</strong> Impostazioni → Privacy e sicurezza → Cookie e altri dati dei siti
              </li>
              <li>
                <strong>Firefox:</strong> Opzioni → Privacy e sicurezza → Cookie e dati dei siti web
              </li>
              <li>
                <strong>Safari:</strong> Preferenze → Privacy → Gestisci dati dei siti web
              </li>
              <li>
                <strong>Edge:</strong> Impostazioni → Privacy, ricerca e servizi → Cookie e autorizzazioni siti
              </li>
            </ul>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">6. Conformità GDPR e TCF v2.2</h2>
            <p>
              Rispettiamo il Regolamento Generale sulla Protezione dei Dati (GDPR) e il Transparency & Consent Framework
              (TCF) versione 2.2 dello IAB Europe. Il nostro banner di consenso ai cookie ti permette di accettare,
              rifiutare o personalizzare le tue preferenze sui cookie.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">7. Modifiche alla Cookie Policy</h2>
            <p>
              Ci riserviamo il diritto di modificare questa Cookie Policy in qualsiasi momento. Le modifiche saranno
              pubblicate su questa pagina con la data di ultimo aggiornamento.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">8. Contatti</h2>
            <p>
              Per domande sulla nostra Cookie Policy, puoi contattarci attraverso il modulo presente nella pagina Contatti.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CookiePolicy;
