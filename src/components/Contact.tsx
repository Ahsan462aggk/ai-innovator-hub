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
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Get In <span className="text-gradient-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interested in collaborating or discussing AI projects?
            Let's connect and create something amazing together
          </p>
        </div>

        <Card className="bg-card border-border animate-slide-up">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-heading">Contact Me</CardTitle>
            <CardDescription>
              Choose your preferred method to reach out
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <Button
                    key={index}
                    asChild
                    variant="outline"
                    className="h-auto py-4 border-border hover:border-primary/50 hover:bg-primary/5 group transition-all"
                  >
                    <a
                      href={method.href}
                      target={method.href.startsWith("http") ? "_blank" : undefined}
                      rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex flex-col items-center gap-2"
                    >
                      <IconComponent className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                      <div className="text-center">
                        <div className="font-semibold text-foreground">{method.label}</div>
                        <div className="text-sm text-muted-foreground">{method.value}</div>
                      </div>
                    </a>
                  </Button>
                );
              })}
            </div>

            <div className="mt-8 p-6 bg-secondary/20 rounded-lg text-center">
              <p className="text-muted-foreground mb-4">
                Open to freelance opportunities, consulting, and full-time positions
              </p>
              <Button
                asChild
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
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
