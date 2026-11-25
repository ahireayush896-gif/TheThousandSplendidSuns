import { CityWeather } from '../types/weather';

export const CITIES_WEATHER: CityWeather[] = [
  {
    id: 'tokyo',
    cityName: 'Tokyo',
    country: 'Japan',
    tempCelsius: 18,
    feelsLikeCelsius: 17,
    condition: 'cloudy',
    conditionText: 'Partly Cloudy',
    humidity: 65,
    windSpeed: 14,
    windDirection: 'ENE',
    uvIndex: 4,
    pressure: 1014,
    visibility: 10,
    airQualityIndex: 32,
    hourly: [
      { time: '00:00', tempCelsius: 15, condition: 'cloudy', pop: 10, humidity: 70 },
      { time: '03:00', tempCelsius: 14, condition: 'cloudy', pop: 15, humidity: 72 },
      { time: '06:00', tempCelsius: 16, condition: 'sunny', pop: 5, humidity: 68 },
      { time: '09:00', tempCelsius: 18, condition: 'sunny', pop: 10, humidity: 65 },
      { time: '12:00', tempCelsius: 21, condition: 'cloudy', pop: 20, humidity: 60 },
      { time: '15:00', tempCelsius: 20, condition: 'cloudy', pop: 25, humidity: 62 },
      { time: '18:00', tempCelsius: 18, condition: 'cloudy', pop: 15, humidity: 68 },
      { time: '21:00', tempCelsius: 16, condition: 'cloudy', pop: 10, humidity: 71 },
    ],
    weekly: [
      { day: 'Today', date: 'Oct 24', maxTempCelsius: 21, minTempCelsius: 14, condition: 'cloudy', pop: 20, uvIndex: 4 },
      { day: 'Fri', date: 'Oct 25', maxTempCelsius: 23, minTempCelsius: 15, condition: 'sunny', pop: 10, uvIndex: 6 },
      { day: 'Sat', date: 'Oct 26', maxTempCelsius: 19, minTempCelsius: 12, condition: 'rainy', pop: 85, uvIndex: 2 },
      { day: 'Sun', date: 'Oct 27', maxTempCelsius: 17, minTempCelsius: 11, condition: 'stormy', pop: 95, uvIndex: 1 },
      { day: 'Mon', date: 'Oct 28', maxTempCelsius: 20, minTempCelsius: 13, condition: 'sunny', pop: 5, uvIndex: 5 },
      { day: 'Tue', date: 'Oct 29', maxTempCelsius: 22, minTempCelsius: 14, condition: 'cloudy', pop: 20, uvIndex: 5 },
      { day: 'Wed', date: 'Oct 30', maxTempCelsius: 24, minTempCelsius: 16, condition: 'sunny', pop: 10, uvIndex: 6 },
    ],
    advisorTips: [
      'Pleasant conditions expected for evening strolls in Shinjuku.',
      'Light jacket recommended as evening temperatures dip to 15°C.',
      'Air quality is pristine today. Enjoy outdoor activities.'
    ]
  },
  {
    id: 'new-york',
    cityName: 'New York',
    country: 'United States',
    tempCelsius: 22,
    feelsLikeCelsius: 23,
    condition: 'sunny',
    conditionText: 'Clear Sunshine',
    humidity: 48,
    windSpeed: 18,
    windDirection: 'WNW',
    uvIndex: 7,
    pressure: 1020,
    visibility: 16,
    airQualityIndex: 45,
    hourly: [
      { time: '00:00', tempCelsius: 17, condition: 'sunny', pop: 0, humidity: 55 },
      { time: '03:00', tempCelsius: 16, condition: 'sunny', pop: 0, humidity: 58 },
      { time: '06:00', tempCelsius: 18, condition: 'sunny', pop: 0, humidity: 52 },
      { time: '09:00', tempCelsius: 21, condition: 'sunny', pop: 0, humidity: 49 },
      { time: '12:00', tempCelsius: 24, condition: 'sunny', pop: 5, humidity: 45 },
      { time: '15:00', tempCelsius: 25, condition: 'sunny', pop: 5, humidity: 46 },
      { time: '18:00', tempCelsius: 22, condition: 'sunny', pop: 10, humidity: 50 },
      { time: '21:00', tempCelsius: 19, condition: 'sunny', pop: 5, humidity: 54 },
    ],
    weekly: [
      { day: 'Today', date: 'Oct 24', maxTempCelsius: 25, minTempCelsius: 16, condition: 'sunny', pop: 5, uvIndex: 7 },
      { day: 'Fri', date: 'Oct 25', maxTempCelsius: 26, minTempCelsius: 17, condition: 'sunny', pop: 10, uvIndex: 7 },
      { day: 'Sat', date: 'Oct 26', maxTempCelsius: 20, minTempCelsius: 14, condition: 'rainy', pop: 90, uvIndex: 2 },
      { day: 'Sun', date: 'Oct 27', maxTempCelsius: 18, minTempCelsius: 12, condition: 'cloudy', pop: 30, uvIndex: 4 },
      { day: 'Mon', date: 'Oct 28', maxTempCelsius: 21, minTempCelsius: 13, condition: 'sunny', pop: 0, uvIndex: 6 },
      { day: 'Tue', date: 'Oct 29', maxTempCelsius: 23, minTempCelsius: 15, condition: 'sunny', pop: 5, uvIndex: 6 },
      { day: 'Wed', date: 'Oct 30', maxTempCelsius: 19, minTempCelsius: 11, condition: 'windy', pop: 15, uvIndex: 5 },
    ],
    advisorTips: [
      'High UV index (7) recorded today — wear sunscreen and sunglasses if outside.',
      'Rain expected this Saturday, plan outdoor errands before the weekend.',
      'Gorgeous sunny day for Central Park walks.'
    ]
  },
  {
    id: 'london',
    cityName: 'London',
    country: 'United Kingdom',
    tempCelsius: 13,
    feelsLikeCelsius: 11,
    condition: 'rainy',
    conditionText: 'Light Drizzle',
    humidity: 82,
    windSpeed: 22,
    windDirection: 'SW',
    uvIndex: 2,
    pressure: 1008,
    visibility: 8,
    airQualityIndex: 28,
    hourly: [
      { time: '00:00', tempCelsius: 11, condition: 'rainy', pop: 80, humidity: 85 },
      { time: '03:00', tempCelsius: 10, condition: 'rainy', pop: 85, humidity: 88 },
      { time: '06:00', tempCelsius: 11, condition: 'rainy', pop: 70, humidity: 84 },
      { time: '09:00', tempCelsius: 13, condition: 'rainy', pop: 60, humidity: 82 },
      { time: '12:00', tempCelsius: 15, condition: 'cloudy', pop: 40, humidity: 75 },
      { time: '15:00', tempCelsius: 14, condition: 'rainy', pop: 65, humidity: 78 },
      { time: '18:00', tempCelsius: 12, condition: 'rainy', pop: 75, humidity: 83 },
      { time: '21:00', tempCelsius: 11, condition: 'cloudy', pop: 50, humidity: 86 },
    ],
    weekly: [
      { day: 'Today', date: 'Oct 24', maxTempCelsius: 15, minTempCelsius: 10, condition: 'rainy', pop: 75, uvIndex: 2 },
      { day: 'Fri', date: 'Oct 25', maxTempCelsius: 14, minTempCelsius: 9, condition: 'cloudy', pop: 40, uvIndex: 3 },
      { day: 'Sat', date: 'Oct 26', maxTempCelsius: 16, minTempCelsius: 11, condition: 'sunny', pop: 15, uvIndex: 4 },
      { day: 'Sun', date: 'Oct 27', maxTempCelsius: 13, minTempCelsius: 8, condition: 'rainy', pop: 85, uvIndex: 1 },
      { day: 'Mon', date: 'Oct 28', maxTempCelsius: 12, minTempCelsius: 7, condition: 'windy', pop: 30, uvIndex: 2 },
      { day: 'Tue', date: 'Oct 29', maxTempCelsius: 14, minTempCelsius: 9, condition: 'cloudy', pop: 25, uvIndex: 3 },
      { day: 'Wed', date: 'Oct 30', maxTempCelsius: 15, minTempCelsius: 10, condition: 'sunny', pop: 10, uvIndex: 3 },
    ],
    advisorTips: [
      'Rain expected today — pack an umbrella before heading out.',
      'Breezy conditions (22 km/h winds), wear a windbreaker.',
      'Humidity is high at 82%. Indoor museum visits are ideal.'
    ]
  },
  {
    id: 'paris',
    cityName: 'Paris',
    country: 'France',
    tempCelsius: 16,
    feelsLikeCelsius: 15,
    condition: 'cloudy',
    conditionText: 'Overcast Skies',
    humidity: 70,
    windSpeed: 12,
    windDirection: 'W',
    uvIndex: 3,
    pressure: 1015,
    visibility: 10,
    airQualityIndex: 40,
    hourly: [
      { time: '00:00', tempCelsius: 13, condition: 'cloudy', pop: 20, humidity: 75 },
      { time: '03:00', tempCelsius: 12, condition: 'cloudy', pop: 15, humidity: 78 },
      { time: '06:00', tempCelsius: 13, condition: 'cloudy', pop: 20, humidity: 76 },
      { time: '09:00', tempCelsius: 15, condition: 'cloudy', pop: 25, humidity: 72 },
      { time: '12:00', tempCelsius: 18, condition: 'cloudy', pop: 30, humidity: 65 },
      { time: '15:00', tempCelsius: 17, condition: 'cloudy', pop: 35, humidity: 68 },
      { time: '18:00', tempCelsius: 15, condition: 'cloudy', pop: 25, humidity: 73 },
      { time: '21:00', tempCelsius: 14, condition: 'cloudy', pop: 20, humidity: 76 },
    ],
    weekly: [
      { day: 'Today', date: 'Oct 24', maxTempCelsius: 18, minTempCelsius: 12, condition: 'cloudy', pop: 30, uvIndex: 3 },
      { day: 'Fri', date: 'Oct 25', maxTempCelsius: 20, minTempCelsius: 13, condition: 'sunny', pop: 10, uvIndex: 5 },
      { day: 'Sat', date: 'Oct 26', maxTempCelsius: 17, minTempCelsius: 11, condition: 'rainy', pop: 80, uvIndex: 2 },
      { day: 'Sun', date: 'Oct 27', maxTempCelsius: 15, minTempCelsius: 9, condition: 'cloudy', pop: 40, uvIndex: 3 },
      { day: 'Mon', date: 'Oct 28', maxTempCelsius: 18, minTempCelsius: 10, condition: 'sunny', pop: 5, uvIndex: 4 },
      { day: 'Tue', date: 'Oct 29', maxTempCelsius: 19, minTempCelsius: 12, condition: 'cloudy', pop: 20, uvIndex: 4 },
      { day: 'Wed', date: 'Oct 30', maxTempCelsius: 21, minTempCelsius: 13, condition: 'sunny', pop: 10, uvIndex: 5 },
    ],
    advisorTips: [
      'Calm winds and overcast skies — perfect for a Seine river cruise.',
      'Minor chance of light drizzle in the afternoon.',
      'Comfortable walking weather across Montmartre.'
    ]
  },
  {
    id: 'mumbai',
    cityName: 'Mumbai',
    country: 'India',
    tempCelsius: 32,
    feelsLikeCelsius: 38,
    condition: 'stormy',
    conditionText: 'Monsoon Thunderstorms',
    humidity: 85,
    windSpeed: 25,
    windDirection: 'SSW',
    uvIndex: 9,
    pressure: 1002,
    visibility: 6,
    airQualityIndex: 95,
    hourly: [
      { time: '00:00', tempCelsius: 28, condition: 'stormy', pop: 90, humidity: 88 },
      { time: '03:00', tempCelsius: 27, condition: 'rainy', pop: 85, humidity: 90 },
      { time: '06:00', tempCelsius: 28, condition: 'rainy', pop: 75, humidity: 87 },
      { time: '09:00', tempCelsius: 30, condition: 'cloudy', pop: 60, humidity: 84 },
      { time: '12:00', tempCelsius: 33, condition: 'stormy', pop: 85, humidity: 80 },
      { time: '15:00', tempCelsius: 32, condition: 'stormy', pop: 95, humidity: 83 },
      { time: '18:00', tempCelsius: 30, condition: 'rainy', pop: 80, humidity: 86 },
      { time: '21:00', tempCelsius: 29, condition: 'stormy', pop: 85, humidity: 88 },
    ],
    weekly: [
      { day: 'Today', date: 'Oct 24', maxTempCelsius: 33, minTempCelsius: 27, condition: 'stormy', pop: 95, uvIndex: 9 },
      { day: 'Fri', date: 'Oct 25', maxTempCelsius: 31, minTempCelsius: 26, condition: 'rainy', pop: 85, uvIndex: 7 },
      { day: 'Sat', date: 'Oct 26', maxTempCelsius: 30, minTempCelsius: 25, condition: 'rainy', pop: 80, uvIndex: 6 },
      { day: 'Sun', date: 'Oct 27', maxTempCelsius: 32, minTempCelsius: 26, condition: 'cloudy', pop: 50, uvIndex: 8 },
      { day: 'Mon', date: 'Oct 28', maxTempCelsius: 34, minTempCelsius: 27, condition: 'sunny', pop: 20, uvIndex: 10 },
      { day: 'Tue', date: 'Oct 29', maxTempCelsius: 33, minTempCelsius: 26, condition: 'cloudy', pop: 30, uvIndex: 9 },
      { day: 'Wed', date: 'Oct 30', maxTempCelsius: 32, minTempCelsius: 26, condition: 'rainy', pop: 70, uvIndex: 7 },
    ],
    advisorTips: [
      'Severe thunderstorm alert: Heavy rain and lightning expected in the afternoon.',
      'High humidity (85%) makes it feel like 38°C. Stay hydrated!',
      'Avoid coastal promenades during high tide and stormy squalls.'
    ]
  },
  {
    id: 'sydney',
    cityName: 'Sydney',
    country: 'Australia',
    tempCelsius: 24,
    feelsLikeCelsius: 25,
    condition: 'sunny',
    conditionText: 'Bright Sunshine',
    humidity: 52,
    windSpeed: 16,
    windDirection: 'ENE',
    uvIndex: 8,
    pressure: 1022,
    visibility: 15,
    airQualityIndex: 25,
    hourly: [
      { time: '00:00', tempCelsius: 18, condition: 'sunny', pop: 0, humidity: 62 },
      { time: '03:00', tempCelsius: 17, condition: 'sunny', pop: 0, humidity: 65 },
      { time: '06:00', tempCelsius: 19, condition: 'sunny', pop: 0, humidity: 60 },
      { time: '09:00', tempCelsius: 22, condition: 'sunny', pop: 0, humidity: 55 },
      { time: '12:00', tempCelsius: 25, condition: 'sunny', pop: 0, humidity: 50 },
      { time: '15:00', tempCelsius: 24, condition: 'sunny', pop: 5, humidity: 52 },
      { time: '18:00', tempCelsius: 21, condition: 'sunny', pop: 5, humidity: 58 },
      { time: '21:00', tempCelsius: 19, condition: 'sunny', pop: 0, humidity: 61 },
    ],
    weekly: [
      { day: 'Today', date: 'Oct 24', maxTempCelsius: 25, minTempCelsius: 17, condition: 'sunny', pop: 0, uvIndex: 8 },
      { day: 'Fri', date: 'Oct 25', maxTempCelsius: 27, minTempCelsius: 18, condition: 'sunny', pop: 5, uvIndex: 9 },
      { day: 'Sat', date: 'Oct 26', maxTempCelsius: 23, minTempCelsius: 16, condition: 'cloudy', pop: 25, uvIndex: 6 },
      { day: 'Sun', date: 'Oct 27', maxTempCelsius: 21, minTempCelsius: 14, condition: 'rainy', pop: 75, uvIndex: 4 },
      { day: 'Mon', date: 'Oct 28', maxTempCelsius: 22, minTempCelsius: 15, condition: 'sunny', pop: 10, uvIndex: 7 },
      { day: 'Tue', date: 'Oct 29', maxTempCelsius: 25, minTempCelsius: 17, condition: 'sunny', pop: 5, uvIndex: 8 },
      { day: 'Wed', date: 'Oct 30', maxTempCelsius: 26, minTempCelsius: 18, condition: 'sunny', pop: 0, uvIndex: 9 },
    ],
    advisorTips: [
      'High UV levels (Index 8) at Bondi Beach — apply SPF 50+ sunscreen.',
      'Splendid beach weather with gentle sea breezes.',
      'Clear evening skies ideal for stargazing.'
    ]
  },
  {
    id: 'reykjavik',
    cityName: 'Reykjavik',
    country: 'Iceland',
    tempCelsius: 4,
    feelsLikeCelsius: 0,
    condition: 'snowy',
    conditionText: 'Flurries & Snow',
    humidity: 88,
    windSpeed: 28,
    windDirection: 'NNE',
    uvIndex: 1,
    pressure: 998,
    visibility: 5,
    airQualityIndex: 15,
    hourly: [
      { time: '00:00', tempCelsius: 2, condition: 'snowy', pop: 70, humidity: 90 },
      { time: '03:00', tempCelsius: 1, condition: 'snowy', pop: 75, humidity: 92 },
      { time: '06:00', tempCelsius: 2, condition: 'snowy', pop: 65, humidity: 89 },
      { time: '09:00', tempCelsius: 3, condition: 'snowy', pop: 60, humidity: 88 },
      { time: '12:00', tempCelsius: 5, condition: 'snowy', pop: 55, humidity: 85 },
      { time: '15:00', tempCelsius: 4, condition: 'snowy', pop: 70, humidity: 86 },
      { time: '18:00', tempCelsius: 3, condition: 'snowy', pop: 75, humidity: 88 },
      { time: '21:00', tempCelsius: 2, condition: 'snowy', pop: 80, humidity: 91 },
    ],
    weekly: [
      { day: 'Today', date: 'Oct 24', maxTempCelsius: 5, minTempCelsius: 1, condition: 'snowy', pop: 75, uvIndex: 1 },
      { day: 'Fri', date: 'Oct 25', maxTempCelsius: 3, minTempCelsius: -2, condition: 'snowy', pop: 80, uvIndex: 1 },
      { day: 'Sat', date: 'Oct 26', maxTempCelsius: 2, minTempCelsius: -4, condition: 'windy', pop: 40, uvIndex: 1 },
      { day: 'Sun', date: 'Oct 27', maxTempCelsius: 4, minTempCelsius: -1, condition: 'snowy', pop: 65, uvIndex: 1 },
      { day: 'Mon', date: 'Oct 28', maxTempCelsius: 6, minTempCelsius: 2, condition: 'cloudy', pop: 30, uvIndex: 1 },
      { day: 'Tue', date: 'Oct 29', maxTempCelsius: 5, minTempCelsius: 0, condition: 'snowy', pop: 70, uvIndex: 1 },
      { day: 'Wed', date: 'Oct 30', maxTempCelsius: 3, minTempCelsius: -2, condition: 'stormy', pop: 85, uvIndex: 1 },
    ],
    advisorTips: [
      'Freezing temperatures & snow flurries — bundle up with thermal layers.',
      'Strong northerly winds (28 km/h). Drive with caution on icy roads.',
      'Aurora Borealis visibility is high tonight under clear patches!'
    ]
  }
];

