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
