import React, { useState } from 'react';
import clsx from 'clsx';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface Option {
  label: string;
  value: string;
  count?: number;
  color?: string; // Optional color for the label dot
}

interface MultiOptionFilterProps {
  label: string;
  options: Option[];
  selectedOptions: string[];
  onChange: (selected: string[]) => void;
  className?: string;
}

const MultiOptionFilter: React.FC<MultiOptionFilterProps> = ({
  label,
  options,
  selectedOptions,
  onChange,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleSelect = (value: string) => {
    if (selectedOptions.includes(value)) {
      onChange(selectedOptions.filter(option => option !== value));
    } else {
      onChange([...selectedOptions, value]);
    }
  };

  return (
    <div className={clsx('border-2 border-gray-300 rounded-md p-2 shadow-sm w-full', className)}>
      <div
        className="flex justify-between items-center cursor-pointer mb-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        <label className="block text-sm font-medium text-gray-700">{label}</label>
       <ChevronDownIcon  className={clsx('h-5 w-5 transition-transform transform', {
            'rotate-180': isOpen,
          })} />
      </div>
      {isOpen && (
        <div className="flex flex-wrap">
          {options.map(option => (
            <div key={option.value} className="flex items-center mb-1 w-1/3">
             <div className='flex'>
                  <input
                    type="checkbox"
                    id={option.value}
                    name={option.value}
                    value={option.value}
                    checked={selectedOptions.includes(option.value)}
                    onChange={() => handleSelect(option.value)}
                    className="mr-2 h-4 w-4 text-indigo-600 border-2 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <label htmlFor={option.value} className="flex items-center text-gray-700">
                    {option.color && (
                      <span
                        className="inline-block w-2 h-2 rounded-full mr-2"
                        style={{ backgroundColor: option.color }}
                      />
                    )}
                    {option.label} {option.count && `(${option.count})`}
                  </label>
             </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiOptionFilter;
