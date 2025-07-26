import { Card } from "@/components/ui/card";
import { 
  Shield, 
  Smartphone, 
  Globe, 
  Clock, 
  Users, 
  Award,
  BarChart3,
  Lock
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Medical Grade Accuracy",
    description: "Our AI algorithms are validated against clinical standards and reviewed by certified ophthalmologists."
  },
  {
    icon: Smartphone,
    title: "Any Device, Anywhere",
    description: "Take tests on your smartphone, tablet, or computer. No special equipment required."
  },
  {
    icon: Clock,
    title: "Quick & Convenient",
    description: "Complete comprehensive eye testing in under 15 minutes at your own pace."
  },
  {
    icon: BarChart3,
    title: "Detailed Analytics",
    description: "Get comprehensive reports with visual charts and trending analysis over time."
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    description: "Available in multiple languages with culturally adapted testing protocols."
  },
  {
    icon: Users,
    title: "Family Profiles",
    description: "Manage eye health for your entire family with individual profiles and tracking."
  },
  {
    icon: Award,
    title: "Clinically Validated",
    description: "Tested and approved by leading ophthalmology institutions worldwide."
  },
  {
    icon: Lock,
    title: "Privacy Protected",
    description: "Your health data is encrypted and stored securely following HIPAA guidelines."
  }
];

export const Features = () => {
  return (
    <section className="py-32 bg-gradient-subtle relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-primary opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-luxury opacity-5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full glass-panel mb-8">
            <span className="text-sm font-medium text-foreground/80">Premium Features</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-8">
            Why Choose
            <span className="block text-gradient-luxury">
              EyeAI Premium?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Experience the pinnacle of eye care technology with our premium AI-powered platform. 
            Combining medical expertise with cutting-edge artificial intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="glass-card p-8 premium-scale shadow-luxury hover:shadow-glow group border-white/20"
              >
                <div className="mb-6">
                  <div className="relative">
                    <div className="p-4 bg-gradient-primary rounded-2xl w-fit shadow-luxury group-hover:shadow-glow transition-all duration-500">
                      <IconComponent className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-2xl blur-xl group-hover:opacity-40 transition-all duration-500"></div>
                  </div>
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
  );
};