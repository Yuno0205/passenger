import { useState } from 'react';

const SwitchToggle = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleSwitch = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="flex items-center">
      <label htmlFor="toggle" className="flex cursor-pointer items-center">
        <div className="relative">
          <input
            type="checkbox"
            id="toggle"
            className="sr-only"
            checked={isActive}
            onChange={toggleSwitch}
          />
          <div
            className={`${isActive ? 'bg-blue-500' : 'bg-gray-400'} relative h-7 w-[50px] rounded-full`}
          >
            <div
              className={`${isActive ? 'translate-x-5' : 'translate-x-0'} absolute left-1 top-1 h-5 w-5 transform rounded-full bg-white shadow-md transition`}
            ></div>
          </div>
        </div>
      </label>
    </div>
  );
};

export default SwitchToggle;
