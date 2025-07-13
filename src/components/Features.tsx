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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Why Choose
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              EyeAI Platform?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Combining cutting-edge artificial intelligence with medical expertise 
            to deliver the most accurate and convenient eye testing experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="p-6 bg-gradient-card shadow-medical hover:shadow-glow transition-all duration-300 hover:scale-105 group"
              >
                <div className="mb-4">
                  <div className="p-3 bg-gradient-primary rounded-lg w-fit shadow-medical group-hover:animate-pulse-glow">
                    <IconComponent className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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