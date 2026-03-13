export type { ColorOption, TechnicalSpecs, Tractor } from "./tractors-types";
export { globalColorOptions, brands, categories } from "./tractors-types";
export type { Brand } from "./tractors-types";

import { tavolTractors } from "./tractors-tavol";
import type { Tractor } from "./tractors-types";

export const tractors: Tractor[] = [...tavolTractors];

export function getTractorsByCategory(categoryId: string) {
  return tractors.filter((t) => t.categorySlug === categoryId);
}

export function getTractorsByBrand(brand: string) {
  return tractors.filter((t) => t.brand === brand);
}

export function getTractorById(id: string) {
  return tractors.find((t) => t.id === id);
}
