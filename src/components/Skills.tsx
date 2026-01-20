import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Code2, Database, Layers, Sparkles } from "lucide-react";

const skillCategories = [
  {
    icon: Brain,
    title: "AI & GenAI",
    skills: ["Retrieval-Augmented Generation (RAG)", "LangChain", "LangGraph", "Google Gemini", "React Agents", "Model Context Protocol"],
    accentColor: "#9333ea", // Purple 600
    borderColor: "border-purple-200",
    glowColor: "shadow-purple-500/10",
    tagBg: "bg-purple-50",
    tagBorder: "border-purple-100",
    tagText: "text-purple-700",
    tagHoverBg: "hover:bg-purple-100",
    tagHoverBorder: "hover:border-purple-200",
    tagHoverText: "hover:text-purple-900"
  },
  {
    icon: Layers,
    title: "Frontend Development",
    skills: ["React 18/19", "Next.js 14/15", "TypeScript", "Tailwind CSS", "React Three Fiber (Three.js)", "Vite"],
    accentColor: "#2563eb", // Blue 600
    borderColor: "border-blue-200",
    glowColor: "shadow-blue-500/10",
    tagBg: "bg-blue-50",
    tagBorder: "border-blue-100",
    tagText: "text-blue-700",
    tagHoverBg: "hover:bg-blue-100",
    tagHoverBorder: "hover:border-blue-200",
    tagHoverText: "hover:text-blue-900"
  },
  {
    icon: Code2,
    title: "Backend Development",
    skills: ["Python", "FastAPI", "Node.js", "WebSockets"],
    accentColor: "#ea580c", // Orange 600
    borderColor: "border-orange-200",
    glowColor: "shadow-orange-500/10",
    tagBg: "bg-orange-50",
    tagBorder: "border-orange-100",
    tagText: "text-orange-700",
    tagHoverBg: "hover:bg-orange-100",
    tagHoverBorder: "hover:border-orange-200",
    tagHoverText: "hover:text-orange-900"
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "Vector Search", "Atlas"],
    accentColor: "#0891b2", // Cyan 600
    borderColor: "border-cyan-200",
    glowColor: "shadow-cyan-500/10",
    tagBg: "bg-cyan-50",
    tagBorder: "border-cyan-100",
    tagText: "text-cyan-700",
    tagHoverBg: "hover:bg-cyan-100",
    tagHoverBorder: "hover:border-cyan-200",
    tagHoverText: "hover:text-cyan-900"
  },
  {
    icon: Sparkles,
    title: "Automation",
    skills: ["n8n", "Workflow Automation", "API Integration"],
    accentColor: "#db2777", // Pink 600
    borderColor: "border-pink-200",
    glowColor: "shadow-pink-500/10",
    tagBg: "bg-pink-50",
    tagBorder: "border-pink-100",
    tagText: "text-pink-700",
    tagHoverBg: "hover:bg-pink-100",
    tagHoverBorder: "hover:border-pink-200",
    tagHoverText: "hover:text-pink-900"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 relative bg-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* Header Area */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-[10px] uppercase tracking-widest font-bold text-primary">Capabilities</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground">
              Technical <br /> <span className="text-muted-foreground italic font-light">Ecosystem</span>
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed">
              A comprehensive toolkit focused on AI-first development, bridging the gap between raw models and production-ready applications.
            </p>
          </div>

          {/* Skills Area */}
          <div className="lg:col-span-8 grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className={`space-y-6 p-8 bg-white border rounded-[2rem] group transition-all duration-500 hover:shadow-xl ${category.borderColor}`}>
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-2xl bg-slate-50 shadow-sm ring-1 ring-slate-100 group-hover:ring-2 transition-all duration-500 ${category.tagHoverBg}`}>
                      <IconComponent className="w-6 h-6 text-slate-500 group-hover:text-foreground transition-colors" style={{ color: category.accentColor }} />
                    </div>
                    <h3 className="text-xl font-bold tracking-tight text-foreground">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2 text-muted-foreground">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className={`text-sm font-medium px-2 py-1 rounded-md transition-colors cursor-default border ${category.tagBg} ${category.tagBorder} ${category.tagText} ${category.tagHoverBg} ${category.tagHoverBorder} ${category.tagHoverText}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
