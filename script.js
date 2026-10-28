"use strict";

/* ---------------------------------------------------------------
   Dati del percorso.
   Per aggiungere uno scenario basta aggiungere un oggetto qui:
   Home, mappa, avanzamento e riepilogo si aggiornano da soli.
   --------------------------------------------------------------- */

const SCENARIOS = [
  {
    id: "email-password",
    title: "L'email della password",
    kind: "email",
    kindLabel: "Email",
    intro: "La tua scuola usa indirizzi che finiscono con @scuola.edu.it. Leggi il messaggio. Poi scegli cosa fai.",
    message: {
      kind: "email",
      from: "Segreteria Digitale",
      address: "segreteria@istituto-sicurezza.info",
      time: "oggi, 08:14",
      subject: "Conferma la tua password entro 24 ore",
      lines: [
        "Gentile studente, il tuo account sarà bloccato.",
        "Per continuare a usare la posta e il registro, conferma ora la tua password."
      ],
      cta: "Conferma ora"
    },
    choices: [
      {
        tone: "risk",
        text: "Clicco subito sul link: se mi bloccano l'account è un problema.",
        label: "Scelta rischiosa",
        headline: "Hai dato la password a uno sconosciuto.",
        consequence: "Hai inserito la password in un sito che non è dell'istituto. Ora qualcuno può entrare nel tuo account, leggere i messaggi e cambiare la password.",
        why: "Nessun servizio serio chiede la password via email. La minaccia di blocco serve a farti agire in fretta, senza controllare."
      },
      {
        tone: "partial",
        text: "Non clicco e cancello l'email.",
        label: "Scelta parziale",
        headline: "La tua password è al sicuro. Ma gli altri?",
        consequence: "Non hai cliccato: la tua email è protetta. Però il messaggio è arrivato anche ad altre persone, che potrebbero crederci.",
        why: "Cancellare va bene per te. Segnalare aiuta tutti: il docente può avvisare la scuola e bloccare il messaggio."
      },
      {
        tone: "best",
        text: "Non clicco, controllo il mittente e avviso il docente.",
        label: "Scelta migliore",
        headline: "Hai fermato il messaggio. E hai avvisato.",
        consequence: "Hai confrontato l'indirizzo del mittente con quello della scuola e non hai cliccato. Avvisando il docente hai protetto anche i compagni.",
        why: "L'indirizzo finisce con .info, non con @scuola.edu.it. Controlla sempre mittente e link, non il logo. Poi segnala: una segnalazione ferma il messaggio per tutti."
      }
    ],
    rule: "La password è come la chiave di casa: non si consegna a chi la chiede per messaggio."
  },

  {
    id: "foto-gita",
    title: "La foto in gita",
    kind: "chat",
    kindLabel: "Chat",
    intro: "Nel gruppo della classe arriva una foto di una compagna. Qualcuno vuole condividerla.",
    message: {
      kind: "chat",
      title: "Gruppo 3B",
      subtitle: "8 partecipanti",
      avatar: "3B",
      badge: "Gruppo",
      group: true,
      bubbles: [
        { from: "Luca", time: "16:02", text: "Ragazzi, guardate la foto di Giulia di ieri." },
        { from: "Luca", time: "16:02", photo: "gita", photoLabel: "Giulia durante la gita" },
        { from: "Sara", time: "16:03", text: "Dai, girala anche nel gruppo della classe." }
      ]
    },
    choices: [
      {
        tone: "risk",
        text: "La giro subito: siamo tutti amici.",
        label: "Scelta rischiosa",
        headline: "La foto esce dal gruppo.",
        consequence: "Altri possono salvarla e reinviarla. Giulia non ha dato il permesso e ora si sente esposta.",
        why: "Una foto condivisa non torna indietro. Anche uno screenshot può diffonderla."
      },
      {
        tone: "partial",
        text: "Non la giro e non dico niente.",
        label: "Scelta parziale",
        headline: "La foto non gira. Ma Giulia non lo sa.",
        consequence: "Hai protetto la foto, però la persona ritratta resta sola con il problema.",
        why: "Non condividere è il primo passo. Il secondo è parlarne con lei o con un adulto."
      },
      {
        tone: "best",
        text: "Chiedo a Giulia se è d'accordo e decido con lei.",
        label: "Scelta migliore",
        headline: "Hai chiesto il permesso.",
        consequence: "Giulia ha deciso cosa fare della sua foto. La fiducia tra voi resta.",
        why: "Il consenso non è una formalità: è rispetto. E 'no' è una risposta valida."
      }
    ],
    rule: "Una foto si condivide solo con il permesso di chi c'è dentro."
  },

  {
    id: "pacco-sms",
    title: "Il pacco che non hai ordinato",
    kind: "sms",
    kindLabel: "SMS",
    intro: "Ricevi un SMS da un numero sconosciuto. Dice che un pacco è fermo e chiede un piccolo pagamento.",
    message: {
      kind: "chat",
      title: "Numero sconosciuto",
      subtitle: "+39 340 000 0000",
      avatar: "?",
      badge: "SMS",
      group: false,
      bubbles: [
        {
          from: "Numero sconosciuto",
          time: "11:07",
          text: "Poste Italiane: il tuo pacco è in giacenza. Paga 1,99 € qui:",
          linkText: "poste-italia-sicura.info/ritiro"
        }
      ]
    },
    choices: [
      {
        tone: "risk",
        text: "Apro il link: la cifra è piccola e il pacco mi serve.",
        label: "Scelta rischiosa",
        headline: "Il link porta a un sito falso.",
        consequence: "Il sito chiede i dati della carta. La cifra piccola serve a farti abbassare la guardia.",
        why: "I truffatori usano cifre basse e urgenza. Il link non è del servizio ufficiale."
      },
      {
        tone: "partial",
        text: "Rispondo al messaggio per chiedere se è vero.",
        label: "Scelta parziale",
        headline: "Rispondendo, confermi il tuo numero.",
        consequence: "Chi ti ha scritto sa che il numero è attivo e può mandarti altri messaggi.",
        why: "Non rispondere. Controlla il pacco nell'app o nel sito che conosci già."
      },
      {
        tone: "best",
        text: "Non apro il link: controllo nell'app o nel sito ufficiale.",
        label: "Scelta migliore",
        headline: "Hai verificato dalla fonte giusta.",
        consequence: "Nell'app non c'era nessun pacco in giacenza. Hai evitato la truffa.",
        why: "Guarda il dominio, non il logo. Se hai dubbi, apri tu il sito ufficiale o chiedi a un adulto."
      }
    ],
    rule: "Un link in un messaggio non è una prova: verifica dal sito ufficiale."
  },

  {
    id: "codice-verifica",
    title: "Il codice a 6 cifre",
    kind: "sms",
    kindLabel: "Codice",
    intro: "Ti arriva un codice di verifica. Poco dopo un amico te lo chiede.",
    message: {
      kind: "chat",
      title: "Luca",
      subtitle: "online",
      avatar: "L",
      badge: "Messaggi",
      group: false,
      code: {
        app: "Banca Verde",
        label: "Codice di verifica",
        value: "482913",
        note: "Non condividerlo con nessuno. Scade tra 5 minuti."
      },
      bubbles: [
        {
          from: "Luca",
          time: "18:42",
          text: "Ciao, mi è arrivato un tuo codice per sbaglio. Me lo mandi? Mi serve per entrare."
        }
      ]
    },
    choices: [
      {
        tone: "risk",
        text: "Glielo mando: è Luca, mi fido.",
        label: "Scelta rischiosa",
        headline: "Qualcuno è entrato nel tuo account.",
        consequence: "Non era Luca: il suo account era stato preso da un'altra persona. Con il codice ha confermato un'operazione.",
        why: "Il codice è una chiave usa e getta. Chi lo riceve può fare un'operazione al posto tuo."
      },
      {
        tone: "partial",
        text: "Non rispondo e basta.",
        label: "Scelta parziale",
        headline: "Il codice è al sicuro. Ma Luca no.",
        consequence: "Non hai condiviso il codice, però il suo account è ancora nelle mani di uno sconosciuto.",
        why: "Avvisare aiuta lui e gli altri. Chiamalo al numero che conosci."
      },
      {
        tone: "best",
        text: "Non lo mando: chiamo Luca al numero che conosco.",
        label: "Scelta migliore",
        headline: "Hai chiamato e hai scoperto la verità.",
        consequence: "Luca non ti aveva scritto. Il suo account era stato preso e ora lo state recuperando.",
        why: "Un messaggio non prova l'identità. Per le cose importanti usa un'altra strada: una telefonata."
      }
    ],
    rule: "I codici di verifica non si condividono con nessuno, nemmeno con un amico."
  },

  {
    id: "password-prestito",
    title: "La password in prestito",
    kind: "chat",
    kindLabel: "Chat",
    intro: "Un amico ti chiede la password di un tuo account.",
    message: {
      kind: "chat",
      title: "Marco",
      subtitle: "online",
      avatar: "M",
      badge: "Messaggi",
      group: false,
      bubbles: [
        { from: "Marco", time: "21:10", text: "Ciao, mi presti la tua password? La mia è scaduta e stasera ho ospiti." },
        { from: "Marco", time: "21:10", text: "Te la ridò domani, promesso." }
      ]
    },
    choices: [
      {
        tone: "risk",
        text: "Gliela do: è un amico e torna domani.",
        label: "Scelta rischiosa",
        headline: "La password è nelle mani di un altro.",
        consequence: "Marco entra nel tuo account e vede messaggi, foto e pagamenti. Se usi la stessa password altrove, il rischio cresce.",
        why: "Una password non è un prestito: dà accesso a tutta la tua vita digitale."
      },
      {
        tone: "partial",
        text: "Gli dico no, ma non gli spiego perché.",
        label: "Scelta parziale",
        headline: "Hai protetto l'account. Ma l'amico non capisce.",
        consequence: "La password resta tua, però Marco può pensare che tu sia egoista.",
        why: "Spiegare aiuta a tenere l'amicizia e a far capire il rischio."
      },
      {
        tone: "best",
        text: "Gli dico no e gli propongo di guardare insieme o usare un profilo ospite.",
        label: "Scelta migliore",
        headline: "Hai detto no e hai trovato una soluzione.",
        consequence: "Marco non ha la tua password e la serata si può fare lo stesso.",
        why: "Le password sono personali. Per condividere un servizio, usa i profili o le impostazioni della famiglia."
      }
    ],
    rule: "La password è personale: non si presta, nemmeno a un amico."
  },

  {
    id: "commento-gruppo",
    title: "Il commento nel gruppo",
    kind: "chat",
    kindLabel: "Chat",
    intro: "Nel gruppo della classe qualcuno prende in giro un compagno. Altri ridono.",
    message: {
      kind: "chat",
      title: "Gruppo 3B",
      subtitle: "8 partecipanti",
      avatar: "3B",
      badge: "Gruppo",
      group: true,
      bubbles: [
        {
          from: "Ale",
          time: "17:40",
          text: "Guardate che ridicolo il video di Davide in palestra.",
          video: { duration: "0:14", label: "Video di Davide in palestra" }
        },
        { from: "Ale", time: "17:40", text: "Lo giro anche nell'altro gruppo." },
        { from: "Sara", time: "17:41", text: "Dai, smettetela." },
        { from: "Ale", time: "17:41", text: "Ma è solo uno scherzo." }
      ]
    },
    choices: [
      {
        tone: "risk",
        text: "Rido e metto una reazione: è solo uno scherzo.",
        label: "Scelta rischiosa",
        headline: "Anche tu hai fatto parte dello scherzo.",
        consequence: "Ogni reazione fa sentire il gruppo più grande. Davide vede che tutti ridono e si chiude.",
        why: "Non è uno scherzo se fa male a qualcuno. Ridere insieme è partecipare."
      },
      {
        tone: "partial",
        text: "Non dico niente e aspetto che finisca.",
        label: "Scelta parziale",
        headline: "Non hai riso. Ma il silenzio lascia spazio.",
        consequence: "Non hai partecipato, però chi offende continua e Davide resta solo.",
        why: "Non devi litigare. Basta una frase: 'non fa ridere, smettete'."
      },
      {
        tone: "best",
        text: "Scrivo che non fa ridere, chiedo di cancellare e avviso un adulto.",
        label: "Scelta migliore",
        headline: "Hai difeso Davide e hai chiesto aiuto.",
        consequence: "Il gruppo capisce che quel comportamento non va. Un adulto può fermare la condivisione del video.",
        why: "Puoi segnalare il messaggio o parlare con un docente. Non sei tu a dover risolvere tutto da solo."
      }
    ],
    rule: "Se una cosa fa male a qualcuno, non è uno scherzo: fermala e chiedi aiuto."
  },

  {
    id: "concorso-post",
    title: "Il concorso gratis",
    kind: "post",
    kindLabel: "Post",
    intro: "Un post promette un telefono gratis. Per riceverlo chiede i dati della carta.",
    message: {
      kind: "post",
      account: "Regali Italia",
      handle: "@regali.italia",
      avatar: "RI",
      time: "2 ore",
      caption: "Vinci un telefono nuovo! Paga solo 1,99 € per la spedizione. Inserisci i dati della carta per riceverlo.",
      image: "gift",
      imageLabel: "Un telefono e un pacco regalo",
      footer: "12.480 condivisioni · 3.102 commenti",
      link: "regali-italia-vinci.info"
    },
    choices: [
      {
        tone: "risk",
        text: "Inserisco i dati: 1,99 € è poco.",
        label: "Scelta rischiosa",
        headline: "I dati della carta sono andati a uno sconosciuto.",
        consequence: "La cifra piccola era un'esca. Ora qualcuno può usare la tua carta.",
        why: "Nessun regalo serio chiede i dati della carta per una spedizione. Controlla il profilo e il dominio."
      },
      {
        tone: "partial",
        text: "Metto like e commento, ma non pago.",
        label: "Scelta parziale",
        headline: "Non hai pagato. Ma hai aiutato il post a crescere.",
        consequence: "Like e commenti fanno sembrare il post vero e lo mostrano ad altre persone.",
        why: "La tua reazione è pubblicità gratis. Segnala il post, non commentarlo."
      },
      {
        tone: "best",
        text: "Controllo chi ha pubblicato il post e non lascio dati.",
        label: "Scelta migliore",
        headline: "Hai controllato il profilo e hai evitato la truffa.",
        consequence: "Il profilo era nuovo, senza contatti e con un indirizzo strano. Non hai lasciato dati.",
        why: "Un profilo nuovo e un premio enorme sono segnali d'allarme. Non lasciare dati e segnala."
      }
    ],
    rule: "Se un regalo chiede i dati della carta, non è un regalo."
  },

  {
    id: "app-visite",
    title: "L'app che vede chi ti visita",
    kind: "chat",
    kindLabel: "Chat",
    intro: "Un messaggio ti propone un'app per scoprire chi visita il tuo profilo.",
    message: {
      kind: "chat",
      title: "Sara",
      subtitle: "online",
      avatar: "S",
      badge: "Messaggi",
      group: false,
      bubbles: [
        {
          from: "Sara",
          time: "17:20",
          text: "Guarda questa app: dice chi ha visitato il tuo profilo! Scaricala da qui.",
          linkPreview: {
            domain: "profili-visti.app",
            title: "Scopri chi visita il tuo profilo",
            description: "Installa l'app e scopri subito chi guarda le tue foto.",
            cta: "Apri il sito"
          }
        }
      ]
    },
    choices: [
      {
        tone: "risk",
        text: "Scarico subito: voglio sapere chi mi guarda.",
        label: "Scelta rischiosa",
        headline: "L'app prende i tuoi dati, non ti mostra i visitatori.",
        consequence: "Chiede accesso a foto, contatti e posizione. Nessuna app può vedere chi guarda un profilo.",
        why: "Il file arriva da un sito, non da uno store ufficiale. Può contenere un virus."
      },
      {
        tone: "partial",
        text: "La cerco nello store e leggo le recensioni, ma non scarico il file dal link.",
        label: "Scelta parziale",
        headline: "Hai evitato il file. Ma i permessi restano un rischio.",
        consequence: "Anche nello store un'app può chiedere permessi inutili. Leggi prima cosa vuole.",
        why: "Prima di installare, guarda i permessi e le recensioni. Se chiede tutto, non serve."
      },
      {
        tone: "best",
        text: "Non installo: quel dato non esiste e l'app chiede troppi permessi. Segnalo il messaggio.",
        label: "Scelta migliore",
        headline: "Hai riconosciuto una promessa impossibile.",
        consequence: "Non hai installato nulla e hai segnalato il messaggio. I tuoi dati sono al sicuro.",
        why: "Le app si installano solo dagli store ufficiali. Se una promessa sembra impossibile, probabilmente lo è."
      }
    ],
    rule: "Le app si scaricano solo dagli store ufficiali. I permessi si leggono prima."
  },

  {
    id: "immagine-ai",
    title: "L'immagine virale",
    kind: "post",
    kindLabel: "Post",
    intro: "Un post mostra una foto clamorosa. Migliaia di persone la stanno condividendo.",
    message: {
      kind: "post",
      account: "Notizie Lampo",
      handle: "@notizielampo",
      avatar: "NL",
      time: "1 ora",
      caption: "Il Colosseo illuminato di verde ieri sera per una protesta. Condividi se sei d'accordo!",
      image: "colosseo",
      imageLabel: "Il Colosseo illuminato di verde",
      footer: "8.900 condivisioni · 1.240 commenti",
      link: "notizie-lampo.info"
    },
    choices: [
      {
        tone: "risk",
        text: "La condivido: è ovunque, sarà vera.",
        label: "Scelta rischiosa",
        headline: "Hai diffuso una foto falsa.",
        consequence: "L'immagine è stata creata con l'intelligenza artificiale. Ora è arrivata a migliaia di persone con il tuo nome.",
        why: "Una foto può essere falsa. La fretta di condividere aiuta chi vuole ingannare."
      },
      {
        tone: "partial",
        text: "Non la condivido, ma ci credo.",
        label: "Scelta parziale",
        headline: "Non l'hai diffusa. Ma potresti crederci.",
        consequence: "La foto non è arrivata ad altri, però senza controllo puoi credere a una notizia falsa.",
        why: "Non basta non condividere: cerca la fonte, la data e altre testate."
      },
      {
        tone: "best",
        text: "Controllo la fonte e cerco la notizia su un sito affidabile.",
        label: "Scelta migliore",
        headline: "Hai controllato e hai scoperto la verità.",
        consequence: "Nessun giornale parlava di quella protesta. La foto era falsa e non l'hai condivisa.",
        why: "Controlla fonte, data e altre testate. Le immagini generate possono sembrare vere."
      }
    ],
    rule: "Prima di condividere, controlla la fonte. Le immagini possono essere false."
  },

  {
    id: "voce-mamma",
    title: "La voce che sembra mamma",
    kind: "voce",
    kindLabel: "Vocale",
    intro: "Ricevi un messaggio vocale da un numero nuovo. La voce sembra quella di tua madre.",
    message: {
      kind: "chat",
      title: "Mamma",
      subtitle: "nuovo numero",
      avatar: "M",
      badge: "Vocale",
      group: false,
      bubbles: [
        {
          from: "Mamma",
          time: "20:14",
          voice: {
            duration: "0:12",
            transcript: "Ciao tesoro, sono la mamma. Ho cambiato numero e ho bisogno di 200 euro subito. Mandali qui, poi ti spiego. Non chiamarmi, sono in riunione."
          }
        }
      ]
    },
    choices: [
      {
        tone: "risk",
        text: "Mando i soldi: la voce è la sua.",
        label: "Scelta rischiosa",
        headline: "La voce era falsa.",
        consequence: "Qualcuno ha copiato la voce di tua madre con l'intelligenza artificiale. I soldi sono andati a uno sconosciuto.",
        why: "Una voce può essere clonata. Per i soldi, verifica sempre con una chiamata al numero che conosci."
      },
      {
        tone: "partial",
        text: "Rispondo chiedendo se è davvero lei.",
        label: "Scelta parziale",
        headline: "Hai chiesto, ma il truffatore può mentire.",
        consequence: "Chi ti scrive può rispondere quello che vuole. La richiesta di soldi resta pericolosa.",
        why: "Un messaggio non prova l'identità. Chiama tu al numero di sempre."
      },
      {
        tone: "best",
        text: "Chiamo mia madre al numero di sempre e verifico.",
        label: "Scelta migliore",
        headline: "Hai chiamato e hai fermato la truffa.",
        consequence: "Tua madre stava bene e non aveva cambiato numero. I soldi sono rimasti a te.",
        why: "Per le richieste di soldi, usa un canale che conosci già. La voce non basta."
      }
    ],
    rule: "Una voce può essere falsa. Per i soldi, chiama il numero che conosci."
  }
];

