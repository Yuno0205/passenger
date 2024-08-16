import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import React, { useState, useRef, useEffect } from 'react';

interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownProps {
  label: string;
  options: DropdownOption[];
  onSelect: (value: string | string[]) => void;
  type?: 'default' | 'checkbox';
  defaultValue?: string | string[];
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  onSelect,
  type = 'default',
  defaultValue,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | string[]>(
    defaultValue || (type === 'checkbox' ? [] : ''),
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value: string) => {
    if (type === 'checkbox') {
      const selectedValues = Array.isArray(selectedValue) ? selectedValue : [];
      if (selectedValues.includes(value)) {
        const newValues = selectedValues.filter((v) => v !== value);
        setSelectedValue(newValues);
        onSelect(newValues);
      } else {
        const newValues = [...selectedValues, value];
        setSelectedValue(newValues);
        onSelect(newValues);
      }
    } else {
      setSelectedValue(value);
      onSelect(value);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const renderSelectedLabel = () => {
    if (type === 'checkbox' && Array.isArray(selectedValue)) {
      return selectedValue.length > 0
        ? label + ` (${selectedValue.length})`
        : label;
    }
    return (
      options.find((option) => option.value === selectedValue)?.label || label
    );
  };

  return (
    <div
      className="relative inline-block  min-w-[180px] text-left "
      ref={dropdownRef}
    >
      <div>
        <button
          type="button"
          className="inline-flex w-full  justify-between rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-2"
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          {renderSelectedLabel()}
          <ChevronDownIcon
            className={clsx('w-5 transition', isOpen && 'rotate-180')}
          />
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="max-h-60 overflow-y-auto py-3" role="none">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                {type === 'checkbox' && (
                  <input
                    type="checkbox"
                    checked={
                      Array.isArray(selectedValue) &&
                      selectedValue.includes(option.value)
                    }
                    onChange={() => handleSelect(option.value)}
                    className="mr-2 rounded border-gray-300 text-black focus:ring-black"
                  />
                )}
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
