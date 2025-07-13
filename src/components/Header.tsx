import { Button } from "@/components/ui/button";
import { Eye, Menu, User } from "lucide-react";
import eyeLogo from "@/assets/eye-ai-logo.png";

export const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border shadow-card-medical sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={eyeLogo} alt="EyeAI" className="h-10 w-10" />
          <div className="flex flex-col">
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              EyeAI
            </span>
            <span className="text-xs text-muted-foreground">Vision Test Platform</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#home" className="text-foreground hover:text-primary transition-colors">
            Home
          </a>
          <a href="#tests" className="text-foreground hover:text-primary transition-colors">
            Eye Tests
          </a>
          <a href="#results" className="text-foreground hover:text-primary transition-colors">
            Results
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">
            About
          </a>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center space-x-3">
          <Button variant="medical-outline" size="sm" className="hidden sm:inline-flex">
            <User className="h-4 w-4 mr-2" />
            Login
          </Button>
          <Button variant="medical" size="sm">
            Start Test
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};