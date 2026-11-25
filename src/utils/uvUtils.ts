export interface UvProtectionAdvice {
  uvIndex: number;
  riskLevel: 'low' | 'moderate' | 'high' | 'very_high' | 'extreme';
  spfRecommendation: number;
}

export function getUvAdvice(uvIndex: number): UvProtectionAdvice {
  let riskLevel: 'low' | 'moderate' | 'high' | 'very_high' | 'extreme';
  let spfRecommendation: number;

  if (uvIndex <= 2) {
    riskLevel = 'low';
    spfRecommendation = 15;
  } else if (uvIndex <= 5) {
    riskLevel = 'moderate';
    spfRecommendation = 30;
  } else if (uvIndex <= 7) {
    riskLevel = 'high';
    spfRecommendation = 40;
  } else if (uvIndex <= 10) {
    riskLevel = 'very_high';
    spfRecommendation = 50;
  } else {
    riskLevel = 'extreme';
    spfRecommendation = 50;
  }

  return {
    uvIndex,
    riskLevel,
    spfRecommendation,
  };
}
