import { describe, it, expect } from 'vitest';
import { WeatherAlertLevel, WeatherAlert } from '../types/weather';

describe('WeatherAlert and WeatherAlertLevel types', () => {
  it('should have correct enum values', () => {
    expect(WeatherAlertLevel.LOW).toBe('LOW');
    expect(WeatherAlertLevel.MEDIUM).toBe('MEDIUM');
    expect(WeatherAlertLevel.HIGH).toBe('HIGH');
    expect(WeatherAlertLevel.CRITICAL).toBe('CRITICAL');
  });

  it('should allow constructing a valid WeatherAlert object', () => {
    const alert: WeatherAlert = {
      id: 'alert-1',
      level: WeatherAlertLevel.HIGH,
      message: 'Severe thunderstorm warning in the area.'
    };

    expect(alert.id).toBe('alert-1');
    expect(alert.level).toBe(WeatherAlertLevel.HIGH);
    expect(alert.message).toBe('Severe thunderstorm warning in the area.');
  });
});
