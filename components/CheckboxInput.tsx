
import React from 'react';

interface CheckboxInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const CheckboxInput: React.FC<CheckboxInputProps> = ({ label, id, ...props }) => {
  const inputId = id || `checkbox-${label.toLowerCase().replace(/\s+/g, '-')}`;
  return (
    <div className="flex items-center">
      <input
        id={inputId}
        type="checkbox"
        className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
        {...props}
      />
      <label htmlFor={inputId} className="ml-2 block text-sm text-gray-900">
        {label}
      </label>
    </div>
  );
};
    