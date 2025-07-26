import { Button } from "@/components/ui/button";
import { Eye, Menu, User } from "lucide-react";
import eyeLogo from "@/assets/eye-ai-logo.png";

export const Header = () => {
  return (
    <header className="glass-panel backdrop-blur-xl border-b border-white/20 shadow-luxury sticky top-0 z-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img src={eyeLogo} alt="EyeAI" className="h-12 w-12 drop-shadow-lg" />
            <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-full blur-sm"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-gradient-luxury">
              EyeAI
            </span>
            <span className="text-xs text-muted-foreground font-medium">Premium Vision Platform</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-foreground/90 hover:text-primary transition-all duration-300 font-medium hover:scale-105">
            Home
          </a>
          <a href="#tests" className="text-foreground/90 hover:text-primary transition-all duration-300 font-medium hover:scale-105">
            Eye Tests
          </a>
          <a href="#results" className="text-foreground/90 hover:text-primary transition-all duration-300 font-medium hover:scale-105">
            Results
          </a>
          <a href="#about" className="text-foreground/90 hover:text-primary transition-all duration-300 font-medium hover:scale-105">
            About
          </a>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center space-x-4">
          <Button variant="glass" size="sm" className="hidden sm:inline-flex">
            <User className="h-4 w-4 mr-2" />
            Login
          </Button>
          <Button variant="premium" size="sm">
            Start Test
          </Button>
          <Button variant="glass" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};