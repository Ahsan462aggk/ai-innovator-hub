import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Code2, Database, Layers, Sparkles } from "lucide-react";

const skillCategories = [
  {
    icon: Brain,
    title: "AI & GenAI",
    skills: ["Retrieval-Augmented Generation (RAG)", "LangChain", "LangGraph", "Google Gemini", "React Agents", "Model Context Protocol"],
    accentColor: "#a855f7", // Cyber Purple
    borderColor: "border-purple-500/30",
    glowColor: "shadow-purple-500/20",
    tagBg: "bg-purple-500/10",
    tagBorder: "border-purple-500/20",
    tagText: "text-purple-300",
    tagHoverBg: "hover:bg-purple-500/20",
    tagHoverBorder: "hover:border-purple-400/50",
    tagHoverText: "hover:text-purple-200"
  },
  {
    icon: Layers,
    title: "Frontend Development",
    skills: ["React 18/19", "Next.js 14/15", "TypeScript", "Tailwind CSS", "React Three Fiber (Three.js)", "Vite"],
    accentColor: "#3b82f6", // Electric Blue
    borderColor: "border-blue-500/30",
    glowColor: "shadow-blue-500/20",
    tagBg: "bg-blue-500/10",
    tagBorder: "border-blue-500/20",
    tagText: "text-blue-300",
    tagHoverBg: "hover:bg-blue-500/20",
    tagHoverBorder: "hover:border-blue-400/50",
    tagHoverText: "hover:text-blue-200"
  },
  {
    icon: Code2,
    title: "Backend Development",
    skills: ["Python", "FastAPI", "Node.js", "WebSockets"],
    accentColor: "#f97316", // Orange
    borderColor: "border-orange-500/30",
    glowColor: "shadow-orange-500/20",
    tagBg: "bg-orange-500/10",
    tagBorder: "border-orange-500/20",
    tagText: "text-orange-300",
    tagHoverBg: "hover:bg-orange-500/20",
    tagHoverBorder: "hover:border-orange-400/50",
    tagHoverText: "hover:text-orange-200"
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "Vector Search", "Atlas"],
    accentColor: "#06b6d4", // Cyan
    borderColor: "border-cyan-500/30",
    glowColor: "shadow-cyan-500/20",
    tagBg: "bg-cyan-500/10",
    tagBorder: "border-cyan-500/20",
    tagText: "text-cyan-300",
    tagHoverBg: "hover:bg-cyan-500/20",
    tagHoverBorder: "hover:border-cyan-400/50",
    tagHoverText: "hover:text-cyan-200"
  },
  {
    icon: Sparkles,
    title: "Automation",
    skills: ["n8n", "Workflow Automation", "API Integration"],
    accentColor: "#ec4899", // Pink
    borderColor: "border-pink-500/30",
    glowColor: "shadow-pink-500/20",
    tagBg: "bg-pink-500/10",
    tagBorder: "border-pink-500/20",
    tagText: "text-pink-300",
    tagHoverBg: "hover:bg-pink-500/20",
    tagHoverBorder: "hover:border-pink-400/50",
    tagHoverText: "hover:text-pink-200"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 px-4 relative overflow-hidden">
      {/* Technical Grid Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      ></div>

      {/* Spotlight Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 gap-4 animate-fade-in">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 shadow-[0_0_20px_rgba(124,58,237,0.15)]">
            <span className="text-xs font-mono font-bold text-primary tracking-widest uppercase">
              // TECH STACK
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-4 leading-tight">
            <span className="font-light bg-gradient-to-r from-cyan-400 via-primary to-pink-500 bg-clip-text text-transparent">
              Technical{" "}
            </span>
            <span className="font-extrabold bg-gradient-to-r from-cyan-400 via-primary to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(124,58,237,0.3)]">
              Expertise
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg text-white/70 max-w-3xl leading-relaxed">
            Comprehensive skill set spanning the full AI development lifecycle,
            from research and prototyping to production deployment
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={index}
                className={`
                  group relative backdrop-blur-xl bg-white/5 border border-white/10
                  rounded-2xl overflow-hidden transition-all duration-500
                  hover:-translate-y-1 hover:shadow-2xl hover:${category.borderColor}
                `}
                style={{
                  '--accent-color': category.accentColor,
                } as React.CSSProperties}
              >
                {/* Large Watermark Icon - Top Right */}
                <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <IconComponent className="w-24 h-24 group-hover:rotate-12 transition-transform duration-500" />
                </div>

                <CardHeader className="pb-4 relative z-10">
                  <div className="flex items-center gap-4">
                    {/* Icon with Glow */}
                    <div
                      className="p-3 rounded-xl bg-white/5 border border-white/10 transition-all duration-500 group-hover:scale-110"
                      style={{
                        boxShadow: `0 0 0 rgba(${category.accentColor}, 0)`,
                      }}
                    >
                      <IconComponent
                        className="w-7 h-7 transition-all duration-500 group-hover:animate-pulse"
                        style={{ color: category.accentColor }}
                      />
                    </div>
                    <CardTitle className="font-heading text-xl text-white/90 group-hover:text-white transition-colors">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className={`
                          px-3 py-1.5 text-sm rounded-lg border
                          ${category.tagBg} ${category.tagBorder} ${category.tagText}
                          ${category.tagHoverBg} ${category.tagHoverBorder} ${category.tagHoverText}
                          transition-all duration-300 cursor-default
                          hover:scale-105 hover:shadow-lg font-medium
                        `}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>

                {/* Color-Coded Hover Glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10 rounded-2xl"
                  style={{
                    boxShadow: `0 0 60px ${category.accentColor}33`,
                  }}
                ></div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