/* ---------------------------------------------------------------
   Riferimenti e stato
   --------------------------------------------------------------- */

const $ = (selector, root = document) => root.querySelector(selector);

const screens = {
  home: $("#screen-home"),
  scenario: $("#screen-scenario"),
  feedback: $("#screen-feedback"),
  summary: $("#screen-summary")
};

const choicesMount = $("#choices");
const messageMount = $("#messageMount");
const liveRegion = $("#live");
const scenarioMap = $("#scenarioMap");

let currentIndex = 0;
let currentScenario = null;
let currentChoice = null;
let attempts = 0;
const completed = new Set();

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

/* ---------------------------------------------------------------
   Utility
   --------------------------------------------------------------- */

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[character]));
}

function announce(message) {
  liveRegion.textContent = "";
  window.setTimeout(() => {
    liveRegion.textContent = message;
  }, 80);
}

/* ---------------------------------------------------------------
   Navigazione
   --------------------------------------------------------------- */

function showScreen(name, focusTarget) {
  stopSpeech();

  if (voiceSettings && voiceSettings.open) {
    voiceSettings.open = false;
  }

  Object.entries(screens).forEach(([key, element]) => {
    element.hidden = key !== name;
  });

  window.scrollTo({
    top: 0,
    behavior: reduceMotion.matches ? "auto" : "smooth"
  });

  const target = focusTarget || screens[name].querySelector("h1");
  if (target) {
    target.setAttribute("tabindex", "-1");
    window.requestAnimationFrame(() => {
      target.focus({ preventScroll: true });
    });
  }
}

