import React from 'react';

type SimpleToggleProps = {
  checked?: boolean;
  disabled?: boolean;
  size?: 'small' | 'large';
  onChange?: (checked: boolean) => void;
};

const SimpleToggle: React.FC<SimpleToggleProps> = ({
  checked,
  disabled,
  size = 'small',
  onChange,
}) => {
  const _height = size === 'large' ? 'h-6' : 'h-4';
  const _width = size === 'large' ? 'w-10' : 'w-7';
  const _side = size === 'large' ? 'w-5 h-5' : 'w-3 h-3';
  const _translate = size === 'large' ? 'translate-x-4' : 'translate-x-2';

  const handleToggle = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  return (
    <label
      className={`flex items-center ${disabled ? 'pointer-events-none opacity-50' : ''}`}
      onClick={handleToggle}
    >
      <span
        className={`relative inline-block ${_width} ${_height} 
                    ${checked ? 'bg-blue-500' : 'bg-gray-300'} 
                    cursor-pointer rounded-full transition-colors duration-150 ease-linear`}
        onClick={handleToggle}
      >
        <span
          className={`absolute bottom-0.5 left-0.5 top-0.5 
                        ${_side} rounded-full bg-white transition-transform duration-150 ease-linear 
                        ${checked ? _translate : ''}`}
        ></span>
      </span>
    </label>
  );
};

export default SimpleToggle;
