export interface ColorOption {
  name: string;
  value: string;
}

export interface TechnicalSpecs {
  cilindrata: string;
  coppia: string;
  normativa: string;
  sollevatore: string;
  pto: string;
  serbatoio: string;
  impianto_idraulico: string;
  [key: string]: string;
}

export interface Tractor {
  id: string;
  name: string;
  category: string;
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
  availableColors: ColorOption[];
  fullTechnicalSpecs: TechnicalSpecs;
}

export const categories = [
  { id: "oltre-200", label: "Oltre 200 HP", description: "Potenza massima per grandi aziende agricole" },
  { id: "120-180", label: "120–180 HP", description: "Versatilità e prestazioni per lavori intensivi" },
  { id: "60-100", label: "60–100 HP", description: "Il perfetto equilibrio tra potenza e maneggevolezza" },
  { id: "25-50", label: "25–50 HP", description: "Compatti e agili per ogni esigenza" },
];

export const tractors: Tractor[] = [
  {
    id: "dsi-titan-280",
    name: "DSI Titan 280",
    category: "oltre-200",
    hp: 280,
    hpRange: "Oltre 200 HP",
    shortDescription: "Potenza estrema per le operazioni agricole più impegnative. Ideale per grandi superfici.",
    engine: "6 cilindri turbo diesel, 7.4L",
    transmission: "Powershift 24+24",
    traction: "4WD",
    weight: "12.500 kg",
    dimensions: "5.200 x 2.600 x 3.400 mm",
    features: ["Cabina premium climatizzata", "GPS integrato", "Sospensioni pneumatiche", "Monitor touchscreen", "Impianto idraulico potenziato"],
    accessories: ["Rimorchio ribaltabile", "Aratro reversibile", "Zavorre frontali", "Cabina climatizzata", "Impianto idraulico potenziato"],
    image: "tractor-large",
    transmissionOptions: ["Powershift 24+24", "Powershift 20+20"],
    tractionOptions: ["4WD"],
    availableColors: [
      { name: "Verde", value: "hsl(156, 32%, 17%)" },
      { name: "Nero", value: "hsl(0, 0%, 11%)" },
      { name: "Arancione", value: "hsl(27, 82%, 52%)" },
    ],
    fullTechnicalSpecs: {
      cilindrata: "7.400 cc",
      coppia: "1.150 Nm",
      normativa: "Stage V",
      sollevatore: "10.000 kg",
      pto: "540/1000 giri/min",
      serbatoio: "450 L",
      impianto_idraulico: "Load Sensing 200 L/min",
    },
  },
  {
    id: "dsi-titan-240",
    name: "DSI Titan 240",
    category: "oltre-200",
    hp: 240,
    hpRange: "Oltre 200 HP",
    shortDescription: "Prestazioni di alto livello con consumi ottimizzati per grandi coltivazioni.",
    engine: "6 cilindri turbo diesel, 6.7L",
    transmission: "Powershift 20+20",
    traction: "4WD",
    weight: "11.200 kg",
    dimensions: "5.000 x 2.550 x 3.300 mm",
    features: ["Cabina climatizzata", "Sollevatore posteriore 10.000 kg", "PTO 540/1000", "Sistema idraulico LS"],
    accessories: ["Erpice rotante", "Seminatrice", "Zavorre", "Cabina climatizzata", "Impianto idraulico potenziato"],
    image: "tractor-large",
    transmissionOptions: ["Powershift 20+20", "Powershift 16+16"],
    tractionOptions: ["4WD"],
    availableColors: [
      { name: "Verde", value: "hsl(156, 32%, 17%)" },
      { name: "Rosso", value: "hsl(0, 70%, 45%)" },
      { name: "Nero", value: "hsl(0, 0%, 11%)" },
    ],
    fullTechnicalSpecs: {
      cilindrata: "6.700 cc",
      coppia: "980 Nm",
      normativa: "Stage V",
      sollevatore: "10.000 kg",
      pto: "540/1000 giri/min",
      serbatoio: "400 L",
      impianto_idraulico: "Load Sensing 160 L/min",
    },
  },
  {
    id: "dsi-forza-180",
    name: "DSI Forza 180",
    category: "120-180",
    hp: 180,
    hpRange: "120–180 HP",
    shortDescription: "Versatile e potente, perfetto per aziende di medie-grandi dimensioni.",
    engine: "4 cilindri turbo diesel, 4.5L",
    transmission: "Sincronizzato 16+16",
    traction: "4WD",
    weight: "7.800 kg",
    dimensions: "4.500 x 2.400 x 2.900 mm",
    features: ["Cabina comfort", "Inversore elettroidraulico", "Sollevatore 6.000 kg", "Aria condizionata"],
    accessories: ["Caricatore frontale", "Rimorchio", "Attrezzatura per campo", "Cabina climatizzata", "Zavorre"],
    image: "tractor-medium",
    transmissionOptions: ["Sincronizzato 16+16", "Sincronizzato 12+12", "Powershift 16+16"],
    tractionOptions: ["4WD", "2WD"],
    availableColors: [
      { name: "Verde", value: "hsl(156, 32%, 17%)" },
      { name: "Rosso", value: "hsl(0, 70%, 45%)" },
      { name: "Arancione", value: "hsl(27, 82%, 52%)" },
      { name: "Blu", value: "hsl(220, 60%, 40%)" },
    ],
    fullTechnicalSpecs: {
      cilindrata: "4.500 cc",
      coppia: "720 Nm",
      normativa: "Stage V",
      sollevatore: "6.000 kg",
      pto: "540/750/1000 giri/min",
      serbatoio: "280 L",
      impianto_idraulico: "Open center 90 L/min",
    },
  },
  {
    id: "dsi-forza-150",
    name: "DSI Forza 150",
    category: "120-180",
    hp: 150,
    hpRange: "120–180 HP",
    shortDescription: "Affidabilità e prestazioni per lavori agricoli quotidiani.",
    engine: "4 cilindri turbo diesel, 4.5L",
    transmission: "Sincronizzato 12+12",
    traction: "4WD",
    weight: "6.900 kg",
    dimensions: "4.300 x 2.350 x 2.800 mm",
    features: ["Cabina climatizzata", "PTO 540/750/1000", "Sollevatore 5.500 kg"],
    accessories: ["Botte da diserbo", "Trinciasarmenti", "Rimorchio", "Cabina climatizzata", "Zavorre"],
    image: "tractor-medium",
    transmissionOptions: ["Sincronizzato 12+12", "Manuale 8+8"],
    tractionOptions: ["4WD", "2WD"],
    availableColors: [
      { name: "Verde", value: "hsl(156, 32%, 17%)" },
      { name: "Rosso", value: "hsl(0, 70%, 45%)" },
      { name: "Arancione", value: "hsl(27, 82%, 52%)" },
      { name: "Nero", value: "hsl(0, 0%, 11%)" },
    ],
    fullTechnicalSpecs: {
      cilindrata: "4.500 cc",
      coppia: "620 Nm",
      normativa: "Stage V",
      sollevatore: "5.500 kg",
      pto: "540/750/1000 giri/min",
      serbatoio: "220 L",
      impianto_idraulico: "Open center 80 L/min",
    },
  },
  {
    id: "dsi-campo-90",
    name: "DSI Campo 90",
    category: "60-100",
    hp: 90,
    hpRange: "60–100 HP",
    shortDescription: "Maneggevolezza e potenza per frutteti, vigneti e aziende miste.",
    engine: "4 cilindri diesel, 3.3L",
    transmission: "Sincronizzato 12+12",
    traction: "4WD",
    weight: "4.200 kg",
    dimensions: "3.900 x 2.100 x 2.600 mm",
    features: ["Sterzo idrostatico", "Raggio di volta ridotto", "Cabina con tetto apribile"],
    accessories: ["Atomizzatore", "Tagliaerba", "Caricatore frontale", "Zavorre", "Cabina climatizzata"],
    image: "tractor-small",
    transmissionOptions: ["Sincronizzato 12+12", "Manuale 8+8"],
    tractionOptions: ["4WD", "2WD"],
    availableColors: [
      { name: "Verde", value: "hsl(156, 32%, 17%)" },
      { name: "Rosso", value: "hsl(0, 70%, 45%)" },
      { name: "Arancione", value: "hsl(27, 82%, 52%)" },
      { name: "Blu", value: "hsl(220, 60%, 40%)" },
      { name: "Nero", value: "hsl(0, 0%, 11%)" },
    ],
    fullTechnicalSpecs: {
      cilindrata: "3.300 cc",
      coppia: "380 Nm",
      normativa: "Stage V",
      sollevatore: "3.500 kg",
      pto: "540/750 giri/min",
      serbatoio: "120 L",
      impianto_idraulico: "Open center 60 L/min",
    },
  },
  {
    id: "dsi-campo-75",
    name: "DSI Campo 75",
    category: "60-100",
    hp: 75,
    hpRange: "60–100 HP",
    shortDescription: "Compatto e robusto, ideale per operazioni su terreni vari.",
    engine: "3 cilindri diesel, 2.9L",
    transmission: "Manuale 8+8",
    traction: "4WD",
    weight: "3.600 kg",
    dimensions: "3.700 x 1.950 x 2.500 mm",
    features: ["Design compatto", "Presa di forza indipendente", "Freni a disco in bagno d'olio"],
    accessories: ["Fresa", "Rimorchio leggero", "Lama sgombraneve", "Zavorre"],
    image: "tractor-small",
    transmissionOptions: ["Manuale 8+8", "Sincronizzato 8+8"],
    tractionOptions: ["4WD", "2WD"],
    availableColors: [
      { name: "Verde", value: "hsl(156, 32%, 17%)" },
      { name: "Rosso", value: "hsl(0, 70%, 45%)" },
      { name: "Arancione", value: "hsl(27, 82%, 52%)" },
      { name: "Nero", value: "hsl(0, 0%, 11%)" },
    ],
    fullTechnicalSpecs: {
      cilindrata: "2.900 cc",
      coppia: "310 Nm",
      normativa: "Stage V",
      sollevatore: "2.800 kg",
      pto: "540 giri/min",
      serbatoio: "90 L",
      impianto_idraulico: "Open center 50 L/min",
    },
  },
  {
    id: "dsi-agile-45",
    name: "DSI Agile 45",
    category: "25-50",
    hp: 45,
    hpRange: "25–50 HP",
    shortDescription: "Compatto e versatile per piccole aziende e lavori di manutenzione.",
    engine: "3 cilindri diesel, 1.5L",
    transmission: "Manuale 8+8",
    traction: "4WD",
    weight: "1.800 kg",
    dimensions: "3.200 x 1.600 x 2.300 mm",
    features: ["Ultra compatto", "Servosterzo", "Presa di forza posteriore e centrale"],
    accessories: ["Tagliaerba", "Benna", "Rimorchietto", "Fresa"],
    image: "tractor-compact",
    transmissionOptions: ["Manuale 8+8", "Manuale 6+2"],
    tractionOptions: ["4WD", "2WD"],
    availableColors: [
      { name: "Verde", value: "hsl(156, 32%, 17%)" },
      { name: "Rosso", value: "hsl(0, 70%, 45%)" },
      { name: "Arancione", value: "hsl(27, 82%, 52%)" },
    ],
    fullTechnicalSpecs: {
      cilindrata: "1.500 cc",
      coppia: "180 Nm",
      normativa: "Stage V",
      sollevatore: "1.500 kg",
      pto: "540 giri/min",
      serbatoio: "50 L",
      impianto_idraulico: "Open center 35 L/min",
    },
  },
  {
    id: "dsi-agile-30",
    name: "DSI Agile 30",
    category: "25-50",
    hp: 30,
    hpRange: "25–50 HP",
    shortDescription: "Il più compatto della gamma, perfetto per orti, serre e piccoli appezzamenti.",
    engine: "3 cilindri diesel, 1.1L",
    transmission: "Manuale 6+2",
    traction: "2WD / 4WD",
    weight: "1.400 kg",
    dimensions: "2.900 x 1.450 x 2.200 mm",
    features: ["Leggerissimo", "Facile da manovrare", "Manutenzione semplificata"],
    accessories: ["Fresa piccola", "Carrello", "Lama", "Tagliaerba"],
    image: "tractor-compact",
    transmissionOptions: ["Manuale 6+2"],
    tractionOptions: ["2WD", "4WD"],
    availableColors: [
      { name: "Verde", value: "hsl(156, 32%, 17%)" },
      { name: "Arancione", value: "hsl(27, 82%, 52%)" },
    ],
    fullTechnicalSpecs: {
      cilindrata: "1.100 cc",
      coppia: "120 Nm",
      normativa: "Stage V",
      sollevatore: "900 kg",
      pto: "540 giri/min",
      serbatoio: "35 L",
      impianto_idraulico: "Open center 25 L/min",
    },
  },
];

export function getTractorsByCategory(categoryId: string) {
  return tractors.filter((t) => t.category === categoryId);
}

export function getTractorById(id: string) {
  return tractors.find((t) => t.id === id);
}
