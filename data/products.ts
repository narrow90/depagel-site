export type ProductSpec = {
  grammatura: string;
  confezione: string;
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
        confezione: "",
        temperatura: "",
        cottura: "",
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
        grammatura: "",
        confezione: "",
        temperatura: "",
        cottura: "",
      },
    ],
  },

  {
    slug: "tappo-per-sfogliata-mignon",
    name: "Tappo per sfogliata mignon",
    category: "Basi",
    image: "/images/prodotti/Basi/tappo-per-sfogliata-mignon.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "",
        confezione: "",
        temperatura: "",
        cottura: "",
      },
    ],
  },

  {
    slug: "tappo-per-sfogliata",
    name: "Tappo per sfogliata",
    category: "Basi",
    image: "/images/prodotti/Basi/tappo-per-sfogliata.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "",
        confezione: "",
        temperatura: "",
        cottura: "",
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
        grammatura: "",
        confezione: "",
        temperatura: "",
        cottura: "",
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
        grammatura: "",
        confezione: "",
        temperatura: "",
        cottura: "",
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
        grammatura: "",
        confezione: "",
        temperatura: "",
        cottura: "",
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
        grammatura: "",
        confezione: "",
        temperatura: "",
        cottura: "",
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
        grammatura: "",
        confezione: "",
        temperatura: "",
        cottura: "",
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
        grammatura: "",
        confezione: "",
        temperatura: "",
        cottura: "",
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
        grammatura: "",
        confezione: "",
        temperatura: "",
        cottura: "",
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
        grammatura: "",
        confezione: "",
        temperatura: "",
        cottura: "",
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
        grammatura: "",
        confezione: "",
        temperatura: "",
        cottura: "",
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
        grammatura: "",
        confezione: "",
        temperatura: "",
        cottura: "",
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
        grammatura: "",
        confezione: "",
        temperatura: "",
        cottura: "",
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
        grammatura: "",
        confezione: "",
        temperatura: "",
        cottura: "",
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
        grammatura: "",
        confezione: "",
        temperatura: "",
        cottura: "",
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
        grammatura: "",
        confezione: "",
        temperatura: "",
        cottura: "",
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
        grammatura: "",
        confezione: "",
        temperatura: "",
        cottura: "",
      },
    ],
  },

  {
    slug: "cornetto-vuoto",
    name: "Cornetto vuoto",
    category: "Dolci",
    image: "/images/prodotti/DOLCI/cornetto-vuoto.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "",
        confezione: "",
        temperatura: "",
        cottura: "",
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
        grammatura: "",
        confezione: "",
        temperatura: "",
        cottura: "",
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
        grammatura: "",
        confezione: "",
        temperatura: "",
        cottura: "",
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
        grammatura: "",
        confezione: "",
        temperatura: "",
        cottura: "",
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
        grammatura: "",
        confezione: "",
        temperatura: "",
        cottura: "",
      },
    ],
  },

  {
    slug: "girella-cioccolato",
    name: "Girella cioccolato",
    category: "Dolci",
    image: "/images/prodotti/DOLCI/girella-cioccolato.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "",
        confezione: "",
        temperatura: "",
        cottura: "",
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
        grammatura: "",
        confezione: "",
        temperatura: "",
        cottura: "",
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
        grammatura: "",
        confezione: "",
        temperatura: "",
        cottura: "",
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
        grammatura: "",
        confezione: "",
        temperatura: "",
        cottura: "",
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
        grammatura: "",
        confezione: "",
        temperatura: "",
        cottura: "",
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
        grammatura: "",
        confezione: "",
        temperatura: "",
        cottura: "",
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
        grammatura: "",
        confezione: "",
        temperatura: "",
        cottura: "",
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
        grammatura: "",
        confezione: "",
        temperatura: "",
        cottura: "",
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
        grammatura: "",
        confezione: "",
        temperatura: "",
        cottura: "",
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
        grammatura: "",
        confezione: "",
        temperatura: "",
        cottura: "",
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
        grammatura: "",
        confezione: "",
        temperatura: "",
        cottura: "",
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
        grammatura: "",
        confezione: "",
        temperatura: "",
        cottura: "",
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
        grammatura: "",
        confezione: "",
        temperatura: "",
        cottura: "",
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
        grammatura: "",
        confezione: "",
        temperatura: "",
        cottura: "",
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
        grammatura: "",
        confezione: "",
        temperatura: "",
        cottura: "",
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
        grammatura: "",
        confezione: "",
        temperatura: "",
        cottura: "",
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
        grammatura: "",
        confezione: "",
        temperatura: "",
        cottura: "",
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
        grammatura: "",
        confezione: "",
        temperatura: "",
        cottura: "",
      },
    ],
  },

  {
    slug: "frittelle-d-alghe",
    name: "Frittelle d’alghe",
    category: "Salati",
    image: "/images/prodotti/SALATI/frittelle-d-alghe.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "",
        confezione: "",
        temperatura: "",
        cottura: "",
      },
    ],
  },

  {
    slug: "fritto-misto",
    name: "Fritto misto",
    category: "Salati",
    image: "/images/prodotti/SALATI/fritto-misto.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "",
        confezione: "",
        temperatura: "",
        cottura: "",
      },
    ],
  },

  {
    slug: "panino-napoletano",
    name: "Panino napoletano",
    category: "Salati",
    image: "/images/prodotti/SALATI/panino-napoletano.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "",
        confezione: "",
        temperatura: "",
        cottura: "",
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
        grammatura: "",
        confezione: "",
        temperatura: "",
        cottura: "",
      },
    ],
  },

  {
    slug: "pizzette",
    name: "Pizzette",
    category: "Salati",
    image: "/images/prodotti/SALATI/pizzette.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "",
        confezione: "",
        temperatura: "",
        cottura: "",
      },
    ],
  },

  {
    slug: "rustico-mignon",
    name: "Rustico mignon",
    category: "Salati",
    image: "/images/prodotti/SALATI/rustico-mignon.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "",
        confezione: "",
        temperatura: "",
        cottura: "",
      },
    ],
  },

  {
    slug: "wurstellone",
    name: "Wurstellone",
    category: "Salati",
    image: "/images/prodotti/SALATI/wurstellone.png",
    description: "Descrizione del prodotto da completare.",
    subtitle: "Disponibile in diversi formati.",
    specs: [
      {
        grammatura: "",
        confezione: "",
        temperatura: "",
        cottura: "",
      },
    ],
  },

];