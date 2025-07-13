import { Button } from "@/components/ui/button";
import { Eye, Mail, Phone, MapPin, Heart } from "lucide-react";
import eyeLogo from "@/assets/eye-ai-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img src={eyeLogo} alt="EyeAI" className="h-10 w-10" />
              <div>
                <span className="text-2xl font-bold">EyeAI</span>
                <p className="text-sm text-primary-foreground/80">Vision Test Platform</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Revolutionary AI-powered eye testing platform providing professional-grade 
              vision assessment accessible to everyone, everywhere.
            </p>
            <div className="flex space-x-4">
              <Button variant="secondary" size="icon">
                <Mail className="h-4 w-4" />
              </Button>
              <Button variant="secondary" size="icon">
                <Phone className="h-4 w-4" />
              </Button>
              <Button variant="secondary" size="icon">
                <MapPin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#tests" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Eye Tests
                </a>
              </li>
              <li>
                <a href="#results" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Results
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Tests */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Available Tests</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Visual Acuity Test
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Color Vision Test
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contrast Sensitivity
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  AI Analysis
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 EyeAI Vision Test Platform. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <span className="text-primary-foreground/60 text-sm">Made with</span>
              <Heart className="h-4 w-4 text-red-400" />
              <span className="text-primary-foreground/60 text-sm">for better vision health</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};