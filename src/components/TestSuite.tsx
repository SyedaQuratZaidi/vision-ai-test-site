import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Eye, 
  Palette, 
  Target, 
  Brain, 
  Clock, 
  CheckCircle,
  ArrowRight 
} from "lucide-react";

const tests = [
  {
    id: 1,
    title: "Visual Acuity Test",
    description: "Measure how clearly you can see letters and symbols at various distances",
    icon: Eye,
    duration: "3-5 min",
    difficulty: "Easy",
    features: ["Snellen Chart", "LogMAR Testing", "Distance Vision", "Near Vision"]
  },
  {
    id: 2,
    title: "Color Vision Test",
    description: "Detect color blindness and assess color discrimination ability",
    icon: Palette,
    duration: "2-3 min",
    difficulty: "Easy",
    features: ["Ishihara Plates", "Protanopia Detection", "Deuteranopia Check", "Color Matching"]
  },
  {
    id: 3,
    title: "Contrast Sensitivity",
    description: "Evaluate ability to distinguish between light and dark patterns",
    icon: Target,
    duration: "4-6 min",
    difficulty: "Medium",
    features: ["Pelli-Robson Chart", "Low Contrast", "Glare Testing", "Night Vision"]
  },
  {
    id: 4,
    title: "AI Comprehensive Analysis",
    description: "Complete eye health assessment using advanced artificial intelligence",
    icon: Brain,
    duration: "10-15 min",
    difficulty: "Comprehensive",
    features: ["Full Eye Scan", "Risk Assessment", "Detailed Report", "Expert Recommendations"]
  }
];

export const TestSuite = () => {
  return (
    <section id="tests" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Eye Testing Suite
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI-powered platform offers a complete range of vision tests, 
            each designed to provide accurate insights into different aspects of your eye health.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {tests.map((test) => {
            const IconComponent = test.icon;
            return (
              <Card key={test.id} className="p-8 bg-gradient-card shadow-medical hover:shadow-glow transition-all duration-300 hover:scale-105 group">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-primary rounded-lg shadow-medical group-hover:animate-pulse-glow">
                      <IconComponent className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{test.title}</h3>
                      <div className="flex items-center space-x-3">
                        <Badge variant="secondary" className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{test.duration}</span>
                        </Badge>
                        <Badge 
                          variant={test.difficulty === 'Easy' ? 'default' : test.difficulty === 'Medium' ? 'secondary' : 'destructive'}
                        >
                          {test.difficulty}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {test.description}
                </p>

                <div className="mb-8">
                  <h4 className="font-semibold mb-3 text-primary">Test Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {test.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button 
                  variant="medical" 
                  className="w-full group-hover:shadow-glow transition-all duration-300"
                  size="lg"
                >
                  Start {test.title}
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Card className="p-8 bg-gradient-hero text-white shadow-glow max-w-2xl mx-auto">
            <Brain className="h-16 w-16 mx-auto mb-4 animate-pulse-glow" />
            <h3 className="text-2xl font-bold mb-4">Complete AI Analysis</h3>
            <p className="mb-6">
              Take all tests in sequence for a comprehensive eye health assessment 
              with personalized AI recommendations.
            </p>
            <Button variant="ai-glow" size="xl" className="shadow-glow">
              Start Complete Analysis
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};