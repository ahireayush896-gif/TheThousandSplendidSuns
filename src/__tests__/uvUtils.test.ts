import { describe, it, expect } from 'vitest';
import { getUvAdvice } from '../utils/uvUtils';

describe('getUvAdvice', () => {
  it('should return SPF 15 and low risk for low UV index (<= 2)', () => {
    const advice = getUvAdvice(2);
    expect(advice.uvIndex).toBe(2);
    expect(advice.riskLevel).toBe('low');
    expect(advice.spfRecommendation).toBe(15);
  });

  it('should return SPF 30 and moderate risk for moderate UV index (3-5)', () => {
    const advice = getUvAdvice(4);
    expect(advice.uvIndex).toBe(4);
    expect(advice.riskLevel).toBe('moderate');
    expect(advice.spfRecommendation).toBe(30);
  });

  it('should return SPF 40 and high risk for high UV index (6-7)', () => {
    const advice = getUvAdvice(6);
    expect(advice.uvIndex).toBe(6);
    expect(advice.riskLevel).toBe('high');
    expect(advice.spfRecommendation).toBe(40);

    const advice7 = getUvAdvice(7);
    expect(advice7.uvIndex).toBe(7);
    expect(advice7.riskLevel).toBe('high');
    expect(advice7.spfRecommendation).toBe(40);
  });

  it('should return SPF 50 and very_high risk for very high UV index (8-10)', () => {
    const advice = getUvAdvice(8);
    expect(advice.uvIndex).toBe(8);
    expect(advice.riskLevel).toBe('very_high');
    expect(advice.spfRecommendation).toBe(50);
  });

  it('should return SPF 50 and extreme risk for extreme UV index (> 10)', () => {
    const advice = getUvAdvice(11);
    expect(advice.uvIndex).toBe(11);
    expect(advice.riskLevel).toBe('extreme');
    expect(advice.spfRecommendation).toBe(50);
  });

  it('should have exact expected properties on UvProtectionAdvice', () => {
    const advice = getUvAdvice(5);
    expect(advice).toHaveProperty('uvIndex');
    expect(advice).toHaveProperty('riskLevel');
    expect(advice).toHaveProperty('spfRecommendation');
    expect(typeof advice.uvIndex).toBe('number');
    expect(typeof advice.spfRecommendation).toBe('number');
    expect(['low', 'moderate', 'high', 'very_high', 'extreme']).toContain(advice.riskLevel);
  });
});
