import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import avatarPreview from "@/assets/ahsan pic .png";
import healthcarePreview from "@/assets/Screenshot 2025-12-23 123431.png";
import fitnessPreview from "@/assets/fitness ai .png";
import jobInterviewPreview from "@/assets/job_interview.png";
import tufAvatarPreview from "@/assets/image.png";
import lmsPreview from "@/assets/sabry_utlrasound.png";
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
    liveUrl: "https://healthcare-assistant-mu.vercel.app/",
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
    liveUrl: "https://fitness-ai-coach-opal.vercel.app/",
    githubUrl: "",
    image: fitnessPreview,
    date: "NEW",
    keyFeatures: [
      "Personalized plans",
      "Real-Time Form Guidance",
      "Detailed analytics and tracking"
    ],
  },
  {
    title: "AI Powered Learning Management System - LMS",
    description:
      "An advanced Learning Management System tailored for online education. Admins upload course videos, generate customized assignments and quizzes for each course, and the AI-powered system tracks student performance with real-time feedback and analytics",
    technologies: ["Next.js", "PostgreSQL", "FastAPI", "LangChain", "LangGraph", "OpenAI Agent SDK"],
    liveUrl: "https://lms-frontend-rho-one.vercel.app/",
    githubUrl: "",
    image: lmsPreview, // Updated image
    date: "NEW",
    keyFeatures: [
      "Admin Video Uploads",
      "AI-Generated Quizzes",
      "Real-time Analytics",
      "Student Performance Tracking"
    ],
  }
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 md:py-40 px-6 relative bg-slate-50/50">
      <div className="container mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-[10px] uppercase tracking-widest font-bold text-primary">Selected Engineering Work</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground">
            Where Complexity <br />
            <span className="text-muted-foreground italic font-light">meets</span> Intelligence.
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-xl">
            A curated selection of AI systems and interactive experiences, built with precision and production-grade technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* project Card */}
              <div className="bg-white rounded-[2.5rem] overflow-hidden transition-all duration-500 border border-slate-200 hover:border-primary/20 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-primary/5">
                {/* Image Wrap */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>

                  {/* Floating Tech Tags on Image */}
                  <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="px-3 py-1 text-[10px] uppercase tracking-wider font-bold bg-white/90 backdrop-blur-md text-primary rounded-full border border-white/20 shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Info */}
                <div className="p-8 md:p-10 space-y-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-[10px] uppercase tracking-widest font-mono text-muted-foreground">{project.date}</span>
                  </div>

                  <p className="text-muted-foreground text-base font-light leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div className="pt-4 flex items-center gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-white text-xs font-bold uppercase tracking-widest shadow-lg shadow-foreground/20 hover:bg-primary hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300 group/link"
                      >
                        Launch <ArrowUpRight className="w-4 h-4 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-widest hover:border-primary/20 hover:text-primary hover:bg-slate-50 transition-all duration-300"
                      >
                        Source <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Decorative Spotlight on Hover - Subtle for Light Mode */}
              <div className={`absolute -inset-4 bg-primary/10 rounded-[3rem] blur-3xl -z-10 opacity-0 transition-opacity duration-700 ${hoveredIndex === index ? 'opacity-100' : ''}`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
