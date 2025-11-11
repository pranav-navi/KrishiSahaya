'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
  title: string;
  onMenuToggle: () => void;
  isMobile: boolean;
}

export const Header = ({ className, title, onMenuToggle, isMobile }: HeaderProps) => {
  return (
    <header className={cn(
      'h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 flex items-center px-4 gap-4',
      className
    )}>
      {/* Mobile Menu Toggle */}
      {isMobile && (
        <button
          onClick={onMenuToggle}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-gray-700 dark:text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      )}

      {/* Page Title */}
      <div className="flex-1">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          {title}
        </h1>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-2">
        {/* Add any header actions here if needed */}
        <div className="w-8 h-8"></div> {/* Placeholder for balance */}
      </div>
    </header>
  );
};