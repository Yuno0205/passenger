import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DropdownProps {
  options: string[];
  onSelect: (option: string) => void;
  className?: string;
  disable?: boolean;
  placeholder?: string;
  defaultSelected?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onSelect,
  className = '',
  disable = false,
  placeholder = 'Select an option',
  defaultSelected = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(
    defaultSelected || null,
  );

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div
      className={clsx(
        'relative inline-block min-w-[200px] text-left',
        className,
      )}
    >
      <button
        type="button"
        className="flex w-full justify-between rounded-xl border border-black bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none disabled:opacity-50"
        onClick={() => !disable && setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        disabled={disable}
      >
        {selectedOption || placeholder}
        {isOpen ? (
          <ChevronUpIcon className="w-5" />
        ) : (
          <ChevronDownIcon className="w-5" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div className="max-h-[250px] overflow-y-scroll py-1">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelect(option)}
                  className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                  role="option"
                >
                  {option}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
