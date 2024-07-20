// components/TextField.tsx
import React from 'react';
import clsx from 'clsx';

interface TextFieldProps {
  label?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  className?: string;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder = '',
  type = 'text',
  className = '',
}) => {
  return (
    <div className={clsx(className)}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={clsx(
          'mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm',
          className,
        )}
      />
    </div>
  );
};

export default TextField;
