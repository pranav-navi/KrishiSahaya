'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui';
import { Button, Select } from '@/components/ui';
import { LoadingSpinner } from '@/components/ui';
import { cityOptions } from '@/data';
import { cn } from '@/lib/utils';

interface WeatherData {
  location: string;
  current: {
    temperature: number;
    condition: string;
    humidity: number;
    windSpeed: number;
    icon: string;
  };
  forecast: Array<{
    date: string;
    high: number;
    low: number;
    condition: string;
    icon: string;
    precipitation: number;
  }>;
}

const mockWeatherData: WeatherData = {
  location: 'Delhi',
  current: {
    temperature: 32,
    condition: 'Partly Cloudy',
    humidity: 65,
    windSpeed: 12,
    icon: '⛅'
  },
  forecast: [
    {
      date: 'Monday',
      high: 34,
      low: 26,
      condition: 'Sunny',
      icon: '☀️',
      precipitation: 0
    },
    {
      date: 'Tuesday',
      high: 33,
      low: 25,
      condition: 'Partly Cloudy',
      icon: '⛅',
      precipitation: 10
    },
    {
      date: 'Wednesday',
      high: 31,
      low: 24,
      condition: 'Light Rain',
      icon: '🌦️',
      precipitation: 60
    },
    {
      date: 'Thursday',
      high: 32,
      low: 25,
      condition: 'Cloudy',
      icon: '☁️',
      precipitation: 20
    },
    {
      date: 'Friday',
      high: 35,
      low: 27,
      condition: 'Sunny',
      icon: '☀️',
      precipitation: 5
    }
  ]
};

interface WeatherForecastProps {
  className?: string;
}

export const WeatherForecast: React.FC<WeatherForecastProps> = ({ className }) => {
  const [selectedCity, setSelectedCity] = useState('delhi');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGetWeather = async () => {
    setLoading(true);
    setError(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // In a real implementation, this would call a weather API
      const cityName = cityOptions.find(c => c.value === selectedCity)?.label || 'Unknown';
      setWeatherData({
        ...mockWeatherData,
        location: cityName
      });
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={cn('p-6 space-y-6', className)}>
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Weather Forecast
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Get real-time weather updates and 5-day forecast for your location
        </p>
      </div>

      {/* Location Selector */}
      <Card className="max-w-2xl mx-auto">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <Select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              options={cityOptions}
              label="Select City"
            />

            <Button
              onClick={handleGetWeather}
              loading={loading}
              className="w-full"
              size="lg"
            >
              Get Weather
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Error Message */}
      {error && (
        <Card className="max-w-2xl mx-auto border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20">
          <CardContent className="pt-6">
            <div className="text-red-600 dark:text-red-400 text-center">
              {error}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Loading State */}
      {loading && (
        <Card className="max-w-4xl mx-auto">
          <CardContent className="py-12">
            <div className="flex flex-col items-center space-y-4">
              <LoadingSpinner size="lg" />
              <p className="text-gray-600 dark:text-gray-400">
                Fetching weather data...
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Weather Display */}
      {weatherData && !loading && (
        <div className="space-y-6">
          {/* Current Weather */}
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center">
                Current Weather - {weatherData.location}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-6xl mb-4">{weatherData.current.icon}</div>
                  <div className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                    {weatherData.current.temperature}°C
                  </div>
                  <div className="text-lg text-gray-600 dark:text-gray-400">
                    {weatherData.current.condition}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Humidity</span>
                    <span className="font-medium text-gray-900 dark:text-gray-100">
                      {weatherData.current.humidity}%
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Wind Speed</span>
                    <span className="font-medium text-gray-900 dark:text-gray-100">
                      {weatherData.current.windSpeed} km/h
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Feels Like</span>
                    <span className="font-medium text-gray-900 dark:text-gray-100">
                      {weatherData.current.temperature - 2}°C
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">UV Index</span>
                    <span className="font-medium text-gray-900 dark:text-gray-100">
                      6 (High)
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 5-Day Forecast */}
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center">5-Day Forecast</CardTitle>
              <CardDescription className="text-center">
                Plan your farming activities with confidence
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
                {weatherData.forecast.map((day, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <div className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                      {day.date}
                    </div>
                    <div className="text-3xl mb-2">{day.icon}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {day.condition}
                    </div>
                    <div className="flex justify-center space-x-2 text-sm">
                      <span className="font-medium text-gray-900 dark:text-gray-100">
                        {day.high}°
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">
                        {day.low}°
                      </span>
                    </div>
                    {day.precipitation > 0 && (
                      <div className="text-xs text-blue-600 dark:text-blue-400 mt-2">
                        💧 {day.precipitation}%
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Farming Recommendations */}
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle>Farming Recommendations</CardTitle>
              <CardDescription>
                Based on current weather conditions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">💧</span>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-gray-100">
                      Irrigation
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Good day for irrigation. Expected light rain on Wednesday may reduce watering needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🌱</span>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-gray-100">
                      Planting
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Favorable conditions for planting heat-resistant crops.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🚜</span>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-gray-100">
                      Field Work
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Excellent conditions for field operations. Avoid Wednesday due to expected rain.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🌾</span>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-gray-100">
                      Harvesting
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Good conditions for harvesting. Dry weather expected most of the week.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};