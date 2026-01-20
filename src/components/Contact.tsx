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
    <section id="contact" className="py-24 md:py-40 px-6 relative overflow-hidden bg-white/[0.01]">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                <span className="text-[10px] uppercase tracking-widest font-bold text-accent">Connect</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tighter">
                Start a <br /> <span className="text-white/40 italic font-light">Conversation</span>
              </h2>
              <p className="text-lg text-white/50 font-light max-w-md leading-relaxed">
                Have an ambitious project in mind? Let's discuss how we can build something extraordinary together.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <a href="mailto:ahs462agk@gmail.com" className="p-6 glass-card rounded-2xl group hover:bg-white/[0.04] transition-all">
                <Mail className="w-5 h-5 text-accent mb-4" />
                <div className="text-xs uppercase tracking-widest text-white/30 font-bold mb-1">Email Me</div>
                <div className="text-sm font-medium">ahs462agk@gmail.com</div>
              </a>
              <div className="p-6 glass-card rounded-2xl group hover:bg-white/[0.04] transition-all">
                <MessageSquare className="w-5 h-5 text-primary mb-4" />
                <div className="text-xs uppercase tracking-widest text-white/30 font-bold mb-1">Location</div>
                <div className="text-sm font-medium">Remote / Worldwide</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="glass-card p-10 rounded-[2.5rem] relative z-10">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-[10px] uppercase tracking-widest font-bold text-white/30 ml-4">Full Name</label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-white/5 border-white/5 focus:border-accent/40 text-white placeholder:text-white/10 h-14 rounded-2xl px-6"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[10px] uppercase tracking-widest font-bold text-white/30 ml-4">Email Address</label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-white/5 border-white/5 focus:border-accent/40 text-white placeholder:text-white/10 h-14 rounded-2xl px-6"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-[10px] uppercase tracking-widest font-bold text-white/30 ml-4">Your Message</label>
                  <Textarea
                    id="message"
                    placeholder="Briefly describe your project or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-white/5 border-white/5 focus:border-accent/40 text-white placeholder:text-white/10 min-h-[160px] rounded-2xl px-6 py-4 resize-none"
                    required
                  />
                </div>

                <Button type="submit" className="w-full h-14 bg-white text-black hover:bg-white/90 rounded-2xl font-bold uppercase tracking-widest text-xs transition-all duration-300">
                  Deliver Message <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>
            {/* Background Glow */}
            <div className="absolute -inset-10 bg-primary/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
