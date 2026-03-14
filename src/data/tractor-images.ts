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

// Maps tractor IDs to their real product images
export const tractorImageMap: Record<string, string> = {
  "tavol-554": tavol554,
  "tavol-704": tavol704,
  "tavol-804": tavol804,
  "tavol-904-shuttle": tavol904,
  "tavol-904-creeper": tavol904,
  "tavol-1004": tavol1004,
  "tavol-1204": tavol1204,
  "tavol-1404": tavol1404,
  "tavol-1504": tavol1404,    // fallback: closest model
  "tavol-1604": tavol1604,
  "tavol-1804": tavol1804,
  "tavol-2004": tavol2004,
  "tavol-2204": tavol2204,
  "tavol-2404": tavol2404,
  "tavol-2604": tavol2604,
  "tavol-2804": tavol2804,
};

export function getTractorImage(tractorId: string): string {
  return tractorImageMap[tractorId] || tavol804;
}
