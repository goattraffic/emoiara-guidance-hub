export interface Service {
  slug: string;
  title: string;
  short: string;
  price: string;
  image: string;
  features: string[];
  contentHtml: string;
}

export const services: Service[] = [
  {
    slug: 'consulenza-investimenti',
    title: 'Consulenza Investimenti Immobiliari',
    short: 'Analisi personalizzata delle opportunità di investimento più adatte ai tuoi obiettivi patrimoniali.',
    price: 'Da €1.500',
    image: '/src/assets/service-consultation.jpg',
    features: [
      'Analisi obiettivi patrimoniali',
      'Valutazione profilo investitore',
      'Selezione opportunità mirate',
      'Report dettagliato consigliato',
    ],
    contentHtml: `
      <p>La nostra consulenza per investimenti immobiliari offre un'analisi approfondita delle opportunità presenti sul mercato, calibrata sulle tue esigenze specifiche e sui tuoi obiettivi di lungo termine.</p>
      
      <h3>Come funziona la consulenza</h3>
      <p>Iniziamo con un colloquio preliminare per comprendere il tuo profilo di investitore, la disponibilità finanziaria e gli obiettivi che desideri raggiungere. Successivamente, il nostro team analizza le zone più promettenti, valuta i progetti disponibili e ti presenta una selezione di immobili compatibili con le tue esigenze.</p>
      
      <h3>Cosa include il servizio</h3>
      <p>Il servizio comprende l'analisi del mercato locale, la valutazione delle caratteristiche degli immobili proposti, il calcolo delle potenziali rendite e una stima dei costi di gestione. Ti forniamo inoltre una roadmap per l'acquisto, con indicazioni sui passaggi burocratici e sulle tempistiche previste.</p>
      
      <h3>Perché scegliere questa consulenza</h3>
      <p>Investire in immobili richiede conoscenze tecniche, esperienza di mercato e un approccio metodico. La nostra consulenza ti permette di prendere decisioni consapevoli, evitando errori costosi e massimizzando il valore del tuo investimento nel tempo. Ogni proposta è supportata da dati concreti e da un'analisi trasparente dei rischi.</p>
    `,
  },
  {
    slug: 'analisi-mercato',
    title: 'Analisi di Mercato Approfondita',
    short: 'Studio dettagliato delle dinamiche di mercato, dei prezzi e delle tendenze nelle zone di tuo interesse.',
    price: 'Da €800',
    image: '/src/assets/service-analysis.jpg',
    features: [
      'Studio andamento prezzi zona',
      'Comparazione progetti disponibili',
      'Valutazione potenziale crescita',
      'Report con dati aggiornati',
    ],
    contentHtml: `
      <p>L'analisi di mercato approfondita è uno strumento fondamentale per chi desidera investire con cognizione di causa. Ti forniamo un quadro chiaro e dettagliato delle zone di tuo interesse, con dati aggiornati e proiezioni basate su fonti affidabili.</p>
      
      <h3>Cosa analizziamo</h3>
      <p>Il nostro studio include l'andamento storico dei prezzi, l'offerta attuale di immobili, la domanda locale e le dinamiche demografiche. Valutiamo inoltre i servizi presenti nella zona, l'accessibilità ai mezzi di trasporto e i progetti di sviluppo urbano programmati dalle amministrazioni locali.</p>
      
      <h3>Come utilizziamo i dati</h3>
      <p>Raccogliamo informazioni da fonti ufficiali, registri pubblici e database specializzati. I dati vengono elaborati per fornire indicatori chiari sulla solidità del mercato locale e sulle prospettive future. Ogni analisi è accompagnata da grafici e tabelle per facilitare la lettura e la comprensione.</p>
      
      <h3>Vantaggi dell'analisi di mercato</h3>
      <p>Avere una visione d'insieme del mercato ti permette di identificare le zone con maggior potenziale, evitare aree a rischio e confrontare diverse opzioni in modo oggettivo. L'analisi ti aiuta a definire un budget realistico e a negoziare con maggiore consapevolezza.</p>
    `,
  },
  {
    slug: 'gestione-portafoglio',
    title: 'Gestione Portafoglio Immobiliare',
    short: 'Supporto continuativo per la gestione ottimale del tuo patrimonio immobiliare esistente.',
    price: 'Da €2.000/anno',
    image: '/src/assets/service-portfolio.jpg',
    features: [
      'Monitoraggio valore immobili',
      'Suggerimenti manutenzione',
      'Analisi opportunità vendita',
      'Report periodici aggiornati',
    ],
    contentHtml: `
      <p>La gestione del portafoglio immobiliare è un servizio pensato per chi possiede già uno o più immobili e desidera mantenerli in condizioni ottimali, monitorarne il valore e valutare opportunità di ottimizzazione patrimoniale.</p>
      
      <h3>Monitoraggio costante</h3>
      <p>Il nostro team tiene traccia dell'andamento del mercato nelle zone in cui sono ubicati i tuoi immobili, segnalando variazioni significative dei prezzi o cambiamenti nelle dinamiche locali. Questo ti permette di avere sempre un quadro aggiornato del valore del tuo patrimonio.</p>
      
      <h3>Suggerimenti operativi</h3>
      <p>Ti forniamo indicazioni su interventi di manutenzione, ristrutturazione o miglioramento che possono aumentare il valore degli immobili o ridurre i costi di gestione. Ogni suggerimento è motivato da dati concreti e da un'analisi costi-benefici trasparente.</p>
      
      <h3>Report periodici</h3>
      <p>Ricevi report semestrali o annuali con un riepilogo dello stato del portafoglio, delle variazioni di valore registrate e delle opportunità da considerare. I report includono anche una valutazione del rendimento complessivo e suggerimenti per eventuali ribilanciamenti.</p>
      
      <h3>Supporto per decisioni strategiche</h3>
      <p>Se stai valutando la vendita di un immobile o l'acquisto di nuove proprietà, ti affianchiamo con analisi mirate e indicazioni sulle tempistiche più opportune. Il nostro obiettivo è aiutarti a prendere decisioni informate e allineate ai tuoi obiettivi patrimoniali di lungo termine.</p>
    `,
  },
  {
    slug: 'valutazione-immobili',
    title: 'Valutazione Immobili Professionale',
    short: 'Stima accurata del valore di mercato di immobili residenziali e commerciali.',
    price: 'Da €500',
    image: '/src/assets/service-analysis.jpg',
    features: [
      'Sopralluogo dettagliato',
      'Comparazione prezzi zona',
      'Report valutazione certificato',
      'Consulenza post-valutazione',
    ],
    contentHtml: `
      <p>La valutazione professionale di un immobile è essenziale per vendere, acquistare o semplicemente conoscere il valore aggiornato di una proprietà. Il nostro servizio offre stime accurate basate su criteri oggettivi e su una conoscenza approfondita del mercato locale.</p>
      
      <h3>Processo di valutazione</h3>
      <p>Effettuiamo un sopralluogo per verificare lo stato dell'immobile, le caratteristiche strutturali e gli eventuali interventi necessari. Raccogliamo informazioni sugli immobili comparabili venduti di recente nella stessa zona e analizziamo i fattori che influenzano il valore, come la posizione, i servizi e l'accessibilità.</p>
      
      <h3>Report di valutazione</h3>
      <p>Al termine dell'analisi, ti consegniamo un report dettagliato con la stima del valore di mercato, la metodologia utilizzata e le motivazioni alla base della valutazione. Il documento può essere utilizzato per trattative, finanziamenti o come riferimento per decisioni future.</p>
      
      <h3>Trasparenza e affidabilità</h3>
      <p>La nostra valutazione si basa su dati verificabili e su criteri riconosciuti a livello professionale. Non forniamo stime gonfiate per compiacere il cliente, ma valutazioni realistiche che riflettono le condizioni effettive del mercato.</p>
    `,
  },
  {
    slug: 'consulenza-fiscale',
    title: 'Consulenza Fiscale Immobiliare',
    short: 'Supporto per comprendere gli aspetti fiscali legati all\'acquisto e alla gestione di immobili.',
    price: 'Da €600',
    image: '/src/assets/service-consultation.jpg',
    features: [
      'Analisi imposte acquisto',
      'Ottimizzazione carico fiscale',
      'Supporto dichiarazioni',
      'Chiarimenti normativi',
    ],
    contentHtml: `
      <p>La consulenza fiscale immobiliare ti aiuta a comprendere le implicazioni fiscali legate all'acquisto, alla vendita e alla gestione di immobili. Ti forniamo informazioni chiare sulle imposte dovute, sulle agevolazioni disponibili e sulle modalità per ottimizzare il carico fiscale nel rispetto della normativa vigente.</p>
      
      <h3>Imposte sull'acquisto</h3>
      <p>Analizziamo le imposte di registro, ipotecarie e catastali che si applicano all'atto di acquisto, tenendo conto della tipologia di immobile e delle agevolazioni eventualmente applicabili. Ti spieghiamo in modo semplice quali sono i costi da sostenere e come vengono calcolati.</p>
      
      <h3>Gestione fiscale ordinaria</h3>
      <p>Ti forniamo indicazioni sulle imposte periodiche, come l'IMU e la TARI, e sugli obblighi dichiarativi relativi agli immobili posseduti. Ti affianchiamo nella compilazione delle dichiarazioni e nella verifica della correttezza dei dati inseriti.</p>
      
      <h3>Ottimizzazione fiscale</h3>
      <p>Identifichiamo le opportunità per ridurre il carico fiscale in modo legittimo, sfruttando agevolazioni, detrazioni e regimi fiscali vantaggiosi. Ogni suggerimento è accompagnato da un'analisi dei requisiti richiesti e dei vantaggi ottenibili.</p>
      
      <h3>Aggiornamenti normativi</h3>
      <p>Ti teniamo informato sulle novità legislative che possono influire sulla fiscalità immobiliare, permettendoti di adattare le tue strategie in tempo utile e di evitare sorprese spiacevoli.</p>
    `,
  },
  {
    slug: 'assistenza-compravendita',
    title: 'Assistenza nella Compravendita',
    short: 'Accompagnamento completo in tutte le fasi dell\'acquisto o della vendita di un immobile.',
    price: 'Da €1.200',
    image: '/src/assets/service-portfolio.jpg',
    features: [
      'Verifica documentazione',
      'Supporto negoziazione',
      'Coordinamento professionisti',
      'Assistenza fino al rogito',
    ],
    contentHtml: `
      <p>L'assistenza nella compravendita è un servizio completo che ti accompagna in tutte le fasi dell'acquisto o della vendita di un immobile, dalla ricerca iniziale fino alla firma del rogito notarile. Ti affianchiamo per semplificare il processo e ridurre i rischi.</p>
      
      <h3>Verifica preliminare</h3>
      <p>Controlliamo la documentazione dell'immobile, verifichiamo la regolarità urbanistica e catastale e identifichiamo eventuali vincoli o problematiche da risolvere prima della compravendita. Questo ti permette di procedere con sicurezza e di evitare sorprese in fase di rogito.</p>
      
      <h3>Supporto nella negoziazione</h3>
      <p>Ti assistiamo nella definizione del prezzo e delle condizioni di vendita o acquisto, fornendoti dati di mercato e argomenti per sostenere la tua posizione. Il nostro obiettivo è aiutarti a raggiungere un accordo equilibrato e vantaggioso.</p>
      
      <h3>Coordinamento dei professionisti</h3>
      <p>Mettiamo in contatto tutte le figure coinvolte nella compravendita, come notai, geometri, avvocati e consulenti fiscali, garantendo che ogni passaggio venga gestito in modo coordinato e nei tempi previsti.</p>
      
      <h3>Assistenza fino al rogito</h3>
      <p>Ti accompagniamo fino alla firma del rogito, verificando che tutti i documenti siano in ordine e che le condizioni pattuite vengano rispettate. Dopo il rogito, ti forniamo indicazioni sugli adempimenti successivi, come le volture e le comunicazioni agli enti competenti.</p>
    `,
  },
];
