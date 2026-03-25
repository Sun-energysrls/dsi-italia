import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Settings } from "lucide-react";
import logoDark from "@/assets/logo-dark.png";
import logoLight from "@/assets/logo-light.png";

type NavTheme = "hero" | "light" | "dark";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Trattori", path: "/trattori" },
  { label: "Accessori", path: "/accessori" },
  { label: "Configuratore", path: "/configuratore" },
  { label: "Contatti", path: "/contatti" },
];

const Header = ({ navDark }: { navDark?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<NavTheme>("hero");
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    if (!isHome) {
      setTheme("dark");
      return;
    }

    const sections = document.querySelectorAll("[data-nav-theme]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const t = (entry.target as HTMLElement).dataset.navTheme as NavTheme;
            if (t) setTheme(t);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px -60% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [location.pathname, isHome]);

  const bgStyle =
    theme === "hero"
      ? { background: "transparent", borderBottom: "1px solid transparent" }
      : theme === "light"
        ? { background: "rgba(253,251,247,0.95)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(42,37,32,0.08)" }
        : { background: "rgba(27,58,45,0.95)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.08)" };

  const isDark = theme !== "light";
  const textColor = isDark ? "rgba(255,255,255,0.75)" : "#4A443D";
  const textActive = "#D4781C";
  const logo = isDark ? logoLight : logoDark;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ ...bgStyle, transition: "all 0.4s ease" }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="DSI Import" className="h-14 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm font-medium tracking-wide uppercase transition-colors duration-300"
                style={{
                  color: location.pathname === item.path ? textActive : textColor,
                  fontFamily: "'DM Sans', sans-serif",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = textActive; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = location.pathname === item.path ? textActive : textColor; }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+390000000000"
              className="flex items-center gap-2 text-sm font-medium transition-colors duration-300"
              style={{ color: textColor }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = textActive; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = textColor; }}
            >
              <Phone className="h-4 w-4" />
              Chiamaci
            </a>
            <Link to="/configuratore" className="btn-orange !py-2.5 !px-5 !text-xs">
              <Settings className="h-4 w-4" />
              Configura
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2"
            style={{ color: isDark ? "white" : "#2A2520" }}
            aria-label="Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <nav className="lg:hidden pb-6 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="font-medium py-2 transition-colors"
                  style={{
                    color: location.pathname === item.path ? textActive : textColor,
                    fontSize: "0.95rem",
                  }}
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
