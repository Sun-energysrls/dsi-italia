export interface Brand {
  id: string;
  name: string;
  initials: string;
  country: string;
  description: string;
}

export const brands: Brand[] = [
  {
    id: "tavol",
    name: "Tavol",
    initials: "TV",
    country: "Cina",
    description: "Produttore cinese di trattori agricoli professionali con gamma da 55hp a 260hp. Qualità comprovata, tecnologia avanzata e ottimo rapporto qualità-prezzo per ogni esigenza agricola.",
  },
];
