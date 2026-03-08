import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logoLight from "@/assets/logo-light.png";

const Footer = () => {
  return (
    <footer className="gradient-primary text-primary-foreground">
      {/* Main content */}
      <div className="px-8 lg:px-16 py-20 lg:py-28 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Brand — wider */}
          <div className="lg:col-span-4">
            <img src={logoLight} alt="DSI Import" className="h-12 w-auto mb-6 brightness-0 invert" />
            <p className="text-primary-foreground/50 text-sm leading-relaxed max-w-sm">
              Importazione diretta di trattori professionali e attrezzature agricole per l'agricoltura moderna.
            </p>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary-foreground/40 mb-6">
              Navigazione
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "Gamma Trattori", path: "/trattori" },
                { label: "Accessori", path: "/accessori" },
                { label: "Configuratore", path: "/configuratore" },
                { label: "Contatti", path: "/contatti" },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-primary-foreground/60 hover:text-secondary transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary-foreground/40 mb-6">
              Prodotti
            </h4>
            <ul className="space-y-3">
              {["Trattori oltre 200 HP", "Trattori 120–180 HP", "Trattori 60–100 HP", "Trattori 25–50 HP", "Rimorchi e Accessori"].map((item) => (
                <li key={item}>
                  <span className="text-primary-foreground/50 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary-foreground/40 mb-6">
              Contatti
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-secondary shrink-0" />
                <span className="text-primary-foreground/50 text-sm">Via dell'Industria 42, 00100 Roma, Italia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-secondary shrink-0" />
                <a href="tel:+390000000000" className="text-primary-foreground/50 hover:text-secondary transition-colors text-sm">
                  +39 000 000 0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-secondary shrink-0" />
                <a href="mailto:info@dsi-import.it" className="text-primary-foreground/50 hover:text-secondary transition-colors text-sm">
                  info@dsi-import.it
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/8 px-8 lg:px-16">
        <div className="max-w-[1600px] mx-auto py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/30 text-xs">
            © {new Date().getFullYear()} DSI Import — For Industry and Agriculture
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-primary-foreground/30 hover:text-secondary text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-primary-foreground/30 hover:text-secondary text-xs transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
