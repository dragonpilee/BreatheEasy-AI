
import React from 'react';

export interface SelectOption {
  value: string | number;
  label: string;
}

interface SelectInputProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOption[];
}

export const SelectInput: React.FC<SelectInputProps> = ({ label, options, id, ...props }) => {
  const inputId = id || `select-${label.toLowerCase().replace(/\s+/g, '-')}`;
  
  // Explicitly destructure value and onChange from props
  // All other React.SelectHTMLAttributes will be in restHtmlProps
  const { value, onChange, ...restHtmlProps } = props;

  return (
    <div>
      <label htmlFor={inputId} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <select
        id={inputId}
        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900"
        value={value} // Pass destructured value explicitly
        onChange={onChange} // Pass destructured onChange explicitly
        {...restHtmlProps} // Spread the remaining HTML attributes
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} className="text-gray-900">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
