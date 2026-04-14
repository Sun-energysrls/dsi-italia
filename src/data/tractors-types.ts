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
  { name: "Bianco Perla", value: "#F5F5F0" },
  { name: "Rosso/Nero", value: "linear-gradient(135deg, #C41E3A 50%, #1a1a1a 50%)" },
  { name: "Nero Lucido", value: "#1a1a1a" },
  { name: "Nero Opaco/Grigio", value: "linear-gradient(135deg, #2d2d2d 50%, #6b6b6b 50%)" },
  { name: "Verde", value: "#2d5a3d" },
];

export const brands = ["Tavol"] as const;
export type Brand = (typeof brands)[number];

export const categories = [
  { id: "large", label: "Alta Potenza", description: "150–260 HP per grandi aziende agricole" },
  { id: "medium", label: "Media Potenza", description: "90–140 HP per coltivazioni miste" },
  { id: "compact", label: "Compatti / Serre", description: "55–90 HP, agili e maneggevoli" },
];
