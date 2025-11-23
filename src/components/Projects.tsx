import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Neural Style Transfer",
    description: "Deep learning model that applies artistic styles to images using convolutional neural networks",
    technologies: ["TensorFlow", "Python", "CNN", "Computer Vision"],
    liveUrl: "https://example.com/neural-style",
    githubUrl: "https://github.com/example/neural-style",
  },
  {
    title: "NLP Sentiment Analyzer",
    description: "Real-time sentiment analysis system processing thousands of social media posts with 94% accuracy",
    technologies: ["PyTorch", "BERT", "NLP", "FastAPI"],
    liveUrl: "https://example.com/sentiment",
    githubUrl: "https://github.com/example/sentiment",
  },
  {
    title: "Recommendation Engine",
    description: "Collaborative filtering system for personalized content recommendations using matrix factorization",
    technologies: ["Scikit-learn", "Python", "ML", "Redis"],
    liveUrl: "https://example.com/recommender",
    githubUrl: "https://github.com/example/recommender",
  },
  {
    title: "Autonomous Navigation AI",
    description: "Reinforcement learning agent for autonomous vehicle navigation in simulated environments",
    technologies: ["TensorFlow", "RL", "OpenAI Gym", "Python"],
    liveUrl: "https://example.com/navigation",
    githubUrl: "https://github.com/example/navigation",
  },
  {
    title: "Medical Image Classifier",
    description: "CNN-based diagnostic tool achieving 97% accuracy in detecting anomalies in medical scans",
    technologies: ["PyTorch", "ResNet", "Medical AI", "Flask"],
    liveUrl: "https://example.com/medical-ai",
    githubUrl: "https://github.com/example/medical-ai",
  },
  {
    title: "Speech Recognition System",
    description: "End-to-end speech-to-text system supporting multiple languages with real-time transcription",
    technologies: ["Wav2Vec", "Transformers", "Python", "Docker"],
    liveUrl: "https://example.com/speech",
    githubUrl: "https://github.com/example/speech",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Explore My <span className="text-gradient-primary">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of AI projects demonstrating expertise across machine learning,
            deep learning, and cutting-edge AI technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:glow-primary group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="font-heading group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    asChild
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90"
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="border-primary/50 text-primary hover:bg-primary/10"
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
