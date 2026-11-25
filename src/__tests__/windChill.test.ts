import { describe, it, expect } from 'vitest';
import { calculateWindChill } from '../utils/weatherUtils';

describe('calculateWindChill', () => {
  it('should calculate wind chill correctly for 0°C and 10 km/h wind', () => {
    // 13.12 + 0 - 11.37 * (10^0.16) + 0 = -3.31465... -> -3.3
    const result = calculateWindChill(0, 10);
    expect(result).toBe(-3.3);
  });

  it('should calculate wind chill correctly for freezing temperatures and high wind speed (-10°C, 20 km/h)', () => {
    // 13.12 + 0.6215*(-10) - 11.37*(20^0.16) + 0.3965*(-10)*(20^0.16) = -17.85119... -> -17.9
    const result = calculateWindChill(-10, 20);
    expect(result).toBe(-17.9);
  });

  it('should calculate wind chill correctly for moderate temperatures (5°C, 15 km/h)', () => {
    const result = calculateWindChill(5, 15);
    expect(result).toBe(1.8);
  });

  it('should calculate wind chill correctly for low wind speeds (10°C, 5 km/h)', () => {
    const result = calculateWindChill(10, 5);
    expect(result).toBe(9.8);
  });

  it('should clamp negative wind speeds to 0', () => {
    // With windSpeedKmh = -5, clamped to 0:
    // windPower = 0^0.16 = 0
    // windChill = 13.12 + 0.6215 * (-5) - 0 + 0 = 13.12 - 3.1075 = 10.0125 -> 10.0
    const result = calculateWindChill(-5, -5);
    expect(result).toBe(10.0);
  });
});
