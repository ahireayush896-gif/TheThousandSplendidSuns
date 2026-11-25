import { describe, it, expect } from 'vitest';
import { calculateWindChill } from '../utils/weatherUtils';

describe('calculateWindChill', () => {
  it('calculates wind chill correctly for cold temperatures and moderate wind', () => {
    // 30°F, 15 mph wind
    const result = calculateWindChill(30, 15);
    expect(typeof result.index).toBe('number');
    expect(result.riskLevel).toBeDefined();
    // Expected NWS wind chill for 30°F and 15 mph is approximately 19°F
    expect(result.index).toBeLessThan(30);
    expect(['low', 'moderate', 'high', 'danger']).toContain(result.riskLevel);
  });

  it('returns low risk for mild temperatures above 50°F', () => {
    const result = calculateWindChill(60, 10);
    expect(result.index).toBe(60);
    expect(result.riskLevel).toBe('low');
  });

  it('returns low risk for low wind speed <= 3 mph', () => {
    const result = calculateWindChill(20, 2);
    expect(result.index).toBe(20);
    expect(result.riskLevel).toBe('low');
  });

  it('categorizes danger risk level correctly for extreme cold and high wind', () => {
    // -20°F, 30 mph wind -> extreme wind chill (< -20°F)
    const result = calculateWindChill(-20, 30);
    expect(result.index).toBeLessThan(-20);
    expect(result.riskLevel).toBe('danger');
  });

  it('categorizes high risk level correctly', () => {
    // 10°F, 20 mph wind -> wind chill around -8°F (between 0 and -20 is high, wait: -20 to 0 is high? Let's check ranges)
    // index >= 20: low
    // index >= 0: moderate
    // index >= -20: high
    // index < -20: danger
    const result = calculateWindChill(10, 20);
    expect(result.riskLevel).toBe('high');
  });
});
