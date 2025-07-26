import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Eye, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-background.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium Background */}
      <div 
        className="absolute inset-0 bg-gradient-hero opacity-95"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'multiply'
        }}
      />
      
      {/* Premium Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-4 h-4 bg-gradient-primary rounded-full animate-pulse-glow shadow-glow" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-6 h-6 bg-gradient-luxury rounded-full animate-pulse-glow shadow-luxury" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-3 h-3 bg-primary-glow rounded-full animate-pulse-glow shadow-glow" />
        </div>
        <div className="absolute top-1/2 left-1/4 animate-float" style={{ animationDelay: '0.5s' }}>
          <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" />
        </div>
        <div className="absolute bottom-1/3 right-1/3 animate-float" style={{ animationDelay: '1.5s' }}>
          <div className="w-5 h-5 bg-gradient-primary rounded-full animate-pulse-glow shadow-medical opacity-80" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Premium Hero Content */}
          <div className="text-center lg:text-left text-white">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full glass-panel text-sm font-medium text-white/90 mb-4">
                <Zap className="h-4 w-4 mr-2 text-primary-glow" />
                Premium AI Technology
              </span>
            </div>
            <h1 className="text-6xl lg:text-8xl font-bold mb-8 leading-tight">
              Next-Gen
              <span className="block bg-gradient-to-r from-white via-primary-glow to-white bg-clip-text text-transparent">
                Eye Testing
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-10 text-white/95 leading-relaxed font-light">
              Revolutionary artificial intelligence technology delivering medical-grade eye health assessment. 
              Experience the future of vision care with premium AI-powered diagnostics.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Link to="/tests">
                <Button variant="ai-glow" size="xl" className="shadow-luxury text-lg px-8 py-4">
                  <Eye className="h-6 w-6 mr-3" />
                  Start Premium Test
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="glass" size="xl" className="text-white border-white/30 hover:bg-white/10 text-lg px-8 py-4">
                  <Brain className="h-6 w-6 mr-3" />
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          {/* Premium Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <Card className="glass-card p-8 premium-scale border-white/30 shadow-luxury hover:shadow-glow">
              <div className="relative mb-6">
                <div className="p-4 bg-gradient-primary rounded-2xl w-fit shadow-luxury">
                  <Brain className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-2xl blur-xl"></div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Premium AI Analysis</h3>
              <p className="text-white/80 leading-relaxed">Next-generation algorithms with medical-grade precision</p>
            </Card>
            
            <Card className="glass-card p-8 premium-scale border-white/30 shadow-luxury hover:shadow-glow">
              <div className="relative mb-6">
                <div className="p-4 bg-gradient-luxury rounded-2xl w-fit shadow-luxury">
                  <Shield className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="absolute inset-0 bg-gradient-luxury opacity-20 rounded-2xl blur-xl"></div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Clinical Validation</h3>
              <p className="text-white/80 leading-relaxed">Certified by leading ophthalmology institutions worldwide</p>
            </Card>
            
            <Card className="glass-card p-8 premium-scale border-white/30 shadow-luxury hover:shadow-glow">
              <div className="relative mb-6">
                <div className="p-4 bg-gradient-primary rounded-2xl w-fit shadow-luxury">
                  <Zap className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-2xl blur-xl"></div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Instant Results</h3>
              <p className="text-white/80 leading-relaxed">Real-time analysis with comprehensive health reports</p>
            </Card>
            
            <Card className="glass-card p-8 premium-scale border-white/30 shadow-luxury hover:shadow-glow">
              <div className="relative mb-6">
                <div className="p-4 bg-gradient-luxury rounded-2xl w-fit shadow-luxury">
                  <Eye className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="absolute inset-0 bg-gradient-luxury opacity-20 rounded-2xl blur-xl"></div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Complete Assessment</h3>
              <p className="text-white/80 leading-relaxed">Full spectrum vision testing with advanced diagnostics</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};