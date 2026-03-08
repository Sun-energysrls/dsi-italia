import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Search } from "lucide-react";
import logoDark from "@/assets/logo-dark.png";
import logoLight from "@/assets/logo-light.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Trattori", path: "/trattori" },
  { label: "Accessori", path: "/accessori" },
  { label: "Configuratore", path: "/configuratore" },
  { label: "Contatti", path: "/contatti" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const transparent = isHome && !scrolled && !isOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          transparent
            ? "bg-transparent"
            : "bg-background/98 backdrop-blur-xl border-b border-border/50"
        }`}
      >
        <div className="w-full px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Left: Menu trigger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`flex items-center gap-3 transition-colors ${
                transparent ? "text-white" : "text-foreground"
              } hover:text-secondary`}
              aria-label="Menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] hidden sm:inline">
                Menu
              </span>
            </button>

            {/* Center: Logo */}
            <Link to="/" className="absolute left-1/2 -translate-x-1/2">
              <img
                src={transparent ? logoLight : logoDark}
                alt="DSI Import"
                className="h-10 lg:h-12 w-auto"
              />
            </Link>

            {/* Right: Minimal actions */}
            <div className="flex items-center gap-5">
              <a
                href="tel:+390000000000"
                className={`hidden sm:flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors hover:text-secondary ${
                  transparent ? "text-white/80" : "text-muted-foreground"
                }`}
              >
                <Phone className="h-3.5 w-3.5" />
              </a>
              <Link
                to="/configuratore"
                className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-colors hover:text-secondary ${
                  transparent ? "text-white" : "text-foreground"
                }`}
              >
                Configura
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Full-screen overlay menu */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-500 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-primary/98 backdrop-blur-xl" />
        <div className="relative h-full flex flex-col">
          {/* Close button */}
          <div className="px-6 lg:px-10 h-16 lg:h-20 flex items-center">
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 text-primary-foreground hover:text-secondary transition-colors"
            >
              <X className="h-5 w-5" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em]">Chiudi</span>
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 flex flex-col justify-center px-10 lg:px-20">
            <div className="space-y-1">
              {navItems.map((item, i) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-4xl lg:text-6xl font-display font-black uppercase tracking-tight py-3 lg:py-4 transition-all duration-300 hover:translate-x-4 ${
                    location.pathname === item.path
                      ? "text-secondary"
                      : "text-primary-foreground/80 hover:text-primary-foreground"
                  }`}
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Bottom bar */}
          <div className="px-10 lg:px-20 py-8 border-t border-primary-foreground/10 flex items-center justify-between">
            <a
              href="tel:+390000000000"
              className="text-primary-foreground/50 text-[11px] font-bold uppercase tracking-[0.2em] hover:text-secondary transition-colors"
            >
              +39 000 000 0000
            </a>
            <a
              href="mailto:info@dsi-import.it"
              className="text-primary-foreground/50 text-[11px] font-bold uppercase tracking-[0.2em] hover:text-secondary transition-colors"
            >
              info@dsi-import.it
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
