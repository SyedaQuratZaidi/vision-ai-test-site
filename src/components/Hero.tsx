import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Eye, Shield, Zap } from "lucide-react";
import heroBackground from "@/assets/hero-background.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-gradient-hero opacity-90"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'multiply'
        }}
      />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-2 h-2 bg-primary-glow rounded-full animate-pulse-glow" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-3 h-3 bg-primary rounded-full animate-pulse-glow" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-2 h-2 bg-secondary rounded-full animate-pulse-glow" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left text-white">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              AI-Powered
              <span className="block bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
                Eye Testing
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed">
              Revolutionary artificial intelligence technology for comprehensive eye health assessment. 
              Get professional-grade vision analysis from the comfort of your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="ai-glow" size="xl" className="shadow-glow">
                <Eye className="h-6 w-6 mr-3" />
                Start Eye Test
              </Button>
              <Button variant="medical-outline" size="xl" className="text-white border-white hover:bg-white hover:text-primary">
                Learn More
              </Button>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="p-6 bg-card/90 backdrop-blur-sm border-primary/20 shadow-medical hover:shadow-glow transition-all duration-300 hover:scale-105">
              <Brain className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">AI Analysis</h3>
              <p className="text-muted-foreground">Advanced algorithms provide instant, accurate vision assessment</p>
            </Card>
            
            <Card className="p-6 bg-card/90 backdrop-blur-sm border-primary/20 shadow-medical hover:shadow-glow transition-all duration-300 hover:scale-105">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Medical Grade</h3>
              <p className="text-muted-foreground">Professional-quality testing validated by ophthalmologists</p>
            </Card>
            
            <Card className="p-6 bg-card/90 backdrop-blur-sm border-primary/20 shadow-medical hover:shadow-glow transition-all duration-300 hover:scale-105">
              <Zap className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Instant Results</h3>
              <p className="text-muted-foreground">Get comprehensive eye health report in minutes</p>
            </Card>
            
            <Card className="p-6 bg-card/90 backdrop-blur-sm border-primary/20 shadow-medical hover:shadow-glow transition-all duration-300 hover:scale-105">
              <Eye className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Complete Testing</h3>
              <p className="text-muted-foreground">Visual acuity, color vision, and contrast sensitivity</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};