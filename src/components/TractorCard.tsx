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
    <div className="group bg-card overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 border border-border">
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={imageMap[tractor.image]}
          alt={tractor.name}
          className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-700 ease-out"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <span className="text-secondary font-bold text-xs uppercase tracking-widest mb-1 block">{tractor.category}</span>
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-display text-xl font-bold text-foreground">{tractor.name}</h3>
          <span className="text-secondary font-black text-lg">{tractor.hp} HP</span>
        </div>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{tractor.shortDescription}</p>
        <Link
          to={`/trattori/${tractor.id}`}
          className="inline-flex items-center gap-2 text-sm font-bold text-secondary hover:text-primary transition-colors uppercase tracking-widest"
        >
          Scopri di più
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default TractorCard;
