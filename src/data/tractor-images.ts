import tavol554 from "@/assets/tavol-554.png";
import tavol704 from "@/assets/tavol-704.png";
import tavol804 from "@/assets/tavol-804.png";
import tavol904 from "@/assets/tavol-904.png";
import tavol1004 from "@/assets/tavol-1004.png";
import tavol1204 from "@/assets/tavol-1204.png";
import tavol1404 from "@/assets/tavol-1404.png";
import tavol1604 from "@/assets/tavol-1604.png";
import tavol1804 from "@/assets/tavol-1804.png";
import tavol2004 from "@/assets/tavol-2004.png";
import tavol2204 from "@/assets/tavol-2204.png";
import tavol2404 from "@/assets/tavol-2404.png";
import tavol2604 from "@/assets/tavol-2604.png";
import tavol2804 from "@/assets/tavol-2804.png";

// Real-world photos (for cards & detail pages)
import tavol554Photo from "@/assets/tavol-554-2.png";
import tavol704Photo from "@/assets/tavol-704-2.png";
import tavol804Photo from "@/assets/tavol-804-2.png";
import tavol904Photo from "@/assets/tavol-904-2.png";
import tavol1004Photo from "@/assets/tavol-1004-2.png";
import tavol1204Photo from "@/assets/tavol-1204-2.png";
import tavol1404Photo from "@/assets/tavol-1404-2.png";
import tavol1604Photo from "@/assets/tavol-1604-2.png";
import tavol1804Photo from "@/assets/tavol-1804-2.png";
import tavol2004Photo from "@/assets/tavol-2004-2.png";
import tavol2204Photo from "@/assets/tavol-2204-2.png";
import tavol2404Photo from "@/assets/tavol-2404-2.png";
import tavol2604Photo from "@/assets/tavol-2604-2.png";
import tavol2804Photo from "@/assets/tavol-2804-2.png";

// Maps tractor IDs to their transparent product images (for configurator)
export const tractorImageMap: Record<string, string> = {
  "tavol-554": tavol554,
  "tavol-704": tavol704,
  "tavol-804": tavol804,
  "tavol-904-shuttle": tavol904,
  "tavol-904-creeper": tavol904,
  "tavol-1004": tavol1004,
  "tavol-1204": tavol1204,
  "tavol-1404": tavol1404,
  "tavol-1604": tavol1604,
  "tavol-1804": tavol1804,
  "tavol-2004": tavol2004,
  "tavol-2204": tavol2204,
  "tavol-2404": tavol2404,
  "tavol-2604": tavol2604,
  "tavol-2804": tavol2804,
};

// Maps tractor IDs to real-world photos (for catalog cards & detail pages)
export const tractorPhotoMap: Record<string, string> = {
  "tavol-554": tavol554Photo,
  "tavol-704": tavol704Photo,
  "tavol-804": tavol804Photo,
  "tavol-904-shuttle": tavol904Photo,
  "tavol-904-creeper": tavol904Photo,
  "tavol-1004": tavol1004Photo,
  "tavol-1204": tavol1204Photo,
  "tavol-1404": tavol1404Photo,
  "tavol-1604": tavol1604Photo,
  "tavol-1804": tavol1804Photo,
  "tavol-2004": tavol2004Photo,
  "tavol-2204": tavol2204Photo,
  "tavol-2404": tavol2404Photo,
  "tavol-2604": tavol2604Photo,
  "tavol-2804": tavol2804Photo,
};

/** Transparent image — use in configurator */
export function getTractorImage(tractorId: string): string {
  return tractorImageMap[tractorId] || tavol804;
}

/** Real-world photo — use in cards & detail pages. Falls back to transparent. */
export function getTractorPhoto(tractorId: string): string {
  return tractorPhotoMap[tractorId] || tractorImageMap[tractorId] || tavol804;
}
