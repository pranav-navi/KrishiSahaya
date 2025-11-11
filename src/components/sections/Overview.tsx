'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  onClick?: () => void;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, onClick, className }) => {
  return (
    <Card
      className={cn(
        'cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105 group',
        className
      )}
      onClick={onClick}
    >
      <CardHeader className="text-center">
        <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-200 dark:group-hover:bg-green-800 transition-colors">
          <span className="text-3xl">{icon}</span>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-400">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-center">
          <span className="text-green-600 dark:text-green-400 font-medium text-sm group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors">
            Explore →
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

interface OverviewProps {
  className?: string;
  onNavigate: (section: string) => void;
}

export const Overview: React.FC<OverviewProps> = ({ className, onNavigate }) => {
  const features = [
    {
      id: 'weather',
      title: 'Weather',
      description: 'Check real-time weather and 5-day forecast',
      icon: '🌤️'
    },
    {
      id: 'crops',
      title: 'Crop Guide',
      description: 'Get expert recommendations for your crops',
      icon: '🌱'
    },
    {
      id: 'disease',
      title: 'Disease Detection',
      description: 'Identify plant diseases with AI',
      icon: '🍃'
    }
  ];

  return (
    <div className={cn('p-6 space-y-8', className)}>
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Welcome to KrishiSahaya
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Your complete agricultural assistant for smart farming decisions
        </p>
      </div>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            onClick={() => onNavigate(feature.id)}
          />
        ))}
      </div>

      {/* Quick Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">
              35+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Indian Cities Covered
            </div>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">
              8
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Major Crop Types
            </div>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400">
              AI
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Powered Analysis
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Getting Started Section */}
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center">Getting Started</CardTitle>
          <CardDescription className="text-center">
            Quick guide to make the most of KrishiSahaya
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold text-green-600 dark:text-green-400">1</span>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-gray-100">Check Weather</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Get real-time weather updates and 5-day forecasts for your location
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold text-green-600 dark:text-green-400">2</span>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-gray-100">Explore Crop Guide</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Get season-specific recommendations for your crops
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold text-green-600 dark:text-green-400">3</span>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-gray-100">Detect Diseases</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Upload leaf images to identify plant diseases instantly
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold text-green-600 dark:text-green-400">4</span>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-gray-100">Calculate Profits</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Plan your farming business with profit calculators
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};