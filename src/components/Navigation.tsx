import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Demo", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "CV", href: "/cv" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (href.startsWith("/")) {
      navigate(href);
    } else {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(href.substring(1));
          element?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const element = document.getElementById(href.substring(1));
        element?.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  if (location.pathname === "/cv") return null;

  return (
    <nav
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 flex justify-center px-4`}
    >
      {/* Unified Glassmorphic Container */}
      <div
        className={`
          w-full max-w-5xl rounded-full transition-all duration-300
          bg-black/30 backdrop-blur-lg border border-white/10 
          shadow-lg shadow-purple-500/10
          px-6 py-3
        `}
      >
        <div className="flex items-center justify-between">
          {/* Enhanced Logo with Icon */}
          <button
            onClick={() => handleNavClick("#hero")}
            className="flex items-center gap-2 group hover:scale-105 transition-transform"
          >
            <Sparkles className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
            <span className="text-xl font-extrabold font-heading tracking-tight text-white">
              AI
            </span>
            <span className="text-xl font-light font-heading tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Hub
            </span>
          </button>

          {/* Desktop Navigation - All in One Container */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="relative px-4 py-2 text-sm font-medium transition-all duration-300 group"
              >
                {/* Text */}
                <span
                  className={`
                    ${activeSection === item.href.substring(1)
                      ? "text-white"
                      : "text-gray-400 group-hover:text-white"
                    }
                    transition-colors
                  `}
                >
                  {item.label}
                </span>

                {/* Active Indicator - Glowing Dot */}
                {activeSection === item.href.substring(1) && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary shadow-[0_0_8px_rgba(124,58,237,0.8)] animate-pulse"></div>
                )}

                {/* Subtle Background on Active */}
                {activeSection === item.href.substring(1) && (
                  <div className="absolute inset-0 bg-white/5 rounded-full -z-10"></div>
                )}
              </button>
            ))}

            {/* CTA Button - Integrated */}
            <Button
              onClick={() => handleNavClick("#contact")}
              className="ml-2 bg-gradient-to-r from-primary via-accent to-primary hover:from-primary/90 hover:via-accent/90 hover:to-primary/90 text-white text-xs font-bold px-5 py-2 h-9 rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 animate-in slide-in-from-top-5 fade-in duration-300">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`
                    w-full text-left px-4 py-3 rounded-full transition-all duration-300 relative
                    ${activeSection === item.href.substring(1)
                      ? "bg-white/10 text-white border border-primary/30 shadow-[0_0_15px_rgba(124,58,237,0.2)]"
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                    }
                  `}
                >
                  {item.label}
                  {activeSection === item.href.substring(1) && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(124,58,237,0.8)] animate-pulse"></div>
                  )}
                </button>
              ))}
              <Button
                onClick={() => handleNavClick("#contact")}
                className="w-full mt-2 bg-gradient-to-r from-primary via-accent to-primary hover:from-primary/90 hover:via-accent/90 hover:to-primary/90 text-white font-bold rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all"
              >
                Let's Talk
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
