import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Download,
    Mail,
    Linkedin,
    Github,
    MapPin,
    Phone,
    ExternalLink,
    Briefcase,
    GraduationCap,
    Code2,
    Award,
    ArrowLeft,
    Calendar,
    Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";
import avatarPreview from "@/assets/ahsan pic .png";
import healthcarePreview from "@/assets/Screenshot 2025-12-23 123431.png";
import fitnessPreview from "@/assets/fitness ai .png";

const CV = () => {
    const certifications = [
        {
            title: "Building AI Agents with MongoDB",
            issuer: "MongoDB",
            date: "2025",
            url: "https://learn.mongodb.com/certificates/ai-agents"
        },
        {
            title: "Building RAG Apps Using MongoDB",
            issuer: "MongoDB",
            date: "2025",
            url: "https://learn.mongodb.com/certificates/rag-apps"
        },
        {
            title: "Introduction to Model Context Protocol",
            issuer: "Anthropic",
            date: "2025",
            url: "https://console.anthropic.com/certificates/model-context-protocol"
        },
        {
            title: "Introduction to LangGraph",
            issuer: "LangChain",
            date: "2025",
            url: "https://learn.langchain.com/certificates/langgraph-intro"
        },
        {
            title: "n8n Course Level 1",
            issuer: "n8n",
            date: "2025",
            url: "https://learn.n8n.io/certificates/level-1"
        }
    ];

    const projects = [
        {
            title: "AI Job Interviewer",
            description: "Personalized interview preparation platform using LangChain. Generates dynamic questions and provides real-time feedback with containerized Docker deployment.",
            tech: ["React.js", "FastAPI", "LangChain", "Docker", "Python"],
            url: "https://ai-powered-interviewer-applicatiion.vercel.app/"
        },
        {
            title: "TUF Avatar Talk",
            description: "AI-powered academic advisor with 3D interactions and real-time voice conversation.",
            tech: ["React Three Fiber", "FastAPI", "Google Gemini", "WebSockets"],
            url: "https://tuf-avatar-talk.vercel.app"
        },
        {
            title: "Healthcare AI Assistant",
            description: "Advanced health assistant using LangGraph and React Agents with PubMed/FDA integration.",
            tech: ["Python", "LangGraph", "PubMed API", "Next.js 14"],
            url: "#"
        },
        {
            title: "AI Fitness Coach",
            description: "Personalized fitness companion with AI-powered routines and progress tracking.",
            tech: ["Next.js 15.1", "Python", "FastAPI", "LangChain"],
            url: "#"
        }
    ];

    const skillGroups = [
        {
            category: "AI & Machine Learning",
            skills: ["RAG", "LangChain", "PyTorch", "Scikit-Learn", "LangGraph", "Agents", "MCP"]
        },
        {
            category: "Full-Stack Dev",
            skills: ["React 19", "Next.js 15", "TypeScript", "Python", "FastAPI", "Node.js"]
        },
        {
            category: "Cloud & Data",
            skills: ["MongoDB", "PostgreSQL", "Vector Search", "Atlas", "WebSockets"]
        }
    ];

    return (
        <div className="min-h-screen bg-[#030014] text-white selection:bg-primary/30 font-sans">
            {/* Background Decor - Only for Web */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 no-print">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[120px] animate-pulse delay-700"></div>
            </div>

            <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-white/10 px-4 py-4 no-print print:hidden">
                <div className="container mx-auto flex justify-between items-center max-w-5xl">
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Portfolio
                    </Link>
                    <Button
                        className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 flex items-center gap-2 shadow-lg shadow-primary/20"
                        onClick={() => window.print()}
                    >
                        <Download className="w-4 h-4" />
                        Download PDF
                    </Button>
                </div>
            </nav>

            <main className="container mx-auto max-w-5xl px-4 py-8 md:py-16 print:py-0 print:px-0">
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl print:bg-white print:border-0 print:p-0 print:shadow-none print:text-black">

                    {/* Professional Header */}
                    <header className="flex flex-col md:flex-row justify-between items-start gap-8 border-b border-white/10 pb-10 mb-10 print:border-black/10 print:pb-6 print:mb-6">
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl font-black tracking-tight print:text-black print:text-4xl">
                                Ahsan Ali Gill
                            </h1>
                            <h2 className="text-2xl font-bold text-primary print:text-primary print:text-xl">
                                AI & Generative AI Developer
                            </h2>
                            <div className="flex flex-wrap gap-x-6 gap-y-2 text-white/60 text-sm font-medium print:text-black/70">
                                <div className="flex items-center gap-1.5 cursor-default">
                                    <MapPin className="w-4 h-4 text-primary" />
                                    <span>Faisalabad, Pakistan</span>
                                </div>
                                <a href="mailto:ahs462agk@gmail.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                                    <Mail className="w-4 h-4 text-primary" />
                                    <span>ahs462agk@gmail.com</span>
                                </a>
                                <a href="https://linkedin.com/in/ahsanaligill" target="_blank" rel="noopener" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                                    <Linkedin className="w-4 h-4 text-primary" />
                                    <span>linkedin.com/in/ahsanaligill</span>
                                </a>
                                <a href="https://github.com/Ahsan462aggk" target="_blank" rel="noopener" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                                    <Github className="w-4 h-4 text-primary" />
                                    <span>github.com/Ahsan462aggk</span>
                                </a>
                            </div>
                        </div>

                        {/* Avatar - High Quality Print Handling */}
                        <div className="relative shrink-0 no-print">
                            <div className="w-32 h-32 rounded-2xl overflow-hidden border-2 border-primary/30 p-1">
                                <img src={avatarPreview} alt="Ahsan Ali Gill" className="w-full h-full object-cover rounded-xl" />
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-primary p-2 rounded-lg">
                                <Sparkles className="w-3 h-3 text-white" />
                            </div>
                        </div>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 print:gap-8">

                        {/* Main Content Area */}
                        <div className="lg:col-span-8 space-y-12 print:space-y-8">

                            {/* Summary */}
                            <section>
                                <h3 className="text-sm font-mono font-black text-primary uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                                    <Briefcase className="w-4 h-4" />
                                    Professional Summary
                                </h3>
                                <p className="text-white/70 leading-relaxed text-lg print:text-black/80 print:text-sm">
                                    Certified developer specializing in <span className="text-white font-bold print:text-black">Retrieval-Augmented Generation (RAG)</span> and <span className="text-white font-bold print:text-black">AI Agents</span>.
                                    Proven track record in building intelligent systems using LangChain, LangGraph, and MongoDB Vector Search.
                                    Experienced in creating immersive 3D AI interactions and optimizing production-grade ML pipelines.
                                </p>
                            </section>

                            {/* Experience */}
                            <section>
                                <h3 className="text-sm font-mono font-black text-primary uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                                    <Briefcase className="w-4 h-4" />
                                    Professional Experience
                                </h3>
                                <div className="space-y-8">
                                    <div className="flex justify-between items-start gap-4">
                                        <div className="space-y-1">
                                            <h4 className="text-xl font-bold print:text-lg">AI Developer</h4>
                                            <p className="text-primary font-bold print:text-black/80">Techloset Solutions</p>
                                            <ul className="text-white/60 text-sm list-disc pl-4 space-y-1 mt-2 print:text-black/70 print:text-xs">
                                                <li>Developed and optimized AI models and Generative AI applications using LangChain and FastAPI.</li>
                                                <li>Implemented RAG (Retrieval-Augmented Generation) pipelines for intelligent data retrieval.</li>
                                                <li>Collaborated with cross-functional teams to deploy scalable AI agents in production environments.</li>
                                            </ul>
                                        </div>
                                        <div className="text-right shrink-0">
                                            <span className="text-sm font-bold text-white/40 print:text-black/40">1 Year</span>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Projects */}
                            <section>
                                <h3 className="text-sm font-mono font-black text-primary uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                                    <Code2 className="w-4 h-4" />
                                    Strategic Projects
                                </h3>
                                <div className="space-y-8">
                                    {projects.map((proj, i) => (
                                        <div key={i} className="group relative">
                                            <div className="flex justify-between items-start mb-2 font-bold">
                                                <h4 className="text-xl print:text-lg">{proj.title}</h4>
                                                <Badge variant="outline" className="border-primary/30 text-primary print:hidden">Project</Badge>
                                            </div>
                                            <p className="text-white/60 text-sm mb-4 leading-relaxed print:text-black/70 print:text-xs">
                                                {proj.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {proj.tech.map((t, idx) => (
                                                    <span key={idx} className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded print:border print:border-black/10 print:text-black/60 print:bg-transparent">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Education */}
                            <section>
                                <h3 className="text-sm font-mono font-black text-primary uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                                    <GraduationCap className="w-4 h-4" />
                                    Education
                                </h3>
                                <div className="space-y-8">
                                    <div className="flex justify-between items-start gap-4">
                                        <div className="space-y-1">
                                            <h4 className="text-xl font-bold print:text-lg">BS Artificial Intelligence</h4>
                                            <p className="text-primary font-bold print:text-black/80">The University of Faisalabad</p>
                                            <p className="text-white/50 text-sm print:text-black/60">CGPA: 3.02 / 4.00 (Major in Machine Learning & AI)</p>
                                        </div>
                                        <div className="text-right shrink-0">
                                            <span className="text-sm font-bold text-white/40 print:text-black/40">2023 - 2027</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-start gap-4">
                                        <div className="space-y-1">
                                            <h4 className="text-xl font-bold print:text-lg">AI Specialization</h4>
                                            <p className="text-primary font-bold print:text-black/80">PIAIC</p>
                                            <p className="text-white/50 text-sm print:text-black/60">Cloud Native Computing & Generative AI</p>
                                        </div>
                                        <div className="text-right shrink-0">
                                            <span className="text-sm font-bold text-white/40 print:text-black/40">Ongoing</span>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* Sidebar Area */}
                        <div className="lg:col-span-4 space-y-12 print:space-y-8">

                            {/* Skills Grid */}
                            <section>
                                <h3 className="text-sm font-mono font-black text-primary uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                                    <Award className="w-4 h-4" />
                                    Technical Expertise
                                </h3>
                                <div className="space-y-8">
                                    {skillGroups.map((group, idx) => (
                                        <div key={idx} className="space-y-3">
                                            <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest print:text-black/40">{group.category}</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {group.skills.map((skill, i) => (
                                                    <Badge key={i} variant="outline" className="bg-white/5 border-white/10 text-white/70 print:bg-transparent print:border-black/20 print:text-black/80 print:text-[10px]">
                                                        {skill}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Certifications */}
                            <section className="print:break-inside-avoid">
                                <h3 className="text-sm font-mono font-black text-primary uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                                    <Sparkles className="w-4 h-4" />
                                    Accreditations
                                </h3>
                                <div className="space-y-4">
                                    {certifications.map((cert, i) => (
                                        <div key={i} className="group cursor-default">
                                            <h4 className="text-sm font-bold text-white group-hover:text-primary transition-colors print:text-black print:text-xs">
                                                {cert.title}
                                            </h4>
                                            <p className="text-[10px] text-white/40 print:text-black/50">{cert.issuer} • {cert.date}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="py-12 px-4 text-center no-print">
                <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.4em]">
                    System Architected by Ahsan Ali Gill
                </p>
            </footer>
        </div>
    );
};

export default CV;

