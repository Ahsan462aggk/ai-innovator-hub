import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    title: "Building AI Agents with MongoDB",
    issuer: "MongoDB",
    date: "2025",
    credentialId: "-",
    skills: ["AI Agents", "MongoDB"],
    image: "https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png",
    url: "https://learn.mongodb.com/certificates/ai-agents"
  },
  {
    title: "Building RAG Apps Using MongoDB",
    issuer: "MongoDB",
    date: "2025",
    credentialId: "-",
    skills: ["RAG", "MongoDB"],
    image: "https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png",
    url: "https://learn.mongodb.com/certificates/rag-apps"
  },
  {
    title: "Introduction to Model Context Protocol",
    issuer: "Anthropic",
    date: "2025",
    credentialId: "-",
    skills: ["MCP"],
    image: "https://avatars.githubusercontent.com/u/124960129?s=200&v=4",
    url: "https://console.anthropic.com/certificates/model-context-protocol"
  },
  {
    title: "Introduction to LangGraph",
    issuer: "LangChain",
    date: "2025",
    credentialId: "-",
    skills: ["LangGraph"],
    image: "https://avatars.githubusercontent.com/u/139727779?s=200&v=4",
    url: "https://learn.langchain.com/certificates/langgraph-intro"
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
        <section id="certifications" className="py-24 md:py-32 px-4 relative">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
                        Professional <span className="text-gradient-primary">Certifications</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Validated expertise through industry-recognized credentials and specialized training
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <Card
                            key={index}
                            className="group bg-card/40 backdrop-blur-sm border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.15)] hover:-translate-y-1"
                        >
                            <CardHeader className="flex flex-row items-start gap-4 pb-2">
                                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-primary/20 transition-colors">
                                    <Award className="w-8 h-8 text-primary" />
                                </div>
                                <div className="space-y-1">
                                    <CardTitle className="font-heading text-lg leading-tight group-hover:text-primary transition-colors">
                                        {cert.title}
                                    </CardTitle>
                                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                                    <Calendar className="w-4 h-4" />
                                    <span>Issued {cert.date}</span>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {cert.skills.map((skill, i) => (
                                        <Badge
                                            key={i}
                                            variant="secondary"
                                            className="bg-primary/10 text-primary hover:bg-primary/20 border-0"
                                        >
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>

                                <Button
                                    variant="outline"
                                    className="w-full border-white/10 hover:bg-white/5 hover:text-white group/btn"
                                    asChild
                                >
                                    <a href={cert.url} target="_blank" rel="noopener noreferrer">
                                        Verify Credential
                                        <ExternalLink className="w-4 h-4 ml-2 opacity-50 group-hover/btn:opacity-100 transition-opacity" />
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
