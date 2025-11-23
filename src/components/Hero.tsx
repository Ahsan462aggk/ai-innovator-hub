import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profileImg from "@/assets/profile.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="AI Neural Network Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/90 to-background"></div>
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-10 inline-block animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
              <img
                src={profileImg}
                alt="AI Engineer"
                className="relative w-36 h-36 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary/40 mx-auto shadow-card-hover"
              />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-6 animate-slide-up leading-tight">
            Transforming Ideas into{" "}
            <span className="text-gradient-primary">Intelligent Solutions</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto animate-slide-up leading-relaxed" style={{ animationDelay: "0.1s" }}>
            AI Engineer specialized in building cutting-edge machine learning systems
            that solve real-world challenges
          </p>

          {/* Bio */}
          <p className="text-base md:text-lg text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Expert in deep learning, natural language processing, and computer vision.
            Passionate about pushing the boundaries of what's possible with artificial intelligence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-16 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105 transition-all px-8"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary/50 text-primary hover:bg-primary/10 hover:border-primary hover:scale-105 transition-all px-8"
              onClick={() => scrollToSection("contact")}
            >
              Let's Connect
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 border border-border text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-secondary transition-all hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 border border-border text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-secondary transition-all hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:hello@example.com"
              className="p-3 rounded-full bg-secondary/50 border border-border text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-secondary transition-all hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
