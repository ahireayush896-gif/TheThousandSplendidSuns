import { describe, it, expect } from 'vitest';
import { checkFlightVisibility } from '../utils/visibilityUtils';

describe('visibilityUtils', () => {
  it('should return clear condition and flight permitted for high visibility (>= 10 km)', () => {
    const report = checkFlightVisibility(12);
    expect(report.distanceKm).toBe(12);
    expect(report.condition).toBe('clear');
    expect(report.flightPermitted).toBe(true);
  });

  it('should return clear condition and flight permitted at exactly 10 km', () => {
    const report = checkFlightVisibility(10);
    expect(report.distanceKm).toBe(10);
    expect(report.condition).toBe('clear');
    expect(report.flightPermitted).toBe(true);
  });

  it('should return hazy condition and flight permitted for moderate visibility (5 to < 10 km)', () => {
    const report = checkFlightVisibility(7.5);
    expect(report.distanceKm).toBe(7.5);
    expect(report.condition).toBe('hazy');
    expect(report.flightPermitted).toBe(true);
  });

  it('should return hazy condition and flight permitted at exactly 5 km', () => {
    const report = checkFlightVisibility(5);
    expect(report.distanceKm).toBe(5);
    expect(report.condition).toBe('hazy');
    expect(report.flightPermitted).toBe(true);
  });

  it('should return foggy condition and flight NOT permitted for low visibility (< 5 km)', () => {
    const report = checkFlightVisibility(3);
    expect(report.distanceKm).toBe(3);
    expect(report.condition).toBe('foggy');
    expect(report.flightPermitted).toBe(false);
  });

  it('should return foggy condition and flight NOT permitted at 0 km', () => {
    const report = checkFlightVisibility(0);
    expect(report.distanceKm).toBe(0);
    expect(report.condition).toBe('foggy');
    expect(report.flightPermitted).toBe(false);
  });
});
