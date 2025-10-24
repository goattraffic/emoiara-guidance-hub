const RefundPolicy = () => {
  return (
    <section className="pt-32 pb-20 bg-background">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-8">Politica Rimborsi</h1>
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p>
              <strong>Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}</strong>
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">1. Introduzione</h2>
            <p>
              Emoiara si impegna a fornire servizi di consulenza di alta qualità. Questa Politica Rimborsi descrive le
              condizioni in cui è possibile richiedere il rimborso dei servizi acquistati.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">2. Diritto di Recesso</h2>
            <p>
              In conformità con il Codice del Consumo italiano (D.Lgs. 206/2005), hai il diritto di recedere dal contratto
              entro 14 giorni dalla data di stipula, senza dover fornire alcuna motivazione.
            </p>
            <p>
              Se il servizio è già iniziato prima della scadenza dei 14 giorni su tua espressa richiesta, il diritto di
              recesso decade per la parte di servizio già erogata.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">3. Come Esercitare il Diritto di Recesso</h2>
            <p>
              Per esercitare il diritto di recesso, devi inviarci una comunicazione chiara attraverso il modulo di contatto
              presente sul sito, indicando:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nome e cognome</li>
              <li>Numero di contratto o riferimento all'ordine</li>
              <li>Data di stipula del contratto</li>
              <li>Dichiarazione esplicita di voler recedere dal contratto</li>
            </ul>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">4. Rimborsi per Servizi Già Avviati</h2>
            <p>
              Se hai richiesto che il servizio iniziasse durante il periodo di recesso e poi decidi di recedere:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ti verrà addebitato un importo proporzionale al servizio già fornito</li>
              <li>Il rimborso coprirà la parte di servizio non ancora erogata</li>
              <li>Il calcolo sarà effettuato in base alle ore di lavoro effettivamente svolte</li>
            </ul>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">5. Condizioni per il Rimborso</h2>
            <p>Il rimborso sarà concesso nei seguenti casi:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Recesso esercitato entro i termini di legge (14 giorni)</li>
              <li>Impossibilità di erogare il servizio per cause imputabili a Emoiara</li>
              <li>Gravi difformità tra il servizio promesso e quello erogato</li>
            </ul>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">6. Esclusioni dal Rimborso</h2>
            <p>Non è possibile ottenere un rimborso nei seguenti casi:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Servizio completamente erogato con tua soddisfazione</li>
              <li>Cambiamento di opinione dopo la scadenza dei termini di recesso</li>
              <li>Mancata collaborazione del Cliente nell'erogazione del servizio</li>
              <li>Cause di forza maggiore o eventi al di fuori del controllo di Emoiara</li>
            </ul>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">7. Tempi e Modalità di Rimborso</h2>
            <p>
              Una volta ricevuta e approvata la richiesta di rimborso, procederemo al rimborso entro 14 giorni lavorativi,
              utilizzando lo stesso metodo di pagamento utilizzato per l'acquisto, salvo diverso accordo.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">8. Modifiche o Cancellazioni di Appuntamenti</h2>
            <p>
              Se devi modificare o cancellare un appuntamento, ti chiediamo di comunicarlo con almeno 48 ore di anticipo.
              Cancellazioni o modifiche con preavviso inferiore possono comportare l'addebito di una penale.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">9. Reclami e Contestazioni</h2>
            <p>
              Se non sei soddisfatto del servizio ricevuto, ti invitiamo a contattarci immediatamente per cercare una
              soluzione. Faremo del nostro meglio per risolvere eventuali problemi in modo rapido ed equo.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">10. Risoluzione Alternativa delle Controversie</h2>
            <p>
              In caso di controversia non risolta, puoi ricorrere a procedure di risoluzione alternativa delle controversie
              (ADR) come la mediazione, prima di adire le vie legali.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">11. Modifiche alla Politica Rimborsi</h2>
            <p>
              Ci riserviamo il diritto di modificare questa Politica Rimborsi in qualsiasi momento. Le modifiche saranno
              pubblicate su questa pagina con la data di ultimo aggiornamento.
            </p>

            <h2 className="font-serif text-2xl text-foreground mt-8 mb-4">12. Contatti</h2>
            <p>
              Per richiedere un rimborso o per domande sulla presente Politica Rimborsi, puoi contattarci attraverso il
              modulo presente nella pagina Contatti.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RefundPolicy;
