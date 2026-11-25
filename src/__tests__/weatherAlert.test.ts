import { describe, it, expect } from 'vitest';
import { WeatherAlertLevel, WeatherAlert } from '../types/weather';

describe('WeatherAlert Types', () => {
  it('should allow valid WeatherAlertLevel values', () => {
    const levels: WeatherAlertLevel[] = ['info', 'warning', 'severe', 'emergency'];
    expect(levels.length).toBe(4);
  });

  it('should structure WeatherAlert correctly', () => {
    const alert: WeatherAlert = {
      alertId: 101,
      severity: 'severe',
      description: 'Heavy thunderstorm warning in effect.',
    };

    expect(alert.alertId).toBe(101);
    expect(alert.severity).toBe('severe');
    expect(alert.description).toBe('Heavy thunderstorm warning in effect.');
  });
});
