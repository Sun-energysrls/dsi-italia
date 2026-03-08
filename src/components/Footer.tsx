import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logoLight from "@/assets/logo-light.png";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#1B4332" }} className="text-white">
      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <img src={logoLight} alt="DSI Import" className="h-16 w-auto mb-4 brightness-0 invert" />
            <p className="text-white/50 text-sm leading-relaxed">
              Importazione diretta di trattori professionali e attrezzature agricole per l'agricoltura moderna.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-5">Navigazione</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", path: "/" },
                { label: "Gamma Trattori", path: "/trattori" },
                { label: "Accessori", path: "/accessori" },
                { label: "Configuratore", path: "/configuratore" },
                { label: "Contatti", path: "/contatti" },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-white/50 hover:text-secondary transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-5">Brand</h4>
            <ul className="space-y-2.5">
              {["John Deere", "New Holland", "Fendt", "Case IH"].map((item) => (
                <li key={item}>
                  <Link to="/trattori" className="text-white/50 hover:text-secondary transition-colors text-sm">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-5">Contatti</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-secondary shrink-0" />
                <span className="text-white/50 text-sm">Via dell'Industria 42, 00100 Roma, Italia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-secondary shrink-0" />
                <a href="tel:+390000000000" className="text-white/50 hover:text-secondary transition-colors text-sm">+39 000 000 0000</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-secondary shrink-0" />
                <a href="mailto:info@dsi-import.it" className="text-white/50 hover:text-secondary transition-colors text-sm">info@dsi-import.it</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} DSI Import — For Industry and Agriculture. Tutti i diritti riservati.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/30 hover:text-secondary text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/30 hover:text-secondary text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
