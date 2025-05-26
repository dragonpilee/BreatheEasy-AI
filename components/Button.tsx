
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
}

export const Button: React.FC<ButtonProps> = ({ children, className = '', variant = 'primary', ...props }) => {
  const baseStyle = "font-medium py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150 disabled:opacity-50 disabled:cursor-not-allowed";
  
  let variantStyle = '';
  switch (variant) {
    case 'primary':
      variantStyle = 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500';
      break;
    case 'secondary':
      variantStyle = 'bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-400';
      break;
    case 'danger':
      variantStyle = 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500';
      break;
  }

  return (
    <button
      type="button"
      className={`${baseStyle} ${variantStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
    