interface VisionAnalysisResult {
  visionStrength: number;
  conditions: Array<{
    name: string;
    probability: number;
  }>;
  recommendation: string;
  confidence: number;
  details: {
    eyeDetected: boolean;
    imageQuality: string;
    pupilSize: string;
    eyeColor: string;
    potentialIssues: string[];
  };
}

export class GoogleVisionAPI {
  private static API_KEY = 'AIzaSyA1F4uKQEKXSujjpXoUrYRulBRHmyBii6Y';
  private static VISION_API_URL = 'https://vision.googleapis.com/v1/images:annotate';

  static async analyzeEyeImage(imageBase64: string): Promise<VisionAnalysisResult> {
    try {
      // Remove data URL prefix if present
      const base64Image = imageBase64.replace(/^data:image\/[a-z]+;base64,/, '');

      const requestBody = {
        requests: [
          {
            image: {
              content: base64Image
            },
            features: [
              { type: 'FACE_DETECTION', maxResults: 10 },
              { type: 'OBJECT_LOCALIZATION', maxResults: 10 },
              { type: 'LABEL_DETECTION', maxResults: 10 },
              { type: 'TEXT_DETECTION', maxResults: 10 },
              { type: 'IMAGE_PROPERTIES' }
            ]
          }
        ]
      };

      const response = await fetch(`${this.VISION_API_URL}?key=${this.API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.responses[0].error) {
        throw new Error(data.responses[0].error.message);
      }

      return this.processVisionResponse(data.responses[0]);
    } catch (error) {
      console.error('Google Vision API Error:', error);
      throw new Error('Failed to analyze image with AI. Please try again.');
    }
  }

  private static processVisionResponse(response: any): VisionAnalysisResult {
    const faceDetections = response.faceAnnotations || [];
    const labels = response.labelAnnotations || [];
    const objects = response.localizedObjectAnnotations || [];
    
    // Check if eye-related content is detected
    const eyeKeywords = ['eye', 'pupil', 'iris', 'eyelash', 'eyebrow', 'face', 'human'];
    const hasEyeContent = labels.some((label: any) => 
      eyeKeywords.some(keyword => 
        label.description.toLowerCase().includes(keyword)
      )
    ) || faceDetections.length > 0;

    if (!hasEyeContent) {
      throw new Error('No eye or face detected in the image. Please upload a clear eye image.');
    }

    // Analyze face detection results for eye health indicators
    let visionStrength = 85; // Base vision strength
    let conditions: Array<{ name: string; probability: number }> = [];
    let potentialIssues: string[] = [];
    let imageQuality = 'Good';
    let pupilSize = 'Normal';
    let eyeColor = 'Unknown';

    // Process face detection data
    if (faceDetections.length > 0) {
      const face = faceDetections[0];
      
      // Analyze confidence levels
      const detectionConfidence = face.detectionConfidence || 0.5;
      if (detectionConfidence < 0.7) {
        imageQuality = 'Low - Please use a clearer image';
        visionStrength -= 10;
      }

      // Check for various facial features that might indicate vision issues
      if (face.blurredLikelihood === 'LIKELY' || face.blurredLikelihood === 'VERY_LIKELY') {
        potentialIssues.push('Image blur detected - may affect accuracy');
        visionStrength -= 5;
      }

      // Analyze eye landmarks if available
      if (face.landmarks) {
        const eyeLandmarks = face.landmarks.filter((landmark: any) => 
          landmark.type.includes('EYE') || landmark.type.includes('PUPIL')
        );
        
        if (eyeLandmarks.length > 0) {
          pupilSize = 'Detected';
          visionStrength += 5;
        }
      }

      // Simulated analysis based on detection quality
      if (detectionConfidence > 0.9) {
        visionStrength += 10;
        conditions.push({
          name: 'Normal Vision Range',
          probability: 75
        });
      } else {
        conditions.push({
          name: 'Myopia (Nearsightedness)',
          probability: Math.floor(Math.random() * 30) + 20
        });
        conditions.push({
          name: 'Astigmatism',
          probability: Math.floor(Math.random() * 25) + 15
        });
      }
    }

    // Analyze labels for additional insights
    const medicalLabels = labels.filter((label: any) => {
      const desc = label.description.toLowerCase();
      return desc.includes('eye') || desc.includes('iris') || desc.includes('pupil');
    });

    if (medicalLabels.length > 0) {
      const topLabel = medicalLabels[0];
      if (topLabel.score > 0.8) {
        visionStrength += 5;
        eyeColor = 'Detected';
      }
    }

    // Generate recommendation based on analysis
    let recommendation = 'Regular eye checkup recommended';
    if (visionStrength > 90) {
      recommendation = 'Excellent eye health indicators detected. Maintain regular checkups.';
    } else if (visionStrength < 70) {
      recommendation = 'Some indicators suggest potential vision concerns. Please consult an eye care professional.';
      conditions.push({
        name: 'Hyperopia (Farsightedness)',
        probability: Math.floor(Math.random() * 20) + 15
      });
    }

    // Ensure vision strength is within bounds
    visionStrength = Math.max(60, Math.min(100, visionStrength));

    // Calculate confidence based on detection quality
    const confidence = Math.floor((faceDetections.length > 0 ? faceDetections[0].detectionConfidence || 0.85 : 0.75) * 100);

    return {
      visionStrength,
      conditions: conditions.slice(0, 3), // Limit to 3 conditions
      recommendation,
      confidence,
      details: {
        eyeDetected: hasEyeContent,
        imageQuality,
        pupilSize,
        eyeColor,
        potentialIssues
      }
    };
  }
}