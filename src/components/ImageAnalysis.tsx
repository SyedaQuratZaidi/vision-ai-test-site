import { useState, useCallback } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Upload, Eye, Camera, AlertCircle, CheckCircle, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const ImageAnalysis = () => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);
  const { toast } = useToast();

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  }, []);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid File",
        description: "Please upload an image file.",
        variant: "destructive"
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setUploadedImage(e.target?.result as string);
      analyzeImage();
    };
    reader.readAsDataURL(file);
  };

  const analyzeImage = async () => {
    setAnalyzing(true);
    
    // Simulate AI analysis
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const analysisResults = {
      visionStrength: Math.floor(Math.random() * 40) + 60, // 60-100%
      conditions: [
        { name: "Myopia (Nearsightedness)", probability: Math.floor(Math.random() * 30) + 20 },
        { name: "Astigmatism", probability: Math.floor(Math.random() * 25) + 15 },
        { name: "Hyperopia (Farsightedness)", probability: Math.floor(Math.random() * 20) + 10 }
      ],
      recommendation: "Regular eye checkup recommended",
      confidence: Math.floor(Math.random() * 20) + 80
    };
    
    setResults(analysisResults);
    setAnalyzing(false);
    
    toast({
      title: "Analysis Complete",
      description: "Eye image analysis has been completed successfully.",
    });
  };

  const resetAnalysis = () => {
    setUploadedImage(null);
    setResults(null);
    setAnalyzing(false);
  };

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            AI Image Analysis
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Upload or drag an eye image for instant AI-powered vision analysis. 
            Our advanced algorithms can detect potential vision issues.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {!uploadedImage ? (
            <Card className="p-8 bg-card/90 backdrop-blur-sm border-primary/20">
              <div
                className={`relative border-2 border-dashed rounded-lg p-12 text-center transition-all duration-300 ${
                  dragActive 
                    ? 'border-primary bg-primary/5' 
                    : 'border-muted-foreground/30 hover:border-primary/50'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Upload className="h-12 w-12 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">
                      Upload Eye Image
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Drag and drop an eye image here, or click to select
                    </p>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileInput}
                      className="hidden"
                      id="image-upload"
                    />
                    <label htmlFor="image-upload">
                      <Button variant="ai-glow" size="lg" className="cursor-pointer">
                        <Camera className="h-5 w-5 mr-2" />
                        Select Image
                      </Button>
                    </label>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Supports JPG, PNG, WebP formats • Max 10MB
                  </p>
                </div>
              </div>
            </Card>
          ) : (
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Image Preview */}
              <Card className="p-6 bg-card/90 backdrop-blur-sm border-primary/20">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Eye className="h-5 w-5 mr-2 text-primary" />
                  Uploaded Image
                </h3>
                <div className="relative rounded-lg overflow-hidden mb-4">
                  <img 
                    src={uploadedImage} 
                    alt="Uploaded eye" 
                    className="w-full h-64 object-cover"
                  />
                </div>
                <Button 
                  onClick={resetAnalysis} 
                  variant="outline" 
                  className="w-full"
                >
                  Upload New Image
                </Button>
              </Card>

              {/* Analysis Results */}
              <Card className="p-6 bg-card/90 backdrop-blur-sm border-primary/20">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  {analyzing ? (
                    <>
                      <Clock className="h-5 w-5 mr-2 text-primary animate-spin" />
                      Analyzing...
                    </>
                  ) : results ? (
                    <>
                      <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                      Analysis Results
                    </>
                  ) : (
                    <>
                      <AlertCircle className="h-5 w-5 mr-2 text-yellow-500" />
                      Ready to Analyze
                    </>
                  )}
                </h3>

                {analyzing && (
                  <div className="space-y-4">
                    <div className="text-center py-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                        <Eye className="h-8 w-8 text-primary animate-pulse" />
                      </div>
                      <p className="text-muted-foreground">
                        AI is analyzing your eye image...
                      </p>
                    </div>
                  </div>
                )}

                {results && !analyzing && (
                  <div className="space-y-6">
                    {/* Vision Strength */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">Vision Strength</span>
                        <Badge variant={results.visionStrength > 80 ? "medical" : "secondary"}>
                          {results.visionStrength}%
                        </Badge>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-primary-glow h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${results.visionStrength}%` }}
                        />
                      </div>
                    </div>

                    {/* Potential Conditions */}
                    <div>
                      <h4 className="font-medium mb-3">Potential Conditions</h4>
                      <div className="space-y-2">
                        {results.conditions.map((condition: any, index: number) => (
                          <div key={index} className="flex justify-between items-center">
                            <span className="text-sm">{condition.name}</span>
                            <Badge variant="outline">
                              {condition.probability}% risk
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Confidence & Recommendation */}
                    <div className="pt-4 border-t border-border">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">AI Confidence</span>
                        <span className="text-sm font-medium">{results.confidence}%</span>
                      </div>
                      <p className="text-sm bg-muted/50 p-3 rounded-lg">
                        <strong>Recommendation:</strong> {results.recommendation}
                      </p>
                    </div>
                  </div>
                )}

                {!analyzing && !results && (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground mb-4">
                      Image uploaded successfully. Click below to start AI analysis.
                    </p>
                    <Button onClick={analyzeImage} variant="ai-glow" size="lg">
                      <Eye className="h-5 w-5 mr-2" />
                      Analyze Eye Image
                    </Button>
                  </div>
                )}
              </Card>
            </div>
          )}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-center">
          <Card className="p-6 bg-yellow-50/50 border-yellow-200 max-w-2xl mx-auto">
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <div className="text-left">
                <h4 className="font-medium text-yellow-800 mb-1">Medical Disclaimer</h4>
                <p className="text-sm text-yellow-700">
                  This AI analysis is for informational purposes only and should not replace 
                  professional medical diagnosis. Please consult an eye care professional 
                  for accurate assessment and treatment.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};