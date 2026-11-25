import { describe, it, expect } from 'vitest';
import { calculateHeatIndex } from '../utils/weatherUtils';

describe('calculateHeatIndex', () => {
  it('should calculate heat index in Caution category (e.g. 85°F, 60% humidity)', () => {
    const result = calculateHeatIndex(85, 60);
    expect(result.index).toBeGreaterThan(0);
    expect(result.riskCategory).toBe('Caution');
  });

  it('should calculate heat index in Extreme Caution category (e.g. 95°F, 70% humidity)', () => {
    const result = calculateHeatIndex(95, 70);
    expect(result.riskCategory).toBe('Extreme Caution');
    expect(result.index).toBeGreaterThanOrEqual(90);
  });

  it('should calculate heat index in Danger category (e.g. 105°F, 75% humidity)', () => {
    const result = calculateHeatIndex(105, 75);
    expect(result.riskCategory).toBe('Danger');
    expect(result.index).toBeGreaterThanOrEqual(103);
  });

  it('should return an object with index and riskCategory fields', () => {
    const result = calculateHeatIndex(90, 50);
    expect(result).toHaveProperty('index');
    expect(result).toHaveProperty('riskCategory');
    expect(typeof result.index).toBe('number');
    expect(['Caution', 'Extreme Caution', 'Danger']).toContain(result.riskCategory);
  });

  it('should handle lower temperatures correctly using simple approximation or base formula', () => {
    const result = calculateHeatIndex(75, 50);
    expect(result).toHaveProperty('index');
    expect(result.riskCategory).toBe('Caution');
  });
});
