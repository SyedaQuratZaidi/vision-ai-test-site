import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Shield, 
  Users, 
  Award,
  Microscope,
  Sparkles,
  Globe,
  Heart,
  CheckCircle,
  Star
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Advanced AI Technology",
    description: "Powered by Google Vision AI and cutting-edge machine learning algorithms for medical-grade accuracy."
  },
  {
    icon: Shield,
    title: "Medical Grade Security",
    description: "HIPAA compliant with end-to-end encryption ensuring your health data remains private and secure."
  },
  {
    icon: Award,
    title: "Clinically Validated",
    description: "Tested and approved by leading ophthalmology institutions and certified eye care professionals worldwide."
  },
  {
    icon: Globe,
    title: "Global Accessibility",
    description: "Available in 15+ languages with culturally adapted testing protocols for worldwide accessibility."
  }
];

const team = [
  {
    name: "Dr. Sarah Chen",
    role: "Chief Medical Officer",
    expertise: "Ophthalmology & AI Research",
    image: "/api/placeholder/150/150"
  },
  {
    name: "Alex Rodriguez", 
    role: "Lead AI Engineer",
    expertise: "Computer Vision & ML",
    image: "/api/placeholder/150/150"
  },
  {
    name: "Dr. Michael Kumar",
    role: "Clinical Director", 
    expertise: "Vision Science & Testing",
    image: "/api/placeholder/150/150"
  }
];

const stats = [
  { number: "2M+", label: "Tests Completed" },
  { number: "98.7%", label: "Accuracy Rate" },
  { number: "150+", label: "Countries Served" },
  { number: "24/7", label: "AI Availability" }
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 rounded-full glass-panel mb-8 text-white/90">
              <Sparkles className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Revolutionizing Eye Care Since 2020</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-white">
              About
              <span className="block text-gradient-luxury">
                EyeAI
              </span>
            </h1>
            
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              We're on a mission to make professional-grade eye care accessible to everyone, 
              anywhere in the world, using the power of artificial intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-32 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Our
              <span className="text-gradient-primary"> Mission</span>
            </h2>
            <p className="text-xl text-foreground/80 leading-relaxed">
              To democratize access to premium eye care through innovative AI technology, 
              empowering individuals to take control of their vision health with professional-grade 
              testing that's accessible, accurate, and affordable.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <Card 
                key={index}
                className="glass-card p-8 text-center premium-scale border-white/20 shadow-luxury hover:shadow-glow"
              >
                <div className="text-4xl font-bold text-gradient-primary mb-2">
                  {stat.number}
                </div>
                <p className="text-foreground/80">{stat.label}</p>
              </Card>
            ))}
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card 
                  key={index}
                  className="glass-card p-8 premium-scale border-white/20 shadow-luxury hover:shadow-glow group"
                >
                  <div className="relative mb-6">
                    <div className="p-4 bg-gradient-primary rounded-2xl w-fit shadow-luxury">
                      <IconComponent className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-2xl blur-xl group-hover:opacity-40 transition-all duration-500 w-fit"></div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 group-hover:text-gradient-primary transition-all duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-foreground/80 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Meet Our
              <span className="text-gradient-luxury"> Expert Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              World-class experts in ophthalmology, artificial intelligence, and medical technology 
              working together to advance vision care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <Card 
                key={index}
                className="glass-card p-8 text-center premium-scale border-white/20 shadow-luxury hover:shadow-glow group"
              >
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto shadow-luxury flex items-center justify-center">
                    <Users className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-full blur-xl mx-auto w-24 h-24 group-hover:opacity-40 transition-all duration-500"></div>
                </div>
                
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <Badge variant="luxury" className="mb-3">
                  {member.role}
                </Badge>
                <p className="text-foreground/80">{member.expertise}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-32 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">
                Cutting-Edge
                <span className="text-gradient-primary"> Technology</span>
              </h2>
              <p className="text-xl text-foreground/80">
                Built on the foundation of advanced AI and validated medical research
              </p>
            </div>

            <Card className="glass-card p-12 border-white/20 shadow-luxury">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-6">AI-Powered Precision</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Google Vision AI Integration</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Real-time Image Analysis</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Medical-Grade Algorithms</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Continuous Learning System</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="relative">
                    <div className="p-8 bg-gradient-primary rounded-2xl shadow-luxury">
                      <Microscope className="h-16 w-16 text-primary-foreground mx-auto" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-2xl blur-xl"></div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Experience the Future of Eye Care?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join millions of users worldwide who trust EyeAI for their vision health monitoring.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="ai-glow" size="xl">
              <Heart className="h-6 w-6 mr-3" />
              Start Your Journey
            </Button>
            <Button variant="glass" size="xl" className="text-white border-white/30">
              <Star className="h-6 w-6 mr-3" />
              Learn More
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;