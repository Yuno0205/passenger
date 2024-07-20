// components/Dropdown.tsx
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import React, { useState } from 'react';

interface DropdownProps {
  options: string[];
  onSelect: (option: string) => void;
  className?: string;
  disable?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onSelect,
  className = '',
  disable,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div
      className={clsx(
        `relative inline-block min-w-[200px]  text-left `,
        className,
      )}
    >
      <button
        type="button"
        className="flex w-full justify-between rounded-xl border border-black bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption || <></>}
        {isOpen ? (
          <ChevronUpIcon className="w-5" />
        ) : (
          <ChevronDownIcon className="w-5" />
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="max-h-[250px] overflow-y-scroll py-1">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleSelect(option)}
                className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
