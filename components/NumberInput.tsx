
import React from 'react';

interface NumberInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  label: string;
  value: number | null;
  onChange: (value: number | null) => void;
}

export const NumberInput: React.FC<NumberInputProps> = ({ label, value, onChange, id, ...props }) => {
  const inputId = id || `number-${label.toLowerCase().replace(/\s+/g, '-')}`;
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val === '') {
      onChange(null);
    } else {
      const num = parseInt(val, 10);
      if (!isNaN(num)) {
        onChange(num);
      }
    }
  };

  return (
    <div>
      <label htmlFor={inputId} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type="number"
        id={inputId}
        value={value === null ? '' : value}
        onChange={handleChange}
        className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        {...props}
      />
    </div>
  );
};
    