
import React from 'react';
import { LungsIcon } from './Icons'; // Assuming a LungsIcon is created

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <LungsIcon className="h-10 w-10 text-indigo-600" />
            <h1 className="ml-3 text-3xl font-bold text-gray-800 tracking-tight">
              BreatheEasy <span className="text-indigo-600">AI</span>
            </h1>
          </div>
          {/* Navigation links removed from here */}
        </div>
      </div>
    </header>
  );
};
