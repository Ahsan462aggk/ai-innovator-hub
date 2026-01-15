import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profileImg from "@/assets/profile.jpg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // Typewriter effect for rotating skills
  const skills = [
    "Building AI Agents...",
    "Optimizing RAG Pipelines...",
    "LangChain Expert...",
    "Generative AI Specialist..."
  ];
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-10"></div>
        <img
          src={heroBg}
          alt="AI Neural Network Background"
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        {/* Animated Glow Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px] animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 max-w-7xl mx-auto">

          {/* Left Side - Text Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            {/* Available Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 via-green-400/10 to-green-500/10 border border-green-500/30 mb-6 animate-fade-in shadow-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
              <span className="text-sm text-green-400 font-semibold tracking-wide">Available for Freelance</span>
            </div>

            {/* Name */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading mb-4 animate-slide-up leading-[1.1] tracking-tight text-white drop-shadow-2xl">
              Ahsan Ali Gill
            </h1>

            {/* Role with Typewriter Effect */}
            <div className="mb-6">
              <h2 className="text-xl md:text-2xl bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent font-bold animate-slide-up leading-tight min-h-[2rem] transition-all duration-500">
                {skills[currentSkill]}
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-primary via-accent to-primary rounded-full mx-auto lg:mx-0 mt-3 animate-[grow_1.2s_ease]"></div>
            </div>

            {/* Bio - Limited Width */}
            <p className="text-base md:text-lg text-white/80 mb-8 max-w-lg mx-auto lg:mx-0 animate-slide-up leading-relaxed font-medium" style={{ animationDelay: '0.15s' }}>
              Certified developer specializing in <span className="text-accent font-semibold">Retrieval-Augmented Generation (RAG)</span> and <span className="text-primary font-semibold">AI Agents</span>. Building intelligent solutions with LangChain, MongoDB, and modern web frameworks.
            </p>

            {/* Tech Stack Icons */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {[
                { name: "Python", color: "text-yellow-400", bg: "bg-yellow-400/10", border: "border-yellow-400/30" },
                { name: "LangChain", color: "text-green-400", bg: "bg-green-400/10", border: "border-green-400/30" },
                { name: "MongoDB", color: "text-green-500", bg: "bg-green-500/10", border: "border-green-500/30" },
                { name: "React", color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/30" },
                { name: "FastAPI", color: "text-teal-400", bg: "bg-teal-400/10", border: "border-teal-400/30" }
              ].map((tech, i) => (
                <span key={i} className={`px-3 py-1.5 rounded-lg ${tech.bg} border ${tech.border} ${tech.color} text-sm font-semibold tracking-wide transition-all hover:scale-105 hover:shadow-lg`}>
                  {tech.name}
                </span>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start mb-8 animate-fade-in" style={{ animationDelay: '0.25s' }}>
              <a href="https://www.linkedin.com/in/ahsanaligill" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-blue-500/20 hover:border-blue-500/30 text-blue-400 hover:scale-110 transition-all duration-300 shadow-lg">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/Ahsan462aggk" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-purple-500/20 hover:border-purple-500/30 text-purple-400 hover:scale-110 transition-all duration-300 shadow-lg">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:ahs462agk@gmail.com" aria-label="Email"
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-accent/20 hover:border-accent/30 text-accent hover:scale-110 transition-all duration-300 shadow-lg">
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary via-accent to-primary text-white h-12 px-6 rounded-xl shadow-2xl font-bold text-sm tracking-wide hover:scale-105 hover:shadow-[0_0_40px_rgba(124,58,237,0.4)] transition-all duration-300"
                onClick={() => scrollToSection("projects")}
              >
                View Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-6 rounded-xl border-2 border-white/30 bg-white/5 hover:bg-primary/20 hover:border-primary/50 text-white font-bold text-sm tracking-wide hover:scale-105 transition-all duration-300 shadow-lg"
                onClick={() => navigate("/cv")}
              >
                View CV
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-6 rounded-xl border-2 border-white/30 bg-white/5 hover:bg-white/10 text-white font-bold text-sm tracking-wide hover:border-white/50 hover:scale-105 transition-all duration-300 shadow-lg"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </Button>
            </div>
          </div>

          {/* Right Side - VS Code Style Code Window */}
          <div className="flex-1 relative animate-float hidden lg:block">
            <div className="relative w-full max-w-[550px] mx-auto">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/20 rounded-2xl opacity-40 blur-3xl -z-10"></div>

              {/* Main Card with Avatar */}
              <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/10 via-card/90 to-accent/5 rounded-2xl border border-white/20 overflow-hidden shadow-[0_20px_60px_rgba(124,58,237,0.2)]">

                {/* VS Code Header */}
                <div className="bg-black/40 backdrop-blur-sm px-4 py-3 border-b border-white/10 flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-xs text-white/60 ml-3 font-mono">rag_agent.py</span>
                </div>



                {/* Code Content */}
                <div className="p-6 font-mono text-sm leading-relaxed">
                  <pre className="text-white/90">
                    <code>
                      {`from langchain.chains import RetrievalQA
from langchain_mongodb import MongoDBAtlasVectorSearch
from langchain_google_genai import ChatGoogleGenerativeAI

# Initialize RAG Pipeline
def create_rag_agent():
    llm = ChatGoogleGenerativeAI(
        model="gemini-1.5-pro",
        temperature=0.3
    )
    
    vector_store = MongoDBAtlasVectorSearch(
        collection=db["embeddings"],
        index_name="vector_index"
    )
    
    qa_chain = RetrievalQA.from_chain_type(
        llm=llm,
        retriever=vector_store.as_retriever(),
        return_source_documents=True
    )
    
    return qa_chain

# Deploy intelligent agent
agent = create_rag_agent()`}
                    </code>
                  </pre>
                </div>

                {/* Floating Achievement Badge */}
                <div className="absolute -bottom-4 -right-4 z-20 p-4 rounded-xl backdrop-blur-md bg-gradient-to-r from-primary/20 via-white/10 to-accent/20 border border-white/20 shadow-2xl animate-fade-in hover:scale-105 transition-transform">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white shadow-lg">
                      <span className="text-xl font-bold">98%</span>
                    </div>
                    <div>
                      <p className="text-xs text-white/60 font-semibold">Model Accuracy</p>
                      <p className="text-sm font-bold text-white">RAG System</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
