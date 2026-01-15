import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageSquare, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-4 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl bg-primary/5 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Let's <span className="text-gradient-primary">Collaborate</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Have a project in mind or want to discuss the latest in AI?
              I'm always open to new opportunities and interesting conversations.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/20 transition-colors">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email Me</p>
                  <p className="font-medium text-white">hello@example.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/20 transition-colors">
                <div className="p-3 rounded-lg bg-accent/10 text-accent">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Socials</p>
                  <p className="font-medium text-white">@ai_engineer</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-card/30 backdrop-blur-md border-white/10 shadow-2xl animate-slide-up">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Name</label>
                  <Input
                    id="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white/5 border-white/10 focus:border-primary/50 text-white placeholder:text-white/20 h-12 rounded-xl"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-white/5 border-white/10 focus:border-primary/50 text-white placeholder:text-white/20 h-12 rounded-xl"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Message</label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-white/5 border-white/10 focus:border-primary/50 text-white placeholder:text-white/20 min-h-[150px] rounded-xl resize-none"
                    required
                  />
                </div>

                <Button type="submit" className="w-full h-12 bg-primary hover:bg-primary/90 text-white rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300">
                  Send Message <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default Contact;
