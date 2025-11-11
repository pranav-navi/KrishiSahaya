'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface MainContentProps {
  className?: string;
  children: React.ReactNode;
}

export const MainContent = ({ className, children }: MainContentProps) => {
  return (
    <main className={cn(
      'flex-1 overflow-auto bg-gray-50 dark:bg-gray-950',
      className
    )}>
      <div className="h-full">
        {children}
      </div>
    </main>
  );
};