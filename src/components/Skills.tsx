import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Code2, Database, Layers, Network, Sparkles } from "lucide-react";

const skillCategories = [
  {
    icon: Brain,
    title: "Machine Learning",
    skills: ["Supervised Learning", "Unsupervised Learning", "Ensemble Methods", "Feature Engineering"],
  },
  {
    icon: Layers,
    title: "Deep Learning",
    skills: ["CNNs", "RNNs/LSTMs", "Transformers", "GANs"],
  },
  {
    icon: Sparkles,
    title: "Natural Language Processing",
    skills: ["BERT", "GPT", "Text Classification", "Named Entity Recognition"],
  },
  {
    icon: Network,
    title: "Computer Vision",
    skills: ["Object Detection", "Image Segmentation", "Face Recognition", "Image Generation"],
  },
  {
    icon: Code2,
    title: "Frameworks & Tools",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras"],
  },
  {
    icon: Database,
    title: "Data & MLOps",
    skills: ["Python", "SQL", "Docker", "MLflow"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            My <span className="text-gradient-accent">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set spanning the entire AI development lifecycle,
            from data processing to deployment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={index}
                className="bg-card border-border hover:border-accent/50 transition-all duration-300 group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="font-heading group-hover:text-accent transition-colors">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.skills.map((skill, i) => (
                      <li
                        key={i}
                        className="text-muted-foreground flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
