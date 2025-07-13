import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TestSuite } from "@/components/TestSuite";
import { ImageAnalysis } from "@/components/ImageAnalysis";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TestSuite />
      <ImageAnalysis />
      <Features />
      <Footer />
    </div>
  );
};

export default Index;
