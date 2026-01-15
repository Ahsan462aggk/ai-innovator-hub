import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import avatarPreview from "@/assets/ahsan pic .png";
import healthcarePreview from "@/assets/Screenshot 2025-12-23 123431.png";
import fitnessPreview from "@/assets/fitness ai .png";
import jobInterviewPreview from "@/assets/job_interview.png";
import tufAvatarPreview from "@/assets/image.png";
import { useState } from "react";

const projects = [
  {
    title: "AI Job Interviewer",
    description:
      "An intelligent platform helping job seekers prepare for interviews using LangChain. Generates personalized questions and provides constructive feedback through a seamless React/FastAPI experience.",
    technologies: ["React.js", "FastAPI", "LangChain", "Docker", "Cron Jobs", "Python"],
    liveUrl: "https://ai-powered-interviewer-applicatiion.vercel.app/",
    githubUrl: "",
    image: jobInterviewPreview,
    date: "Dec 2024",
    keyFeatures: [
      "Dynamic Question Generation tailored to job roles",
      "Real-time Feedback on user responses",
      "Containerized Deployment with Docker",
      "Scheduled tasks via Cron Jobs"
    ],
  },
  {
    title: "TUF Avatar Talk",
    description:
      "An AI-powered academic advisor for the University of Faisalabad using React Three Fiber for 3D interactions. Features end-to-end voice conversation enabling students to ask about admissions, fees, and programs with human-like interaction.",
    technologies: ["React 18", "Vite", "React Three Fiber", "TailwindCSS", "FastAPI", "Google Gemini", "WebSockets"],
    liveUrl: "https://tuf-avatar-talk.vercel.app", // Live demo link
    githubUrl: "",
    image: tufAvatarPreview, // Actual imported preview
    date: "NEW",
    keyFeatures: [
      "Real-Time Speech Interaction via WebSockets and audio APIs",
      "3D advisor avatar with React Three Fiber",
      "Domain-Specific Intelligence (custom agent, official TUF data)",
      "Backend with FastAPI + Google Gemini",
    ],
  },
  {
    title: "AI-Powered Healthcare Assistant",
    description:
      "An advanced health assistant combining LangGraph and React Agents to provide accurate medical/drug information via PubMed/FDA data. Smart search, drug insight, and streaming response in a modern UI.",
    technologies: ["Python", "LangGraph", "React Agent", "PubMed API", "FDA API", "Next.js 14", "TypeScript", "Tailwind CSS"],
    liveUrl: "",
    githubUrl: "",
    image: healthcarePreview,
    date: "Nov 2024",
    keyFeatures: [
      "Intelligent search via PubMed",
      "Medication safety from FDA",
      "Multi-tool, orchestrated via LangGraph",
      "Streaming responses",
    ],
  },
  {
    title: "AI Fitness Coach",
    description:
      "Personalized fitness companion offering AI-powered routines, form guidance, and progress tracking. Adapts plans for all user levels.",
    technologies: ["Next.js 15.1", "React 19", "TypeScript", "Python", "FastAPI", "PostgreSQL", "LangChain"],
    liveUrl: "",
    githubUrl: "",
    image: fitnessPreview,
    date: "NEW",
    keyFeatures: [
      "Personalized plans",
      "Real-Time Form Guidance",
      "Detailed analytics and tracking"
    ],
  }
];

const Projects = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const gradientText = "bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent";

  // Helper function to highlight keywords in feature text
  const highlightKeywords = (text: string) => {
    const keywords = ['AI', 'API', '3D', 'Real-Time', 'FastAPI', 'Gemini', 'WebSockets', 'React', 'Intelligence', 'Domain-Specific', 'Voice', 'Speech'];
    const parts = text.split(new RegExp(`(${keywords.join('|')})`, 'g'));

    return parts.map((part, i) =>
      keywords.includes(part) ? (
        <span key={i} className="text-accent font-bold">{part}</span>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  };

  return (
    <section id="projects" className="py-24 md:py-32 px-4 relative overflow-hidden">
      {/* Spotlight Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto max-w-7xl">
        {/* Centered Header with Eyebrow Badge */}
        <div className="flex flex-col items-center text-center mb-16 gap-4 animate-fade-in">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 shadow-[0_0_20px_rgba(124,58,237,0.15)]">
            <span className="text-xs font-mono font-bold text-primary tracking-widest uppercase">
              // SELECTED WORK
            </span>
          </div>

          {/* Main Title with Typography Hierarchy */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-4 leading-tight">
            <span className="font-light bg-gradient-to-r from-cyan-400 via-primary to-pink-500 bg-clip-text text-transparent">
              Featured{" "}
            </span>
            <span className="font-extrabold bg-gradient-to-r from-cyan-400 via-primary to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(124,58,237,0.3)]">
              Projects
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg text-white/70 max-w-2xl leading-relaxed">
            Showcasing production-ready AI solutions—innovative, scalable, and impactful across industries.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group backdrop-blur-xl bg-gradient-to-br from-black/40 via-card/90 to-black/40 border border-white/10 shadow-xl rounded-2xl overflow-hidden transition-all duration-500 relative hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-primary/20"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[0.7rem] px-3 py-1 rounded-full bg-primary/30 text-primary font-extrabold tracking-widest uppercase shadow-sm">
                    {project.date}
                  </span>
                </div>
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover max-h-44 w-full shadow-md border border-white/20 group-hover:border-primary/40 transition-all duration-500 group-hover:scale-105"
                    style={{ boxShadow: '0 6px 28px 0 rgba(124,58,237,0.10)' }}
                  />
                </div>

                <CardHeader className="p-0 mb-4">
                  <CardTitle className="font-heading text-2xl sm:text-[1.4rem] font-bold leading-tight mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-purple-500 bg-clip-text text-transparent transition-shadow group-hover:drop-shadow-[0_2px_10px_rgba(124,58,237,0.20)]">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-white/70 mt-2 line-clamp-3 text-sm min-h-[3.5em] font-normal leading-snug">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-gray-300 font-medium tracking-wide transition-all duration-200 hover:bg-white/10 hover:text-white hover:border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 items-center mt-4">
                  <a
                    href={project.liveUrl || "#projects"}
                    target={project.liveUrl ? "_blank" : "_self"}
                    rel={project.liveUrl ? "noopener noreferrer" : ""}
                    className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-bold py-2.5 px-4 rounded-xl text-sm shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-200 flex items-center justify-center gap-2 group/btn"
                  >
                    <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                    Launch Demo
                  </a>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className={`${project.liveUrl ? 'flex-1' : 'w-full'} rounded-xl border-2 border-white/20 bg-transparent hover:bg-white/5 text-white text-sm font-semibold px-4 py-2.5 shadow backdrop-blur-md transition-all duration-200 hover:border-white/30`}
                  >
                    {openIndex === index ? 'Hide Details' : 'View Details'}
                  </Button>
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2.5 text-muted-foreground hover:text-primary transition-colors border border-white/10 rounded-xl hover:bg-white/5">
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
                {openIndex === index && project.keyFeatures && (
                  <div className="rounded-lg bg-black/20 backdrop-blur-sm p-4 mt-4 animate-fade-in border border-purple-500/20">
                    <ul className="list-disc pl-6 text-[15px] text-white/90 font-medium space-y-2">
                      {project.keyFeatures.map((feature, idx) => (
                        <li key={idx} className="marker:text-primary/80">
                          {highlightKeywords(feature)}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
