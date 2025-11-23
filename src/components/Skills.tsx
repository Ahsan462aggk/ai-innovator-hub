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
    <section id="skills" className="py-24 md:py-32 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
            Technical <span className="text-gradient-accent">Expertise</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive skill set spanning the full AI development lifecycle,
            from research and prototyping to production deployment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={index}
                className="bg-card/80 backdrop-blur-sm border-border hover:border-accent/50 transition-all duration-300 group animate-slide-up shadow-card hover:shadow-card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3.5 bg-gradient-to-br from-primary/20 to-accent/10 rounded-xl group-hover:from-primary/30 group-hover:to-accent/20 transition-all shadow-md">
                      <IconComponent className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <CardTitle className="font-heading text-lg group-hover:text-accent transition-colors">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.skills.map((skill, i) => (
                      <li
                        key={i}
                        className="text-muted-foreground flex items-center gap-3 group/item"
                      >
                        <span className="w-2 h-2 rounded-full bg-primary/40 group-hover/item:bg-primary transition-colors"></span>
                        <span className="group-hover/item:text-foreground transition-colors">{skill}</span>
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
