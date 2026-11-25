export interface UvProtectionAdvice {
  uvIndex: number;
  riskLevel: 'minimal' | 'low' | 'moderate' | 'very_high' | 'extreme' | 'severe_extreme';
  spfRecommendation: number;
}

export function getUvAdvice(uvIndex: number): UvProtectionAdvice {
  let riskLevel: 'minimal' | 'low' | 'moderate' | 'very_high' | 'extreme' | 'severe_extreme';
  let spfRecommendation: number;

  if (uvIndex >= 0 && uvIndex <= 1) {
    riskLevel = 'minimal';
    spfRecommendation = 10;
  } else if (uvIndex <= 2) {
    riskLevel = 'low';
    spfRecommendation = 15;
  } else if (uvIndex <= 5) {
    riskLevel = 'moderate';
    spfRecommendation = 30;
  } else if (uvIndex <= 10) {
    riskLevel = 'very_high';
    spfRecommendation = 50;
  } else if (uvIndex <= 12) {
    riskLevel = 'extreme';
    spfRecommendation = 50;
  } else {
    riskLevel = 'severe_extreme';
    spfRecommendation = 60;
  }

  return {
    uvIndex,
    riskLevel,
    spfRecommendation,
  };
}
