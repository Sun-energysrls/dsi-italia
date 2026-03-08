export interface ColorOption {
  name: string;
  value: string;
}

export interface TechnicalSpecs {
  potenza_kw: string;
  cilindrata: string;
  pto: string;
  [key: string]: string;
}

export interface Tractor {
  id: string;
  name: string;
  brand: string;
  category: string;
  categorySlug: string;
  hp: number;
  hpRange: string;
  shortDescription: string;
  engine: string;
  transmission: string;
  traction: string;
  weight: string;
  dimensions: string;
  features: string[];
  accessories: string[];
  image: string;
  transmissionOptions: string[];
  tractionOptions: string[];
  fullTechnicalSpecs: TechnicalSpecs;
}

export const globalColorOptions: ColorOption[] = [
  { name: "Verde DSI", value: "hsl(156, 32%, 17%)" },
  { name: "Nero Industrial", value: "hsl(0, 0%, 11%)" },
  { name: "Rosso Agricolo", value: "hsl(0, 70%, 45%)" },
  { name: "Grigio Titanio", value: "hsl(0, 0%, 40%)" },
  { name: "Blu Tecnico", value: "hsl(210, 60%, 35%)" },
  { name: "Bianco Premium", value: "hsl(0, 0%, 95%)" },
];

export const brands = ["John Deere", "New Holland", "Fendt"] as const;
export type Brand = (typeof brands)[number];

export const categories = [
  { id: "large", label: "Alta Potenza", description: "Oltre 160 HP per grandi aziende agricole" },
  { id: "medium", label: "Media Potenza", description: "120–160 HP per coltivazioni miste" },
  { id: "compact", label: "Compatti / Serre", description: "40–100 HP, agili e maneggevoli" },
];

