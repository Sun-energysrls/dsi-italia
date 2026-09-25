import zoomlionCompact from "@/assets/zoomlion-compatto.png";
import zoomlionMedium from "@/assets/zoomlion-medio.png";
import zoomlionLarge from "@/assets/zoomlion-alto.png";
import zoomlionXl from "@/assets/zoomlion-top.png";
import ytoCompact from "@/assets/yto-compatto.png";
import ytoMedium from "@/assets/yto-medio.jpg";
import ytoLarge from "@/assets/yto-alto.jpg";
import ytoXl from "@/assets/yto-top.jpg";
import lovolCompact from "@/assets/lovol-compatto.jpg";
import lovolMedium from "@/assets/lovol-medio.jpg";
import lovolLarge from "@/assets/lovol-alto.jpg";
import lovolXl from "@/assets/lovol-top.png";
import lingongMedium from "@/assets/lingong-medio.png";
import lingongLarge from "@/assets/lingong-alto.png";
import lingongXl from "@/assets/lingong-grande.png";
import lingongTop from "@/assets/lingong-top.png";

export interface BrandGalleryItem {
  image: string;
  label: string;
  hp: string;
}

export interface Brand {
  id: string;
  name: string;
  initials: string;
  country: string;
  description: string;
  /** Brands without a fixed catalog: shown with a brand page + pre-order form */
  preorder?: boolean;
  since?: string;
  tagline?: string;
  powerRange?: string;
  /** "contain" for cut-out product shots, "cover" for photos with a scene */
  imageFit?: "cover" | "contain";
  gallery?: BrandGalleryItem[];
  highlights?: string[];
  powerClasses?: string[];
  transmissions?: string[];
}

