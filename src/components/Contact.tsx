import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@example.com",
    href: "mailto:hello@example.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/yourprofile",
    href: "https://linkedin.com/in/yourprofile",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/yourusername",
    href: "https://github.com/yourusername",
  },
  {
    icon: Twitter,
    label: "Twitter",
    value: "@yourusername",
    href: "https://twitter.com/yourusername",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
            Let's <span className="text-gradient-primary">Connect</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or want to discuss AI opportunities?
            I'm always open to new challenges and collaborations
          </p>
        </div>

        <Card className="bg-card/80 backdrop-blur-sm border-border animate-slide-up shadow-card-hover">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl font-heading">Get in Touch</CardTitle>
            <CardDescription className="text-lg">
              Choose your preferred way to connect
            </CardDescription>
          </CardHeader>
          <CardContent className="pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <Button
                    key={index}
                    asChild
                    variant="outline"
                    className="h-auto py-6 border-2 border-border hover:border-primary/50 hover:bg-primary/5 group transition-all shadow-sm hover:shadow-md"
                  >
                    <a
                      href={method.href}
                      target={method.href.startsWith("http") ? "_blank" : undefined}
                      rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex flex-col items-center gap-3"
                    >
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-foreground text-base">{method.label}</div>
                        <div className="text-sm text-muted-foreground mt-1">{method.value}</div>
                      </div>
                    </a>
                  </Button>
                );
              })}
            </div>

            <div className="mt-10 p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl text-center border border-border/50">
              <p className="text-foreground/80 mb-5 text-lg leading-relaxed">
                Open to <span className="text-primary font-semibold">freelance opportunities</span>, 
                <span className="text-accent font-semibold"> consulting</span>, and 
                <span className="text-primary font-semibold"> full-time positions</span>
              </p>
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl hover:scale-105 transition-all px-8"
              >
                <a href="mailto:hello@example.com">
                  Send Me a Message
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