function goHome() {
  renderMap();
  showScreen("home", $("#home-title"));
}

/* ---------------------------------------------------------------
   Mappa
   --------------------------------------------------------------- */

function renderMap() {
  if (!scenarioMap) return;

  scenarioMap.innerHTML = SCENARIOS.map((scenario, index) => {
    const isDone = completed.has(scenario.id);
    const number = String(index + 1).padStart(2, "0");
    const state = isDone ? "Completato" : "Da fare";

    return `
      <button class="map-card${isDone ? " is-done" : ""}" type="button" data-scenario="${index}">
        <span class="map-num">${number}</span>
        <span class="map-text">
          <span class="map-title">${escapeHtml(scenario.title)}</span>
          <span class="map-kind">${escapeHtml(scenario.kindLabel)}</span>
        </span>
        <svg class="map-state" viewBox="0 0 24 24" aria-hidden="true">
          <use href="#${isDone ? "i-check" : "i-arrow"}"></use>
        </svg>
        <span class="sr-only">${state}</span>
      </button>
    `;
  }).join("");

  scenarioMap.querySelectorAll(".map-card").forEach((button) => {
    button.addEventListener("click", () => {
      renderScenario(Number(button.dataset.scenario));
    });
  });

  $("#mapProgress").textContent = `${completed.size} di ${SCENARIOS.length} completati`;
}

