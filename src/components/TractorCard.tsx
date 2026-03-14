import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Tractor } from "@/data/tractors";
import { getTractorImage } from "@/data/tractor-images";
import fieldBg from "@/assets/field-bg.jpg";

const TractorCard = ({ tractor }: { tractor: Tractor }) => {
  return (
    <Link
      to={`/trattori/${tractor.id}`}
      className="group flex flex-col transition-all duration-350"
      style={{
        height: 480,
        background: "white",
        borderRadius: 8,
        overflow: "hidden",
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        border: "1px solid #EDE9E3",
        willChange: "transform",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.transform = "translateY(-8px)";
        el.style.boxShadow = "0 24px 48px rgba(0,0,0,0.14)";
        el.style.borderColor = "#F97316";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "0 4px 24px rgba(0,0,0,0.08)";
        el.style.borderColor = "#EDE9E3";
      }}
    >
      <div className="overflow-hidden" style={{ height: 260, background: "#F9F7F5" }}>
        <img
          src={getTractorImage(tractor.id)}
          alt={tractor.name}
          className="w-full h-full object-contain p-5 group-hover:scale-[1.04] transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col flex-grow" style={{ padding: 24 }}>
        <span className="uppercase font-semibold" style={{ fontSize: "0.65rem", letterSpacing: "0.18em", color: "#F97316" }}>
          {tractor.category}
        </span>
        <div className="flex items-center justify-between mt-1 mb-1">
          <h3 className="font-display text-lg font-bold" style={{ color: "#1a1a1a" }}>{tractor.name}</h3>
          <span className="font-display" style={{ fontSize: "1.8rem", color: "#F97316", fontWeight: 300, lineHeight: 1 }}>
            {tractor.hp}
          </span>
        </div>
        <p className="flex-grow" style={{ color: "#777", fontSize: "0.85rem", lineHeight: 1.6 }}>
          {tractor.shortDescription}
        </p>
        <span className="mt-auto inline-flex items-center gap-2 font-semibold uppercase group-hover:tracking-wider transition-all duration-300" style={{ color: "#F97316", fontSize: "0.75rem", letterSpacing: "0.1em" }}>
          Scopri di più <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
};

export default TractorCard;
