import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Settings } from "lucide-react";
import logoDark from "@/assets/logo-dark.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Trattori", path: "/trattori" },
  { label: "Accessori", path: "/accessori" },
  { label: "Configuratore", path: "/configuratore" },
  { label: "Contatti", path: "/contatti" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img src={logoDark} alt="DSI Import" className="h-14 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-body text-sm font-medium tracking-wide uppercase transition-colors hover:text-secondary ${
                  location.pathname === item.path ? "text-secondary" : "text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+390000000000"
              className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-secondary transition-colors"
            >
              <Phone className="h-4 w-4" />
              Chiamaci
            </a>
            <Link
              to="/configuratore"
              className="gradient-accent text-accent-foreground px-5 py-2.5 rounded-md text-sm font-semibold tracking-wide uppercase transition-opacity hover:opacity-90 inline-flex items-center gap-2"
            >
              <Settings className="h-4 w-4" />
              Configura
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
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
                    location.pathname === item.path ? "text-secondary" : "text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/configuratore"
                onClick={() => setIsOpen(false)}
                className="gradient-accent text-accent-foreground px-5 py-3 rounded-md text-sm font-semibold text-center uppercase mt-2 inline-flex items-center justify-center gap-2"
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
