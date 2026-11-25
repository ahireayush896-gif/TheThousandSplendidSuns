import { describe, it, expect } from 'vitest';
import { getUvAdvice } from '../utils/uvUtils';

describe('getUvAdvice', () => {
  it('should return minimal warning and sunglasses for low UV index (<= 2)', () => {
    const advice = getUvAdvice(2);
    expect(advice.uvIndex).toBe(2);
    expect(advice.warningCategory).toBe('minimal');
    expect(advice.protectionActions).toEqual(['sunglasses']);
  });

  it('should return moderate warning, sunscreen and sunglasses for moderate UV index (3-5)', () => {
    const advice = getUvAdvice(4);
    expect(advice.uvIndex).toBe(4);
    expect(advice.warningCategory).toBe('moderate');
    expect(advice.protectionActions).toEqual(['sunscreen', 'sunglasses']);
  });

  it('should return severe warning, sunscreen, sunglasses, and hat for severe UV index (6-10)', () => {
    const advice = getUvAdvice(8);
    expect(advice.uvIndex).toBe(8);
    expect(advice.warningCategory).toBe('severe');
    expect(advice.protectionActions).toEqual(['sunscreen', 'sunglasses', 'hat']);
  });

  it('should return hazardous warning and full protection actions for hazardous UV index (> 10)', () => {
    const advice = getUvAdvice(11);
    expect(advice.uvIndex).toBe(11);
    expect(advice.warningCategory).toBe('hazardous');
    expect(advice.protectionActions).toContain('sunscreen');
    expect(advice.protectionActions).toContain('sunglasses');
    expect(advice.protectionActions).toContain('hat');
    expect(advice.protectionActions).toContain('avoid sun exposure');
  });

  it('should have exact expected properties on UvProtectionAdvice', () => {
    const advice = getUvAdvice(5);
    expect(advice).toHaveProperty('uvIndex');
    expect(advice).toHaveProperty('warningCategory');
    expect(advice).toHaveProperty('protectionActions');
    expect(typeof advice.uvIndex).toBe('number');
    expect(Array.isArray(advice.protectionActions)).toBe(true);
    expect(['minimal', 'moderate', 'severe', 'hazardous']).toContain(advice.warningCategory);
  });
});