/* ---------------------------------------------------------------
   Template dei messaggi
   --------------------------------------------------------------- */

function mailTemplate(message) {
  return `
    <div class="mail">
      <div class="mail-top">
        <span class="avatar" aria-hidden="true">SD</span>
        <div class="sender-text">
          <p class="mail-name">${escapeHtml(message.from)}</p>
          <p class="mail-address">${escapeHtml(message.address)}</p>
        </div>
        <p class="mail-time">${escapeHtml(message.time)}</p>
      </div>
      <div class="mail-body">
        <p class="mail-subject">${escapeHtml(message.subject)}</p>
        ${message.lines.map((line) => `<p class="mail-line">${escapeHtml(line)}</p>`).join("")}
        <div class="mail-cta">${escapeHtml(message.cta)}</div>
      </div>
    </div>
  `;
}

function chatTemplate(message) {
  const badge = message.badge || (message.group ? "Gruppo" : "Messaggi");

  return `
    <div class="chat">
      <div class="chat-head">
        <span class="avatar" aria-hidden="true">${escapeHtml(message.avatar)}</span>
        <div class="chat-head-text">
          <p class="chat-title">${escapeHtml(message.title)}</p>
          <p class="chat-sub">${escapeHtml(message.subtitle)}</p>
        </div>
        <span class="chat-badge">${escapeHtml(badge)}</span>
      </div>
      <div class="chat-body">
        ${message.code ? codeTemplate(message.code) : ""}
        ${message.bubbles.map((bubble) => bubbleTemplate(bubble, message.group)).join("")}
      </div>
    </div>
  `;
}

function bubbleTemplate(bubble, group) {
  const name = group && bubble.from
    ? `<span class="bubble-name">${escapeHtml(bubble.from)}</span>`
    : "<span></span>";

  return `
    <div class="chat-bubble">
      <p class="bubble-meta">
        ${name}
        <span class="bubble-time">${escapeHtml(bubble.time || "")}</span>
      </p>
      ${bubble.text ? `<p class="bubble-text">${escapeHtml(bubble.text)}${bubble.linkText ? ` <span class="fake-link">${escapeHtml(bubble.linkText)}</span>` : ""}</p>` : ""}
      ${bubble.photo ? photoTemplate(bubble) : ""}
      ${bubble.video ? videoTemplate(bubble.video) : ""}
      ${bubble.voice ? voiceTemplate(bubble.voice) : ""}
      ${bubble.linkPreview ? linkPreviewTemplate(bubble.linkPreview) : ""}
    </div>
  `;
}

