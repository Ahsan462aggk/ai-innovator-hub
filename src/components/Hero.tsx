import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profilePic from "@/assets/ahsan pic .png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const skills = [
    "AI Agent Architect",
    "RAG Systems Specialist",
    "Generative AI Engineer",
    "LangChain Expert"
  ];
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32 bg-background">
      {/* Clean Grid Background */}
      <div className="absolute inset-0 z-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>

      {/* Subtle Gradient Orbs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* Content side: Structural & Bold */}
          <div className="space-y-12 text-center lg:text-left">
            <div className="space-y-6">
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="relative">
                  <div className="h-3 w-3 bg-emerald-500 rounded-full animate-ping absolute opacity-75"></div>
                  <div className="h-3 w-3 bg-emerald-500 rounded-full relative"></div>
                </div>
                <span className="text-xs uppercase tracking-[0.3em] font-bold text-primary">Status: Open to Work</span>
              </div>

              <h1 className="text-7xl md:text-9xl font-bold leading-[0.9] tracking-tight text-foreground">
                <span className="block mb-2">AHSAN</span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">GILL</span>
              </h1>
            </div>

            <div className="tech-border p-8 backdrop-blur-sm group hover:border-primary/40 transition-colors bg-white/50">
              <div className="absolute -top-3 left-6 px-2 bg-white text-[10px] text-muted-foreground font-mono tracking-widest uppercase border border-slate-100">
                Core Competency
              </div>
              <p className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                {skills[currentSkill]}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {["Autonomous", "Scalable", "Neural"].map((tag, i) => (
                  <span key={i} className="text-[10px] font-mono text-muted-foreground border border-slate-200 px-2 py-1 bg-slate-50">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection("projects")}
                className="h-16 px-12 bg-primary text-primary-foreground hover:bg-primary/90 rounded-none transition-all duration-300 font-bold uppercase tracking-widest text-sm shadow-lg shadow-primary/20"
              >
                View Portfolio
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate("/cv")}
                className="h-16 px-12 rounded-none border-slate-200 bg-white hover:bg-slate-50 text-foreground transition-all duration-300 font-bold uppercase tracking-widest text-sm"
              >
                View Resume
              </Button>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-10 justify-center lg:justify-start pt-8 border-t border-slate-100">
              {[
                { label: "LinkedIn", href: "https://www.linkedin.com/in/ahsanaligill" },
                { label: "GitHub", href: "https://github.com/Ahsan462aggk" },
                { label: "Email", href: "mailto:ahs462agk@gmail.com" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono font-bold text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Image side: Professional Portrait */}
          <div className="relative group hidden lg:block">
            <div className="relative animate-float">
              {/* Photo with Structural Border */}
              <div className="tech-border relative z-20 w-fit p-3 mx-auto bg-white shadow-2xl shadow-slate-200/50 ring-1 ring-slate-100/50">
                {/* Corner Labels (Simplified) */}
                <span className="absolute -top-2 -right-2 w-4 h-4 border-t-[3px] border-r-[3px] border-primary/30 rounded-tr-lg"></span>
                <span className="absolute -bottom-2 -left-2 w-4 h-4 border-b-[3px] border-l-[3px] border-primary/30 rounded-bl-lg"></span>

                <div className="relative w-full aspect-[4/5] max-w-[380px] overflow-hidden bg-slate-100 rounded-sm">
                  <img
                    src={profilePic}
                    alt="Ahsan Ali Gill"
                    className="w-full h-full object-cover transition-all duration-1000 scale-100 group-hover:scale-105"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Decorative Elements behind photo */}
              <div className="absolute -top-10 -right-20 w-40 h-[120%] border-r border-slate-100 -z-10 flex flex-col justify-between py-10 opacity-50">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="text-[10px] font-mono text-slate-300 rotate-90 whitespace-nowrap">
                    0{i + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
