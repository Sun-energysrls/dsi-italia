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

export const brands = ["Tavol", "John Deere", "New Holland", "Fendt"] as const;
export type Brand = (typeof brands)[number];

export const categories = [
  { id: "xl", label: "Grandissima Potenza", description: "260+ HP per grandissime aziende cerealicole" },
  { id: "large", label: "Alta Potenza", description: "Oltre 150 HP per grandi aziende agricole" },
  { id: "medium", label: "Media Potenza", description: "90–140 HP per coltivazioni miste" },
  { id: "compact", label: "Compatti / Serre", description: "40–90 HP, agili e maneggevoli" },
];