function photoTemplate(bubble) {
  return `
    <figure class="bubble-photo">
      ${photoSvg(bubble.photo)}
      <figcaption>${escapeHtml(bubble.photoLabel)}</figcaption>
    </figure>
  `;
}

function videoTemplate(video) {
  return `
    <div class="video-message">
      <div class="video-frame" aria-hidden="true">
        <span class="video-play">
          <svg viewBox="0 0 24 24"><use href="#i-play"></use></svg>
        </span>
      </div>
      <p class="video-label">${escapeHtml(video.label)} · ${escapeHtml(video.duration)}</p>
    </div>
  `;
}

function voiceTemplate(voice) {
  return `
    <div class="voice-message">
      <div class="voice-row" aria-hidden="true">
        <span class="voice-play">
          <svg viewBox="0 0 24 24"><use href="#i-play"></use></svg>
        </span>
        <svg class="voice-wave" viewBox="0 0 90 24" aria-hidden="true">
          <g fill="currentColor">
            <rect x="0" y="9" width="3" height="6" rx="1.5"/>
            <rect x="7" y="6" width="3" height="12" rx="1.5"/>
            <rect x="14" y="10" width="3" height="4" rx="1.5"/>
            <rect x="21" y="4" width="3" height="16" rx="1.5"/>
            <rect x="28" y="8" width="3" height="8" rx="1.5"/>
            <rect x="35" y="2" width="3" height="20" rx="1.5"/>
            <rect x="42" y="7" width="3" height="10" rx="1.5"/>
            <rect x="49" y="5" width="3" height="14" rx="1.5"/>
            <rect x="56" y="9" width="3" height="6" rx="1.5"/>
            <rect x="63" y="3" width="3" height="18" rx="1.5"/>
            <rect x="70" y="8" width="3" height="8" rx="1.5"/>
            <rect x="77" y="6" width="3" height="12" rx="1.5"/>
            <rect x="84" y="10" width="3" height="4" rx="1.5"/>
          </g>
        </svg>
        <span class="voice-duration">${escapeHtml(voice.duration)}</span>
      </div>
      <p class="voice-label">Trascrizione</p>
      <p class="voice-transcript">${escapeHtml(voice.transcript)}</p>
    </div>
  `;
}

function codeTemplate(code) {
  return `
    <div class="code-card">
      <p class="code-app">${escapeHtml(code.app)}</p>
      <p class="code-label">${escapeHtml(code.label)}</p>
      <p class="code-value">${escapeHtml(code.value)}</p>
      <p class="code-note">${escapeHtml(code.note)}</p>
    </div>
  `;
}

function linkPreviewTemplate(link) {
  return `
    <div class="link-preview">
      <p class="link-domain">${escapeHtml(link.domain)}</p>
      <p class="link-title">${escapeHtml(link.title)}</p>
      <p class="link-desc">${escapeHtml(link.description)}</p>
      <span class="link-cta">${escapeHtml(link.cta)}</span>
    </div>
  `;
}

function postTemplate(message) {
  return `
    <div class="post">
      <div class="post-head">
        <span class="avatar" aria-hidden="true">${escapeHtml(message.avatar)}</span>
        <div class="post-head-text">
          <p class="post-account">${escapeHtml(message.account)} <span class="post-handle">${escapeHtml(message.handle)}</span></p>
          <p class="post-time">${escapeHtml(message.time)}</p>
        </div>
        <span class="post-badge">Post</span>
      </div>
      ${message.image ? `<figure class="post-image">${photoSvg(message.image)}<figcaption>${escapeHtml(message.imageLabel)}</figcaption></figure>` : ""}
      <div class="post-body">
        <p class="post-caption">${escapeHtml(message.caption)}</p>
        ${message.link ? `<p class="post-link">${escapeHtml(message.link)}</p>` : ""}
        <p class="post-footer">${escapeHtml(message.footer)}</p>
      </div>
    </div>
  `;
}

function photoSvg(kind) {
  if (kind === "gita") {
    return `
      <svg viewBox="0 0 640 320" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
        <rect width="640" height="320" fill="#cfe3ea"/>
        <circle cx="512" cy="76" r="40" fill="#f2c14e"/>
        <path d="M0 210 120 118 240 210Z" fill="#9db98a"/>
        <path d="M150 220 300 98 450 220Z" fill="#7e9f72"/>
        <path d="M360 225 500 140 640 225Z" fill="#8fae7b"/>
        <rect y="210" width="640" height="110" fill="#c9b98a"/>
        <path d="M0 250Q160 230 320 252T640 248V320H0Z" fill="#b7a674"/>
        <path d="M300 320c10-30 30-50 40-78" fill="none" stroke="#e9e0c8" stroke-width="12" stroke-linecap="round"/>
        <g fill="#2b3a34">
          <circle cx="250" cy="196" r="16"/>
          <path d="M232 246c0-14 8-24 18-24s18 10 18 24v34h-36z"/>
          <circle cx="310" cy="204" r="15"/>
          <path d="M293 252c0-13 7-22 17-22s17 9 17 22v28h-34z"/>
          <circle cx="368" cy="198" r="15"/>
          <path d="M351 246c0-13 7-22 17-22s17 9 17 22v34h-34z"/>
        </g>
      </svg>
    `;
  }

  if (kind === "colosseo") {
    return `
      <svg viewBox="0 0 640 320" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
        <rect width="640" height="320" fill="#1c2433"/>
        <g fill="#f3efe6" opacity=".7">
          <circle cx="80" cy="52" r="2"/><circle cx="150" cy="30" r="1.5"/>
          <circle cx="240" cy="60" r="2"/><circle cx="360" cy="34" r="1.5"/>
          <circle cx="480" cy="54" r="2"/><circle cx="560" cy="28" r="1.5"/>
          <circle cx="600" cy="76" r="2"/>
        </g>
        <ellipse cx="320" cy="292" rx="250" ry="52" fill="#2f7d5a" opacity=".38"/>
        <path d="M100 246V158c0-46 42-84 94-84h252c52 0 94 38 94 84v88Z" fill="#6b5b4a"/>
        <path d="M100 246h440v38H100z" fill="#574a3c"/>
        <g fill="#2a2520">
          <path d="M136 246v-54c0-19 15-34 34-34s34 15 34 34v54z"/>
          <path d="M218 246v-54c0-19 15-34 34-34s34 15 34 34v54z"/>
          <path d="M300 246v-54c0-19 15-34 34-34s34 15 34 34v54z"/>
          <path d="M382 246v-54c0-19 15-34 34-34s34 15 34 34v54z"/>
          <path d="M464 246v-54c0-19 15-34 34-34s34 15 34 34v54z"/>
        </g>
        <g fill="#4fbf8f" opacity=".16">
          <path d="M180 320 240 158 300 320Z"/>
          <path d="M340 320 400 158 460 320Z"/>
        </g>
      </svg>
    `;
  }

  if (kind === "gift") {
    return `
      <svg viewBox="0 0 640 320" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
        <rect width="640" height="320" fill="#dcece4"/>
        <g fill="#c4552a" opacity=".8">
          <rect x="86" y="58" width="10" height="10" rx="2" transform="rotate(20 91 63)"/>
          <rect x="160" y="100" width="8" height="8" rx="2" transform="rotate(-15 164 104)"/>
          <rect x="520" y="70" width="10" height="10" rx="2" transform="rotate(30 525 75)"/>
          <rect x="560" y="150" width="8" height="8" rx="2" transform="rotate(-20 564 154)"/>
        </g>
        <g fill="#0c5c45" opacity=".25">
          <circle cx="120" cy="200" r="24"/>
          <circle cx="540" cy="210" r="18"/>
        </g>
        <rect x="210" y="132" width="220" height="138" rx="8" fill="#e8c07a"/>
        <rect x="190" y="112" width="260" height="38" rx="8" fill="#f0cf8e"/>
        <rect x="302" y="112" width="36" height="158" fill="#c4552a"/>
        <path d="M320 112c-42-10-62-42-42-57 19-14 42 11 42 57Z" fill="#c4552a"/>
        <path d="M320 112c42-10 62-42 42-57-19-14-42 11-42 57Z" fill="#c4552a"/>
        <rect x="388" y="78" width="58" height="108" rx="10" fill="#17201d"/>
        <rect x="396" y="88" width="42" height="80" rx="4" fill="#dcece4"/>
        <circle cx="417" cy="177" r="3" fill="#dcece4"/>
      </svg>
    `;
  }

  return "";
}

