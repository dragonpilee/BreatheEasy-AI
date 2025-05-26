import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-gray-600">
        <p className="text-sm font-semibold mb-2 text-red-600">
          Disclaimer
        </p>
        <p className="text-xs max-w-3xl mx-auto">
          This app provides predictions and insights to help you manage your asthma. 
          It is NOT a substitute for professional medical advice, diagnosis, or treatment. 
          Always seek the advice of your physician or other qualified health provider with any 
          questions you may have regarding a medical condition. Never disregard professional 
          medical advice or delay in seeking it because of something you have read or seen on this app.
        </p>
        <p className="text-xs mt-4">
          &copy; {new Date().getFullYear()} BreatheEasy AI. All rights reserved.
        </p>
        <p className="text-xs mt-2 text-gray-500">
          Developed by Alan Cyril Sunny
        </p>
      </div>
    </footer>
  );
};