export const brands: Brand[] = [
  {
    id: "tavol",
    name: "Tavol",
    initials: "TV",
    country: "Cina",
    description: "Produttore cinese di trattori agricoli professionali con gamma da 55hp a 260hp. Qualità comprovata, tecnologia avanzata e ottimo rapporto qualità-prezzo per ogni esigenza agricola.",
  },
  {
    id: "zoomlion",
    name: "Zoomlion",
    initials: "ZL",
    country: "Cina",
    preorder: true,
    since: "1992",
    tagline: "Smart Agriculture · Tecnologia · Potenza",
    powerRange: "Da 50 a oltre 300 HP",
    imageFit: "contain",
    description: "Colosso globale della meccanizzazione, quotato a Shenzhen e Hong Kong e pioniere dell'agricoltura intelligente. Una gamma completa di trattori, dai compatti utility alle macchine di alta potenza per grandi aziende e contoterzisti.",
    gallery: [
      { image: zoomlionCompact, label: "Compatto", hp: "50–90 HP" },
      { image: zoomlionMedium, label: "Media potenza", hp: "90–140 HP" },
      { image: zoomlionLarge, label: "Alta potenza", hp: "150–200 HP" },
      { image: zoomlionXl, label: "Top di gamma", hp: "Oltre 200 HP" },
    ],
    highlights: [
      "Gamma completa da 50 a oltre 300 HP",
      "Motori Yuchai e Weichai ad alta riserva di coppia",
      "Cambi sincronizzati, inversore e powershift",
      "Trazione integrale 4WD su tutta la gamma",
      "Cabine confortevoli con climatizzatore",
      "Predisposizione alla guida satellitare sui modelli di punta",
    ],
    powerClasses: ["Compatto (fino a 90 HP)", "Media potenza (90–140 HP)", "Alta potenza (150–200 HP)", "Oltre 200 HP"],
    transmissions: ["Meccanica sincronizzata", "Inversore / Power shuttle", "Powershift"],
  },
  {
    id: "yto",
    name: "YTO",
    initials: "YT",
    country: "Cina",
    preorder: true,
    since: "1955",
    tagline: "Heritage · Affidabilità · Stage V",
    powerRange: "Da 25 a 300 HP",
    imageFit: "contain",
    description: "First Tractor Company di Luoyang: dal 1955 il primo costruttore di trattori della Cina, con il marchio storico Dongfanghong. Oggi propone anche modelli con motori Stage V sviluppati per il mercato europeo.",
    gallery: [
      { image: ytoCompact, label: "Compatto", hp: "50–75 HP" },
      { image: ytoMedium, label: "Media potenza", hp: "80–140 HP" },
      { image: ytoLarge, label: "Alta potenza", hp: "160–200 HP" },
      { image: ytoXl, label: "Top di gamma", hp: "Oltre 200 HP" },
    ],
    highlights: [
      "Oltre 65 anni di esperienza nella costruzione di trattori",
      "Gamma dai compatti fino a 300 HP",
      "Modelli con motori Stage V per il mercato europeo",
      "Cambi meccanici robusti e semplici da manutenere",
      "Cabine climatizzate a 4 montanti",
      "Freni a disco in bagno d'olio e trazione 4WD",
    ],
    powerClasses: ["Compatto (fino a 75 HP)", "Media potenza (80–140 HP)", "Alta potenza (160–200 HP)", "Oltre 200 HP"],
    transmissions: ["Meccanica sincronizzata", "Inversore / Power shuttle"],
  },
  {
    id: "lovol",
    name: "Lovol",
    initials: "LV",
    country: "Cina",
    preorder: true,
    since: "1998",
    tagline: "Weichai Power · Design italiano · CVT",
    powerRange: "Da 25 a 240 HP",
    imageFit: "contain",
    description: "Weichai Lovol è tra i maggiori produttori di macchine agricole al mondo, con radici tecniche italiane nell'ex marchio Arbos. Gamma europea con motori Stage V e trasmissioni fino alla variazione continua CVT.",
    gallery: [
      { image: lovolCompact, label: "Compatto", hp: "25–75 HP" },
      { image: lovolMedium, label: "Media potenza", hp: "90–125 HP" },
      { image: lovolLarge, label: "Alta potenza", hp: "130–150 HP" },
      { image: lovolXl, label: "Top di gamma", hp: "220–240 HP" },
    ],
    highlights: [
      "Gamma europea con motori Stage V",
      "Motori Weichai e Doosan",
      "Power shuttle, powershift e trasmissione CVT",
      "Progettazione con radici italiane (ex Arbos)",
      "Cabine panoramiche a 4 montanti",
      "Idraulica ad alta portata sui modelli di punta",
    ],
    powerClasses: ["Compatto (fino a 75 HP)", "Media potenza (90–125 HP)", "Alta potenza (130–150 HP)", "Oltre 200 HP"],
    transmissions: ["Meccanica sincronizzata", "Inversore / Power shuttle", "Powershift", "CVT a variazione continua"],
  },
  {
    id: "lingong",
    name: "Lingong",
    initials: "LG",
    country: "Cina",
    preorder: true,
    since: "1972",
    tagline: "Innovazione · Alta potenza · Ibrido",
    powerRange: "Da 90 a circa 600 HP",
    imageFit: "contain",
    description: "Divisione agricola del gruppo Lingong (LGMG), colosso cinese delle macchine da costruzione nato nel 1972. Dal 2023 produce a Linyi una gamma moderna di trattori, dai modelli da 90 HP fino alle macchine ibride di nuova generazione da circa 600 HP.",
    gallery: [
      { image: lingongMedium, label: "Media potenza", hp: "90–120 HP" },
      { image: lingongLarge, label: "Alta potenza", hp: "180–210 HP" },
      { image: lingongXl, label: "Grande potenza", hp: "240–300 HP" },
      { image: lingongTop, label: "Ibrido top di gamma", hp: "Fino a circa 600 HP" },
    ],
    highlights: [
      "Gamma da 90 a circa 600 HP",
      "Gruppo Lingong: oltre 50 anni di esperienza industriale",
      "Motori Yuchai, Shangchai e Quanchai",
      "Cambi sincronizzati, power shuttle, powershift e a variazione continua",
      "Trattori ibridi di nuova generazione per le grandi aziende",
      "Cabine insonorizzate e climatizzate, sospese sui modelli di alta gamma",
    ],
    powerClasses: ["Media potenza (90–120 HP)", "Alta potenza (180–210 HP)", "Grande potenza (240–300 HP)", "Oltre 300 HP / ibrido"],
    transmissions: ["Meccanica sincronizzata", "Inversore / Power shuttle", "Powershift", "CVT a variazione continua", "Ibrida"],
  },
];

export const preorderBrands = brands.filter((b) => b.preorder);

export function getBrandById(id: string) {
  return brands.find((b) => b.id === id);
}

export function getBrandByName(name: string) {
  return brands.find((b) => b.name === name);
}