function messageTemplate(scenario) {
  const message = scenario.message;

  if (message.kind === "email") return mailTemplate(message);
  if (message.kind === "post") return postTemplate(message);
  return chatTemplate(message);
}

/* ---------------------------------------------------------------
   Scenario
   --------------------------------------------------------------- */

function renderScenario(index) {
  currentIndex = index;
  currentScenario = SCENARIOS[index];

  const scenario = currentScenario;
  const total = SCENARIOS.length;

  $("#scenario-title").textContent = scenario.title;
  $("#scenarioIntro").textContent = scenario.intro;
  $("#progressLabel").textContent = `Scenario ${index + 1} di ${total}`;
  $("#progressFill").style.width = `${((index + 1) / total) * 100}%`;

  messageMount.innerHTML = messageTemplate(scenario);

  choicesMount.innerHTML = scenario.choices.map((choice, choiceIndex) => `
    <button class="choice" type="button" data-choice="${choiceIndex}">
      <span class="choice-letter" aria-hidden="true">${String.fromCharCode(65 + choiceIndex)}</span>
      <span class="choice-text">${escapeHtml(choice.text)}</span>
      <svg class="choice-arrow" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-arrow"></use></svg>
    </button>
  `).join("");

  choicesMount.querySelectorAll(".choice").forEach((button) => {
    button.addEventListener("click", () => {
      const choiceIndex = Number(button.dataset.choice);
      showFeedback(scenario.choices[choiceIndex]);
    });
  });

  showScreen("scenario", $("#scenario-title"));
}

/* ---------------------------------------------------------------
   Feedback
   --------------------------------------------------------------- */

const verdictIcons = {
  risk: "i-x",
  partial: "i-alert",
  best: "i-check"
};

function showFeedback(choice) {
  currentChoice = choice;
  attempts += 1;

  const isBest = choice.tone === "best";

  if (isBest) {
    completed.add(currentScenario.id);
    renderMap();
  }

  $("#verdictPill").className = `verdict verdict--${choice.tone}`;
  $("#verdictIcon").innerHTML = `<use href="#${verdictIcons[choice.tone]}"></use>`;
  $("#verdictLabel").textContent = choice.label;

  $("#feedback-title").textContent = choice.headline;
  $("#feedbackConsequence").textContent = choice.consequence;
  $("#feedbackWhy").textContent = choice.why;

  $("#ruleChip").innerHTML = `
    <svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-pause"></use></svg>
    <span><strong>Regola.</strong> ${escapeHtml(currentScenario.rule)}</span>
  `;

  $("#retryBtn").hidden = isBest;
  $("#continueBtn").hidden = !isBest;

  $("#feedbackFoot").textContent = isBest
    ? "Risposta migliore. Puoi ancora rileggere il messaggio."
    : "Riprova quando vuoi: qui nessuno sbaglia per sempre.";

  showScreen("feedback", $("#feedback-title"));
  announce(`${choice.label}. ${choice.consequence}`);
}

/* ---------------------------------------------------------------
   Riepilogo
   --------------------------------------------------------------- */

function showSummary() {
  const total = SCENARIOS.length;
  const done = completed.size;
  const allDone = done === total;
  const retried = attempts > done;

  $("#summaryEyebrow").textContent = allDone ? "Percorso completato" : "Riepilogo del percorso";
  $("#summaryLede").textContent = allDone
    ? "Hai concluso tutti gli scenari. Ricordati di questi tre passi, in ogni situazione."
    : "Hai concluso questo scenario. Ricordati di questi tre passi, in ogni situazione.";
  $("#summaryProgress").textContent = `${done} di ${total} scenari completati`;

  if (allDone) {
    $("#summaryNote").textContent = retried
      ? "Hai completato tutti gli scenari, anche riprovando: è così che si impara."
      : "Hai completato tutti gli scenari al primo tentativo.";
  } else {
    $("#summaryNote").textContent = "Puoi continuare dalla mappa e completare gli altri.";
  }

  showScreen("summary", $("#summary-title"));
  announce(`Riepilogo. ${done} di ${total} scenari completati.`);
}

/* ---------------------------------------------------------------
   Lettura ad alta voce
   --------------------------------------------------------------- */

const speechSupported = "speechSynthesis" in window &&
  "SpeechSynthesisUtterance" in window;

