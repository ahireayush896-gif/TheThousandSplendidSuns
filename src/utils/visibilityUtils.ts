export interface VisibilityReport {
  distanceKm: number;
  condition: 'clear' | 'foggy' | 'hazy';
  flightPermitted: boolean;
}

/**
 * Checks flight visibility conditions based on distance in kilometers.
 * - distanceKm >= 10: 'clear'
 * - 5 <= distanceKm < 10: 'hazy'
 * - distanceKm < 5: 'foggy'
 * 
 * flightPermitted is true if distanceKm >= 5 (i.e. 'clear' or 'hazy'), false otherwise.
 */
export function checkFlightVisibility(distanceKm: number): VisibilityReport {
  let condition: 'clear' | 'foggy' | 'hazy';
  if (distanceKm >= 10) {
    condition = 'clear';
  } else if (distanceKm >= 5) {
    condition = 'hazy';
  } else {
    condition = 'foggy';
  }

  const flightPermitted = distanceKm >= 5;

  return {
    distanceKm,
    condition,
    flightPermitted,
  };
}
