/* =====================================================================
   data.js — baza de date a meciurilor
   Adaugi un meci nou lipind un obiect la finalul listei MATCHES.
   Nimic din acest fisier nu este editabil din aplicatie: notele tale
   personale, biletul, locul, blocul si cu cine ai fost se salveaza
   separat, in memoria telefonului.
   ===================================================================== */

window.APP_DATA = {

/* ---------------------------------------------------------------------
   MECIURI — ordine cronologica, cel mai vechi = 1
   --------------------------------------------------------------------- */
matches: [

{
  id: "2021-06-23-por-fra",
  date: "2021-06-23",
  competition: { ro: "Campionatul European 2020", en: "UEFA Euro 2020" },
  competitionKey: { ro: "Campionatul European", en: "European Championship" },
  stage: { ro: "Faza grupelor · Grupa F", en: "Group stage · Group F" },
  home: { name: "Portugalia", nameEn: "Portugal", short: "POR" },
  away: { name: "Franța", nameEn: "France", short: "FRA" },
  score: "2-2",
  scoreHT: "1-1",
  stadium: "Puskás Aréna",
  city: { ro: "Budapesta", en: "Budapest" },
  country: { ro: "Ungaria", en: "Hungary" },
  attendance: { value: 54886, approx: false, soldOut: false },
  referee: "Antonio Mateu Lahoz",
  goals: [
    { team: "home", player: "Cristiano Ronaldo", minute: 31, pen: true },
    { team: "away", player: "Karim Benzema", minute: 45, added: 2, pen: true },
    { team: "away", player: "Karim Benzema", minute: 47, assist: "Paul Pogba" },
    { team: "home", player: "Cristiano Ronaldo", minute: 60, pen: true }
  ],
  cards: [
    { team: "away", player: "Hugo Lloris", minute: 27, type: "yellow" },
    { team: "away", player: "Lucas Hernández", minute: 36, type: "yellow" },
    { team: "away", player: "Antoine Griezmann", minute: 40, type: "yellow" },
    { team: "away", player: "Presnel Kimpembe", minute: 83, type: "yellow" }
  ],
  cardsComplete: true,
  stats: {
    possession: [49, 51],
    shots: [10, 11],
    onTarget: [5, 5],
    fouls: [9, 15],
    corners: [0, 1],
    offsides: [0, 2]
  },
  statsSource: "UEFA.com",
  lineups: {
    home: {
      formation: "4-3-3",
      coach: "Fernando Santos",
      captain: "Cristiano Ronaldo",
      xi: [
        { no: 1,  name: "Rui Patrício" },
        { no: 2,  name: "Nélson Semedo" },
        { no: 3,  name: "Pepe" },
        { no: 4,  name: "Rúben Dias" },
        { no: 5,  name: "Raphaël Guerreiro" },
        { no: 13, name: "Danilo Pereira" },
        { no: 8,  name: "João Moutinho" },
        { no: 16, name: "Renato Sanches" },
        { no: 10, name: "Bernardo Silva" },
        { no: 7,  name: "Cristiano Ronaldo" },
        { no: 21, name: "Diogo Jota" }
      ],
      subs: [
        { minute: 46, on: "João Palhinha",   onNo: 26, off: "Danilo Pereira" },
        { minute: 72, on: "Bruno Fernandes", onNo: 11, off: "Bernardo Silva", uncertain: true },
        { minute: 72, on: "Rúben Neves",     onNo: 18, off: "João Moutinho",  uncertain: true },
        { minute: 79, on: "Diogo Dalot",     onNo: 20, off: "Nélson Semedo" },
        { minute: 88, on: "Sérgio Oliveira", onNo: 24, off: "Renato Sanches" }
      ],
      bench: [
        { no: 12, name: "Anthony Lopes" },
        { no: 22, name: "Rui Silva" },
        { no: 6,  name: "José Fonte" },
        { no: 15, name: "Rafa Silva" },
        { no: 14, name: "William Carvalho" },
        { no: 9,  name: "André Silva" },
        { no: 23, name: "João Félix" }
      ]
    },
    away: {
      formation: "4-2-3-1",
      coach: "Didier Deschamps",
      captain: "Hugo Lloris",
      xi: [
        { no: 1,  name: "Hugo Lloris" },
        { no: 25, name: "Jules Koundé" },
        { no: 4,  name: "Raphaël Varane" },
        { no: 3,  name: "Presnel Kimpembe" },
        { no: 21, name: "Lucas Hernández" },
        { no: 13, name: "N'Golo Kanté" },
        { no: 6,  name: "Paul Pogba" },
        { no: 12, name: "Corentin Tolisso" },
        { no: 7,  name: "Antoine Griezmann" },
        { no: 10, name: "Kylian Mbappé" },
        { no: 19, name: "Karim Benzema" }
      ],
      subs: [
        { minute: 46, on: "Lucas Digne",     onNo: 18, off: "Lucas Hernández" },
        { minute: 52, on: "Adrien Rabiot",   onNo: 14, off: "Lucas Digne" },
        { minute: 66, on: "Kingsley Coman",  onNo: 20, off: "Corentin Tolisso" },
        { minute: 87, on: "Moussa Sissoko",  onNo: 17, off: "Antoine Griezmann" }
      ],
      bench: [
        { no: 23, name: "Mike Maignan" },
        { no: 16, name: "Steve Mandanda" },
        { no: 5,  name: "Clément Lenglet" },
        { no: 2,  name: "Benjamin Pavard" },
        { no: 15, name: "Kurt Zouma" },
        { no: 22, name: "Wissam Ben Yedder" },
        { no: 9,  name: "Olivier Giroud" },
        { no: 8,  name: "Thomas Lemar" }
      ]
    }
  },
  note: {
    ro: "Al doilea penalty al lui Ronaldo (Portugalia) a fost golul său cu numărul 109 la națională, egalând recordul lui Ali Daei (Iran).",
    en: "Ronaldo's second penalty was his 109th international goal, equalling Ali Daei's record."
  }
},

{
  id: "2021-11-27-juv-ata",
  date: "2021-11-27",
  competition: { ro: "Serie A 2021/22", en: "Serie A 2021/22" },
  competitionKey: { ro: "Serie A", en: "Serie A" },
  stage: { ro: "Etapa 14", en: "Matchday 14" },
  home: { name: "Juventus", nameEn: "Juventus", short: "JUV" },
  away: { name: "Atalanta", nameEn: "Atalanta", short: "ATA" },
  score: "0-1",
  stadium: "Allianz Stadium",
  city: { ro: "Torino", en: "Turin" },
  country: { ro: "Italia", en: "Italy" },
  attendance: { value: 29886, approx: false, soldOut: false },
  goals: [ { team: "away", player: "Duv\u00e1n Zapata", minute: 28, assist: "Berat Djimsiti" } ],
  referee: "Giovanni Ayroldi",
  cards: [
    { team: "away", player: "Remo Freuler",       minute: 32, type: "yellow" },
    { team: "away", player: "Ruslan Malinovskyi", minute: 37, type: "yellow" },
    { team: "away", player: "Davide Zappacosta",  minute: 43, type: "yellow" },
    { team: "home", player: "Juan Cuadrado",      minute: 50, type: "yellow" },
    { team: "home", player: "Adrien Rabiot",      minute: 66, type: "yellow" },
    { team: "away", player: "Merih Demiral",      minute: 70, type: "yellow" },
    { team: "home", player: "Federico Bernardeschi", minute: 79, type: "yellow" },
    { team: "away", player: "Berat Djimsiti",     minute: 85, type: "yellow" },
    { team: "home", player: "Manuel Locatelli",   minute: 88, type: "yellow" }
  ],
  cardsComplete: true,
  lineups: {
    home: {
      formation: "4-4-2",
      coach: "Massimiliano Allegri",
      xi: [
        { no: 1,  name: "Wojciech Szcz\u0119sny" },
        { no: 12, name: "Alex Sandro" },
        { no: 19, name: "Leonardo Bonucci" },
        { no: 4,  name: "Matthijs de Ligt" },
        { no: 11, name: "Juan Cuadrado" },
        { no: 14, name: "Weston McKennie" },
        { no: 27, name: "Manuel Locatelli" },
        { no: 25, name: "Adrien Rabiot" },
        { no: 22, name: "Federico Chiesa" },
        { no: 9,  name: "\u00c1lvaro Morata" },
        { no: 10, name: "Paulo Dybala" }
      ],
      subs: [
        { minute: 46, on: "Federico Bernardeschi", onNo: 20, off: "Federico Chiesa" },
        { minute: 64, on: "Moise Kean",            onNo: 18, off: "Weston McKennie" },
        { minute: 85, on: "Kaio Jorge",            onNo: 21, off: "\u00c1lvaro Morata" }
      ],
      bench: [
        { no: 23, name: "Carlo Pinsoglio" },
        { no: 36, name: "Mattia Perin" },
        { no: 3,  name: "Giorgio Chiellini" },
        { no: 45, name: "Koni De Winter" },
        { no: 24, name: "Daniele Rugani" },
        { no: 17, name: "Luca Pellegrini" },
        { no: 5,  name: "Arthur Melo" },
        { no: 30, name: "Rodrigo Bentancur" },
        { no: 44, name: "Dejan Kulusevski" }
      ]
    },
    away: {
      formation: "3-4-2-1",
      coach: "Gian Piero Gasperini",
      xi: [
        { no: 1,  name: "Juan Musso" },
        { no: 19, name: "Berat Djimsiti" },
        { no: 2,  name: "Rafael Tol\u00f3i" },
        { no: 28, name: "Merih Demiral" },
        { no: 3,  name: "Joakim Maehle" },
        { no: 15, name: "Marten de Roon" },
        { no: 11, name: "Remo Freuler" },
        { no: 77, name: "Davide Zappacosta" },
        { no: 32, name: "Matteo Pessina" },
        { no: 18, name: "Ruslan Malinovskyi" },
        { no: 91, name: "Duv\u00e1n Zapata" }
      ],
      subs: [
        { minute: 59, on: "Mario Pa\u0161ali\u0107",     onNo: 88, off: "Matteo Pessina" },
        { minute: 71, on: "Jos\u00e9 Luis Palomino", onNo: 6,  off: "Davide Zappacosta" },
        { minute: 87, on: "Teun Koopmeiners",   onNo: 7,  off: "Ruslan Malinovskyi" }
      ],
      bench: [
        { no: 31, name: "Francesco Rossi" },
        { no: 57, name: "Marco Sportiello" },
        { no: 42, name: "Giorgio Scalvini" },
        { no: 13, name: "Giuseppe Pezzella" },
        { no: 33, name: "Hans Hateboer" },
        { no: 59, name: "Aleksey Miranchuk" },
        { no: 72, name: "Josip Ili\u010di\u0107" },
        { no: 9,  name: "Luis Muriel" },
        { no: 90, name: "Roberto Piccoli" }
      ]
    }
  },
  stats: null,
  note: {
    ro: "Prima victorie a Atalantei la Torino împotriva lui Juventus după 32 de ani (ultima, un gol al lui Caniggia (Atalanta), 8 octombrie 1989). Stadionul era departe de capacitate, cu restricțiile încă în vigoare.",
    en: "Atalanta's first win at Juventus in 32 years — the previous one came through a Caniggia (Atalanta) goal on 8 October 1989. The ground was far from full, with restrictions still in force."
  }
},

{
  id: "2023-02-19-bvb-bsc",
  date: "2023-02-19",
  competition: { ro: "Bundesliga 2022/23", en: "Bundesliga 2022/23" },
  competitionKey: { ro: "Bundesliga", en: "Bundesliga" },
  stage: { ro: "Etapa 21", en: "Matchday 21" },
  home: { name: "Borussia Dortmund", nameEn: "Borussia Dortmund", short: "BVB" },
  away: { name: "Hertha BSC", nameEn: "Hertha BSC", short: "BSC" },
  score: "4-1",
  stadium: "Signal Iduna Park",
  city: { ro: "Dortmund", en: "Dortmund" },
  country: { ro: "Germania", en: "Germany" },
  attendance: { value: 81365, approx: false, soldOut: true },
  goals: [
    { team: "home", player: "Karim Adeyemi", minute: 27 },
    { team: "home", player: "Donyell Malen", minute: 32 },
    { team: "away", player: "Lucas Tousart", minute: 46 },
    { team: "home", player: "Marco Reus", minute: 76 },
    { team: "home", player: "Julian Brandt", minute: 90 }
  ],
  referee: "Harm Osmers",
  cards: [
    { team: "home", player: "Julian Ryerson",  minute: 58, type: "yellow" },
    { team: "away", player: "Tolga Ci\u011ferci", minute: 58, type: "yellow" },
    { team: "away", player: "Agustin Rogel",   minute: 75, type: "yellow" }
  ],
  cardsComplete: true,
  lineups: {
    home: {
      formation: "4-2-3-1",
      coach: "Edin Terzi\u0107",
      xi: [
        { no: 1,  name: "Gregor Kobel" },
        { no: 17, name: "Marius Wolf" },
        { no: 15, name: "Mats Hummels" },
        { no: 4,  name: "Nico Schlotterbeck" },
        { no: 26, name: "Julian Ryerson" },
        { no: 23, name: "Emre Can" },
        { no: 6,  name: "Salih \u00d6zcan" },
        { no: 19, name: "Julian Brandt" },
        { no: 11, name: "Marco Reus" },
        { no: 27, name: "Karim Adeyemi" },
        { no: 21, name: "Donyell Malen" }
      ],
      subs: [
        { minute: 35, on: "Jamie Gittens",     onNo: 43, off: "Karim Adeyemi" },
        { minute: 65, on: "Jude Bellingham",   onNo: 22, off: "Salih \u00d6zcan" },
        { minute: 66, on: "S\u00e9bastien Haller", onNo: 9,  off: "Donyell Malen" },
        { minute: 87, on: "Niklas S\u00fcle",      onNo: 25, off: "Marco Reus" }
      ],
      bench: [
        { no: 33, name: "Alexander Meyer" },
        { no: 24, name: "Thomas Meunier" },
        { no: 13, name: "Rapha\u00ebl Guerreiro" },
        { no: 8,  name: "Mahmoud Dahoud" },
        { no: 7,  name: "Giovanni Reyna" }
      ]
    },
    away: {
      formation: "3-3-2-2",
      coach: "Sandro Schwarz",
      xi: [
        { no: 1,  name: "Oliver Christensen" },
        { no: 5,  name: "Filip Uremovi\u0107" },
        { no: 20, name: "Marc Oliver Kempf" },
        { no: 31, name: "Marton Dardai" },
        { no: 23, name: "Marco Richter" },
        { no: 6,  name: "Tolga Ci\u011ferci" },
        { no: 21, name: "Marvin Plattenhardt" },
        { no: 29, name: "Lucas Tousart" },
        { no: 8,  name: "Suat Serdar" },
        { no: 24, name: "Jessic Ngankam" },
        { no: 7,  name: "Florian Niederlechner" }
      ],
      subs: [
        { minute: 68, on: "Agustin Rogel",        onNo: 3,  off: "Filip Uremovi\u0107" },
        { minute: 68, on: "Jean-Paul Bo\u00ebtius",  onNo: 10, off: "Suat Serdar" },
        { minute: 68, on: "Derry Scherhant",      onNo: 39, off: "Jessic Ngankam" },
        { minute: 68, on: "Dodi Lukebakio",       onNo: 11, off: "Florian Niederlechner" },
        { minute: 79, on: "Kevin-Prince Boateng", onNo: 27, off: "Tolga Ci\u011ferci" }
      ],
      bench: [
        { no: 12, name: "Tjark Ernst" },
        { no: 17, name: "Maximilian Mittelst\u00e4dt" },
        { no: 16, name: "Jonjoe Kenny" },
        { no: 34, name: "Ivan \u0160unji\u0107" }
      ]
    }
  },
  stats: null,
  note: {
    ro: "Adeyemi (Dortmund) a marcat cu un c\u0103lc\u00e2i și a pasat decisiv la golul doi, accidentându-se la coapsă în acea fază; a ieșit în minutul 35. Dortmund a marcat patru goluri din cinci șuturi pe poartă.",
    en: "Adeyemi (Dortmund) scored with a backheel and set up the second, injuring his thigh in that same move; he went off in the 35th minute. Dortmund scored four goals from five shots on target."
  }
},

{
  id: "2024-07-02-rou-ned",
  date: "2024-07-02",
  competition: { ro: "Campionatul European 2024", en: "UEFA Euro 2024" },
  competitionKey: { ro: "Campionatul European", en: "European Championship" },
  stage: { ro: "Optimi de finală", en: "Round of 16" },
  home: { name: "România", nameEn: "Romania", short: "ROU" },
  away: { name: "Olanda", nameEn: "Netherlands", short: "NED" },
  score: "0-3",
  stadium: "Allianz Arena",
  city: { ro: "München", en: "Munich" },
  country: { ro: "Germania", en: "Germany" },
  attendance: { value: 65012, approx: false, soldOut: false },
  goals: [
    { team: "away", player: "Cody Gakpo", minute: 20 },
    { team: "away", player: "Donyell Malen", minute: 83 },
    { team: "away", player: "Donyell Malen", minute: 90, added: 3 }
  ],
  cards: [
    { team: "home", player: "Marius Marin",   minute: 67, type: "yellow" },
    { team: "away", player: "Denzel Dumfries",minute: 78, type: "yellow" },
    { team: "home", player: "Nicolae Stanciu",minute: 81, type: "yellow" },
    { team: "away", player: "Donyell Malen",  minute: 90, added: 4, type: "yellow" }
  ],
  cardsComplete: true,
  lineups: {
    home: {
      formation: "4-1-4-1",
      coach: "Edward Iord\u0103nescu",
      captain: "Nicolae Stanciu",
      xi: [
        { no: 1,  name: "Florin Ni\u021b\u0103" },
        { no: 2,  name: "Andrei Ra\u021biu" },
        { no: 3,  name: "Radu Dr\u0103gu\u0219in" },
        { no: 15, name: "Andrei Burc\u0103" },
        { no: 22, name: "Vasile Mogo\u0219" },
        { no: 6,  name: "Marius Marin" },
        { no: 20, name: "Dennis Man" },
        { no: 21, name: "Nicolae Stanciu" },
        { no: 18, name: "R\u0103zvan Marin" },
        { no: 10, name: "Ianis Hagi" },
        { no: 19, name: "Denis Dr\u0103gu\u0219" }
      ],
      subs: [
        { minute: 38, on: "Adrian Racovi\u021ban", onNo: 24, off: "Vasile Mogo\u0219" },
        { minute: 72, on: "Alexandru Cic\u00e2ld\u0103u", onNo: 8, off: "Marius Marin" },
        { minute: 72, on: "Denis Alibec",      onNo: 7,  off: "Ianis Hagi" },
        { minute: 72, on: "Valentin Mih\u0103il\u0103", onNo: 13, off: "Denis Dr\u0103gu\u0219" },
        { minute: 88, on: "Darius Olaru",      onNo: 14, off: "Nicolae Stanciu" }
      ],
      bench: [
        { no: 12, name: "Horatiu Moldovan" },
        { no: 16, name: "\u0218tefan T\u00e2rnovanu" },
        { no: 4,  name: "Adrian Rus" },
        { no: 5,  name: "Ionu\u021b Nedelcearu" },
        { no: 9,  name: "George Pu\u0219ca\u0219" },
        { no: 23, name: "Deian Sorescu" },
        { no: 25, name: "Daniel B\u00eerligea" },
        { no: 26, name: "Adrian \u0218ut" }
      ]
    },
    away: {
      formation: "4-3-3",
      coach: "Ronald Koeman",
      captain: "Virgil van Dijk",
      xi: [
        { no: 1,  name: "Bart Verbruggen" },
        { no: 5,  name: "Nathan Ak\u00e9" },
        { no: 4,  name: "Virgil van Dijk" },
        { no: 6,  name: "Stefan de Vrij" },
        { no: 22, name: "Denzel Dumfries" },
        { no: 14, name: "Tijjani Reijnders" },
        { no: 7,  name: "Xavi Simons" },
        { no: 24, name: "Jerdy Schouten" },
        { no: 11, name: "Cody Gakpo" },
        { no: 10, name: "Memphis Depay" },
        { no: 25, name: "Steven Bergwijn" }
      ],
      subs: [
        { minute: 46, on: "Donyell Malen",   onNo: 18, off: "Steven Bergwijn" },
        { minute: 69, on: "Micky van de Ven",onNo: 15, off: "Nathan Ak\u00e9" },
        { minute: 69, on: "Joey Veerman",    onNo: 16, off: "Jerdy Schouten" },
        { minute: 84, on: "Wout Weghorst",   onNo: 9,  off: "Cody Gakpo" },
        { minute: 90, added: 2, on: "Daley Blind", onNo: 17, off: "Memphis Depay" }
      ],
      bench: [
        { no: 13, name: "Justin Bijlow" },
        { no: 23, name: "Mark Flekken" },
        { no: 2,  name: "Lutsharel Geertruida" },
        { no: 3,  name: "Matthijs de Ligt" },
        { no: 8,  name: "Georginio Wijnaldum" },
        { no: 12, name: "Jeremie Frimpong" },
        { no: 19, name: "Brian Brobbey" },
        { no: 20, name: "Ian Maatsen" },
        { no: 21, name: "Joshua Zirkzee" },
        { no: 26, name: "Ryan Gravenberch" }
      ]
    }
  },
  stats: {
    possession: [39, 61],
    shots: [5, 24],
    onTarget: [1, 6],
    fouls: [8, 9],
    corners: [4, 13],
    offsides: [0, 4]
  },
  statsSource: "UEFA.com",
  note: {
    ro: "România a fost echipa gazdă nominal, ca ocupantă a locului 1 în Grupa E. Primul meci eliminatoriu al României la un turneu final de la Euro 2000.",
    en: "Romania were the nominal home side as winners of Group E. Their first knockout match at a major tournament since Euro 2000."
  }
},

{
  id: "2024-07-05-esp-ger",
  date: "2024-07-05",
  competition: { ro: "Campionatul European 2024", en: "UEFA Euro 2024" },
  competitionKey: { ro: "Campionatul European", en: "European Championship" },
  stage: { ro: "Sferturi de finală", en: "Quarter-final" },
  home: { name: "Spania", nameEn: "Spain", short: "ESP" },
  away: { name: "Germania", nameEn: "Germany", short: "GER" },
  score: "2-1",
  after90: "1-1",
  stadium: "MHP Arena",
  city: { ro: "Stuttgart", en: "Stuttgart" },
  country: { ro: "Germania", en: "Germany" },
  attendance: { value: 51000, approx: true, soldOut: false },
  referee: "Anthony Taylor",
  goals: [
    { team: "home", player: "Dani Olmo", minute: 52 },
    { team: "away", player: "Florian Wirtz", minute: 89 },
    { team: "home", player: "Mikel Merino", minute: 119 }
  ],
  cards: [
    { team: "away", player: "Antonio R\u00fcdiger",      minute: 13, type: "yellow" },
    { team: "away", player: "David Raum",           minute: 28, type: "yellow" },
    { team: "home", player: "Robin Le Normand",     minute: 29, type: "yellow" },
    { team: "away", player: "Robert Andrich",       minute: 57, type: "yellow" },
    { team: "away", player: "Toni Kroos",           minute: 67, type: "yellow" },
    { team: "away", player: "Maximilian Mittelst\u00e4dt", minute: 73, type: "yellow" },
    { team: "home", player: "Ferr\u00e1n Torres",       minute: 74, type: "yellow" },
    { team: "home", player: "Unai Sim\u00f3n",          minute: 82, type: "yellow" },
    { team: "away", player: "Nico Schlotterbeck",   minute: 89, type: "yellow" },
    { team: "away", player: "Florian Wirtz",        minute: 94, type: "yellow" },
    { team: "home", player: "Rodri",                minute: 110, type: "yellow" },
    { team: "away", player: "Deniz Undav",          minute: 113, type: "yellow" },
    { team: "home", player: "Dani Carvajal",        minute: 100, type: "yellow" },
    { team: "home", player: "Fabi\u00e1n Ruiz",         minute: 120, type: "yellow" },
    { team: "home", player: "Dani Carvajal",        minute: 120, added: 4, type: "second-yellow" }
  ],
  cardsComplete: true,
  lineups: {
    home: {
      formation: "4-2-3-1",
      coach: "Luis de la Fuente",
      captain: "\u00c1lvaro Morata",
      xi: [
        { no: 23, name: "Unai Sim\u00f3n" },
        { no: 2,  name: "Dani Carvajal" },
        { no: 3,  name: "Robin Le Normand" },
        { no: 14, name: "Aymeric Laporte" },
        { no: 24, name: "Marc Cucurella" },
        { no: 16, name: "Rodri" },
        { no: 8,  name: "Fabi\u00e1n Ruiz" },
        { no: 19, name: "Lamine Yamal" },
        { no: 20, name: "Pedri" },
        { no: 17, name: "Nico Williams" },
        { no: 7,  name: "\u00c1lvaro Morata" }
      ],
      subs: [
        { minute: 8,   on: "Dani Olmo",       onNo: 10, off: "Pedri" },
        { minute: 46,  on: "Nacho Fern\u00e1ndez", onNo: 4,  off: "Robin Le Normand" },
        { minute: 63,  on: "Ferr\u00e1n Torres",   onNo: 11, off: "Lamine Yamal" },
        { minute: 80,  on: "Mikel Oyarzabal", onNo: 21, off: "Nico Williams" },
        { minute: 80,  on: "Mikel Merino",    onNo: 6,  off: "\u00c1lvaro Morata" },
        { minute: 102, on: "Jos\u00e9lu",         onNo: 9,  off: "Fabi\u00e1n Ruiz" }
      ],
      bench: [
        { no: 13, name: "\u00c1lex Remiro" },
        { no: 1,  name: "David Raya" },
        { no: 5,  name: "Dani Vivian" },
        { no: 12, name: "Alejandro Grimaldo" },
        { no: 25, name: "Ferm\u00edn L\u00f3pez" },
        { no: 22, name: "Jes\u00fas Navas" },
        { no: 15, name: "\u00c1lex Baena" },
        { no: 18, name: "Martin Zubimendi" },
        { no: 26, name: "Ayoze P\u00e9rez" }
      ]
    },
    away: {
      formation: "4-2-3-1",
      coach: "Julian Nagelsmann",
      captain: "\u0130lkay G\u00fcndo\u011fan",
      xi: [
        { no: 1,  name: "Manuel Neuer" },
        { no: 6,  name: "Joshua Kimmich" },
        { no: 2,  name: "Antonio R\u00fcdiger" },
        { no: 4,  name: "Jonathan Tah" },
        { no: 3,  name: "David Raum" },
        { no: 25, name: "Emre Can" },
        { no: 8,  name: "Toni Kroos" },
        { no: 19, name: "Leroy San\u00e9" },
        { no: 21, name: "\u0130lkay G\u00fcndo\u011fan" },
        { no: 10, name: "Jamal Musiala" },
        { no: 7,  name: "Kai Havertz" }
      ],
      subs: [
        { minute: 46, on: "Florian Wirtz",          onNo: 17, off: "Leroy San\u00e9" },
        { minute: 46, on: "Robert Andrich",         onNo: 23, off: "Emre Can" },
        { minute: 57, on: "Maximilian Mittelst\u00e4dt", onNo: 18, off: "David Raum" },
        { minute: 57, on: "Niclas F\u00fcllkrug",       onNo: 9,  off: "\u0130lkay G\u00fcndo\u011fan" },
        { minute: 80, on: "Thomas M\u00fcller",         onNo: 13, off: "Jonathan Tah" },
        { minute: 91, on: "Waldemar Anton",         onNo: 16, off: "Kai Havertz" }
      ],
      bench: [
        { no: 12, name: "Oliver Baumann" },
        { no: 22, name: "Marc-Andr\u00e9 ter Stegen" },
        { no: 15, name: "Nico Schlotterbeck" },
        { no: 20, name: "Benjamin Henrichs" },
        { no: 24, name: "Robin Koch" },
        { no: 11, name: "Chris F\u00fchrich" },
        { no: 5,  name: "Pascal Gro\u00df" },
        { no: 14, name: "Maximilian Beier" },
        { no: 26, name: "Deniz Undav" }
      ]
    }
  },
  stats: {
    possession: [52, 48],
    shots: [18, 23],
    onTarget: [6, 5],
    fouls: [17, 22],
    corners: [1, 5],
    offsides: [3, 2]
  },
  statsSource: "UEFA.com",
  note: {
    ro: "Golul lui Merino (Spania) a încheiat cariera lui Toni Kroos (Germania), la meciul 833 al carierei; a fost și ultimul meci al lui Manuel Neuer (Germania) la națională. Arbitrul Anthony Taylor a dat 16 cartonașe galbene.",
    en: "Merino's (Spain) goal ended the career of Toni Kroos (Germany) in his 833rd match; it was also Manuel Neuer's (Germany) last international. UEFA records 15 yellow cards (7 Spain, 8 Germany). Carvajal (Spain) was sent off for a second booking in the 120+4th minute."
  }
},

{
  id: "2024-07-09-esp-fra",
  date: "2024-07-09",
  competition: { ro: "Campionatul European 2024", en: "UEFA Euro 2024" },
  competitionKey: { ro: "Campionatul European", en: "European Championship" },
  stage: { ro: "Semifinale", en: "Semi-final" },
  home: { name: "Spania", nameEn: "Spain", short: "ESP" },
  away: { name: "Franța", nameEn: "France", short: "FRA" },
  score: "2-1",
  stadium: "Allianz Arena",
  city: { ro: "München", en: "Munich" },
  country: { ro: "Germania", en: "Germany" },
  attendance: { value: 62042, approx: false, soldOut: false },
  goals: [
    { team: "away", player: "Randal Kolo Muani", minute: 9 },
    { team: "home", player: "Lamine Yamal", minute: 21 },
    { team: "home", player: "Dani Olmo", minute: 25 }
  ],
  cards: [
    { team: "home", player: "Jes\u00fas Navas",  minute: 14, type: "yellow" },
    { team: "away", player: "Aur\u00e9lien Tchouam\u00e9ni", minute: 60, type: "yellow" },
    { team: "away", player: "Eduardo Camavinga", minute: 89, type: "yellow" },
    { team: "home", player: "Lamine Yamal",  minute: 90, added: 1, type: "yellow" }
  ],
  cardsComplete: true,
  lineups: {
    home: {
      formation: "4-2-3-1",
      coach: "Luis de la Fuente",
      captain: "\u00c1lvaro Morata",
      xi: [
        { no: 23, name: "Unai Sim\u00f3n" },
        { no: 22, name: "Jes\u00fas Navas" },
        { no: 4,  name: "Nacho Fern\u00e1ndez" },
        { no: 14, name: "Aymeric Laporte" },
        { no: 24, name: "Marc Cucurella" },
        { no: 16, name: "Rodri" },
        { no: 8,  name: "Fabi\u00e1n Ruiz" },
        { no: 19, name: "Lamine Yamal" },
        { no: 10, name: "Dani Olmo" },
        { no: 17, name: "Nico Williams" },
        { no: 7,  name: "\u00c1lvaro Morata" }
      ],
      subs: [
        { minute: 58, on: "Dani Vivian",    onNo: 5,  off: "Jes\u00fas Navas" },
        { minute: 76, on: "Mikel Merino",   onNo: 6,  off: "Dani Olmo" },
        { minute: 76, on: "Mikel Oyarzabal",onNo: 21, off: "\u00c1lvaro Morata" },
        { minute: 90, added: 3, on: "Martin Zubimendi", onNo: 18, off: "Nico Williams" },
        { minute: 90, added: 4, on: "Ferr\u00e1n Torres",   onNo: 11, off: "Lamine Yamal" }
      ],
      bench: [
        { no: 1,  name: "David Raya" },
        { no: 13, name: "\u00c1lex Remiro" },
        { no: 9,  name: "Jos\u00e9lu" },
        { no: 12, name: "Alejandro Grimaldo" },
        { no: 15, name: "\u00c1lex Baena" },
        { no: 25, name: "Ferm\u00edn L\u00f3pez" },
        { no: 26, name: "Ayoze P\u00e9rez" }
      ]
    },
    away: {
      formation: "4-3-3",
      coach: "Didier Deschamps",
      captain: "Kylian Mbapp\u00e9",
      xi: [
        { no: 16, name: "Mike Maignan" },
        { no: 22, name: "Theo Hern\u00e1ndez" },
        { no: 17, name: "William Saliba" },
        { no: 4,  name: "Dayot Upamecano" },
        { no: 5,  name: "Jules Kound\u00e9" },
        { no: 14, name: "Adrien Rabiot" },
        { no: 8,  name: "Aur\u00e9lien Tchouam\u00e9ni" },
        { no: 13, name: "N'Golo Kant\u00e9" },
        { no: 10, name: "Kylian Mbapp\u00e9" },
        { no: 12, name: "Randal Kolo Muani" },
        { no: 11, name: "Ousmane Demb\u00e9l\u00e9" }
      ],
      subs: [
        { minute: 62, on: "Bradley Barcola",   onNo: 25, off: "Randal Kolo Muani" },
        { minute: 62, on: "Antoine Griezmann", onNo: 7,  off: "N'Golo Kant\u00e9" },
        { minute: 62, on: "Eduardo Camavinga", onNo: 6,  off: "Adrien Rabiot" },
        { minute: 79, on: "Olivier Giroud",    onNo: 9,  off: "Ousmane Demb\u00e9l\u00e9" }
      ],
      bench: [
        { no: 1,  name: "Brice Samba" },
        { no: 23, name: "Alphonse Areola" },
        { no: 2,  name: "Benjamin Pavard" },
        { no: 3,  name: "Ferland Mendy" },
        { no: 15, name: "Marcus Thuram" },
        { no: 18, name: "Warren Za\u00efre-Emery" },
        { no: 19, name: "Youssouf Fofana" },
        { no: 20, name: "Kingsley Coman" },
        { no: 21, name: "J\u00e9r\u00e9my Clauss" },
        { no: 24, name: "Ibrahima Konat\u00e9" }
      ]
    }
  },
  stats: {
    possession: [58, 42],
    shots: [6, 9],
    onTarget: [2, 3],
    fouls: [9, 14],
    corners: [4, 6],
    offsides: [0, 0]
  },
  statsSource: "UEFA.com",
  note: {
    ro: "Lamine Yamal (Spania) avea 16 ani și 362 de zile — cel mai tânăr marcator din istoria Campionatului European, record deținut anterior de Johan Vonlanthen (Elveția), 18 ani, în 2004.",
    en: "Lamine Yamal (Spain) was 16 years and 362 days old — the youngest scorer in European Championship history, a record previously held by Johan Vonlanthen (Switzerland), aged 18, in 2004."
  }
},

{
  id: "2024-07-10-ned-eng",
  date: "2024-07-10",
  competition: { ro: "Campionatul European 2024", en: "UEFA Euro 2024" },
  competitionKey: { ro: "Campionatul European", en: "European Championship" },
  stage: { ro: "Semifinale", en: "Semi-final" },
  home: { name: "Olanda", nameEn: "Netherlands", short: "NED" },
  away: { name: "Anglia", nameEn: "England", short: "ENG" },
  score: "1-2",
  stadium: "Signal Iduna Park",
  city: { ro: "Dortmund", en: "Dortmund" },
  country: { ro: "Germania", en: "Germany" },
  attendance: { value: 60926, approx: false, soldOut: false },
  goals: [
    { team: "home", player: "Xavi Simons", minute: 7 },
    { team: "away", player: "Harry Kane", minute: 18, pen: true },
    { team: "away", player: "Ollie Watkins", minute: 90 }
  ],
  cards: [
    { team: "home", player: "Denzel Dumfries",  minute: 17, type: "yellow" },
    { team: "away", player: "Jude Bellingham",  minute: 72, type: "yellow" },
    { team: "away", player: "Bukayo Saka",      minute: 86, type: "yellow" },
    { team: "home", player: "Virgil van Dijk",  minute: 87, type: "yellow" },
    { team: "home", player: "Xavi Simons",      minute: 90, added: 1, type: "yellow" },
    { team: "away", player: "Kieran Trippier",  minute: 90, added: 4, type: "yellow" }
  ],
  cardsComplete: true,
  lineups: {
    home: {
      formation: "4-3-3",
      coach: "Ronald Koeman",
      captain: "Virgil van Dijk",
      xi: [
        { no: 1,  name: "Bart Verbruggen" },
        { no: 22, name: "Denzel Dumfries" },
        { no: 6,  name: "Stefan de Vrij" },
        { no: 4,  name: "Virgil van Dijk" },
        { no: 5,  name: "Nathan Ak\u00e9" },
        { no: 24, name: "Jerdy Schouten" },
        { no: 7,  name: "Xavi Simons" },
        { no: 14, name: "Tijjani Reijnders" },
        { no: 18, name: "Donyell Malen" },
        { no: 10, name: "Memphis Depay" },
        { no: 11, name: "Cody Gakpo" }
      ],
      subs: [
        { minute: 35, on: "Joey Veerman",  onNo: 16, off: "Memphis Depay" },
        { minute: 46, on: "Wout Weghorst", onNo: 9,  off: "Donyell Malen" },
        { minute: 90, added: 3, on: "Joshua Zirkzee", onNo: 21, off: "Denzel Dumfries" },
        { minute: 90, added: 3, on: "Brian Brobbey", onNo: 19, off: "Xavi Simons" }
      ],
      bench: [
        { no: 13, name: "Justin Bijlow" },
        { no: 23, name: "Mark Flekken" },
        { no: 2,  name: "Lutsharel Geertruida" },
        { no: 3,  name: "Matthijs de Ligt" },
        { no: 8,  name: "Georginio Wijnaldum" },
        { no: 12, name: "Jeremie Frimpong" },
        { no: 15, name: "Micky van de Ven" },
        { no: 17, name: "Daley Blind" },
        { no: 20, name: "Ian Maatsen" },
        { no: 25, name: "Steven Bergwijn" },
        { no: 26, name: "Ryan Gravenberch" }
      ]
    },
    away: {
      formation: "4-2-3-1",
      coach: "Gareth Southgate",
      captain: "Harry Kane",
      xi: [
        { no: 1,  name: "Jordan Pickford" },
        { no: 2,  name: "Kyle Walker" },
        { no: 5,  name: "John Stones" },
        { no: 6,  name: "Marc Gu\u00e9hi" },
        { no: 12, name: "Kieran Trippier" },
        { no: 4,  name: "Declan Rice" },
        { no: 26, name: "Kobbie Mainoo" },
        { no: 7,  name: "Bukayo Saka" },
        { no: 10, name: "Jude Bellingham" },
        { no: 11, name: "Phil Foden" },
        { no: 9,  name: "Harry Kane" }
      ],
      subs: [
        { minute: 46, on: "Luke Shaw",      onNo: 3,  off: "Kieran Trippier" },
        { minute: 81, on: "Ollie Watkins",  onNo: 19, off: "Harry Kane" },
        { minute: 81, on: "Cole Palmer",    onNo: 24, off: "Phil Foden" },
        { minute: 90, added: 3, on: "Conor Gallagher", onNo: 16, off: "Kobbie Mainoo" },
        { minute: 90, added: 3, on: "Ezri Konsa",      onNo: 14, off: "Bukayo Saka" }
      ],
      bench: [
        { no: 13, name: "Aaron Ramsdale" },
        { no: 23, name: "Dean Henderson" },
        { no: 8,  name: "Trent Alexander-Arnold" },
        { no: 15, name: "Lewis Dunk" },
        { no: 17, name: "Ivan Toney" },
        { no: 18, name: "Anthony Gordon" },
        { no: 20, name: "Jarrod Bowen" },
        { no: 21, name: "Eberechi Eze" },
        { no: 22, name: "Joe Gomez" },
        { no: 25, name: "Adam Wharton" }
      ]
    }
  },
  stats: {
    possession: [40, 60],
    shots: [6, 9],
    onTarget: [2, 4],
    fouls: [11, 6],
    corners: [3, 0],
    offsides: [1, 4]
  },
  statsSource: "UEFA.com",
  note: {
    ro: "Watkins (Anglia) intrase în locul lui Kane (Anglia) în minutul 81. Prima întâlnire dintre cele două la un turneu final de la Euro 1996, când Anglia câștigase 4-1.",
    en: "Watkins (England) had come on for Kane (England) in the 81st minute. Their first meeting at a major tournament since Euro 1996, when England won 4-1."
  }
},

{
  id: "2024-10-14-ger-ned",
  date: "2024-10-14",
  competition: { ro: "Liga Națiunilor UEFA 2024/25", en: "UEFA Nations League 2024/25" },
  competitionKey: { ro: "Liga Națiunilor UEFA", en: "UEFA Nations League" },
  stage: { ro: "Liga A · Grupa 3 · Etapa 4", en: "League A · Group 3 · Matchday 4" },
  home: { name: "Germania", nameEn: "Germany", short: "GER" },
  away: { name: "Olanda", nameEn: "Netherlands", short: "NED" },
  score: "1-0",
  stadium: "Allianz Arena",
  city: { ro: "München", en: "Munich" },
  country: { ro: "Germania", en: "Germany" },
  attendance: { value: 68763, approx: false, soldOut: false },
  goals: [ { team: "home", player: "Jamie Leweling", minute: 64 } ],
  referee: "Slavko Vin\u010di\u0107",
  cards: [
    { team: "away", player: "Tijjani Reijnders",  minute: 30, type: "yellow" },
    { team: "home", player: "Antonio R\u00fcdiger",    minute: 63, type: "yellow" },
    { team: "away", player: "Mats Wieffer",       minute: 63, type: "yellow" },
    { team: "home", player: "Waldemar Anton",     minute: 90, added: 3, type: "yellow" },
    { team: "home", player: "Nico Schlotterbeck", minute: 90, added: 3, type: "yellow" },
    { team: "away", player: "Xavi Simons",        minute: 90, added: 4, type: "yellow" }
  ],
  cardsComplete: true,
  lineups: {
    home: {
      formation: "4-2-3-1",
      coach: "Julian Nagelsmann",
      xi: [
        { no: 1,  name: "Oliver Baumann" },
        { no: 6,  name: "Joshua Kimmich" },
        { no: 2,  name: "Antonio R\u00fcdiger" },
        { no: 15, name: "Nico Schlotterbeck" },
        { no: 18, name: "Maximilian Mittelst\u00e4dt" },
        { no: 16, name: "Aleksandar Pavlovi\u0107" },
        { no: 19, name: "Angelo Stiller" },
        { no: 7,  name: "Jamie Leweling" },
        { no: 17, name: "Florian Wirtz" },
        { no: 20, name: "Serge Gnabry" },
        { no: 9,  name: "Tim Kleindienst" }
      ],
      subs: [
        { minute: 46, on: "Robert Andrich",    onNo: 8,  off: "Florian Wirtz" },
        { minute: 77, on: "Kevin Schade",      onNo: 14, off: "Aleksandar Pavlovi\u0107" },
        { minute: 82, on: "Jonathan Burkardt", onNo: 10, off: "Tim Kleindienst" },
        { minute: 82, on: "Waldemar Anton",    onNo: 3,  off: "Angelo Stiller" },
        { minute: 87, on: "Robin Gosens",      onNo: 21, off: "Jamie Leweling" }
      ],
      bench: [
        { no: 22, name: "Janis Blaswich" },
        { no: 12, name: "Alexander N\u00fcbel" },
        { no: 4,  name: "Jonathan Tah" },
        { no: 5,  name: "Pascal Gro\u00df" },
        { no: 13, name: "Deniz Undav" }
      ]
    },
    away: {
      formation: "4-3-3",
      coach: "Ronald Koeman",
      xi: [
        { no: 1,  name: "Bart Verbruggen" },
        { no: 22, name: "Denzel Dumfries" },
        { no: 6,  name: "Stefan de Vrij" },
        { no: 5,  name: "Micky van de Ven" },
        { no: 3,  name: "Jorrel Hato" },
        { no: 8,  name: "Ryan Gravenberch" },
        { no: 14, name: "Tijjani Reijnders" },
        { no: 16, name: "Quinten Timber" },
        { no: 7,  name: "Xavi Simons" },
        { no: 11, name: "Cody Gakpo" },
        { no: 9,  name: "Brian Brobbey" }
      ],
      subs: [
        { minute: 46, on: "Donyell Malen",       onNo: 18, off: "Tijjani Reijnders" },
        { minute: 46, on: "Mats Wieffer",        onNo: 19, off: "Quinten Timber" },
        { minute: 65, on: "Jeremie Frimpong",    onNo: 12, off: "Cody Gakpo" },
        { minute: 75, on: "Joshua Zirkzee",      onNo: 10, off: "Brian Brobbey" },
        { minute: 80, on: "Lutsharel Geertruida",onNo: 2,  off: "Ryan Gravenberch" }
      ],
      bench: [
        { no: 23, name: "Mark Flekken" },
        { no: 13, name: "Nick Olij" },
        { no: 15, name: "Matthijs de Ligt" },
        { no: 21, name: "Ian Maatsen" },
        { no: 17, name: "Justin Kluivert" },
        { no: 20, name: "Guus Til" }
      ]
    }
  },
  stats: null,
  note: {
    ro: "Leweling (Germania) a avut un gol anulat pentru ofsaid în minutul 2 al primului său meci la națională, înainte să marcheze golul victoriei. Oliver Baumann (Germania) a debutat la 34 de ani și 134 de zile, al treilea cel mai vârstnic debutant din istoria naționalei, după 26 de convocări petrecute pe bancă — cea mai lungă așteptare înregistrată la DFB.",
    en: "Leweling (Germany) had a goal ruled out for offside in the 2nd minute of his first cap, before scoring the winner. Oliver Baumann (Germany) debuted aged 34 years and 134 days, the third-oldest debutant in the national team's history, after 26 call-ups spent on the bench — the longest recorded wait at the DFB."
  }
},

{
  id: "2024-11-26-fcb-psg",
  date: "2024-11-26",
  competition: { ro: "Liga Campionilor 2024/25", en: "UEFA Champions League 2024/25" },
  competitionKey: { ro: "Liga Campionilor", en: "Champions League" },
  stage: { ro: "Faza ligii · Etapa 5", en: "League phase · Matchday 5" },
  home: { name: "Bayern München", nameEn: "Bayern Munich", short: "FCB" },
  away: { name: "Paris Saint-Germain", nameEn: "Paris Saint-Germain", short: "PSG" },
  score: "1-0",
  stadium: "Allianz Arena",
  city: { ro: "München", en: "Munich" },
  country: { ro: "Germania", en: "Germany" },
  attendance: { value: 75000, approx: false, soldOut: true },
  goals: [ { team: "home", player: "Kim Min-jae", minute: 38, assist: "Joshua Kimmich" } ],
  referee: "Istv\u00e1n Kov\u00e1cs",
  cards: [
    { team: "home", player: "Kingsley Coman",   minute: null, type: "yellow" },
    { team: "home", player: "Serge Gnabry",     minute: null, type: "yellow" },
    { team: "home", player: "Michael Olise",    minute: null, type: "yellow" },
    { team: "away", player: "Achraf Hakimi",    minute: null, type: "yellow" },
    { team: "away", player: "Ousmane Demb\u00e9l\u00e9", minute: 56, type: "second-yellow" }
  ],
  cardsComplete: true,
  lineups: {
    home: {
      formation: "4-2-3-1",
      coach: "Vincent Kompany",
      captain: "Joshua Kimmich",
      xi: [
        { no: 1,  name: "Manuel Neuer" },
        { no: 27, name: "Konrad Laimer" },
        { no: 2,  name: "Dayot Upamecano" },
        { no: 3,  name: "Kim Min-jae" },
        { no: 19, name: "Alphonso Davies" },
        { no: 6,  name: "Joshua Kimmich" },
        { no: 8,  name: "Leon Goretzka" },
        { no: 10, name: "Leroy San\u00e9" },
        { no: null, name: "Jamal Musiala" },
        { no: 11, name: "Kingsley Coman" },
        { no: 9,  name: "Harry Kane" }
      ],
      subs: [
        { minute: 72, on: "Serge Gnabry",  onNo: 7,  off: "Kingsley Coman" },
        { minute: 72, on: "Michael Olise", onNo: 17, off: "Leroy San\u00e9" },
        { minute: 78, on: "Thomas M\u00fcller", onNo: 25, off: "Jamal Musiala" }
      ],
      bench: [
        { no: 18, name: "Daniel Peretz" },
        { no: 35, name: "Max Schmitt" },
        { no: 15, name: "Eric Dier" },
        { no: 23, name: "Sacha Boey" },
        { no: 22, name: "Rapha\u00ebl Guerreiro" },
        { no: 20, name: "Arijon Ibrahimovi\u0107" },
        { no: 39, name: "Mathys Tel" }
      ]
    },
    away: {
      formation: "4-4-2",
      coach: "Luis Enrique",
      captain: "Marquinhos",
      xi: [
        { no: 39, name: "Matvey Safonov" },
        { no: 2,  name: "Achraf Hakimi" },
        { no: 5,  name: "Marquinhos" },
        { no: 51, name: "Willian Pacho" },
        { no: 25, name: "Nuno Mendes" },
        { no: 33, name: "Warren Za\u00efre-Emery" },
        { no: 17, name: "Vitinha" },
        { no: 87, name: "Jo\u00e3o Neves" },
        { no: 8,  name: "Fabi\u00e1n Ruiz" },
        { no: 29, name: "Bradley Barcola" },
        { no: 10, name: "Ousmane Demb\u00e9l\u00e9" }
      ],
      subs: [
        { minute: 65, on: "Lee Kang-In",     onNo: 19, off: "Warren Za\u00efre-Emery" },
        { minute: 72, on: "Gon\u00e7alo Ramos", onNo: 9,  off: "Bradley Barcola" },
        { minute: 83, on: "Marco Asensio",   onNo: 11, off: "Fabi\u00e1n Ruiz" }
      ],
      bench: [
        { no: 1,  name: "Gianluigi Donnarumma" },
        { no: 80, name: "Arnau Tenas" },
        { no: 37, name: "Milan Skriniar" },
        { no: 35, name: "Beraldo" },
        { no: 42, name: "Yoram Zague" },
        { no: 14, name: "D\u00e9sir\u00e9 Dou\u00e9" },
        { no: 23, name: "Randal Kolo Muani" }
      ]
    }
  },
  stats: {
    possession: [57, 43],
    shots: [18, 11],
    onTarget: [7, 3],
    fouls: [13, 10],
    corners: [4, 3],
    offsides: [1, 2]
  },
  statsSource: "fcbayern.com Match Centre (Opta Sports)",
  note: {
    ro: "Primul gol al lui Kim (Bayern) în Liga Campionilor, la a 23-a apariție, cu capul dintr-un corner al lui Kimmich (Bayern). Dembélé (PSG) a fost eliminat pentru al doilea galben, prima sa eliminare din 2019. Kompany (antrenor, Bayern) a recunoscut la conferința de presă că nu se uită la clasament fiindcă încă nu înțelege noul format.",
    en: "Kim's (Bayern) first Champions League goal, on his 23rd appearance, headed in from a Kimmich (Bayern) corner. Dembélé (PSG) was sent off for a second yellow, his first dismissal since 2019. Kompany (coach, Bayern) admitted in the press conference that he doesn't look at the table because he still doesn't understand the new format."
  }
},

{
  id: "2024-12-12-hof-fcsb",
  date: "2024-12-12",
  competition: { ro: "Liga Europa 2024/25", en: "UEFA Europa League 2024/25" },
  competitionKey: { ro: "Liga Europa", en: "Europa League" },
  stage: { ro: "Faza ligii · Etapa 6", en: "League phase · Matchday 6" },
  home: { name: "TSG Hoffenheim", nameEn: "TSG Hoffenheim", short: "TSG" },
  away: { name: "FCSB", nameEn: "FCSB", short: "FCSB" },
  score: "0-0",
  stadium: "PreZero Arena",
  city: { ro: "Sinsheim", en: "Sinsheim" },
  country: { ro: "Germania", en: "Germany" },
  attendance: { value: 23223, approx: false, soldOut: false },
  goals: [],
  referee: "Juxhin Xhaja",
  cards: [
    { team: "home", player: "Tom Bischof",     minute: 8,  type: "yellow" },
    { team: "away", player: "Darius Olaru",    minute: 34, type: "yellow" },
    { team: "away", player: "David Miculescu", minute: 49, type: "yellow" },
    { team: "home", player: "Max Moerstedt",   minute: 57, type: "yellow" },
    { team: "home", player: "Arthur Chaves",   minute: 59, type: "yellow" },
    { team: "home", player: "Dennis Geiger",   minute: 82, type: "yellow" },
    { team: "away", player: "Valentin Cre\u021bu", minute: 83, type: "yellow" }
  ],
  cardsComplete: true,
  lineups: {
    home: {
      formation: "4-2-3-1",
      coach: "Christian Ilzer",
      xi: [
        { no: 1,  name: "Oliver Baumann" },
        { no: 3,  name: "Pavel Kade\u0159\u00e1bek" },
        { no: 35, name: "Arthur Chaves" },
        { no: 34, name: "Stanley Nsoki" },
        { no: 19, name: "David Jur\u00e1sek" },
        { no: 16, name: "Anton Stach" },
        { no: 18, name: "Diadie Samass\u00e9kou" },
        { no: 29, name: "Jacob Bruun Larsen" },
        { no: 27, name: "Andrej Kramari\u0107" },
        { no: 7,  name: "Tom Bischof" },
        { no: 23, name: "Adam Hlo\u017eek" }
      ],
      subs: [
        { minute: 46, on: "Max Moerstedt",   onNo: null, off: "Adam Hlo\u017eek" },
        { minute: 64, on: "Kevin Akpoguma",  onNo: null, off: "Arthur Chaves" },
        { minute: 64, on: "Dennis Geiger",   onNo: null, off: "Tom Bischof" },
        { minute: 72, on: "Haris Tabakovi\u0107", onNo: null, off: "Jacob Bruun Larsen" },
        { minute: 79, on: "Alexander Prass", onNo: null, off: "David Jur\u00e1sek" }
      ],
      bench: []
    },
    away: {
      formation: "4-2-3-1",
      coach: "Elias Charalambous",
      xi: [
        { no: 32, name: "\u0218tefan T\u00e2rnovanu" },
        { no: 2,  name: "Valentin Cre\u021bu" },
        { no: 17, name: "Mihai Popescu" },
        { no: 5,  name: "Dawa" },
        { no: 33, name: "Risto Radunovi\u0107" },
        { no: 21, name: "Vlad Chiriche\u0219" },
        { no: 8,  name: "Adrian \u0218ut" },
        { no: 11, name: "David Miculescu" },
        { no: 27, name: "Darius Olaru" },
        { no: 7,  name: "Florin T\u0103nase" },
        { no: 19, name: "Daniel Popa" }
      ],
      subs: [
        { minute: 64, on: "Baba Alhassan", onNo: null, off: "Daniel Popa" },
        { minute: 90, added: 3, on: "Mihai Toma", onNo: null, off: "Darius Olaru" }
      ],
      bench: []
    }
  },
  stats: null,
  note: {
    ro: "Prima întâlnire din istorie dintre cele două cluburi, cu aproximativ 10.000 de suporteri români în tribune. Punctul a asigurat matematic accesul FCSB în play-off, cu 11 puncte după șase etape. Târnovanu (FCSB) a fost desemnat jucătorul meciului.",
    en: "The first ever meeting between the two clubs, with around 10,000 Romanian supporters in the ground. The point mathematically secured FCSB's play-off place, with 11 points after six matchdays. Târnovanu (FCSB) was named man of the match."
  }
},

{
  id: "2025-05-14-cfr-fch",
  date: "2025-05-14",
  competition: { ro: "Cupa României 2024/25", en: "Cupa României 2024/25" },
  competitionKey: { ro: "Cupa României", en: "Romanian Cup" },
  stage: { ro: "Finala (ediția 87)", en: "Final (87th edition)" },
  home: { name: "CFR Cluj", nameEn: "CFR Cluj", short: "CFR" },
  away: { name: "FC Hermannstadt", nameEn: "FC Hermannstadt", short: "FCH" },
  score: "3-2",
  stadium: "Stadionul Francisc von Neuman",
  city: { ro: "Arad", en: "Arad" },
  country: { ro: "România", en: "Romania" },
  attendance: { value: 9000, approx: true, soldOut: false },
  goals: [
    { team: "home", player: "Louis Munteanu", minute: 23 },
    { team: "home", player: "Mohammed Kamara", minute: 15 },
    { team: "away", player: "Tiberiu Căpușă", minute: 37 },
    { team: "home", player: "Béni Nkololo", minute: 48 },
    { team: "away", player: "Sergiu Buș", minute: 74 }
  ],
  cards: [
    { team: "home", player: "Hindrich",         minute: null, type: "yellow" },
    { team: "home", player: "Graovac",          minute: null, type: "yellow" },
    { team: "home", player: "L. Emërllahu",     minute: null, type: "yellow" },
    { team: "home", player: "Mohammed Kamara",  minute: null, type: "yellow" },
    { team: "home", player: "Meriton Korenica", minute: null, type: "yellow" },
    { team: "home", player: "Béni Nkololo",     minute: null, type: "yellow" },
    { team: "away", player: "Stoica (7)",       minute: null, type: "yellow" },
    { team: "away", player: "Murgia",           minute: null, type: "yellow" },
    { team: "away", player: "A. Ivanov",        minute: null, type: "yellow" },
    { team: "away", player: "Tiberiu Căpușă",   minute: null, type: "yellow" },
    { team: "away", player: "Cristian Neguț",   minute: null, type: "yellow" },
    { team: "away", player: "Nana Antwi",       minute: null, type: "yellow" },
    { team: "home", player: "Đoković",          minute: 90, added: 7, type: "red" },
    { team: "away", player: "Tiago Gonçalves",  minute: 90, added: 7, type: "red" }
  ],
  cardsComplete: true,
  lineups: {
    home: {
      formation: "4-2-3-1",
      coach: "Dan Petrescu",
      xi: [
        { no: 89, name: "Hindrich" },
        { no: 45, name: "Mario Camora" },
        { no: 6,  name: "Sinyan" },
        { no: 4,  name: "L. Bolgado" },
        { no: 5,  name: "Graovac" },
        { no: 88, name: "Đoković" },
        { no: 18, name: "L. Emërllahu" },
        { no: 7,  name: "Mohammed Kamara" },
        { no: 17, name: "Meriton Korenica" },
        { no: 96, name: "Béni Nkololo" },
        { no: 9,  name: "Louis Munteanu" }
      ],
      subs: [
        { minute: 82, on: "Alin Fica",           onNo: 82, off: "Meriton Korenica" },
        { minute: 82, on: "Simão Rocha",         onNo: 13, off: "Mario Camora" },
        { minute: 82, on: "Virgiliu Postolachi", onNo: 93, off: "Béni Nkololo" },
        { minute: 90, on: "Matei Ilie",          onNo: 27, off: "Louis Munteanu" },
        { minute: 90, on: "Aly Abeid",           onNo: 3,  off: "Mohammed Kamara" }
      ],
      bench: [
        { no: null, name: "Mihai Popa" },
        { no: null, name: "Adrian Păun" },
        { no: null, name: "Ciprian Deac" },
        { no: null, name: "Andres Sfait" }
      ]
    },
    away: {
      formation: "5-3-2",
      coach: "Marius Măldărășanu",
      xi: [
        { no: 25, name: "Căbuz" },
        { no: 15, name: "Tiago Gonçalves" },
        { no: 2,  name: "Vahid Selimovic" },
        { no: 4,  name: "Stoica" },
        { no: 66, name: "Tiberiu Căpușă" },
        { no: 96, name: "Silviu Balaure" },
        { no: 8,  name: "Murgia" },
        { no: 24, name: "A. Ivanov" },
        { no: 29, name: "Ciprian Biceanu" },
        { no: 9,  name: "Aurelian Chitu" },
        { no: 7,  name: "Stoica (7)" }
      ],
      subs: [
        { minute: 46, on: "Florin Bejan",     onNo: 5,  off: "Vahid Selimovic" },
        { minute: 46, on: "Cristian Neguț",   onNo: 10, off: "Aurelian Chitu" },
        { minute: 46, on: "Nana Antwi",       onNo: 30, off: "Ciprian Biceanu" },
        { minute: 74, on: "Sergiu Buș",       onNo: 11, off: "Tiberiu Căpușă" },
        { minute: 90, on: "Robert Popescu",   onNo: 45, off: "Silviu Balaure" }
      ],
      bench: [
        { no: null, name: "Vlad Mutu" },
        { no: null, name: "Valerică Gaman" },
        { no: null, name: "Dragoș Iancu" },
        { no: null, name: "Kalifa Kujabi" }
      ]
    }
  },
  stats: {
    possession: [42, 58],
    shots: [11, 15],
    onTarget: [5, 6],
    fouls: [15, 10],
    corners: [5, 1],
    offsides: [3, 0]
  },
  statsSource: "365Scores",
  note: {
    ro: "Al cincilea trofeu al CFR-ului și primul după nouă ani; prima Cupă a României din cariera de antrenor a lui Dan Petrescu (antrenor, CFR Cluj). Aradul a devenit al nouălea oraș gazdă al finalei, în premieră pe acest stadion. Đoković și Tiago Gonçalves au fost eliminați în minutul 90+7 după o busculadă generală; s-au anunțat șapte minute de prelungiri, dar s-au jucat circa treisprezece.",
    en: "CFR's fifth trophy and first in nine years; the first Romanian Cup of Dan Petrescu's (coach, CFR Cluj) managerial career. Arad became the ninth host city of the final, and this was the first final at this ground. Đoković and Tiago Gonçalves were sent off in the 90+7th minute after a mass confrontation; seven minutes of stoppage time were announced, but around thirteen were played."
  }
},

{
  id: "2026-04-19-fcb-vfb",
  date: "2026-04-19",
  competition: { ro: "Bundesliga 2025/26", en: "Bundesliga 2025/26" },
  competitionKey: { ro: "Bundesliga", en: "Bundesliga" },
  stage: { ro: "Etapa 30", en: "Matchday 30" },
  home: { name: "Bayern München", nameEn: "Bayern Munich", short: "FCB" },
  away: { name: "VfB Stuttgart", nameEn: "VfB Stuttgart", short: "VfB" },
  score: "4-2",
  stadium: "Allianz Arena",
  city: { ro: "München", en: "Munich" },
  country: { ro: "Germania", en: "Germany" },
  attendance: { value: 75000, approx: false, soldOut: true },
  goals: [
    { team: "away", player: "Chris Führich", minute: 21 },
    { team: "home", player: "Raphaël Guerreiro", minute: 31 },
    { team: "home", player: "Nicolas Jackson", minute: 33 },
    { team: "home", player: "Alphonso Davies", minute: 37 },
    { team: "home", player: "Harry Kane", minute: 52 },
    { team: "away", player: "Chema Andrés", minute: 88 }
  ],
  referee: "S\u00f6ren Storks",
  cards: [], cardsComplete: true,
  lineups: {
    home: {
      formation: "4-2-3-1",
      coach: "Vincent Kompany",
      captain: "Joshua Kimmich",
      xi: [
        { no: 40, name: "Jonas Urbig" },
        { no: 19, name: "Alphonso Davies" },
        { no: 21, name: "Hiroki Ito" },
        { no: 3,  name: "Kim Min-jae" },
        { no: 44, name: "Josip Stani\u0161i\u0107" },
        { no: 8,  name: "Leon Goretzka" },
        { no: 6,  name: "Joshua Kimmich" },
        { no: 14, name: "Luis D\u00edaz" },
        { no: 10, name: "Jamal Musiala" },
        { no: 22, name: "Rapha\u00ebl Guerreiro" },
        { no: 11, name: "Nicolas Jackson" }
      ],
      subs: [
        { minute: 46, on: "Harry Kane",         onNo: 9,  off: "Jamal Musiala" },
        { minute: 46, on: "Michael Olise",      onNo: 17, off: "Luis D\u00edaz" },
        { minute: 62, on: "Konrad Laimer",      onNo: 27, off: "Alphonso Davies" },
        { minute: 76, on: "Bara Sapoko Ndiaye", onNo: 39, off: "Rapha\u00ebl Guerreiro" },
        { minute: 85, on: "Deniz Ofli",         onNo: 34, off: "Josip Stani\u0161i\u0107" }
      ],
      bench: [
        { no: 1,  name: "Manuel Neuer" },
        { no: 4,  name: "Jonathan Tah" },
        { no: 2,  name: "Dayot Upamecano" },
        { no: 45, name: "Aleksandar Pavlovi\u0107" }
      ]
    },
    away: {
      formation: "4-2-3-1",
      coach: "Sebastian Hoene\u00df",
      xi: [
        { no: 33, name: "Alexander N\u00fcbel" },
        { no: 3,  name: "Anrie Hendriks" },
        { no: 24, name: "Jeff Chabot" },
        { no: 29, name: "Finn Jeltsch" },
        { no: 4,  name: "Josha Vagnoman" },
        { no: 6,  name: "Angelo Stiller" },
        { no: 16, name: "Atakan Karazor" },
        { no: 18, name: "Jamie Leweling" },
        { no: 10, name: "Chris F\u00fchrich" },
        { no: 11, name: "Bilal El Khannouss" },
        { no: 8,  name: "Tiago Tom\u00e1s" }
      ],
      subs: [
        { minute: 46, on: "Luca Jaquez",             onNo: 14, off: "Finn Jeltsch" },
        { minute: 65, on: "Maximilian Mittelst\u00e4dt", onNo: 7,  off: "Chris F\u00fchrich" },
        { minute: 65, on: "Chema Andr\u00e9s",           onNo: 30, off: "Angelo Stiller" },
        { minute: 76, on: "Ermedin Demirovi\u0107",      onNo: 9,  off: "Jamie Leweling" },
        { minute: 85, on: "Badredine Bouanani",      onNo: 27, off: "Tiago Tom\u00e1s" }
      ],
      bench: [
        { no: 1,  name: "Fabian Bredlow" },
        { no: 28, name: "Nikolas Nartey" },
        { no: 22, name: "Lorenz Assignon" },
        { no: 23, name: "Dan-Axel Zagadou" }
      ]
    }
  },
  stats: {
    possession: [66, 34],
    shots: [28, 11],
    onTarget: [9, 7],
    fouls: [6, 3],
    corners: [11, 3],
    offsides: [6, 1]
  },
  statsSource: "FC Bayern app (Opta Sports)",
  note: {
    ro: "Victoria a decis al 35-lea titlu național al lui Bayern (al 34-lea în Bundesliga) și al 13-lea în ultimele 14 sezoane, cu patru etape înainte de final. Kane (Bayern) a intrat de pe bancă și a marcat golul cu numărul 51 al sezonului său. Kompany (antrenor, Bayern) a schimbat opt poziții față de victoria cu 4-3 din sfertul Ligii Campionilor cu Real Madrid, cu patru zile înainte (6-4 la general). Titlul a fost posibil în acea zi fiindcă Hoffenheim câștigase 2-1 cu Dortmund în după-amiaza precedentă.",
    en: "The win sealed Bayern's 35th German championship (34th Bundesliga title) and 13th in 14 seasons, with four matchdays to spare. Kane (Bayern) came off the bench to score his 51st goal of the season. Kompany (coach, Bayern) changed eight positions from the 4-3 Champions League quarter-final win over Real Madrid four days earlier (6-4 on aggregate). The title was possible that day because Hoffenheim had beaten Dortmund 2-1 the previous afternoon."
  }
},

{
  id: "2026-07-25-svww-fcb",
  date: "2026-07-25",
  competition: { ro: "Meci amical", en: "Friendly" },
  competitionKey: { ro: "Meci amical", en: "Friendly" },
  stage: { ro: "Primul meci al presezonului 2026/27 al lui Bayern", en: "Bayern's first match of the 2026/27 pre-season" },
  home: { name: "SV Wehen Wiesbaden", nameEn: "SV Wehen Wiesbaden", short: "SVWW" },
  away: { name: "Bayern München", nameEn: "Bayern Munich", short: "FCB" },
  score: "2-1",
  stadium: "BRITA-Arena",
  city: { ro: "Wiesbaden", en: "Wiesbaden" },
  country: { ro: "Germania", en: "Germany" },
  attendance: { value: 12000, approx: false, soldOut: true },
  goals: [
    { team: "home", player: "Nassim Ati Allah", minute: 10 },
    { team: "away", player: "Tom Bischof", minute: 57, pen: true },
    { team: "home", player: "Marcel Schleimer", minute: 83 }
  ],
  cards: [
    { team: "away", player: "Richard Ajayi", minute: null, type: "yellow" }
  ],
  cardsComplete: true,
  lineups: {
    home: {
      formation: "3-4-2-1",
      coach: "Daniel Scherning",
      xi: [
        { no: 31, name: "Noah Brdar" },
        { no: 15, name: "Justin Janitzek" },
        { no: 26, name: "Jakob Lewald" },
        { no: 27, name: "Jordy Gillekens" },
        { no: 18, name: "Fabian Greilinger" },
        { no: 11, name: "Tarik G\u00f6z\u00fcsirin" },
        { no: 37, name: "Max Brandt" },
        { no: 29, name: "Philipp Hercher" },
        { no: 30, name: "Sinan Karweina" },
        { no: 45, name: "Ibrahim Ati Allah" },
        { no: 28, name: "Moritz Flotho" }
      ],
      subs: [
        { minute: 45, on: "Lukas Schleimer",   onNo: 7,  off: "Sinan Karweina" },
        { minute: 46, on: "David Su\u00e1rez",     onNo: 47, off: "Jakob Lewald" },
        { minute: 46, on: "Gino Fechner",      onNo: 6,  off: "Max Brandt" },
        { minute: 46, on: "Donny Bogicevic",   onNo: 8,  off: "Tarik G\u00f6z\u00fcsirin" },
        { minute: 46, on: "Nikolas Agrafiotis",onNo: 25, off: "Moritz Flotho" },
        { minute: 46, on: "Florian Stritzel",  onNo: 16, off: "Noah Brdar" },
        { minute: 46, on: "Robin Kalem",       onNo: 10, off: "Ibrahim Ati Allah" },
        { minute: 52, on: "Niklas May",        onNo: 5,  off: "Fabian Greilinger" },
        { minute: 61, on: "Simon Stehle",      onNo: 9,  off: "Philipp Hercher" },
        { minute: 61, on: "Tim Neubert",       onNo: 24, off: "Justin Janitzek" },
        { minute: 61, on: "Ben Nink",          onNo: 17, off: "Jordy Gillekens" }
      ],
      bench: []
    },
    away: {
      formation: "4-2-3-1",
      coach: "Vincent Kompany",
      captain: "Guido Della Rovere",
      xi: [
        { no: 38, name: "David Podar-Stiube" },
        { no: 43, name: "Richard Ajayi" },
        { no: 51, name: "Raphael Pavlic" },
        { no: 37, name: "Roko Mijatovic" },
        { no: 29, name: "Adam El-Chaar" },
        { no: 28, name: "Simon Schaff" },
        { no: 46, name: "Michael Matosevic" },
        { no: 32, name: "Oluwaseyi Wilson" },
        { no: 47, name: "Guido Della Rovere" },
        { no: 33, name: "Skender Nuraj" },
        { no: 48, name: "Bastian Assomo" }
      ],
      subs: [
        { minute: 26, on: "Filip Pavic",         onNo: 50, off: "Raphael Pavlic" },
        { minute: 26, on: "Armindo Sieb",        onNo: 36, off: "Guido Della Rovere" },
        { minute: 26, on: "Tim Binder",          onNo: 31, off: "Oluwaseyi Wilson" },
        { minute: 46, on: "Sven Ulreich",        onNo: 26, off: "David Podar-Stiube" },
        { minute: 46, on: "Vincent Manuba",      onNo: 41, off: "Roko Mijatovic" },
        { minute: 46, on: "Tom Bischof",         onNo: 8,  off: "Simon Schaff" },
        { minute: 46, on: "Sacha Boey",          onNo: 23, off: "Adam El-Chaar" },
        { minute: 46, on: "Jo\u00e3o Palhinha",     onNo: 16, off: "Michael Matosevic" },
        { minute: 46, on: "Felipe Ch\u00e1vez",     onNo: null, off: "Bastian Assomo" },
        { minute: 46, on: "Maycon Cardozo",      onNo: 35, off: "Richard Ajayi" },
        { minute: 46, on: "Arijon Ibrahimovi\u0107", onNo: 22, off: "Skender Nuraj" }
      ],
      bench: []
    }
  },
  stats: {
    possession: [47, 53],
    shots: [8, 11],
    onTarget: [3, 4],
    fouls: [12, 15],
    corners: [3, 9],
    offsides: [3, 2]
  },
  statsSource: "FC Bayern app (Opta Sports)",
  note: {
    ro: "Meci organizat pentru aniversarea a 100 de ani de la înființarea SV Wehen Wiesbaden. Bayern a început exclusiv cu jucători de la Campus, cu o medie de vârstă de puțin peste 17 ani și cu italianul Guido Della Rovere (Bayern), 19 ani, ca centru; internaționalii întorși de la Mondial erau încă în concediu. Portarul de 16 ani David Podar-Stiube (Bayern) a scăpat șutul lui Ati Allah (Wehen Wiesbaden) la 1-0. Egalarea a venit din penalty, după un fault asupra lui Tim Binder (Bayern). Bayern a făcut trei schimbări deja în minutul 26 (Pavic, Sieb, Binder), iar la pauză au intrat opt jucători deodată, printre care Ulreich, Bischof, Boey și Palhinha (toți Bayern); iar Ulreich (Bayern) a respins în față șutul lui Bogicevic (Wehen Wiesbaden) la golul decisiv.",
    en: "Staged to mark 100 years since SV Wehen Wiesbaden's founding. Bayern started exclusively with Campus players, averaging just over 17 years old and captained by 19-year-old Italian Guido Della Rovere (Bayern); the internationals back from the World Cup were still on holiday. The 16-year-old goalkeeper David Podar-Stiube (Bayern) let Ati Allah's (Wehen Wiesbaden) shot slip through for the opener. The equaliser came from a penalty, after a foul on Tim Binder (Bayern). Bayern made three changes as early as the 26th minute (Pavic, Sieb, Binder), and brought on eight players at half-time, among them Ulreich, Bischof, Boey and Palhinha (all Bayern); and Ulreich (Bayern) parried Bogicevic's (Wehen Wiesbaden) shot into the danger area for the winner."
  }
},

{
  id: "2026-08-20-ucv-ara",
  date: "2026-08-20",
  competition: { ro: "Liga Europa 2026/27", en: "UEFA Europa League 2026/27" },
  competitionKey: { ro: "Liga Europa", en: "Europa League" },
  stage: { ro: "Play-off · Manșa tur", en: "Play-off round · First leg" },
  home: { name: "Universitatea Craiova", nameEn: "Universitatea Craiova", short: "UCV" },
  away: { name: "Ararat-Armenia", nameEn: "Ararat-Armenia", short: "ARA" },
  score: "1-1",
  stadium: "Stadionul Ion Oblemenco",
  city: { ro: "Craiova", en: "Craiova" },
  country: { ro: "România", en: "Romania" },
  attendance: {
    value: 22712,
    approx: false,
    soldOut: false,
    note: { ro: "dintre care 3 suporteri oaspeți", en: "of which 3 away fans" }
  },
  referee: "Nicholas Walsh",
  goals: [
    { team: "away", player: "Alexandros Malis", minute: 21 },
    { team: "home", player: "Nicușor Bancu", minute: 33 }
  ],
  cards: [
    { team: "home", player: "David Matei",  minute: 39, type: "yellow" },
    { team: "home", player: "Oleksandr Romanchuk", minute: 47, type: "yellow" },
    { team: "home", player: "Adrian Rus",          minute: 69, type: "yellow" },
    { team: "home", player: "Monday Etim",  minute: 77, type: "yellow" }
  ],
  cardsComplete: true,
  lineups: {
    home: {
      formation: "3-4-3",
      coach: "Filipe Coelho",
      captain: "Nicușor Bancu",
      xi: [
        { no: 21, name: "Laurențiu Popescu" },
        { no: 3,  name: "Oleksandr Romanchuk" },
        { no: 28, name: "Adrian Rus" },
        { no: 6,  name: "Vladimir Screciu" },
        { no: 17, name: "Carlos Mora" },
        { no: 5,  name: "Anzor Mekvabishvili" },
        { no: 20, name: "Alexandru Cicâldău" },
        { no: 11, name: "Nicușor Bancu" },
        { no: 30, name: "David Matei" },
        { no: 9,  name: "Assad Al Hamlawi" },
        { no: 10, name: "Ștefan Baiaram" }
      ],
      subs: [
        { minute: 62, on: "Monday Etim",        onNo: 12, off: "David Matei" },
        { minute: 62, on: "Steven Nsimba",      onNo: 7,  off: "Assad Al Hamlawi" },
        { minute: 69, on: "Samuel Teles",       onNo: 23, off: "Alexandru Cicâldău" },
        { minute: 85, on: "Tudor Băluță",       onNo: 8,  off: "Anzor Mekvabishvili" },
        { minute: 85, on: "Constantin Băsceanu", onNo: 29, off: "Ștefan Baiaram" }
      ],
      bench: [
        { no: 1,  name: "Alexandru Maxim" },
        { no: 90, name: "Răzvan Sava" },
        { no: 4,  name: "Alexandru Crețu" },
        { no: 18, name: "Mihnea Rădulescu" },
        { no: 19, name: "Heriberto Tavares" },
        { no: 24, name: "Nikola Stevanović" }
      ]
    },
    away: {
      formation: "4-3-3",
      coach: "Gabriel Jose Pinto Couto",
      captain: "Karen Muradyan",
      xi: [
        { no: 98, name: "João Bravim" },
        { no: 16, name: "Edgar Grigoryan" },
        { no: 47, name: "Alexandros Malis" },
        { no: 43, name: "Bruno Wilson" },
        { no: 3,  name: "Junior Bueno" },
        { no: 19, name: "Karen Muradyan" },
        { no: 70, name: "Bernardo Dias" },
        { no: 2,  name: "Hugo Oliveira" },
        { no: 11, name: "Zidane Banjaqui" },
        { no: 91, name: "Sandro Lima" },
        { no: 77, name: "Artur Serobyan" }
      ],
      subs: [
        { minute: 69, on: "Carlos França",     onNo: 95, off: "Bernardo Dias" },
        { minute: 75, on: "Juan Balanta",      onNo: 8,  off: "Hugo Oliveira" },
        { minute: 80, on: "Zhirayr Shaghoyan", onNo: 7,  off: "Zidane Banjaqui" },
        { minute: 80, on: "Alwyn Tera",        onNo: 20, off: "Artur Serobyan" },
        { minute: 80, on: "Maxence Carlier",   onNo: 17, off: "Karen Muradyan" }
      ],
      bench: [
        { no: 1,  name: "Arman Nersesyan" },
        { no: 5,  name: "Luis Felipe" },
        { no: 6,  name: "Mishel Ayvazyan" },
        { no: 9,  name: "Arayik Eloyan" },
        { no: 14, name: "Bruno Pereira" },
        { no: 25, name: "Alioune Ndour" },
        { no: 90, name: "Paul Ayongo" }
      ]
    }
  },
  stats: {
    possession: [58, 42],
    shots: [14, 8],
    onTarget: [6, 2],
    fouls: [14, 5],
    corners: [8, 4],
    offsides: [3, 3]
  },
  statsSource: "UEFA.com (posesie / possession: Sofascore)",
  note: {
    ro: "Singurul meci european al Craiovei cu o echipă din Armenia fusese până atunci 1-1 acasă cu Noah, în faza ligii din Conference League 2025/26 — prima prezență a clubului într-o grupă sau fază a ligii, într-un parcurs european început în 1973/74. Ararat-Armenia eliminase Universitatea Cluj cu un an înainte, 2-1 la general în turul al doilea preliminar din Conference League. Câștigătoarea dublei mergea în faza ligii din Liga Europa, iar învinsa în cea din Conference League, unde Universitatea Craiova, campioana en-titre a României, era deja calificată. Alexandros Malis (Ararat-Armenia) a marcat cu capul dintr-un corner, iar căpitanul Nicușor Bancu (Universitatea Craiova) a egalat; în minutul 63, un gol al lui Sandro Lima (Ararat-Armenia) a fost anulat pentru ofsaid după verificarea VAR. Din cei 22.712 spectatori, doar 3 au fost suporteri ai oaspeților.",
    en: "Craiova's only previous European match against an Armenian club was a 1-1 home draw with Noah in the 2025/26 Conference League league phase — the club's first appearance in a group or league phase, in a European history that began in 1973/74. Ararat-Armenia had eliminated Universitatea Cluj a year earlier, 2-1 on aggregate in the Conference League second qualifying round. The winners of this tie would enter the Europa League league phase and the losers the Conference League one, where Universitatea Craiova, the reigning Romanian champions, were already qualified. Alexandros Malis (Ararat-Armenia) headed in from a corner and captain Nicușor Bancu (Universitatea Craiova) equalised; on 63 minutes a goal by Sandro Lima (Ararat-Armenia) was ruled out for offside after a VAR check. Of the 22,712 spectators, only 3 were away supporters."
  }
},

{
  id: "2026-08-29-ucd-scm",
  date: "2026-08-29",
  competition: { ro: "Liga 2 2026/27", en: "Liga 2 2026/27" },
  competitionKey: { ro: "Liga 2", en: "Liga 2" },
  stage: { ro: "Etapa 5", en: "Matchday 5" },
  home: { name: "CSC Dumbrăvița", nameEn: "CSC Dumbrăvița", short: "UCD" },
  away: { name: "SCM Râmnicu Vâlcea", nameEn: "SCM Râmnicu Vâlcea", short: "SCM" },
  score: "0-1",
  stadium: "Stadionul Ștefan Dobay",
  city: { ro: "Dumbrăvița", en: "Dumbrăvița" },
  country: { ro: "România", en: "Romania" },
  attendance: { value: 300, approx: true, soldOut: false, note: null },
  referee: "Adelin Pavel",
  goals: [
    { team: "away", player: "A. Sălcianu", minute: 74 }
  ],
  cards: [
    { team: "home", player: null, minute: 7,  type: "yellow" },
    { team: "away", player: null, minute: 14, type: "yellow" },
    { team: "home", player: null, minute: 76, type: "yellow" },
    { team: "away", player: null, minute: 85, type: "yellow" },
    { team: "away", player: null, minute: 89, type: "yellow" },
    { team: "home", player: null, minute: 90, added: 3, type: "yellow" }
  ],
  cardsComplete: true,
  lineups: {
    home: {
      formation: "5-2-3",
      coach: "Florin Fabian",
      captain: "A. Șeroni",
      xi: [
        { no: 99, name: "R. Mikloș" },
        { no: 5,  name: "N. Pop" },
        { no: 15, name: "R. Butnărașu" },
        { no: 30, name: "A. Șeroni" },
        { no: 25, name: "B. Panaite" },
        { no: 24, name: "C. S. Gladun" },
        { no: 10, name: "R. Gunie" },
        { no: 3,  name: "F. Cibi" },
        { no: 21, name: "D. Dussaut" },
        { no: 14, name: "D. Mucută" },
        { no: 17, name: "A. Buțu" }
      ],
      subs: [
        { minute: 46, on: "D. Krista",    onNo: 6,  off: "A. Buțu" },
        { minute: 62, on: "A. Burlacu",   onNo: 9,  off: "N. Pop" },
        { minute: 62, on: "S. Popovici",  onNo: 27, off: "D. Dussaut" },
        { minute: 62, on: "D. Datcu",     onNo: 19, off: "D. Mucută" }
      ],
      bench: [
        { no: 22, name: "P. Toroc" },
        { no: 4,  name: "A. Negrea" },
        { no: 11, name: "C. Curescu" },
        { no: 13, name: "C. Pădurariu" },
        { no: 18, name: "N. Leczki" }
      ]
    },
    away: {
      formation: "4-4-2",
      coach: "Constantin Schumacher",
      captain: "A. Dandea",
      xi: [
        { no: 33, name: "L. Crăciun" },
        { no: 77, name: "E. Croitoru" },
        { no: 4,  name: "A. Sălcianu" },
        { no: 30, name: "A. Dandea" },
        { no: 25, name: "V. Georgescu" },
        { no: 37, name: "M. Danciu" },
        { no: 10, name: "V. Constantin" },
        { no: 19, name: "A. Trașcu" },
        { no: 98, name: "B. Pitulac" },
        { no: 9,  name: "B. Lemac" },
        { no: 29, name: "C. Doman" }
      ],
      subs: [
        { minute: 46, on: "E. Nistor",   onNo: 20, off: "B. Pitulac" },
        { minute: 60, on: "D. Huiban",   onNo: 11, off: "C. Doman" },
        { minute: 79, on: "B. Florescu", onNo: 8,  off: "B. Lemac" },
        { minute: 88, on: "A. Mitulețu", onNo: 16, off: "V. Constantin" }
      ],
      bench: [
        { no: 45, name: "R. Ciubotariu" },
        { no: 12, name: "V. Frățilă" },
        { no: 80, name: "D. Butișteanu" },
        { no: 97, name: "S. Ivan" },
        { no: 99, name: "G. Oprescu" },
        { no: 73, name: "R. Tomșa" }
      ]
    }
  },
  stats: {
    possession: [45, 55],
    shots: [6, 14],
    onTarget: [4, 8],
    fouls: [12, 12],
    corners: [5, 5],
    offsides: [3, 2]
  },
  statsSource: "Flashscore",
  note: {
    ro: "CSC Dumbrăvița era neînvinsă acasă în tot anul 2026 — ultimul eșec pe teren propriu data din 13 decembrie 2025, 1-2 cu CSM Slatina — iar seria s-a încheiat aici. SCM Râmnicu Vâlcea, nou-promovată, a readus orașul în eșalonul secund după aproape un deceniu, de la retragerea fostei CSM Râmnicu Vâlcea la mijlocul sezonului 2016-2017. În minutul 71 căpitanul gazdelor, A. Șeroni (CSC Dumbrăvița), a ratat un penalty, iar în 74 a căzut unicul gol, dintr-o lovitură liberă de la 18 metri, atins ultima dată de A. Sălcianu (SCM Râmnicu Vâlcea); Flashscore îl trece ca marcator pe V. Constantin (SCM Râmnicu Vâlcea). Ambii căpitani, Șeroni și A. Dandea (SCM Râmnicu Vâlcea), purtau numărul 30.",
    en: "CSC Dumbrăvița had been unbeaten at home throughout 2026 — their previous home defeat was on 13 December 2025, 1-2 to CSM Slatina — and the run ended here. Newly promoted SCM Râmnicu Vâlcea brought the city back to the second tier after almost a decade, the former CSM Râmnicu Vâlcea having withdrawn midway through the 2016-17 season. On 71 minutes the home captain, A. Șeroni (CSC Dumbrăvița), missed a penalty, and on 74 the only goal came from an 18-metre free kick, last touched by A. Sălcianu (SCM Râmnicu Vâlcea); Flashscore credits V. Constantin (SCM Râmnicu Vâlcea) instead. Both captains, Șeroni and A. Dandea (SCM Râmnicu Vâlcea), wore number 30."
  }
},

{
  id: "2026-08-29-cor-din",
  date: "2026-08-29",
  competition: { ro: "Superliga 2026/27", en: "Superliga 2026/27" },
  competitionKey: { ro: "Superliga", en: "Superliga" },
  stage: { ro: "Etapa 7", en: "Matchday 7" },
  home: { name: "Corvinul Hunedoara", nameEn: "Corvinul Hunedoara", short: "COR" },
  away: { name: "Dinamo București", nameEn: "Dinamo București", short: "DIN" },
  score: "1-1",
  stadium: "Stadionul Francisc von Neuman",
  city: { ro: "Arad", en: "Arad" },
  country: { ro: "România", en: "Romania" },
  attendance: { value: 7000, approx: true, soldOut: false, note: null },
  referee: "Andrei Moroiță",
  goals: [
    { team: "home", player: "Renato Espinosa", minute: 15, assist: "Daniel Pîrvulescu" },
    { team: "away", player: "Mamoudou Karamoko", minute: 51, assist: "Cătălin Cîrjan" }
  ],
  cards: [
    { team: "home", player: "Alexandru Neacșa", minute: 29, type: "yellow" },
    { team: "away", player: "Martín Pascual",   minute: 58, type: "yellow" },
    { team: "away", player: "Alberto Soro",     minute: 67, type: "yellow" },
    { team: "home", player: "Emmanuel Yeboah",  minute: null, type: "yellow" },
    { team: "away", player: "Cătălin Cîrjan",   minute: null, type: "yellow" }
  ],
  cardsComplete: true,
  lineups: {
    home: {
      formation: "4-2-3-1",
      coach: "Florin Maxim",
      captain: null,
      xi: [
        { no: 21, name: "Codruț Sandu" },
        { no: 13, name: "Flavius Iacob" },
        { no: 15, name: "Mihajlo Ivancevic" },
        { no: 30, name: "Antoniu Manolache" },
        { no: 10, name: "Alexandru Neacșa" },
        { no: 97, name: "Denis Hrezdac" },
        { no: 20, name: "Sergio Ribeiro" },
        { no: 99, name: "Emmanuel Yeboah" },
        { no: 22, name: "Andrej Fábry" },
        { no: 19, name: "Daniel Pîrvulescu" },
        { no: 9,  name: "Renato Espinosa" }
      ],
      subs: [
        { minute: 61, on: "I. Cărăruș",      onNo: null, off: "Sergio Ribeiro" },
        { minute: 62, on: "A. Gillard",      onNo: null, off: "Renato Espinosa" },
        { minute: 68, on: "M. Hayatu",       onNo: null, off: "Alexandru Neacșa" },
        { minute: 79, on: "G. Uche Goodlad", onNo: null, off: "Andrej Fábry" },
        { minute: 80, on: "F. Ilie",         onNo: null, off: "Mihajlo Ivancevic" }
      ],
      bench: []
    },
    away: {
      formation: "4-4-2",
      coach: "Nuno Campos",
      captain: null,
      xi: [
        { no: 36, name: "Alaa Bellaarouch" },
        { no: 31, name: "Raul Opruț" },
        { no: 15, name: "Nikita Stoinov" },
        { no: 44, name: "Martín Pascual" },
        { no: 20, name: "David Irimia" },
        { no: 10, name: "Cătălin Cîrjan" },
        { no: 90, name: "Andrei Mărginean" },
        { no: 29, name: "Alberto Soro" },
        { no: 77, name: "Danny Armstrong" },
        { no: 9,  name: "Mamoudou Karamoko" },
        { no: 18, name: "Oliver Hintsa" }
      ],
      subs: [
        { minute: 68, on: "D. Pinto",   onNo: null, off: "Oliver Hintsa" },
        { minute: 68, on: "M. Verreth", onNo: null, off: "Andrei Mărginean" },
        { minute: 87, on: "S. Opriș",   onNo: null, off: "David Irimia" },
        { minute: 88, on: "A. Pop",     onNo: null, off: "Cătălin Cîrjan" }
      ],
      bench: []
    }
  },
  stats: {
    possession: [33, 67],
    shots: [12, 24],
    onTarget: [4, 6],
    fouls: [11, 7],
    corners: [3, 6],
    offsides: [2, 1]
  },
  statsSource: "Flashscore",
  note: {
    ro: "Prima întâlnire dintre Corvinul și Dinamo în prima ligă după 34 de ani. Nou-promovata hunedoreană își joacă meciurile de acasă la Arad, la circa 200 de kilometri de Hunedoara, iar cei aproximativ 7.000 de spectatori au fost, potrivit presei, un record al clubului de la revenirea în primul eșalon. Dinamo era liderul clasamentului. Renato Espinosa (Corvinul Hunedoara) a deschis scorul în minutul 15, la o pasă a lui Daniel Pîrvulescu (Corvinul Hunedoara), iar Mamoudou Karamoko (Dinamo București) a egalat în 51, servit de Cătălin Cîrjan (Dinamo București). Bucureștenii au dominat clar — 67% posesie, 24-12 la șuturi — dar au terminat egal.",
    en: "The first meeting between Corvinul and Dinamo in the top flight for 34 years. Newly promoted Corvinul play their home matches in Arad, some 200 kilometres from Hunedoara, and the crowd of about 7,000 was reported in the press as a club record since their return to the first division. Dinamo went into the match as league leaders. Renato Espinosa (Corvinul Hunedoara) opened the scoring on 15 minutes from a Daniel Pîrvulescu (Corvinul Hunedoara) pass, and Mamoudou Karamoko (Dinamo București) equalised on 51, set up by Cătălin Cîrjan (Dinamo București). Dinamo dominated — 67% possession, 24 shots to 12 — but were held."
  }
},

{
  id: "2026-08-30-poli-asa",
  date: "2026-08-30",
  competition: { ro: "Liga 2 2026/27", en: "Liga 2 2026/27" },
  competitionKey: { ro: "Liga 2", en: "Liga 2" },
  stage: { ro: "Etapa 5", en: "Matchday 5" },
  home: { name: "Știința Poli Timișoara", nameEn: "Știința Poli Timișoara", short: "POLI" },
  away: { name: "AFC ASA Târgu Mureș", nameEn: "AFC ASA Târgu Mureș", short: "ASA" },
  score: "3-0",
  stadium: "Stadionul Electrica",
  city: { ro: "Timișoara", en: "Timișoara" },
  country: { ro: "România", en: "Romania" },
  attendance: { value: null, approx: false, soldOut: true, note: null },
  referee: "Dan Buzărnescu",
  goals: [
    { team: "home", player: "Ianis Doană",       minute: 6 },
    { team: "home", player: "Aurelian Chițu",       minute: 84 },
    { team: "home", player: "Kevin Appiah Nyarko",  minute: 90, added: 2 }
  ],
  cards: [
    { team: "home", player: "Andrei Artean", minute: 41, type: "red" }
  ],
  cardsComplete: true,
  lineups: {
    home: {
      formation: "5-3-2",
      coach: "Dan Alexa",
      captain: "Andrei Artean",
      xi: [
        { no: 30, name: "T. Coșa" },
        { no: 16, name: "I. Vasluian" },
        { no: 6,  name: "A. Huszti" },
        { no: 4,  name: "P. Paul" },
        { no: 19, name: "C. Toma" },
        { no: 22, name: "S. Ștefanovici" },
        { no: 7,  name: "S. Drăghici" },
        { no: 18, name: "Andrei Artean" },
        { no: 27, name: "O. Popescu" },
        { no: 9,  name: "Aurelian Chițu" },
        { no: 24, name: "Ianis Doană" }
      ],
      subs: [
        { minute: 46, on: "R. Burlacu",           onNo: 5,  off: "Ianis Doană" },
        { minute: 46, on: "I. Rotariu",           onNo: 25, off: "S. Ștefanovici" },
        { minute: 68, on: "C. Ene",               onNo: 3,  off: "C. Toma" },
        { minute: 86, on: "Kevin Appiah Nyarko",  onNo: 14, off: "Aurelian Chițu" }
      ],
      bench: [
        { no: 1,  name: "S. Micu" },
        { no: 8,  name: "D. Popa" },
        { no: 15, name: "A. Vlaicu" },
        { no: 20, name: "R. Benzar" },
        { no: 28, name: "M. Dolghi" },
        { no: 29, name: "D. Spătaru" }
      ]
    },
    away: null
  },
  stats: {
    possession: [51, 49],
    shots: [8, 10],
    onTarget: [4, 5],
    fouls: [9, 8],
    corners: [4, 4],
    offsides: null
  },
  statsSource: "Flashscore",
  note: {
    ro: "Poli Timișoara, nou-promovată din Liga 3 și neînvinsă până atunci în campionat, a câștigat cu 3-0 deși a jucat în inferioritate numerică din minutul 41, când căpitanul Andrei Artean (Știința Poli Timișoara) a primit roșu direct după un duel aerian în urma căruia Eric Vînău (AFC ASA Târgu Mureș) a sângerat la cap. Meciul începuse cu un moment de reculegere în memoria lui Nae Ungureanu. Ianis Doană (Știința Poli Timișoara) deschisese scorul în minutul 6, iar celelalte două goluri au venit pe final, în inferioritate numerică; victoria a dus Timișoara pe primul loc în Liga 2, cel puțin pentru o zi. Era a doua victorie a timișorenilor în fața mureșenilor în 11 zile, după 2-1 în calificările pentru grupele Cupei României. AFC ASA Târgu Mureș se afla în al doilea sezon în Liga 2, după ce a preluat locul celor de la Unirea Ungheni.",
    en: "Poli Timișoara, newly promoted from Liga 3 and unbeaten in the league until then, won 3-0 despite playing a man down from the 41st minute, when captain Andrei Artean (Știința Poli Timișoara) was shown a straight red after an aerial duel that left Eric Vînău (AFC ASA Târgu Mureș) bleeding from a head wound. The match had begun with a minute's silence for Nae Ungureanu. Ianis Doană (Știința Poli Timișoara) had opened the scoring on 6 minutes and the other two goals came late, with ten men; the win took Timișoara top of Liga 2, at least for a day. It was Timișoara's second win over Târgu Mureș in 11 days, after a 2-1 in the Romanian Cup qualifying rounds. AFC ASA Târgu Mureș were in their second Liga 2 season, having taken over the place of Unirea Ungheni."
  }
}

],

/* ---------------------------------------------------------------------
   EVENIMENTE — nu contribuie la statisticile din tabul "Eu"
   --------------------------------------------------------------------- */
events: [
{
  id: "2022-07-16-fcb-team-presentation",
  date: "2022-07-16",
  title: { ro: "Allianz FC Bayern Team Presentation 2022/23", en: "Allianz FC Bayern Team Presentation 2022/23" },
  place: { ro: "Allianz Arena, München", en: "Allianz Arena, Munich" },
  what: {
    ro: "Prezentarea lotului pentru sezonul 2022/23, urmată de un antrenament deschis condus de Julian Nagelsmann.",
    en: "The squad presentation for the 2022/23 season, followed by an open training session led by Julian Nagelsmann."
  },
  why: {
    ro: "Primul contact al fanilor, pe stadion, cu noile transferuri Sadio Mané, Ryan Gravenberch și Noussair Mazraoui. Arena a fost iluminată în culorile curcubeului, iar pe esplanadă a avut loc un meet and greet cu o legendă a clubului.",
    en: "The fans' first sight, in the stadium, of new signings Sadio Mané, Ryan Gravenberch and Noussair Mazraoui. The arena was lit in rainbow colours, and a meet and greet with a club legend was held on the esplanade."
  },
  atStadium: true
},

{
  id: "2024-06-17-fanzone-stuttgart-rou-ukr",
  date: "2024-06-17",
  title: { ro: "Public viewing România – Ucraina (EURO 2024)", en: "Public viewing Romania – Ukraine (EURO 2024)" },
  place: { ro: "Fan Zone Schlossplatz, Stuttgart", en: "Fan Zone Schlossplatz, Stuttgart" },
  what: {
    ro: "România – Ucraina 3-0, primul meci al grupei E de la EURO 2024, jucat la München și urmărit pe ecranul mare din Fan Zone-ul oficial UEFA din Schlossplatz. Zona de fani din centrul Stuttgartului, cu intrare liberă, primea până la 30.000 de oameni și transmitea toate cele 51 de meciuri ale turneului.",
    en: "Romania – Ukraine 3-0, the opening match of Group E at EURO 2024, played in Munich and watched on the big screen at UEFA's official Fan Zone on Schlossplatz. The fan zone in central Stuttgart had free entry, held up to 30,000 people and showed all 51 matches of the tournament."
  },
  why: {
    ro: "Prima victorie a României la un Campionat European după 24 de ani și abia a doua din 17 meciuri jucate la turneele finale europene, după 3-2 cu Anglia la EURO 2000. Au marcat căpitanul Nicolae Stanciu (România) în minutul 29, Răzvan Marin (România) în 53 și Denis Drăguș (România) în 57 — cel mai clar succes al României la un turneu final. Potrivit Opta, era prima dată din 1980 când o echipă câștiga un meci de EURO cu o posesie atât de mică, 29%.",
    en: "Romania's first win at a European Championship in 24 years, and only their second in 17 matches at European finals, after the 3-2 against England at EURO 2000. Captain Nicolae Stanciu (Romania) scored on 29 minutes, Răzvan Marin (Romania) on 53 and Denis Drăguș (Romania) on 57 — Romania's most emphatic win at a major finals. According to Opta, it was the first time since 1980 that a team had won a EURO match with possession as low as 29%."
  },
  atStadium: false
},

{
  id: "2024-06-22-fanzone-stuttgart-bel-rou",
  date: "2024-06-22",
  title: { ro: "Public viewing Belgia – România (EURO 2024)", en: "Public viewing Belgium – Romania (EURO 2024)" },
  place: { ro: "Fan Zone Schlossplatz, Stuttgart", en: "Fan Zone Schlossplatz, Stuttgart" },
  what: {
    ro: "Belgia – România 2-0, etapa a doua din grupa E de la EURO 2024, jucată la Köln și urmărită tot pe ecranul mare din Fan Zone Schlossplatz, la cinci zile după meciul cu Ucraina.",
    en: "Belgium – Romania 2-0, the second round of Group E at EURO 2024, played in Cologne and watched again on the big screen at Fan Zone Schlossplatz, five days after the Ukraine match."
  },
  why: {
    ro: "Youri Tielemans (Belgia) a deschis scorul în minutul 2, după o pasă a lui Romelu Lukaku (Belgia), iar Kevin De Bruyne (Belgia) a stabilit scorul final; în minutul 59 un gol al lui Lukaku a fost anulat pentru ofsaid. După acest meci, toate cele patru echipe din grupa E aveau câte trei puncte.",
    en: "Youri Tielemans (Belgium) scored inside two minutes from a Romelu Lukaku (Belgium) pass and Kevin De Bruyne (Belgium) added the second; on 59 minutes a Lukaku goal was ruled out for offside. After the match all four teams in Group E were level on three points."
  },
  atStadium: false
}
]

};
