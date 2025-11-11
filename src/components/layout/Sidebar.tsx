'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { UserProfile } from './UserProfile';
import { DarkModeToggle } from '../features/DarkModeToggle';

interface SidebarProps {
  className?: string;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

interface NavItem {
  id: string;
  label: string;
  icon: string;
  isPremium?: boolean;
}

const navigationItems: NavItem[] = [
  { id: 'overview', label: 'Overview Dashboard', icon: '🏠' },
  { id: 'weather', label: 'Weather Forecast', icon: '🌤️' },
  { id: 'crops', label: 'Crop Guide', icon: '🌱' },
  { id: 'disease', label: 'Disease Detection', icon: '🍃' },
  { id: 'news', label: 'Agricultural News', icon: '📰' },
  { id: 'calculator', label: 'Profit Calculator', icon: '💰' },
  { id: 'market', label: 'Live Market Prices', icon: '📈', isPremium: true },
  { id: 'yield', label: 'AI Yield Prediction', icon: '🎯', isPremium: true },
  { id: 'assistant', label: 'AI Virtual Assistant', icon: '🤖', isPremium: true },
  { id: 'report', label: 'Generate Crop Report', icon: '📄', isPremium: true },
];

export const Sidebar = ({ className, activeSection, onSectionChange }: SidebarProps) => {
  const handleNavClick = (sectionId: string) => {
    onSectionChange(sectionId);
  };

  const handleLogout = () => {
    // Handle logout logic here
    if (confirm('Are you sure you want to logout?')) {
      // Clear user data
      localStorage.removeItem('userProfilePicture');
      localStorage.removeItem('authToken');
      // Reload page or redirect to login
      window.location.reload();
    }
  };

  return (
    <div className={cn(
      'w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 flex flex-col h-full',
      className
    )}>
      {/* User Profile Section */}
      <UserProfile />

      {/* Navigation Items */}
      <nav className="flex-1 px-4 pb-4 space-y-1 overflow-y-auto">
        {navigationItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={cn(
              'w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors',
              'text-left focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1',
              activeSection === item.id
                ? 'bg-green-500 text-white'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            )}
          >
            <span className="mr-3 text-lg">{item.icon}</span>
            <span className="flex-1">{item.label}</span>
            {item.isPremium && (
              <span className="text-xs bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full font-medium">
                PRO
              </span>
            )}
          </button>
        ))}

        {/* Dark Mode Toggle */}
        <div className="pt-4 pb-2">
          <div className="flex items-center px-3 py-2">
            <span className="mr-3 text-lg">🌓</span>
            <span className="flex-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              Dark Mode
            </span>
            <DarkModeToggle />
          </div>
        </div>
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={handleLogout}
          className="w-full flex items-center px-3 py-2 text-sm font-medium text-red-600 dark:text-red-400 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1"
        >
          <span className="mr-3 text-lg">🚪</span>
          Logout
        </button>
      </div>
    </div>
  );
};