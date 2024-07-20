import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useState, useRef } from 'react';

interface SelectionSearchProps {
  items: string[];
  placeholder?: string;
  className?: string;
  onSelect: (item: string) => void; // Thêm prop onSelect
}

const SelectionSearch: React.FC<SelectionSearchProps> = ({
  items,
  placeholder = 'Filter items...',
  className = '',
  onSelect, // Nhận prop onSelect
}) => {
  const [filter, setFilter] = useState<string>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(filter.toLowerCase()),
  );

  const handleItemClick = (item: string) => {
    setFilter(item);
    setIsFocused(false);
    if (inputRef.current) {
      inputRef.current.blur();
    }
    onSelect(item); // Gọi hàm onSelect khi một item được chọn
  };

  return (
    <div
      className={`${className} relative w-full`}
      onBlur={() => setIsFocused(false)}
      tabIndex={0}
    >
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          onFocus={() => setIsFocused(true)}
          className="w-full rounded-md p-2 pr-10 shadow focus:outline-none"
        />
        {/* <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <ChevronDownIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </div> */}
      </div>

      {isFocused && (
        <ul className="absolute z-10 mt-3 max-h-[300px] w-full list-inside list-disc space-y-2 overflow-y-scroll rounded-md bg-white shadow">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer p-2 text-gray-700 hover:bg-gray-200"
                onMouseDown={() => handleItemClick(item)}
              >
                {item}
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-500">No items found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SelectionSearch;
