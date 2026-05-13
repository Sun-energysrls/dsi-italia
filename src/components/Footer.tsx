import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logoLight from "@/assets/logo-light.png";

const Footer = () => {
  useEffect(() => {
    // Load iubenda.js for embed links
    const s = document.createElement("script");
    s.src = "https://cdn.iubenda.com/iubenda.js";
    s.async = true;
    document.body.appendChild(s);
    return () => { document.body.removeChild(s); };
  }, []);

  return (
    <footer style={{ background: "var(--dsi-green-gradient)" }} className="text-white">
      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <img src={logoLight} alt="DSI Import" className="h-16 w-auto mb-4 brightness-0 invert" />
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.875rem", lineHeight: 1.7 }}>
              Importazione diretta di trattori professionali e attrezzature agricole per l'agricoltura moderna.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-5 text-white">Navigazione</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", path: "/" },
                { label: "Gamma Trattori", path: "/trattori" },
                { label: "Accessori", path: "/accessori" },
                { label: "Configuratore", path: "/configuratore" },
                { label: "Contatti", path: "/contatti" },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} style={{ color: "rgba(255,255,255,0.6)" }} className="hover:text-secondary transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-5 text-white">Prodotti</h4>
            <ul className="space-y-2.5">
              {["Trattori oltre 200 HP", "Trattori 120–180 HP", "Trattori 60–100 HP", "Trattori 25–50 HP", "Rimorchi e Accessori"].map((item) => (
                <li key={item}>
                  <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.875rem" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-5 text-white">Contatti</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-secondary shrink-0" />
                <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.875rem" }}>
                  Via Cesare Battisti 101<br />
                  67051 Avezzano (AQ)
                </span>
              </li>
              <li className="flex flex-col items-start gap-1 pt-2">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-secondary shrink-0" />
                  <a href="tel:+393338590639" style={{ color: "rgba(255,255,255,0.6)" }} className="hover:text-secondary transition-colors text-sm">
                    Ugo Di Stefano: +39 333 8590639
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-4 w-4 shrink-0" />
                  <a href="tel:+393384116588" style={{ color: "rgba(255,255,255,0.6)" }} className="hover:text-secondary transition-colors text-sm">
                    Alessio Iannotti: +39 338 411 6588
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3 pt-2">
                <Mail className="h-4 w-4 text-secondary shrink-0" />
                <a href="mailto:vendite@dsimportsrl.com" style={{ color: "rgba(255,255,255,0.6)" }} className="hover:text-secondary transition-colors text-sm">
                  vendite@dsimportsrl.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-secondary shrink-0" />
                <a href="mailto:dsiimportsrl@pec.it" style={{ color: "rgba(255,255,255,0.6)" }} className="hover:text-secondary transition-colors text-sm">
                  dsiimportsrl@pec.it
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.875rem" }}>
            <p className="mb-1">
              © {new Date().getFullYear()} DSI IMPORT S.R.L. — Tutti i diritti riservati.
            </p>
            <p style={{ fontSize: "0.75rem", opacity: 0.8 }}>
              P.IVA / C.F. 02217120662 | REA: AQ - 218903
            </p>
          </div>
          <div className="flex gap-6">
            <a href="https://www.iubenda.com/privacy-policy/64380274" className="iubenda-white iubenda-noiframe iubenda-embed hover:text-secondary text-sm transition-colors" style={{ color: "rgba(255,255,255,0.4)" }} title="Privacy Policy">Privacy Policy</a>
            <a href="https://www.iubenda.com/privacy-policy/64380274/cookie-policy" className="iubenda-white iubenda-noiframe iubenda-embed hover:text-secondary text-sm transition-colors" style={{ color: "rgba(255,255,255,0.4)" }} title="Cookie Policy">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
