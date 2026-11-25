export interface VisibilityReport {
  distanceMiles: number;
  aviationCategory: 'VFR' | 'MVFR' | 'IFR' | 'LIFR';
  requiresInstruments: boolean;
}

/**
 * Evaluates flight visibility in statute miles and returns an aviation category and instrument requirement.
 * 
 * Aviation categories based on visibility:
 * - VFR (Visual Flight Rules): >= 5 miles
 * - MVFR (Marginal VFR): 3 to < 5 miles
 * - IFR (Instrument Flight Rules): 1 to < 3 miles
 * - LIFR (Low Instrument Flight Rules): < 1 mile
 * 
 * requiresInstruments is true if distanceMiles < 3 (IFR and LIFR categories).
 */
export function checkFlightVisibility(distanceMiles: number): VisibilityReport {
  if (distanceMiles < 0) {
    throw new Error('Distance cannot be negative');
  }

  let aviationCategory: 'VFR' | 'MVFR' | 'IFR' | 'LIFR';

  if (distanceMiles >= 5) {
    aviationCategory = 'VFR';
  } else if (distanceMiles >= 3) {
    aviationCategory = 'MVFR';
  } else if (distanceMiles >= 1) {
    aviationCategory = 'IFR';
  } else {
    aviationCategory = 'LIFR';
  }

  const requiresInstruments = distanceMiles < 3;

  return {
    distanceMiles,
    aviationCategory,
    requiresInstruments,
  };
}