const voiceSettings = $("#voiceSettings");
const voiceSelect = $("#voiceSelect");
const voiceRateSelect = $("#voiceRate");
const voiceNote = $("#voiceNote");

let selectedVoice = null;
let voiceChoiceIsManual = false;
let speechRate = 1;
let activeSpeechButton = null;
let speechToken = 0;
let speechTimer = null;

function italianVoices() {
  return window.speechSynthesis
    .getVoices()
    .filter((voice) => (voice.lang || "").toLowerCase().startsWith("it"));
}

function voiceScore(voice) {
  let score = 0;
  if (/natural|neural|online|premium|enhanced/i.test(voice.name)) score += 40;
  if (/elsa|isabella|alice|federica|serena|giulia|google/i.test(voice.name)) score += 8;
  if (!voice.localService) score += 4;
  if (voice.default) score += 1;
  return score;
}

function bestVoice(voices) {
  return voices.slice().sort((a, b) => voiceScore(b) - voiceScore(a))[0] || null;
}

function loadVoices() {
  if (!speechSupported) return;

  const voices = italianVoices();

  if (!voices.length) {
    voiceSelect.innerHTML = '<option value="">Nessuna voce italiana</option>';
    voiceSelect.disabled = true;
    voiceSettings.hidden = false;
    voiceNote.textContent = "Nessuna voce italiana trovata. Puoi installarne una dalle impostazioni del dispositivo.";
    return;
  }

  const ordered = voices.slice().sort((a, b) => voiceScore(b) - voiceScore(a));
  voiceSelect.innerHTML = ordered
    .map((voice) => `<option value="${escapeHtml(voice.name)}">${escapeHtml(voice.name)}</option>`)
    .join("");
  voiceSelect.disabled = false;

  if (voiceChoiceIsManual && selectedVoice && voices.some((voice) => voice.name === selectedVoice.name)) {
    voiceSelect.value = selectedVoice.name;
  } else {
    selectedVoice = ordered[0];
    voiceSelect.value = selectedVoice.name;
    voiceChoiceIsManual = false;
  }

  voiceNote.textContent = "La qualità dipende dalle voci del sistema. Su Chrome, se disponibile, l'app usa la voce Google italiana.";
  voiceSettings.hidden = false;
}

function resolveVoice() {
  if (selectedVoice) return Promise.resolve(selectedVoice);

  const voices = italianVoices();
  if (voices.length) {
    selectedVoice = bestVoice(voices);
    return Promise.resolve(selectedVoice);
  }

  return new Promise((resolve) => {
    let settled = false;

    const finish = () => {
      if (settled) return;
      settled = true;
      window.speechSynthesis.removeEventListener("voiceschanged", finish);
      const list = italianVoices();
      const voice = list.length ? bestVoice(list) : null;
      if (voice) selectedVoice = voice;
      resolve(voice);
    };

    window.speechSynthesis.addEventListener("voiceschanged", finish);
    window.setTimeout(finish, 900);
  });
}

