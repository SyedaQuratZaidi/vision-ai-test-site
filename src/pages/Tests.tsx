import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TestSuite } from "@/components/TestSuite";
import { ImageAnalysis } from "@/components/ImageAnalysis";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Eye, 
  Brain, 
  Palette, 
  Focus, 
  Timer, 
  Target,
  Zap,
  Shield,
  Activity
} from "lucide-react";

const testCategories = [
  {
    icon: Eye,
    title: "Visual Acuity Test",
    description: "Measure your ability to see fine details clearly",
    difficulty: "Beginner",
    duration: "5 min",
    badge: "Popular"
  },
  {
    icon: Palette,
    title: "Color Vision Test",
    description: "Detect color blindness and color perception accuracy",
    difficulty: "Intermediate", 
    duration: "8 min",
    badge: "Essential"
  },
  {
    icon: Focus,
    title: "Contrast Sensitivity",
    description: "Test your ability to distinguish objects from backgrounds",
    difficulty: "Advanced",
    duration: "12 min",
    badge: "Premium"
  },
  {
    icon: Target,
    title: "Depth Perception",
    description: "Evaluate your 3D vision and depth judgment",
    difficulty: "Intermediate",
    duration: "10 min",
    badge: "New"
  },
  {
    icon: Activity,
    title: "Peripheral Vision",
    description: "Check your side vision and field of view",
    difficulty: "Advanced",
    duration: "15 min",
    badge: "Pro"
  },
  {
    icon: Timer,
    title: "Eye Movement",
    description: "Assess eye tracking and movement coordination",
    difficulty: "Expert",
    duration: "18 min",
    badge: "Medical"
  }
];

const Tests = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-primary opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-luxury opacity-10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 rounded-full glass-panel mb-8 text-white/90">
              <Brain className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">AI-Powered Eye Testing Suite</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-white">
              Comprehensive
              <span className="block text-gradient-luxury">
                Vision Testing
              </span>
            </h1>
            
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Take professional-grade eye tests powered by advanced AI technology. 
              Get detailed insights into your vision health with medical precision.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="ai-glow" size="xl">
                <Zap className="h-6 w-6 mr-3" />
                Start Quick Test
              </Button>
              <Button variant="glass" size="xl" className="text-white border-white/30">
                <Shield className="h-6 w-6 mr-3" />
                Full Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Test Categories */}
      <section className="py-32 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Choose Your
              <span className="block text-gradient-primary">
                Eye Test
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Select from our comprehensive range of AI-powered vision tests designed 
              to assess different aspects of your eye health and visual performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testCategories.map((test, index) => {
              const IconComponent = test.icon;
              return (
                <Card 
                  key={index}
                  className="glass-card p-8 premium-scale border-white/20 shadow-luxury hover:shadow-glow group"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="relative">
                      <div className="p-4 bg-gradient-primary rounded-2xl shadow-luxury">
                        <IconComponent className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-2xl blur-xl group-hover:opacity-40 transition-all duration-500"></div>
                    </div>
                    <Badge variant="luxury" className="text-xs">
                      {test.badge}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-gradient-primary transition-all duration-300">
                    {test.title}
                  </h3>
                  
                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    {test.description}
                  </p>
                  
                  <div className="flex justify-between items-center mb-6 text-sm">
                    <span className="text-muted-foreground">
                      {test.difficulty}
                    </span>
                    <span className="text-primary font-medium">
                      {test.duration}
                    </span>
                  </div>
                  
                  <Button variant="premium" className="w-full" size="lg">
                    Start Test
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Tests */}
      <TestSuite />
      
      {/* AI Image Analysis */}
      <ImageAnalysis />
      
      <Footer />
    </div>
  );
};

export default Tests;