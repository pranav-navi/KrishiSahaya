'use client';

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export const DarkModeToggle = ({ className }: { className?: string }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Get theme from localStorage or default to light
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const initialTheme = savedTheme || 'light';
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <button
        className={cn(
          'p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors',
          className
        )}
        disabled
      >
        <span className="text-xl">🌓</span>
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors',
        'focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2',
        className
      )}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <span className="text-xl">
        {theme === 'light' ? '🌙' : '☀️'}
      </span>
    </button>
  );
};