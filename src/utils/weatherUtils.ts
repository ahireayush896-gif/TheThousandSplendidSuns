export function celsiusToFahrenheit(celsius: number): number {
  return Math.round((celsius * 9) / 5 + 32);
}

export function fahrenheitToCelsius(fahrenheit: number): number {
  return Math.round(((fahrenheit - 32) * 5) / 9);
}

export function formatTemp(tempCelsius: number, unit: 'C' | 'F'): string {
  const val = unit === 'F' ? celsiusToFahrenheit(tempCelsius) : tempCelsius;
  return `${val}°${unit}`;
}

export function getWindSpeed(speedKmH: number, unit: 'C' | 'F'): string {
  if (unit === 'F') {
    // convert km/h to mph
    const mph = Math.round(speedKmH * 0.621371);
    return `${mph} mph`;
  }
  return `${speedKmH} km/h`;
}

export function calculateWindChill(
  tempFahrenheit: number,
  windMph: number
): { index: number; riskLevel: 'low' | 'moderate' | 'high' | 'danger' } {
  // Standard National Weather Service wind chill formula:
  // W = 35.74 + 0.6215*T - 35.75*(V^0.16) + 0.4275*T*(V^0.16)
  // Valid for T <= 50°F and V > 3 mph. If conditions are outside, wind chill is approximately temperature.
  let windChill: number;
  if (tempFahrenheit <= 50 && windMph > 3) {
    windChill =
      35.74 +
      0.6215 * tempFahrenheit -
      35.75 * Math.pow(windMph, 0.16) +
      0.4275 * tempFahrenheit * Math.pow(windMph, 0.16);
  } else {
    windChill = tempFahrenheit;
  }

  const index = Math.round(windChill * 10) / 10;

  let riskLevel: 'low' | 'moderate' | 'high' | 'danger';
  if (index >= 20) {
    riskLevel = 'low';
  } else if (index >= 0) {
    riskLevel = 'moderate';
  } else if (index >= -20) {
    riskLevel = 'high';
  } else {
    riskLevel = 'danger';
  }

  return { index, riskLevel };
}

