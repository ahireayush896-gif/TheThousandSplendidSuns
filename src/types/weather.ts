// Version 3.0 on main
export enum WeatherAlertLevel {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL'
}

export interface WeatherAlert {
  id: string;
  level: WeatherAlertLevel;
  message: string;
}

export type WeatherCondition = 'sunny' | 'rainy' | 'cloudy' | 'stormy' | 'snowy' | 'windy';

export interface HourlyForecastData {
  time: string;
  tempCelsius: number;
  condition: WeatherCondition;
  pop: number; // probability of precipitation %
  humidity: number;
}

export interface DailyForecastData {
  day: string;
  date: string;
  maxTempCelsius: number;
  minTempCelsius: number;
  condition: WeatherCondition;
  pop: number;
  uvIndex: number;
}

export interface CityWeather {
  id: string;
  cityName: string;
  country: string;
  tempCelsius: number;
  feelsLikeCelsius: number;
  condition: WeatherCondition;
  conditionText: string;
  humidity: number;
  windSpeed: number; // km/h
  windDirection: string; // e.g., 'NE', 'SW'
  uvIndex: number;
  pressure: number; // hPa
  visibility: number; // km
  airQualityIndex: number; // AQI 1-500
  hourly: HourlyForecastData[];
  weekly: DailyForecastData[];
  advisorTips: string[];
}
