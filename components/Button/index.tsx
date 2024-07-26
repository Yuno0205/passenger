import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
}

export default function Button({
  children,
  className,
  variant = 'primary',
  disabled = false,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'flex h-10 items-center rounded-lg px-4 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
        {
          'bg-black text-white hover:bg-gray-800 focus-visible:outline-gray-500 active:bg-gray-900':
            variant === 'primary' && !disabled,
          'border border-black bg-white text-black hover:bg-gray-100 focus-visible:outline-gray-500 active:bg-gray-200':
            variant === 'outline' && !disabled,
          'cursor-not-allowed bg-gray-500 text-gray-200':
            variant === 'primary' && disabled,
          'cursor-not-allowed border border-gray-400 bg-white text-gray-400':
            variant === 'outline' && disabled,
        },
        className,
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
