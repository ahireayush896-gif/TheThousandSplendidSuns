import { describe, it, expect } from 'vitest';
import { calculateWindChill } from '../utils/weatherUtils';

describe('calculateWindChill', () => {
  it('should calculate wind chill correctly with high-altitude wind factor for 0°C and 10 km/h wind', () => {
    // (-3.31465... * 1.05) = -3.48038... -> -3.5
    const result = calculateWindChill(0, 10);
    expect(result).toBe(-3.5);
  });

  it('should calculate wind chill correctly with high-altitude wind factor for freezing temperatures and high wind speed (-10°C, 20 km/h)', () => {
    // (-17.85119... * 1.05) = -18.74375... -> -18.7
    const result = calculateWindChill(-10, 20);
    expect(result).toBe(-18.7);
  });

  it('should calculate wind chill correctly with high-altitude wind factor for moderate temperatures (5°C, 15 km/h)', () => {
    // (1.70329... * 1.05) = 1.78845... -> 1.8
    const result = calculateWindChill(5, 15);
    expect(result).toBe(1.8);
  });

  it('should calculate wind chill correctly with high-altitude wind factor for low wind speeds (10°C, 5 km/h)', () => {
    // (9.3242... * 1.05) = 9.7904... -> 9.8
    const result = calculateWindChill(10, 5);
    expect(result).toBe(9.8);
  });

  it('should return a number rounded to 1 decimal place', () => {
    const result = calculateWindChill(-5, 25);
    const decimalPlaces = (result.toString().split('.')[1] || '').length;
    expect(decimalPlaces).toBeLessThanOrEqual(1);
  });
});
