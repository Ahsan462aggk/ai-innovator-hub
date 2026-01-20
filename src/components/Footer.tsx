import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-20 px-6 border-t border-slate-200 bg-slate-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="space-y-4 text-center md:text-left">
            <div className="text-xl font-bold tracking-tighter text-foreground">
              AHSAN<span className="text-muted-foreground font-light">GILL</span>
            </div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground/80 font-bold">
              AI Engineer & Architect
            </p>
          </div>

          <div className="flex items-center gap-8">
            {[
              { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/ahsanaligill" },
              { icon: <Github className="w-5 h-5" />, href: "https://github.com/Ahsan462aggk" },
              { icon: <Mail className="w-5 h-5" />, href: "mailto:ahs462agk@gmail.com" }
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            © {new Date().getFullYear()} Precision Built with AI
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
