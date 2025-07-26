import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Eye, 
  TrendingUp, 
  Calendar, 
  Award, 
  Download,
  Share2,
  BarChart3,
  AlertCircle,
  CheckCircle,
  Clock
} from "lucide-react";

const testResults = [
  {
    testName: "Visual Acuity Test",
    score: 95,
    status: "Excellent",
    date: "2024-01-15",
    details: "20/20 vision detected",
    color: "text-green-500"
  },
  {
    testName: "Color Vision Test",
    score: 88,
    status: "Good",
    date: "2024-01-14",
    details: "Normal color perception",
    color: "text-blue-500"
  },
  {
    testName: "Contrast Sensitivity",
    score: 72,
    status: "Fair",
    date: "2024-01-13",
    details: "Slight improvement needed",
    color: "text-yellow-500"
  },
  {
    testName: "AI Eye Analysis",
    score: 91,
    status: "Very Good",
    date: "2024-01-12",
    details: "Healthy eye structure detected",
    color: "text-green-500"
  }
];

const insights = [
  {
    icon: TrendingUp,
    title: "Vision Improvement",
    description: "Your vision scores have improved by 12% over the last month",
    type: "positive"
  },
  {
    icon: AlertCircle,
    title: "Attention Needed",
    description: "Consider consulting an eye specialist for contrast sensitivity",
    type: "warning"
  },
  {
    icon: Award,
    title: "Achievement Unlocked",
    description: "You've completed all basic vision tests successfully",
    type: "success"
  }
];

const Results = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 rounded-full glass-panel mb-8 text-white/90">
              <BarChart3 className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Your Vision Analytics</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-white">
              Test
              <span className="block text-gradient-luxury">
                Results
              </span>
            </h1>
            
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Track your vision health progress with detailed analytics and AI-powered insights. 
              Monitor improvements and get personalized recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* Results Overview */}
      <section className="py-32 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          {/* Overall Score */}
          <div className="text-center mb-16">
            <Card className="glass-card p-12 max-w-md mx-auto border-white/20 shadow-luxury">
              <div className="relative mb-8">
                <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center mx-auto shadow-luxury">
                  <span className="text-4xl font-bold text-primary-foreground">87</span>
                </div>
                <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-full blur-xl mx-auto w-32 h-32"></div>
              </div>
              <h3 className="text-2xl font-bold mb-2">Overall Vision Score</h3>
              <p className="text-foreground/80">Based on your latest test results</p>
            </Card>
          </div>

          {/* Recent Test Results */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Recent Test Results
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {testResults.map((result, index) => (
                <Card 
                  key={index}
                  className="glass-card p-8 premium-scale border-white/20 shadow-luxury hover:shadow-glow"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{result.testName}</h3>
                      <p className="text-foreground/80">{result.details}</p>
                    </div>
                    <Badge variant="luxury" className={result.color}>
                      {result.status}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{result.date}</span>
                    </div>
                    <div className="text-2xl font-bold text-gradient-primary">
                      {result.score}%
                    </div>
                  </div>
                  
                  <div className="w-full bg-muted rounded-full h-2 mb-4">
                    <div 
                      className="bg-gradient-primary h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${result.score}%` }}
                    />
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button variant="glass" size="sm" className="flex-1">
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                    <Button variant="premium" size="sm">
                      Retake
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* AI Insights */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">
              AI-Powered Insights
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {insights.map((insight, index) => {
                const IconComponent = insight.icon;
                return (
                  <Card 
                    key={index}
                    className="glass-card p-8 premium-scale border-white/20 shadow-luxury hover:shadow-glow"
                  >
                    <div className="relative mb-6">
                      <div className={`p-4 rounded-2xl w-fit shadow-luxury ${
                        insight.type === 'positive' ? 'bg-gradient-primary' :
                        insight.type === 'warning' ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                        'bg-gradient-to-r from-green-500 to-emerald-500'
                      }`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">{insight.title}</h3>
                    <p className="text-foreground/80 leading-relaxed">{insight.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="premium" size="xl">
                <Download className="h-6 w-6 mr-3" />
                Download Report
              </Button>
              <Button variant="glass" size="xl">
                <Share2 className="h-6 w-6 mr-3" />
                Share Results
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Results;