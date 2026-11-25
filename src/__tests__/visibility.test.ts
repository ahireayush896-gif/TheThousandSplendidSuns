import { describe, it, expect } from 'vitest';
import { checkFlightVisibility } from '../utils/visibilityUtils';

describe('visibilityUtils', () => {
  describe('checkFlightVisibility', () => {
    it('correctly classifies VFR (>= 5 miles)', () => {
      const report1 = checkFlightVisibility(10);
      expect(report1).toEqual({
        distanceMiles: 10,
        aviationCategory: 'VFR',
        requiresInstruments: false,
      });

      const report2 = checkFlightVisibility(5);
      expect(report2).toEqual({
        distanceMiles: 5,
        aviationCategory: 'VFR',
        requiresInstruments: false,
      });
    });

    it('correctly classifies MVFR (3 to < 5 miles)', () => {
      const report1 = checkFlightVisibility(4.9);
      expect(report1).toEqual({
        distanceMiles: 4.9,
        aviationCategory: 'MVFR',
        requiresInstruments: false,
      });

      const report2 = checkFlightVisibility(3);
      expect(report2).toEqual({
        distanceMiles: 3,
        aviationCategory: 'MVFR',
        requiresInstruments: false,
      });
    });

    it('correctly classifies IFR (1 to < 3 miles) and requires instruments', () => {
      const report1 = checkFlightVisibility(2.9);
      expect(report1).toEqual({
        distanceMiles: 2.9,
        aviationCategory: 'IFR',
        requiresInstruments: true,
      });

      const report2 = checkFlightVisibility(1);
      expect(report2).toEqual({
        distanceMiles: 1,
        aviationCategory: 'IFR',
        requiresInstruments: true,
      });
    });

    it('correctly classifies LIFR (< 1 mile) and requires instruments', () => {
      const report1 = checkFlightVisibility(0.5);
      expect(report1).toEqual({
        distanceMiles: 0.5,
        aviationCategory: 'LIFR',
        requiresInstruments: true,
      });

      const report2 = checkFlightVisibility(0);
      expect(report2).toEqual({
        distanceMiles: 0,
        aviationCategory: 'LIFR',
        requiresInstruments: true,
      });
    });

    it('throws an error for negative distances', () => {
      expect(() => checkFlightVisibility(-1)).toThrow('Distance cannot be negative');
    });
  });
});
