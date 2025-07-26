import { Button } from "@/components/ui/button";
import { Eye, Menu, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import eyeLogo from "@/assets/eye-ai-logo.png";

export const Header = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="glass-panel backdrop-blur-xl border-b border-white/20 shadow-luxury sticky top-0 z-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-4 hover:scale-105 transition-all duration-300">
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
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`transition-all duration-300 font-medium hover:scale-105 ${
              isActive('/') ? 'text-primary font-bold' : 'text-foreground/90 hover:text-primary'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/tests" 
            className={`transition-all duration-300 font-medium hover:scale-105 ${
              isActive('/tests') ? 'text-primary font-bold' : 'text-foreground/90 hover:text-primary'
            }`}
          >
            Eye Tests
          </Link>
          <Link 
            to="/results" 
            className={`transition-all duration-300 font-medium hover:scale-105 ${
              isActive('/results') ? 'text-primary font-bold' : 'text-foreground/90 hover:text-primary'
            }`}
          >
            Results
          </Link>
          <Link 
            to="/about" 
            className={`transition-all duration-300 font-medium hover:scale-105 ${
              isActive('/about') ? 'text-primary font-bold' : 'text-foreground/90 hover:text-primary'
            }`}
          >
            About
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center space-x-4">
          <Button variant="glass" size="sm" className="hidden sm:inline-flex">
            <User className="h-4 w-4 mr-2" />
            Login
          </Button>
          <Link to="/tests">
            <Button variant="premium" size="sm">
              Start Test
            </Button>
          </Link>
          <Button variant="glass" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};