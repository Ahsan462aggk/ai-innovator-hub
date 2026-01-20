import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, ExternalLink, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import conferencePreview from "@/assets/international conference .png";

const certifications = [
    {
        title: "International Conference on Advance STEAM Education (ICASE-2025)",
        issuer: "The University of Faisalabad",
        date: "2025",
        credentialId: "-",
        skills: ["Participant", "STEAM Education"],
        image: conferencePreview,
        url: "#",
        verificationMode: "image" // Explicit flag for image verification
    },
    {
        title: "Building AI Agents with MongoDB",
        issuer: "MongoDB",
        date: "2025",
        credentialId: "-",
        skills: ["AI Agents", "MongoDB"],
        image: "https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png",
        url: "https://www.credly.com/badges/637268cd-19f8-463c-831b-5c284dc31b9c/linked_in_profile"
    },
    {
        title: "Building RAG Apps Using MongoDB",
        issuer: "MongoDB",
        date: "2025",
        credentialId: "-",
        skills: ["RAG", "MongoDB"],
        image: "https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png",
        url: "https://www.credly.com/badges/aa670a26-24ce-4d79-bc3c-30b11b3598e5/linked_in_profile"
    },
    {
        title: "Introduction to Model Context Protocol",
        issuer: "Anthropic",
        date: "2025",
        credentialId: "-",
        skills: ["MCP"],
        image: "https://avatars.githubusercontent.com/u/124960129?s=200&v=4",
        url: "https://verify.skilljar.com/c/x3maxyh2bbcv"
    },
    {
        title: "Introduction to LangGraph",
        issuer: "LangChain",
        date: "2025",
        credentialId: "-",
        skills: ["LangGraph"],
        image: "https://avatars.githubusercontent.com/u/139727779?s=200&v=4",
        url: "https://academy.langchain.com/certificates/w4h269iuqr"
    },
    {
        title: "n8n Course Level 1",
        issuer: "n8n",
        date: "2025",
        credentialId: "-",
        skills: ["Workflow Automation"],
        image: "https://cdn.worldvectorlogo.com/logos/n8n-io-icon.svg",
        url: "https://learn.n8n.io/certificates/level-1"
    },
    // Degree/education
    {
        title: "BS Artificial Intelligence (CGPA: 3.02) - In Progress",
        issuer: "The University of Faisalabad",
        date: "Current",
        credentialId: "-",
        skills: ["Artificial Intelligence"],
        image: "https://www.tuf.edu.pk/images/tuf-logo.png",
        url: "https://www.tuf.edu.pk"
    },
    {
        title: "PIAIC (In Progress)",
        issuer: "PIAIC (Presidential Initiative)",
        date: "Current",
        credentialId: "-",
        skills: ["Cloud, AI"],
        image: "https://piaic.org/static/media/piaic-logo.fb7de414.svg",
        url: "https://www.piaic.org/"
    },
];

const Certifications = () => {
    return (
        <section id="certifications" className="py-24 md:py-40 px-6 relative overflow-hidden bg-white">
            {/* Subtle Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                            <span className="text-[10px] uppercase tracking-widest font-bold text-primary">Verification</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground">
                            Industry <br /> <span className="text-muted-foreground italic font-light">Credentials</span>
                        </h2>
                    </div>
                    <p className="text-muted-foreground font-light max-w-md leading-relaxed text-lg">
                        Validation of expertise through recognized global standards and advanced technical specializations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200 group hover:bg-white hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 flex flex-col relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-110 pointer-events-none">
                                <Award className="w-24 h-24 text-primary/20 -rotate-12" />
                            </div>

                            <div className="mb-8 flex justify-between items-start z-10">
                                <div className="p-3 rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 group-hover:bg-primary/10 group-hover:ring-primary/20 transition-all duration-500">
                                    <Award className="w-6 h-6 text-slate-400 group-hover:text-primary transition-colors" />
                                </div>
                                <span className="px-3 py-1 rounded-full bg-white border border-slate-100 text-[10px] font-mono font-bold text-muted-foreground group-hover:text-primary group-hover:border-primary/20 transition-colors">
                                    {cert.date}
                                </span>
                            </div>

                            <div className="space-y-3 flex-grow z-10">
                                <h3 className="text-xl font-bold tracking-tight leading-snug text-foreground group-hover:text-primary transition-colors">
                                    {cert.title}
                                </h3>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
                                    <span className="border-b border-primary/20 pb-0.5">{cert.issuer}</span>
                                </div>

                                <div className="flex flex-wrap gap-2 pt-4">
                                    {cert.skills.map((skill, i) => (
                                        <span key={i} className="text-[10px] uppercase tracking-wider font-bold text-slate-500 bg-white border border-slate-100 px-2 py-1 rounded-md group-hover:border-primary/10 group-hover:text-primary/80 transition-colors">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-8 z-10 w-full">
                                {(cert as any).verificationMode === 'image' ? (
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <button className="flex w-full items-center justify-between px-4 py-3 rounded-xl bg-white border border-slate-100 text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-primary group-hover:border-primary/20 group-hover:bg-primary/5 transition-all duration-300">
                                                <span>View Certificate</span>
                                                <Eye className="w-3 h-3" />
                                            </button>
                                        </DialogTrigger>
                                        <DialogContent className="max-w-4xl w-auto bg-transparent border-none shadow-none p-0 flex justify-center items-center">
                                            <div className="relative bg-white p-2 rounded-xl shadow-2xl overflow-hidden max-h-[85vh]">
                                                <img src={cert.image} alt={cert.title} className="max-w-full h-auto object-contain rounded-lg max-h-[80vh]" />
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                ) : (
                                    <a
                                        href={cert.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex w-full items-center justify-between px-4 py-3 rounded-xl bg-white border border-slate-100 text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-primary group-hover:border-primary/20 group-hover:bg-primary/5 transition-all duration-300"
                                    >
                                        <span>Verify Credential</span>
                                        <ExternalLink className="w-3 h-3" />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
