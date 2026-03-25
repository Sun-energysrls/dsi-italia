import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Settings } from "lucide-react";
import logoDark from "@/assets/logo-dark.png";
import logoLight from "@/assets/logo-light.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Trattori", path: "/trattori" },
  { label: "Accessori", path: "/accessori" },
  { label: "Configuratore", path: "/configuratore" },
  { label: "Contatti", path: "/contatti" },
];

const Header = ({ navDark }: { navDark?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = isHome && !scrolled && !isOpen;
  // On non-home pages, always dark nav
  const dark = isHome ? (navDark ?? true) : true;

  const bgStyle = transparent
    ? { background: "transparent", borderBottom: "1px solid transparent" }
    : dark
      ? {
          background: "rgba(27,67,50,0.95)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 1px 0 rgba(255,255,255,0.08)",
        }
      : {
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 1px 0 rgba(0,0,0,0.06)",
        };

  const textColor = transparent || dark ? "text-white/80" : "text-foreground/70";
  const textActive = transparent || dark ? "text-secondary" : "text-secondary";
  const hoverColor = "hover:text-secondary";
  const logo = transparent || dark ? logoLight : logoDark;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ ...bgStyle, transition: "all 0.4s ease" }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="DSI Import"
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-body text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${hoverColor} ${
                  location.pathname === item.path ? textActive : textColor
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+390000000000"
              className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${hoverColor} ${textColor}`}
            >
              <Phone className="h-4 w-4" />
              Chiamaci
            </a>
            <Link
              to="/configuratore"
              className="btn-orange !py-2.5 !px-5 !text-xs"
            >
              <Settings className="h-4 w-4" />
              Configura
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 ${transparent || dark ? "text-white" : "text-foreground"}`}
            aria-label="Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <nav className="lg:hidden pb-6 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-body text-base font-medium py-2 transition-colors ${
                    location.pathname === item.path ? textActive : textColor
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/configuratore"
                onClick={() => setIsOpen(false)}
                className="btn-orange !text-sm text-center mt-2"
              >
                <Settings className="h-4 w-4" />
                Configura il tuo Trattore
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
