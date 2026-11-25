export interface UvProtectionAdvice {
  uvIndex: number;
  warningCategory: 'minimal' | 'moderate' | 'severe' | 'hazardous';
  protectionActions: string[];
}

export function getUvAdvice(uvIndex: number): UvProtectionAdvice {
  let warningCategory: 'minimal' | 'moderate' | 'severe' | 'hazardous';
  let protectionActions: string[];

  if (uvIndex <= 2) {
    warningCategory = 'minimal';
    protectionActions = ['sunglasses'];
  } else if (uvIndex <= 5) {
    warningCategory = 'moderate';
    protectionActions = ['sunscreen', 'sunglasses'];
  } else if (uvIndex <= 10) {
    warningCategory = 'severe';
    protectionActions = ['sunscreen', 'sunglasses', 'hat'];
  } else {
    warningCategory = 'hazardous';
    protectionActions = ['sunscreen', 'sunglasses', 'hat', 'avoid sun exposure'];
  }

  return {
    uvIndex,
    warningCategory,
    protectionActions,
  };
}