export function getFallbackCityWeather(query: string): CityWeather {
  const normalized = query.trim().toLowerCase();
  const found = CITIES_WEATHER.find(
    c => c.cityName.toLowerCase().includes(normalized) || c.id.includes(normalized)
  );

  if (found) return found;

  // Generate realistic dynamic weather for any custom search
  const hash = normalized.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const temp = (hash % 25) + 5; // 5°C to 30°C
  const conditions: Array<'sunny' | 'rainy' | 'cloudy' | 'stormy' | 'windy'> = ['sunny', 'cloudy', 'rainy', 'windy', 'stormy'];
  const condition = conditions[hash % conditions.length];

  return {
    id: normalized.replace(/\s+/g, '-'),
    cityName: query.charAt(0).toUpperCase() + query.slice(1),
    country: 'Global Location',
    tempCelsius: temp,
    feelsLikeCelsius: temp + (hash % 3 - 1),
    condition,
    conditionText: condition.charAt(0).toUpperCase() + condition.slice(1) + ' Conditions',
    humidity: 50 + (hash % 35),
    windSpeed: 10 + (hash % 20),
    windDirection: ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'][hash % 8],
    uvIndex: (hash % 9) + 1,
    pressure: 1010 + (hash % 15),
    visibility: 10 + (hash % 10),
    airQualityIndex: 20 + (hash % 80),
    hourly: [
      { time: '00:00', tempCelsius: temp - 3, condition, pop: 20, humidity: 65 },
      { time: '03:00', tempCelsius: temp - 4, condition, pop: 25, humidity: 70 },
      { time: '06:00', tempCelsius: temp - 2, condition, pop: 15, humidity: 68 },
      { time: '09:00', tempCelsius: temp, condition, pop: 10, humidity: 60 },
      { time: '12:00', tempCelsius: temp + 3, condition, pop: 30, humidity: 55 },
      { time: '15:00', tempCelsius: temp + 2, condition, pop: 35, humidity: 58 },
      { time: '18:00', tempCelsius: temp, condition, pop: 20, humidity: 62 },
      { time: '21:00', tempCelsius: temp - 2, condition, pop: 15, humidity: 66 },
    ],
    weekly: [
      { day: 'Today', date: 'Oct 24', maxTempCelsius: temp + 3, minTempCelsius: temp - 3, condition, pop: 25, uvIndex: 5 },
      { day: 'Fri', date: 'Oct 25', maxTempCelsius: temp + 4, minTempCelsius: temp - 2, condition: 'sunny', pop: 10, uvIndex: 6 },
      { day: 'Sat', date: 'Oct 26', maxTempCelsius: temp - 1, minTempCelsius: temp - 5, condition: 'rainy', pop: 85, uvIndex: 2 },
      { day: 'Sun', date: 'Oct 27', maxTempCelsius: temp + 1, minTempCelsius: temp - 4, condition: 'cloudy', pop: 30, uvIndex: 4 },
      { day: 'Mon', date: 'Oct 28', maxTempCelsius: temp + 2, minTempCelsius: temp - 3, condition: 'sunny', pop: 5, uvIndex: 6 },
      { day: 'Tue', date: 'Oct 29', maxTempCelsius: temp + 5, minTempCelsius: temp - 1, condition: 'sunny', pop: 10, uvIndex: 7 },
      { day: 'Wed', date: 'Oct 30', maxTempCelsius: temp, minTempCelsius: temp - 4, condition: 'windy', pop: 40, uvIndex: 4 },
    ],
    advisorTips: [
      `Current conditions in ${query} are stable. Enjoy your day!`,
      'Check local radar if planning extended outdoor excursions.',
      'Maintain standard hydration and sun protection guidelines.'
    ]
  };
}
