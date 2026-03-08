export interface Brand {
  id: string;
  name: string;
  initials: string;
  country: string;
  description: string;
}

export const brands: Brand[] = [
  {
    id: "john-deere",
    name: "John Deere",
    initials: "JD",
    country: "USA",
    description: "Leader mondiale nella produzione di macchine agricole, sinonimo di innovazione e affidabilità dal 1837.",
  },
  {
    id: "new-holland",
    name: "New Holland",
    initials: "NH",
    country: "Italia",
    description: "Tecnologia italiana al servizio dell'agricoltura mondiale.",
  },
  {
    id: "fendt",
    name: "Fendt",
    initials: "F",
    country: "Germania",
    description: "Tecnologia tedesca di precisione, leader nei trattori ad alta potenza.",
  },
  {
    id: "case-ih",
    name: "Case IH",
    initials: "CI",
    country: "USA",
    description: "Storico marchio americano, specialista in trattori ad alta performance.",
  },
];
