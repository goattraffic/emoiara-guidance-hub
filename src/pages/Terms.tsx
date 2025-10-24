const Terms = () => {
  return (
    <section className="pt-32 pb-20 bg-background">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-8">Termini e Condizioni</h1>
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p>
              <strong>Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}</strong>
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">1. Accettazione dei Termini</h2>
            <p>
              Utilizzando questo sito web e i servizi offerti da Emoiara, accetti di essere vincolato dai presenti Termini
              e Condizioni. Se non accetti questi termini, non utilizzare il sito o i servizi.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">2. Definizioni</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Sito:</strong> il sito web di Emoiara</li>
              <li><strong>Servizi:</strong> i servizi di consulenza immobiliare offerti da Emoiara</li>
              <li><strong>Utente:</strong> chiunque acceda al sito o utilizzi i servizi</li>
              <li><strong>Cliente:</strong> l'utente che stipula un contratto per ricevere i servizi</li>
            </ul>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">3. Descrizione dei Servizi</h2>
            <p>
              Emoiara offre servizi di consulenza per investimenti immobiliari, inclusi ma non limitati a: analisi di
              mercato, valutazione immobili, gestione portafoglio, consulenza fiscale e assistenza nella compravendita.
            </p>
            <p>
              I servizi sono descritti in dettaglio nelle rispettive pagine del sito. Ci riserviamo il diritto di
              modificare o interrompere i servizi in qualsiasi momento senza preavviso.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">4. Condizioni di Utilizzo del Sito</h2>
            <p>L'utente si impegna a:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Utilizzare il sito in modo lecito e conforme alle leggi vigenti</li>
              <li>Non tentare di accedere a aree riservate del sito senza autorizzazione</li>
              <li>Non trasmettere contenuti dannosi, offensivi o illeciti</li>
              <li>Non utilizzare il sito per scopi fraudolenti o ingannevoli</li>
            </ul>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">5. Contratto di Servizio</h2>
            <p>
              I dettagli specifici di ogni servizio, inclusi prezzi, modalità di erogazione e termini di pagamento, saranno
              definiti in un contratto separato tra il Cliente e Emoiara.
            </p>
            <p>
              La richiesta di consulenza attraverso il modulo di contatto non costituisce un contratto vincolante. Il
              contratto si perfeziona solo con la firma di un accordo scritto tra le parti.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">6. Prezzi e Pagamenti</h2>
            <p>
              I prezzi indicati sul sito sono da intendersi come indicativi e possono variare in base alle specifiche
              esigenze del Cliente. I prezzi finali saranno concordati nel contratto di servizio.
            </p>
            <p>
              I pagamenti devono essere effettuati secondo le modalità e i tempi concordati nel contratto. In caso di
              mancato pagamento, ci riserviamo il diritto di sospendere o interrompere i servizi.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">7. Esclusione di Garanzie</h2>
            <p>
              I servizi di consulenza sono forniti sulla base delle informazioni disponibili al momento della prestazione.
              Non garantiamo risultati specifici né rendimenti sugli investimenti.
            </p>
            <p>
              Le analisi e le valutazioni fornite sono basate su criteri oggettivi e dati verificabili, ma non possono
              tenere conto di tutti i fattori che possono influenzare il mercato immobiliare.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">8. Limitazione di Responsabilità</h2>
            <p>
              Emoiara non sarà responsabile per eventuali danni diretti, indiretti, incidentali o consequenziali derivanti
              dall'utilizzo del sito o dei servizi, salvo nei casi di dolo o colpa grave.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">9. Proprietà Intellettuale</h2>
            <p>
              Tutti i contenuti presenti sul sito, inclusi testi, immagini, loghi e grafiche, sono di proprietà di Emoiara
              o dei rispettivi proprietari e sono protetti dalle leggi sulla proprietà intellettuale.
            </p>
            <p>
              È vietato riprodurre, distribuire o modificare i contenuti del sito senza l'esplicito consenso scritto di
              Emoiara.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">10. Link a Siti Terzi</h2>
            <p>
              Il sito può contenere link a siti web di terze parti. Emoiara non è responsabile per il contenuto o le
              pratiche di privacy di tali siti.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">11. Modifiche ai Termini</h2>
            <p>
              Ci riserviamo il diritto di modificare questi Termini e Condizioni in qualsiasi momento. Le modifiche
              entreranno in vigore dalla data di pubblicazione sul sito.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">12. Legge Applicabile e Foro Competente</h2>
            <p>
              I presenti Termini e Condizioni sono regolati dalla legge italiana. Per qualsiasi controversia sarà
              competente il Foro di [Città], salvo disposizioni imperative di legge.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">13. Contatti</h2>
            <p>
              Per domande sui presenti Termini e Condizioni, puoi contattarci attraverso il modulo presente nella pagina
              Contatti.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terms;
