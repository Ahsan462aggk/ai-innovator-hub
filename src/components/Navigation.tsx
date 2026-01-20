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
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
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
  };

  if (location.pathname === "/cv") return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 pointer-events-none">
      <div className="flex items-center gap-2 p-2 px-6 glass-card rounded-full pointer-events-auto shadow-sm border border-slate-200/50">
        {navItems.map((item) => (
          <button
            key={item.href}
            onClick={() => handleNavClick(item.href)}
            className={`
              px-4 py-2 text-[10px] uppercase tracking-widest font-bold transition-all duration-300
              ${activeSection === item.href.substring(1)
                ? "text-primary bg-primary/5 rounded-full"
                : "text-muted-foreground hover:text-primary hover:bg-slate-50 rounded-full"
              }
            `}
          >
            {item.label}
          </button>
        ))}
        <div className="w-px h-4 bg-border mx-2"></div>
        <button
          onClick={() => handleNavClick("#contact")}
          className="px-4 py-2 text-[10px] uppercase tracking-widest font-bold text-primary hover:text-primary/80 transition-colors"
        >
          Work with me
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
