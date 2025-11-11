'use client';

import React, { useState, useRef } from 'react';
import { cn } from '@/lib/utils';

interface UserProfileProps {
  className?: string;
}

export const UserProfile = ({ className }: UserProfileProps) => {
  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const [userName] = useState('Farmer');
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }

      // Check file type
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
      if (!validTypes.includes(file.type)) {
        alert('Please upload a valid image file (JPG, PNG, or WebP)');
        return;
      }

      setIsUploading(true);

      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setProfilePicture(result);
        localStorage.setItem('userProfilePicture', result);
        setIsUploading(false);
      };
      reader.onerror = () => {
        alert('Failed to upload image');
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfileClick = () => {
    fileInputRef.current?.click();
  };

  // Load profile picture from localStorage on mount
  React.useEffect(() => {
    const savedPicture = localStorage.getItem('userProfilePicture');
    if (savedPicture) {
      setProfilePicture(savedPicture);
    }
  }, []);

  return (
    <div className={cn('flex flex-col items-center p-6 space-y-4', className)}>
      <div className="relative group">
        <button
          onClick={handleProfileClick}
          className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-gray-300 dark:border-gray-600 hover:border-green-500 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          disabled={isUploading}
        >
          {profilePicture ? (
            <img
              src={profilePicture}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <span className="text-2xl">👨‍🌾</span>
            </div>
          )}

          {isUploading && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
            </div>
          )}

          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
            <span className="text-white text-sm">📷</span>
          </div>
        </button>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,image/jpg,image/png,image/webp"
          onChange={handleFileUpload}
          className="hidden"
        />
      </div>

      <div className="text-center">
        <h3 className="font-semibold text-gray-900 dark:text-gray-100">
          {userName}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Welcome back!
        </p>
      </div>
    </div>
  );
};