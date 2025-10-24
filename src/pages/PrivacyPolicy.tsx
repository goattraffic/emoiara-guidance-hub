const PrivacyPolicy = () => {
  return (
    <section className="pt-32 pb-20 bg-background">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p>
              <strong>Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}</strong>
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">1. Titolare del Trattamento</h2>
            <p>
              Emoiara (di seguito "noi" o "il Titolare") è il titolare del trattamento dei dati personali raccolti
              attraverso questo sito web.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">2. Dati Raccolti</h2>
            <p>Raccogliamo i seguenti dati personali quando utilizzi il nostro modulo di contatto:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nome e cognome</li>
              <li>Indirizzo email</li>
              <li>Numero di telefono</li>
              <li>Informazioni tecniche (indirizzo IP, browser, timestamp)</li>
            </ul>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">3. Finalità del Trattamento</h2>
            <p>I tuoi dati personali vengono trattati esclusivamente per le seguenti finalità:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Rispondere alle tue richieste di informazioni o consulenza</li>
              <li>Fornire i servizi richiesti</li>
              <li>Adempiere agli obblighi contrattuali e di legge</li>
            </ul>
            <p>
              Non utilizziamo i tuoi dati per finalità di marketing senza il tuo esplicito consenso separato.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">4. Base Giuridica</h2>
            <p>Il trattamento dei tuoi dati personali si basa su:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Il tuo consenso esplicito (Art. 6(1)(a) GDPR)</li>
              <li>L'esecuzione di misure precontrattuali adottate su tua richiesta (Art. 6(1)(b) GDPR)</li>
              <li>Obblighi legali a cui siamo soggetti (Art. 6(1)(c) GDPR)</li>
            </ul>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">5. Conservazione dei Dati</h2>
            <p>
              I tuoi dati personali saranno conservati solo per il tempo necessario alle finalità per cui sono stati
              raccolti. In generale:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Dati di contatto: fino a 2 anni dall'ultima interazione, salvo obblighi di legge</li>
              <li>Dati contrattuali: per la durata richiesta da obblighi legali o fiscali (generalmente 10 anni)</li>
            </ul>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">6. Destinatari dei Dati</h2>
            <p>
              I tuoi dati personali non saranno comunicati a terzi, salvo nei casi in cui ciò sia necessario per
              l'erogazione dei servizi richiesti o per obblighi di legge.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">7. Trasferimento dei Dati</h2>
            <p>
              I dati raccolti sono archiviati su server situati nell'Unione Europea. Non trasferiamo dati personali al di
              fuori dello Spazio Economico Europeo.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">8. Diritti dell'Interessato</h2>
            <p>In conformità al GDPR, hai i seguenti diritti:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Diritto di accesso: puoi richiedere copia dei tuoi dati personali</li>
              <li>Diritto di rettifica: puoi richiedere la correzione di dati inesatti</li>
              <li>Diritto alla cancellazione: puoi richiedere la cancellazione dei tuoi dati</li>
              <li>Diritto di limitazione: puoi richiedere la limitazione del trattamento</li>
              <li>Diritto alla portabilità: puoi ricevere i tuoi dati in formato strutturato</li>
              <li>Diritto di opposizione: puoi opporti al trattamento dei tuoi dati</li>
              <li>Diritto di revocare il consenso: puoi revocare il consenso in qualsiasi momento</li>
            </ul>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">9. Sicurezza dei Dati</h2>
            <p>
              Adottiamo misure tecniche e organizzative adeguate per proteggere i tuoi dati personali da accessi non
              autorizzati, perdita o distruzione.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">10. Cookie e Tecnologie di Tracciamento</h2>
            <p>
              Per informazioni sull'utilizzo dei cookie, consulta la nostra Cookie Policy.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">11. Modifiche alla Privacy Policy</h2>
            <p>
              Ci riserviamo il diritto di modificare questa Privacy Policy in qualsiasi momento. Le modifiche saranno
              pubblicate su questa pagina con la data di ultimo aggiornamento.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">12. Contatti e Reclami</h2>
            <p>
              Per esercitare i tuoi diritti o per domande sulla presente Privacy Policy, puoi contattarci attraverso il
              modulo presente nella pagina Contatti.
            </p>
            <p>
              Hai inoltre il diritto di presentare un reclamo all'Autorità Garante per la Protezione dei Dati Personali
              se ritieni che il trattamento dei tuoi dati violi il GDPR.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