export const tractors: Tractor[] = [
  {
    id: "sd2604",
    name: "SD 2604",
    brand: "John Deere",
    category: "Alta Potenza",
    categorySlug: "large",
    hp: 260,
    hpRange: "220–260 HP",
    shortDescription: "Trattore ad altissima potenza per grandi aziende agricole e lavorazioni intensive.",
    engine: "Diesel 6 cilindri turbo intercooler Stage V",
    transmission: "Power Shift",
    traction: "4WD",
    weight: "8.200 kg",
    dimensions: "5.100 x 2.550 x 3.100 mm",
    features: [
      "Elevata potenza per lavorazioni estensive",
      "Trasmissione professionale Power Shift",
      "Struttura rinforzata heavy duty",
    ],
    accessories: ["Rimorchio agricolo", "Aratro professionale", "Erpice idraulico"],
    image: "tractor-large",
    transmissionOptions: ["Power Shift", "CVT"],
    tractionOptions: ["4WD"],
    fullTechnicalSpecs: {
      potenza_kw: "191 kW",
      cilindrata: "6 cilindri turbo intercooler",
      pto: "540/1000 rpm",
    },
  },
  {
    id: "sd2204",
    name: "SD 2204",
    brand: "John Deere",
    category: "Alta Potenza",
    categorySlug: "large",
    hp: 220,
    hpRange: "200–220 HP",
    shortDescription: "Soluzione potente per aziende agricole strutturate.",
    engine: "Diesel 6 cilindri turbo",
    transmission: "Power Shift",
    traction: "4WD",
    weight: "7.600 kg",
    dimensions: "4.900 x 2.450 x 3.000 mm",
    features: [
      "Ottimo rapporto potenza/consumi",
      "Cabina comfort professionale",
      "Affidabilità elevata",
    ],
    accessories: ["Rimorchio agricolo", "Coltivatore", "Aratro"],
    image: "tractor-large",
    transmissionOptions: ["Power Shift"],
    tractionOptions: ["4WD"],
    fullTechnicalSpecs: {
      potenza_kw: "162 kW",
      cilindrata: "6 cilindri turbo",
      pto: "540/1000 rpm",
    },
  },
  {
    id: "sd1804",
    name: "SD 1804",
    brand: "New Holland",
    category: "Alta Potenza",
    categorySlug: "large",
    hp: 180,
    hpRange: "160–180 HP",
    shortDescription: "Equilibrio tra potenza e maneggevolezza per aziende medio-grandi.",
    engine: "Diesel 6 cilindri",
    transmission: "Manuale sincronizzata",
    traction: "4WD",
    weight: "6.500 kg",
    dimensions: "4.700 x 2.400 x 2.950 mm",
    features: [
      "Struttura robusta",
      "Alta affidabilità operativa",
      "Ideale per coltivazioni intensive",
    ],
    accessories: ["Erpice", "Aratro", "Rimorchio"],
    image: "tractor-large",
    transmissionOptions: ["Manuale sincronizzata"],
    tractionOptions: ["4WD"],
    fullTechnicalSpecs: {
      potenza_kw: "132 kW",
      cilindrata: "6 cilindri",
      pto: "540/1000 rpm",
    },
  },
  {
    id: "sd1604",
    name: "SD 1604",
    brand: "New Holland",
    category: "Media Potenza",
    categorySlug: "medium",
    hp: 160,
    hpRange: "140–160 HP",
    shortDescription: "Trattore versatile per coltivazioni miste.",
    engine: "Diesel 4 cilindri turbo",
    transmission: "Manuale sincronizzata",
    traction: "4WD",
    weight: "5.200 kg",
    dimensions: "4.400 x 2.200 x 2.850 mm",
    features: [
      "Versatile",
      "Consumi ottimizzati",
      "Ottima stabilità",
    ],
    accessories: ["Erpice", "Rimorchio", "Coltivatore"],
    image: "tractor-medium",
    transmissionOptions: ["Manuale sincronizzata"],
    tractionOptions: ["4WD", "2WD"],
    fullTechnicalSpecs: {
      potenza_kw: "118 kW",
      cilindrata: "4 cilindri turbo",
      pto: "540/1000 rpm",
    },
  },
  {
    id: "sd904",
    name: "SD 904",
    brand: "Fendt",
    category: "Compatti / Serre",
    categorySlug: "compact",
    hp: 90,
    hpRange: "80–90 HP",
    shortDescription: "Soluzione compatta per frutteti e coltivazioni specializzate.",
    engine: "Diesel 4 cilindri",
    transmission: "Manuale",
    traction: "4WD",
    weight: "3.500 kg",
    dimensions: "3.800 x 1.850 x 2.500 mm",
    features: [
      "Agile e maneggevole",
      "Ridotti consumi",
      "Perfetto per spazi contenuti",
    ],
    accessories: ["Mini rimorchio", "Attrezzature leggere"],
    image: "tractor-compact",
    transmissionOptions: ["Manuale"],
    tractionOptions: ["4WD", "2WD"],
    fullTechnicalSpecs: {
      potenza_kw: "66 kW",
      cilindrata: "4 cilindri",
      pto: "540 rpm",
    },
  },
  {
    id: "sd504g",
    name: "SD 504 G",
    brand: "Fendt",
    category: "Compatti / Serre",
    categorySlug: "compact",
    hp: 50,
    hpRange: "45–50 HP",
    shortDescription: "Trattore ultra compatto per serre e coltivazioni intensive.",
    engine: "Diesel 3 cilindri",
    transmission: "Manuale",
    traction: "4WD",
    weight: "2.100 kg",
    dimensions: "3.200 x 1.500 x 2.200 mm",
    features: [
      "Ultra compatto",
      "Massima manovrabilità",
      "Ideale per serre",
    ],
    accessories: ["Attrezzature serre", "Mini aratro"],
    image: "tractor-compact",
    transmissionOptions: ["Manuale"],
    tractionOptions: ["4WD", "2WD"],
    fullTechnicalSpecs: {
      potenza_kw: "37 kW",
      cilindrata: "3 cilindri",
      pto: "540 rpm",
    },
  },
];

export function getTractorsByCategory(categoryId: string) {
  return tractors.filter((t) => t.categorySlug === categoryId);
}

export function getTractorsByBrand(brand: string) {
  return tractors.filter((t) => t.brand === brand);
}

export function getTractorById(id: string) {
  return tractors.find((t) => t.id === id);
}
