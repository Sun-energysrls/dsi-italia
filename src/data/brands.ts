export interface Brand {
  id: string;
  name: string;
  code: string;
  country: string;
  flag: string;
  color: string;
  description: string;
}

export const brands: Brand[] = [
  {
    id: "john-deere",
    name: "John Deere",
    code: "JD",
    country: "USA",
    flag: "🇺🇸",
    color: "hsl(142, 54%, 30%)",
    description: "Leader mondiale nella produzione di macchine agricole, sinonimo di innovazione e affidabilità dal 1837.",
  },
  {
    id: "new-holland",
    name: "New Holland",
    code: "NH",
    country: "Italia",
    flag: "🇮🇹",
    color: "hsl(217, 100%, 26%)",
    description: "Tecnologia italiana al servizio dell'agricoltura mondiale.",
  },
  {
    id: "fendt",
    name: "Fendt",
    code: "F",
    country: "Germania",
    flag: "🇩🇪",
    color: "hsl(100, 40%, 32%)",
    description: "Tecnologia tedesca di precisione, leader nei trattori ad alta potenza.",
  },
  {
    id: "case-ih",
    name: "Case IH",
    code: "CI",
    country: "USA",
    flag: "🇺🇸",
    color: "hsl(355, 90%, 38%)",
    description: "Storico marchio americano, specialista in trattori ad alta performance.",
  },
];

export function getBrandById(id: string) {
  return brands.find((b) => b.id === id);
}
