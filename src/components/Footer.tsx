import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-secondary/20 py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="text-xl font-bold font-heading">
              AI<span className="text-gradient-primary">Engineer</span>
            </div>
            <div className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </div>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="text-sm text-muted-foreground flex items-center gap-2">
              Built with <Heart className="w-4 h-4 text-accent fill-accent" /> and cutting-edge AI
            </div>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary/50 border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary/50 border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@example.com"
                className="p-2 rounded-lg bg-secondary/50 border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
