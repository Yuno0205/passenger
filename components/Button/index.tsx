import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  variant = 'primary',
  disabled = false,
  ...rest
}) => {
  const baseStyles =
    'flex h-10 items-center rounded-lg px-4 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';

  const getVariantStyles = () => {
    if (disabled) {
      return variant === 'primary'
        ? 'cursor-not-allowed bg-gray-500 text-gray-200'
        : 'cursor-not-allowed border border-gray-400 bg-white text-gray-400';
    } else {
      return variant === 'primary'
        ? 'bg-black text-white hover:bg-gray-800 focus-visible:outline-gray-500 active:bg-gray-900'
        : 'border border-black bg-white text-black hover:bg-gray-100 focus-visible:outline-gray-500 active:bg-gray-200';
    }
  };

  return (
    <button
      {...rest}
      className={twMerge(baseStyles, getVariantStyles(), className)}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
