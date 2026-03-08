import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Tractor } from "@/data/tractors";
import tractorLarge from "@/assets/tractor-large.jpg";
import tractorMedium from "@/assets/tractor-medium.jpg";
import tractorSmall from "@/assets/tractor-small.jpg";
import tractorCompact from "@/assets/tractor-compact.jpg";

const imageMap: Record<string, string> = {
  "tractor-large": tractorLarge,
  "tractor-medium": tractorMedium,
  "tractor-small": tractorSmall,
  "tractor-compact": tractorCompact,
};

const TractorCard = ({ tractor }: { tractor: Tractor }) => {
  return (
    <div className="group bg-background overflow-hidden transition-all duration-500 hover:bg-card">
      <div className="aspect-[4/3] overflow-hidden bg-muted relative">
        <img
          src={imageMap[tractor.image]}
          alt={tractor.name}
          className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="p-6">
        <span className="text-secondary font-bold text-[10px] uppercase tracking-[0.2em] mb-1 block">{tractor.category}</span>
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-display text-xl font-bold text-foreground">{tractor.name}</h3>
          <span className="text-secondary font-black text-lg">{tractor.hp} HP</span>
        </div>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{tractor.shortDescription}</p>
        <Link
          to={`/trattori/${tractor.id}`}
          className="inline-flex items-center gap-2 text-[10px] font-bold text-secondary hover:opacity-80 transition-opacity uppercase tracking-[0.2em]"
        >
          Scopri di più
          <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default TractorCard;