function naturalSpeech(text) {
  return String(text)
    .replace(/([a-z0-9._%+-]+)@([a-z0-9.-]+\.[a-z]{2,})/gi, (_, user, domain) => (
      `${user} chiocciola ${domain.split(".").join(" punto ").replace(/-/g, " ")}`
    ))
    .replace(/\b((?:[a-z0-9-]+\.)+(?:it|com|info|app|net|edu))\b/gi, (domain) => (
      domain.split(".").join(" punto ").replace(/-/g, " ")
    ))
    .replace(/\.(it|com|info|app|net|edu)\b/gi, (_, tld) => ` punto ${tld}`)
    .replace(/@/g, " chiocciola ")
    .replace(/\//g, " barra ")
    .replace(/€/g, " euro")
    .replace(/·/g, ", ")
    .replace(/\bSMS\b/g, "messaggio")
    .replace(/\b3B\b/g, "terza B")
    .replace(/\s+/g, " ")
    .trim();
}

function splitSpeech(text) {
  const blocks = String(text)
    .split(/\n+/)
    .map((block) => block.trim())
    .filter(Boolean);

  const chunks = [];

  blocks.forEach((block) => {
    if (block.length <= 240) {
      chunks.push({ text: block, pause: 300 });
      return;
    }

    const sentences = block
      .split(/(?<=[.!?])\s+/)
      .map((sentence) => sentence.trim())
      .filter(Boolean);

    sentences.forEach((sentence, index) => {
      const isLast = index === sentences.length - 1;
      let pause = 120;

      if (!isLast && /[!?]$/.test(sentence)) pause = 190;
      if (isLast) pause = 300;

      chunks.push({ text: sentence, pause });
    });
  });

  return chunks;
}

function resetSpeechButtons() {
  document.querySelectorAll(".js-speak, #voiceTest").forEach((button) => {
    button.classList.remove("is-speaking");
    button.setAttribute("aria-pressed", "false");
    const label = button.querySelector(".speak-label");
    if (label) label.textContent = button.dataset.label || "Ascolta";
  });
  activeSpeechButton = null;
}

function stopSpeech() {
  speechToken += 1;

  if (speechTimer) {
    window.clearTimeout(speechTimer);
    speechTimer = null;
  }

  if (speechSupported) window.speechSynthesis.cancel();
  resetSpeechButtons();
}

async function speak(text, button) {
  if (!speechSupported || !text) return;

  if (activeSpeechButton === button) {
    stopSpeech();
    return;
  }

  const token = ++speechToken;
  window.speechSynthesis.cancel();
  resetSpeechButtons();

  const voice = await resolveVoice();
  if (token !== speechToken) return;

  const chunks = splitSpeech(text);
  if (!chunks.length) return;

  activeSpeechButton = button;
  button.classList.add("is-speaking");
  button.setAttribute("aria-pressed", "true");

  const label = button.querySelector(".speak-label");
  if (label) label.textContent = "Ferma";

  let index = 0;

  const playNext = () => {
    if (token !== speechToken) return;

    if (index >= chunks.length) {
      speechTimer = null;
      resetSpeechButtons();
      return;
    }

    const chunk = chunks[index];
    index += 1;

    const utterance = new SpeechSynthesisUtterance(naturalSpeech(chunk.text));
    utterance.lang = "it-IT";
    utterance.rate = speechRate;
    utterance.pitch = 1;
    utterance.volume = 1;
    if (voice) utterance.voice = voice;

    utterance.onend = () => {
      if (token !== speechToken) return;

      if (index >= chunks.length) {
        speechTimer = null;
        resetSpeechButtons();
        return;
      }

      speechTimer = window.setTimeout(playNext, chunk.pause);
    };

    utterance.onerror = () => {
      if (token !== speechToken) return;
      speechTimer = null;
      resetSpeechButtons();
    };

    window.speechSynthesis.speak(utterance);
  };

  playNext();
}

function homeSpeech() {
  const lede = $("#screen-home .lede").textContent;
  const steps = [
    "Primo passo: Fermati. La fretta aiuta chi vuole ingannarti.",
    "Secondo passo: Verifica. Controlla il mittente e l'indirizzo del link.",
    "Terzo passo: Chiedi. Avvisa un adulto o segnala il messaggio."
  ].join("\n");

  return [
    "Fermati. Guarda bene. Poi scegli.",
    lede,
    "In tre passi.",
    steps
  ].join("\n\n");
}

function messageSpeech(message) {
  if (message.kind === "email") {
    return [
      `Messaggio da ${message.from}.`,
      `Indirizzo: ${message.address}.`,
      `Oggetto: ${message.subject}.`,
      ...message.lines
    ].join("\n\n");
  }

  if (message.kind === "post") {
    const parts = [
      `Post di ${message.account}.`,
      message.caption,
      `Immagine: ${message.imageLabel}.`,
      message.footer
    ];
    if (message.link) parts.push(`Link: ${message.link}.`);
    return parts.join("\n\n");
  }

  const parts = [
    `Messaggi: ${message.title}.`,
    `${message.subtitle}.`
  ];

  if (message.code) {
    const codeValue = message.code.value.split("").join(" ");
    parts.push(`Notifica di ${message.code.app}.\n\n${message.code.label}: ${codeValue}.\n\n${message.code.note}`);
  }

  message.bubbles.forEach((bubble) => {
    const who = bubble.from ? `${bubble.from} dice: ` : "";
    if (bubble.text) parts.push(`${who}${bubble.text}`);
    if (bubble.linkText) parts.push(`Link: ${bubble.linkText}.`);
    if (bubble.photo) {
      const intro = bubble.from ? `${bubble.from} invia una foto: ` : "Foto: ";
      parts.push(`${intro}${bubble.photoLabel}.`);
    }
    if (bubble.video) {
      const intro = bubble.from ? `${bubble.from} invia un video: ` : "Video: ";
      parts.push(`${intro}${bubble.video.label}.`);
    }
    if (bubble.voice) {
      const intro = bubble.from ? `${bubble.from} invia un messaggio vocale.` : "Messaggio vocale.";
      parts.push(`${intro}\n\nTrascrizione: ${bubble.voice.transcript}`);
    }
    if (bubble.linkPreview) {
      parts.push(`Link: ${bubble.linkPreview.domain}.\n\n${bubble.linkPreview.title}.\n\n${bubble.linkPreview.description}`);
    }
  });

  return parts.join("\n\n");
}

function scenarioSpeech(scenario) {
  const choices = scenario.choices
    .map((choice, index) => `Risposta ${index + 1}: ${choice.text}`)
    .join("\n\n");

  return [
    `${scenario.title}.`,
    scenario.intro,
    messageSpeech(scenario.message),
    "Cosa fai?",
    choices
  ].join("\n\n");
}

function feedbackSpeech(choice) {
  return [
    `${choice.label}.`,
    choice.headline,
    choice.consequence,
    "Perché?",
    choice.why
  ].join("\n\n");
}

function summarySpeech() {
  const lede = $("#screen-summary .lede").textContent;
  const rules = [
    "Fermati. Prima di cliccare, conta fino a tre. La fretta è l'aiuto migliore per chi vuole ingannarti.",
    "Verifica. Guarda il mittente e l'indirizzo del link. Un logo uguale non significa che il sito sia vero.",
    "Chiedi. Avvisa un docente o un adulto. Segnalare il messaggio protegge anche i compagni."
  ].join("\n\n");

  return [
    "Riepilogo.",
    $("#summary-title").textContent,
    lede,
    rules
  ].join("\n\n");
}

/* ---------------------------------------------------------------
   Eventi
   --------------------------------------------------------------- */

$("#startBtn").addEventListener("click", () => {
  renderScenario(0);
});

$("#backHomeBtn").addEventListener("click", goHome);
$("#feedbackMapBtn").addEventListener("click", goHome);

$("#retryBtn").addEventListener("click", () => {
  renderScenario(currentIndex);
});

$("#reviewBtn").addEventListener("click", () => {
  renderScenario(currentIndex);
});

$("#continueBtn").addEventListener("click", () => {
  if (currentIndex + 1 < SCENARIOS.length) {
    renderScenario(currentIndex + 1);
  } else {
    showSummary();
  }
});

$("#mapBtn").addEventListener("click", goHome);

$("#restartBtn").addEventListener("click", () => {
  completed.clear();
  attempts = 0;
  currentIndex = 0;
  renderMap();
  showScreen("home", $("#home-title"));
});

document.addEventListener("click", (event) => {
  const button = event.target.closest(".js-speak");
  if (!button) return;

  const kind = button.dataset.read;
  let text = "";

  if (kind === "home") {
    text = homeSpeech();
  } else if (kind === "scenario" && currentScenario) {
    text = scenarioSpeech(currentScenario);
  } else if (kind === "feedback" && currentChoice) {
    text = feedbackSpeech(currentChoice);
  } else if (kind === "summary") {
    text = summarySpeech();
  }

  speak(text, button);
});

voiceSelect.addEventListener("change", () => {
  const voice = italianVoices().find((item) => item.name === voiceSelect.value);
  if (voice) {
    selectedVoice = voice;
    voiceChoiceIsManual = true;
  }
  stopSpeech();
});

voiceRateSelect.addEventListener("change", () => {
  speechRate = Number(voiceRateSelect.value) || 1;
  stopSpeech();
});

$("#voiceTest").addEventListener("click", () => {
  speak("Ciao. Questa è la voce scelta per leggere il percorso.", $("#voiceTest"));
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) stopSpeech();
});

/* ---------------------------------------------------------------
   Avvio
   --------------------------------------------------------------- */

$("#homeMeta").textContent = SCENARIOS.length === 1
  ? "1 scenario"
  : `${SCENARIOS.length} scenari`;

renderMap();

if (speechSupported) {
  window.speechSynthesis.addEventListener("voiceschanged", loadVoices);
  loadVoices();
} else {
  document.documentElement.classList.add("no-tts");
  document.querySelectorAll(".js-speak").forEach((button) => {
    button.hidden = true;
  });
  document.querySelectorAll(".read-hint").forEach((hint) => {
    hint.textContent = "La lettura ad alta voce non è disponibile in questo browser.";
  });
}
