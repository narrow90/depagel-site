export type ProductSpec = {
  grammatura: string;
  confezione: string;
  lievitazione: string;
  temperatura: string;
  cottura: string;
};

export type Product = {
  slug: string;
  name: string;
  category: "Basi" | "Dolci" | "Salati";
  image: string;
  description: string;
  subtitle: string;
  specs: ProductSpec[];
};

export const products: Product[] = [
  // =========================
  // DOLCI
  // =========================
  {
    slug: "cornetto-vuoto",
    name: "Cornetto vuoto",
    category: "Dolci",
    image: "/images/prodotti/DOLCI/cornetto-vuoto.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "30 g",
        confezione: "6 kg",
        lievitazione: "8/10 h",
        cottura: "15",
        temperatura: "180°C",
      },
      {
        grammatura: "30 g",
        confezione: "6 kg",
        lievitazione: "Pronto forno",
        cottura: "15",
        temperatura: "180°C",
      },
      {
        grammatura: "50 g",
        confezione: "150 pz",
        lievitazione: "8/10 h",
        cottura: "15",
        temperatura: "180°C",
      },
      {
        grammatura: "60 g",
        confezione: "100 pz",
        lievitazione: "8/10 h",
        cottura: "15",
        temperatura: "180°C",
      },
      {
        grammatura: "70 g",
        confezione: "100 pz",
        lievitazione: "8/10 h",
        cottura: "15",
        temperatura: "180°C",
      },
      {
        grammatura: "80 g",
        confezione: "100 pz",
        lievitazione: "8/10 h",
        cottura: "15",
        temperatura: "180°C",
      },
      {
        grammatura: "80 g",
        confezione: "50 pz",
        lievitazione: "Pronto forno",
        cottura: "15",
        temperatura: "180°C",
      },
      {
        grammatura: "90 g",
        confezione: "100 pz",
        lievitazione: "8/10 h",
        cottura: "15",
        temperatura: "180°C",
      },
      {
        grammatura: "90 g",
        confezione: "50 pz",
        lievitazione: "Pronto forno",
        cottura: "15",
        temperatura: "180°C",
      },
    ],
  },

  {
    slug: "cornetto-albicocca",
    name: "Cornetto albicocca",
    category: "Dolci",
    image: "/images/prodotti/DOLCI/cornetto-albicocca.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "90 g",
        confezione: "100 pz",
        lievitazione: "8/10 h",
        cottura: "15",
        temperatura: "180°C",
      },
      {
        grammatura: "90 g",
        confezione: "50 pz",
        lievitazione: "Pronto forno",
        cottura: "15",
        temperatura: "180°C",
      },
    ],
  },

  {
    slug: "cornetto-crema",
    name: "Cornetto crema",
    category: "Dolci",
    image: "/images/prodotti/DOLCI/cornetto-crema.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "90 g",
        confezione: "100 pz",
        lievitazione: "8/10 h",
        cottura: "15",
        temperatura: "180°C",
      },
      {
        grammatura: "90 g",
        confezione: "50 pz",
        lievitazione: "Pronto forno",
        cottura: "15",
        temperatura: "180°C",
      },
    ],
  },

  {
    slug: "cornetto-cioccolato",
    name: "Cornetto cioccolato",
    category: "Dolci",
    image: "/images/prodotti/DOLCI/cornetto-cioccolato.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "90 g",
        confezione: "100 pz",
        lievitazione: "8/10 h",
        cottura: "15",
        temperatura: "180°C",
      },
      {
        grammatura: "90 g",
        confezione: "50 pz",
        lievitazione: "Pronto forno",
        cottura: "15",
        temperatura: "180°C",
      },
    ],
  },

  {
    slug: "cornetto-biciock",
    name: "Cornetto biciock",
    category: "Dolci",
    image: "/images/prodotti/DOLCI/cornetto-biciock.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "90 g",
        confezione: "100 pz",
        lievitazione: "8/10 h",
        cottura: "15",
        temperatura: "180°C",
      },
      {
        grammatura: "90 g",
        confezione: "50 pz",
        lievitazione: "Pronto forno",
        cottura: "15",
        temperatura: "180°C",
      },
    ],
  },

  {
    slug: "cornetto-bifrutta",
    name: "Cornetto bifrutta",
    category: "Dolci",
    image: "/images/prodotti/DOLCI/cornetto-bifrutta.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "90 g",
        confezione: "100 pz",
        lievitazione: "8/10 h",
        cottura: "15",
        temperatura: "180°C",
      },
      {
        grammatura: "90 g",
        confezione: "50 pz",
        lievitazione: "Pronto forno",
        cottura: "15",
        temperatura: "180°C",
      },
    ],
  },

  {
    slug: "cornetto-pistacchio",
    name: "Cornetto pistacchio",
    category: "Dolci",
    image: "/images/prodotti/DOLCI/cornetto-pistacchio.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "90 g",
        confezione: "100 pz",
        lievitazione: "8/10 h",
        cottura: "15",
        temperatura: "180°C",
      },
      {
        grammatura: "90 g",
        confezione: "50 pz",
        lievitazione: "Pronto forno",
        cottura: "15",
        temperatura: "180°C",
      },
    ],
  },

  {
    slug: "cornetto-cereali-vuoto",
    name: "Cornetto cereali vuoto",
    category: "Dolci",
    image: "/images/prodotti/DOLCI/cornetto-cereali-vuoto.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "90 g",
        confezione: "100 pz",
        lievitazione: "8/10 h",
        cottura: "15",
        temperatura: "180°C",
      },
      {
        grammatura: "90 g",
        confezione: "50 pz",
        lievitazione: "Pronto forno",
        cottura: "15",
        temperatura: "180°C",
      },
    ],
  },

  {
    slug: "cornetto-cereali-e-miele",
    name: "Cornetto cereali e miele",
    category: "Dolci",
    image: "/images/prodotti/DOLCI/cornetto-cereali-e-miele.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "90 g",
        confezione: "100 pz",
        lievitazione: "8/10 h",
        cottura: "15",
        temperatura: "180°C",
      },
      {
        grammatura: "90 g",
        confezione: "50 pz",
        lievitazione: "Pronto forno",
        cottura: "15",
        temperatura: "180°C",
      },
    ],
  },

  {
    slug: "cornetto-vegano",
    name: "Cornetto vegano",
    category: "Dolci",
    image: "/images/prodotti/DOLCI/cornetto-vegano.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "80 g",
        confezione: "50 pz",
        lievitazione: "Pronto forno",
        cottura: "15",
        temperatura: "180°C",
      },
    ],
  },

  {
    slug: "fagottino-vuoto",
    name: "Fagottino vuoto",
    category: "Dolci",
    image: "/images/prodotti/DOLCI/fagottino-vuoto.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "80 g",
        confezione: "100 pz",
        lievitazione: "8/10 h",
        cottura: "15",
        temperatura: "180°C",
      },
    ],
  },

  {
    slug: "fagottino-cioccolato",
    name: "Fagottino cioccolato",
    category: "Dolci",
    image: "/images/prodotti/DOLCI/fagottino-cioccolato.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "80 g",
        confezione: "80 pz",
        lievitazione: "8/10 h",
        cottura: "15",
        temperatura: "180°C",
      },
      {
        grammatura: "80 g",
        confezione: "50 pz",
        lievitazione: "Pronto forno",
        cottura: "15",
        temperatura: "180°C",
      },
    ],
  },

  {
    slug: "fagottino-crema",
    name: "Fagottino crema",
    category: "Dolci",
    image: "/images/prodotti/DOLCI/fagottino-crema.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "80 g",
        confezione: "80 pz",
        lievitazione: "8/10 h",
        cottura: "15",
        temperatura: "180°C",
      },
      {
        grammatura: "80 g",
        confezione: "50 pz",
        lievitazione: "Pronto forno",
        cottura: "15",
        temperatura: "180°C",
      },
    ],
  },

  {
    slug: "lemoncrema",
    name: "Lemoncrema",
    category: "Dolci",
    image: "/images/prodotti/DOLCI/lemoncrema.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "90 g",
        confezione: "50 pz",
        lievitazione: "8/10 h",
        cottura: "15",
        temperatura: "180°C",
      },
      {
        grammatura: "90 g",
        confezione: "60 pz",
        lievitazione: "Pronto forno",
        cottura: "15",
        temperatura: "180°C",
      },
    ],
  },

  {
    slug: "panciock",
    name: "Panciock",
    category: "Dolci",
    image: "/images/prodotti/DOLCI/panciock.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "80 g",
        confezione: "50 pz",
        lievitazione: "Pronto forno",
        cottura: "15",
        temperatura: "180°C",
      },
    ],
  },

  {
    slug: "panfrutta",
    name: "Panfrutta",
    category: "Dolci",
    image: "/images/prodotti/DOLCI/panfrutta.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "80 g",
        confezione: "50 pz",
        lievitazione: "Pronto forno",
        cottura: "15",
        temperatura: "180°C",
      },
    ],
  },

  {
    slug: "strudel-mela",
    name: "Strudel mela",
    category: "Dolci",
    image: "/images/prodotti/DOLCI/strudel-mela.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "90 g",
        confezione: "60 pz",
        lievitazione: "Pronto forno",
        cottura: "15",
        temperatura: "180°C",
      },
    ],
  },

  {
    slug: "danese-pasta-di-mandorle",
    name: "Danese pasta di mandorle",
    category: "Dolci",
    image: "/images/prodotti/DOLCI/danese-pasta-di-mandorle.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "90 g",
        confezione: "50 pz",
        lievitazione: "8/10 h",
        cottura: "15",
        temperatura: "180°C",
      },
      {
        grammatura: "90 g",
        confezione: "50 pz",
        lievitazione: "Pronto forno",
        cottura: "15",
        temperatura: "180°C",
      },
    ],
  },

  {
    slug: "apollina-o-coda-d-aragosta",
    name: "Apollina o coda d’aragosta",
    category: "Dolci",
    image: "/images/prodotti/DOLCI/apollina-o-coda-d-aragosta.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "25 g",
        confezione: "6 kg",
        lievitazione: "",
        cottura: "30",
        temperatura: "180°C",
      },
      {
        grammatura: "40 g",
        confezione: "6 kg",
        lievitazione: "",
        cottura: "30",
        temperatura: "180°C",
      },
      {
        grammatura: "130 g",
        confezione: "60 pz",
        lievitazione: "",
        cottura: "30",
        temperatura: "180°C",
      },
    ],
  },

  {
    slug: "sfogliata-riccia",
    name: "Sfogliata riccia",
    category: "Dolci",
    image: "/images/prodotti/DOLCI/sfogliata-riccia.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "30 g",
        confezione: "6 kg",
        lievitazione: "",
        cottura: "30",
        temperatura: "180°C",
      },
      {
        grammatura: "30 g",
        confezione: "10 kg",
        lievitazione: "",
        cottura: "30",
        temperatura: "180°C",
      },
      {
        grammatura: "130 g",
        confezione: "60 pz",
        lievitazione: "",
        cottura: "30",
        temperatura: "180°C",
      },
      {
        grammatura: "160 g",
        confezione: "60 pz",
        lievitazione: "",
        cottura: "30",
        temperatura: "180°C",
      },
      {
        grammatura: "180 g",
        confezione: "60 pz",
        lievitazione: "",
        cottura: "30",
        temperatura: "180°C",
      },
    ],
  },

  {
    slug: "sfogliata-frolla",
    name: "Sfogliata frolla",
    category: "Dolci",
    image: "/images/prodotti/DOLCI/sfogliata-frolla.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "30 g",
        confezione: "6 kg",
        lievitazione: "",
        cottura: "15",
        temperatura: "180°C",
      },
      {
        grammatura: "130 g",
        confezione: "60 pz",
        lievitazione: "",
        cottura: "15",
        temperatura: "180°C",
      },
    ],
  },

  {
    slug: "girella-uvetta",
    name: "Girella uvetta",
    category: "Dolci",
    image: "/images/prodotti/DOLCI/girella-uvetta.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "90 g",
        confezione: "80 pz",
        lievitazione: "8/10 h",
        cottura: "15",
        temperatura: "180°C",
      },
    ],
  },

  {
    slug: "girella-cioccolato",
    name: "Girella gocce di cioccolato",
    category: "Dolci",
    image: "/images/prodotti/DOLCI/girella-cioccolato.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "90 g",
        confezione: "80 pz",
        lievitazione: "8/10 h",
        cottura: "15",
        temperatura: "180°C",
      },
    ],
  },

  {
    slug: "brioche",
    name: "Brioche",
    category: "Dolci",
    image: "/images/prodotti/DOLCI/brioche.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "25 g",
        confezione: "6 kg",
        lievitazione: "8/10 h",
        cottura: "15",
        temperatura: "180°C",
      },
      {
        grammatura: "90 g",
        confezione: "80 pz",
        lievitazione: "8/10 h",
        cottura: "15",
        temperatura: "180°C",
      },
    ],
  },

  {
    slug: "brioche-ciock",
    name: "Brioche ciock",
    category: "Dolci",
    image: "/images/prodotti/DOLCI/brioche-ciock.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "95 g",
        confezione: "80 pz",
        lievitazione: "8/10 h",
        cottura: "15",
        temperatura: "180°C",
      },
    ],
  },

  {
    slug: "zeppola",
    name: "Zeppola",
    category: "Dolci",
    image: "/images/prodotti/DOLCI/zeppola.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "90 g",
        confezione: "72 pz",
        lievitazione: "8/10 h",
        cottura: "10",
        temperatura: "180°C",
      },
    ],
  },

  {
    slug: "maxi-ciambella-zuccherata",
    name: "Maxi ciambella zuccherata",
    category: "Dolci",
    image: "/images/prodotti/DOLCI/maxi-ciambella-zuccherata.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "100 g",
        confezione: "36 pz",
        lievitazione: "",
        cottura: "",
        temperatura: "",
      },
    ],
  },

  {
    slug: "pasticciotto-leccese",
    name: "Pasticciotto leccese",
    category: "Dolci",
    image: "/images/prodotti/DOLCI/pasticciotto-leccese.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "110 g",
        confezione: "30 pz",
        lievitazione: "",
        cottura: "",
        temperatura: "",
      },
    ],
  },

  {
    slug: "conchiglia-cioccolato",
    name: "Conchiglia cioccolato",
    category: "Dolci",
    image: "/images/prodotti/DOLCI/conchiglia-cioccolato.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "105 g",
        confezione: "45 pz",
        lievitazione: "Pronto forno",
        cottura: "15",
        temperatura: "180°C",
      },
    ],
  },

  {
    slug: "conchiglia-pannalatte",
    name: "Conchiglia pannalatte",
    category: "Dolci",
    image: "/images/prodotti/DOLCI/conchiglia-pannalatte.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "105 g",
        confezione: "45 pz",
        lievitazione: "Pronto forno",
        cottura: "15",
        temperatura: "180°C",
      },
    ],
  },

  {
    slug: "conchiglia-pannalatte-e-amarena",
    name: "Conchiglia pannalatte e amarena",
    category: "Dolci",
    image: "/images/prodotti/DOLCI/conchiglia-pannalatte-e-amarena.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "105 g",
        confezione: "45 pz",
        lievitazione: "Pronto forno",
        cottura: "15",
        temperatura: "180°C",
      },
    ],
  },

  {
    slug: "misto-mignon",
    name: "Misto mignon",
    category: "Dolci",
    image: "/images/prodotti/DOLCI/misto-mignon.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "30 g",
        confezione: "6 kg",
        lievitazione: "Pronto forno",
        cottura: "15",
        temperatura: "180°C",
      },
    ],
  },

  // =========================
  // SALATI
  // =========================
  {
    slug: "panino-napoletano",
    name: "Panino napoletano",
    category: "Salati",
    image: "/images/prodotti/SALATI/panino-napoletano.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "140 g",
        confezione: "40 pz",
        lievitazione: "Pronto forno",
        cottura: "25",
        temperatura: "180°C",
      },
    ],
  },

  {
    slug: "pizza",
    name: "Pizza",
    category: "Salati",
    image: "/images/prodotti/SALATI/pizza.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "140 g",
        confezione: "24 pz",
        lievitazione: "Pronto forno",
        cottura: "25",
        temperatura: "180°C",
      },
    ],
  },

  {
    slug: "pizzette",
    name: "Pizzetta",
    category: "Salati",
    image: "/images/prodotti/SALATI/pizzette.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "30 g",
        confezione: "3 kg",
        lievitazione: "Pronto forno",
        cottura: "25",
        temperatura: "180°C",
      },
    ],
  },

  {
    slug: "rustico-mignon",
    name: "Rustici misti",
    category: "Salati",
    image: "/images/prodotti/SALATI/rustico-mignon.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "35 g",
        confezione: "6 kg",
        lievitazione: "",
        cottura: "25",
        temperatura: "180°C",
      },
    ],
  },

  {
    slug: "wurstellone",
    name: "Würstellone",
    category: "Salati",
    image: "/images/prodotti/SALATI/wurstellone.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "130 g",
        confezione: "40 pz",
        lievitazione: "",
        cottura: "25",
        temperatura: "180°C",
      },
    ],
  },

  {
    slug: "frittelle-d-alghe",
    name: "Frittella d’alghe",
    category: "Salati",
    image: "/images/prodotti/SALATI/frittelle-d-alghe.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "15 g",
        confezione: "3 kg",
        lievitazione: "",
        cottura: "6",
        temperatura: "200°C",
      },
    ],
  },

  {
    slug: "arancino-bianco",
    name: "Arancino bianco",
    category: "Salati",
    image: "/images/prodotti/SALATI/arancino-bianco.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "25 g",
        confezione: "5 kg",
        lievitazione: "",
        cottura: "6",
        temperatura: "180°C",
      },
      {
        grammatura: "65 g",
        confezione: "5 kg",
        lievitazione: "",
        cottura: "6",
        temperatura: "180°C",
      },
      {
        grammatura: "100 g",
        confezione: "5 kg",
        lievitazione: "",
        cottura: "6",
        temperatura: "180°C",
      },
      {
        grammatura: "130 g",
        confezione: "5 kg",
        lievitazione: "",
        cottura: "6",
        temperatura: "180°C",
      },
    ],
  },

  {
    slug: "arancino-rosso",
    name: "Arancino rosso",
    category: "Salati",
    image: "/images/prodotti/SALATI/arancino-rosso.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "25 g",
        confezione: "5 kg",
        lievitazione: "",
        cottura: "6",
        temperatura: "180°C",
      },
      {
        grammatura: "65 g",
        confezione: "5 kg",
        lievitazione: "",
        cottura: "6",
        temperatura: "180°C",
      },
      {
        grammatura: "100 g",
        confezione: "5 kg",
        lievitazione: "",
        cottura: "6",
        temperatura: "180°C",
      },
      {
        grammatura: "130 g",
        confezione: "5 kg",
        lievitazione: "",
        cottura: "6",
        temperatura: "180°C",
      },
    ],
  },

  {
    slug: "fritto-misto",
    name: "Misto fritto napoletano",
    category: "Salati",
    image: "/images/prodotti/SALATI/fritto-misto.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "25 g",
        confezione: "5 kg",
        lievitazione: "",
        cottura: "8",
        temperatura: "200°C",
      },
    ],
  },

  {
    slug: "frittatina-di-pasta",
    name: "Frittatina di pasta",
    category: "Salati",
    image: "/images/prodotti/SALATI/frittatina-di-pasta.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "25 g",
        confezione: "5 kg",
        lievitazione: "",
        cottura: "6",
        temperatura: "180°C",
      },
      {
        grammatura: "65 g",
        confezione: "5 kg",
        lievitazione: "",
        cottura: "6",
        temperatura: "180°C",
      },
      {
        grammatura: "130 g",
        confezione: "5 kg",
        lievitazione: "",
        cottura: "6",
        temperatura: "180°C",
      },
    ],
  },

  {
    slug: "calzoncelli",
    name: "Calzoncelli",
    category: "Salati",
    image: "/images/prodotti/SALATI/calzoncelli.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "45 g",
        confezione: "3.6 kg",
        lievitazione: "",
        cottura: "8",
        temperatura: "200°C",
      },
    ],
  },

  {
    slug: "calzone",
    name: "Calzone",
    category: "Salati",
    image: "/images/prodotti/SALATI/calzone.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "130 g",
        confezione: "30 pz",
        lievitazione: "",
        cottura: "7",
        temperatura: "180°C",
      },
    ],
  },

  {
    slug: "crocche",
    name: "Crocchè",
    category: "Salati",
    image: "/images/prodotti/SALATI/crocche.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "25 g",
        confezione: "5 kg",
        lievitazione: "",
        cottura: "5",
        temperatura: "180°C",
      },
      {
        grammatura: "65 g",
        confezione: "5 kg",
        lievitazione: "",
        cottura: "5",
        temperatura: "180°C",
      },
      {
        grammatura: "100 g",
        confezione: "5 kg",
        lievitazione: "",
        cottura: "5",
        temperatura: "180°C",
      },
      {
        grammatura: "130 g",
        confezione: "5 kg",
        lievitazione: "",
        cottura: "5",
        temperatura: "180°C",
      },
    ],
  },

  // =========================
  // BASI
  // =========================
  {
    slug: "tappo-per-sfogliata",
    name: "Tappo per sfogliate",
    category: "Basi",
    image: "/images/prodotti/Basi/tappo-per-sfogliata.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "65 g",
        confezione: "100 pz",
        lievitazione: "",
        cottura: "",
        temperatura: "",
      },
    ],
  },

  {
    slug: "tappo-per-sfogliata-mignon",
    name: "Tappo per sfogliate mignon",
    category: "Basi",
    image: "/images/prodotti/Basi/tappo-per-sfogliata-mignon.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "22 g",
        confezione: "5 kg",
        lievitazione: "",
        cottura: "",
        temperatura: "",
      },
      {
        grammatura: "30 g",
        confezione: "5 kg",
        lievitazione: "",
        cottura: "",
        temperatura: "",
      },
    ],
  },

  {
    slug: "pasta-sfoglia",
    name: "Pasta sfoglia",
    category: "Basi",
    image: "/images/prodotti/Basi/pasta-sfoglia.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "1 kg",
        confezione: "6 kg",
        lievitazione: "",
        cottura: "",
        temperatura: "",
      },
    ],
  },

  {
    slug: "pasta-frolla",
    name: "Pasta frolla",
    category: "Basi",
    image: "/images/prodotti/Basi/pasta-frolla.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "",
        confezione: "6 kg",
        lievitazione: "",
        cottura: "",
        temperatura: "",
      },
    ],
  },

];
