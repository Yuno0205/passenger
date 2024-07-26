import React, { useState } from 'react';
import SelectionSearch from '../SelectionSearch';
import TextField from '../TextBox';
import { ingredientData } from '@/scripts/data';
import Image from 'next/image';
import { XMarkIcon } from '@heroicons/react/24/outline';

type TableRowProps = {
  id: number;
  onDelete: (id: number) => void;
};

const TableRow = ({ id, onDelete }: TableRowProps) => {
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const filteredData = ingredientData.filter((item) => item.stock > 0);

  //   const handleSelection = (itemName: string) => {
  //     const item = data.find(
  //       (ingredient) => ingredient.name === itemName && ingredient.stock > 0,
  //     );
  //     setSelectedItem(item);
  //   };

  const handleSelection = (itemName: string) => {
    const item = filteredData.find(
      (ingredient) => ingredient.name === itemName,
    );
    setSelectedItem(item);
  };

  return (
    <div className="flex items-center border-b border-gray-200">
      <div className="flex w-1/3 items-center justify-center border-r-2 p-2">
        {selectedItem && (
          <Image
            src={selectedItem ? selectedItem.image : '/path/to/image'}
            alt="item"
            width={70}
            height={70}
            className="mr-2 h-12 w-12 rounded-xl object-cover"
          />
        )}
        <SelectionSearch
          items={filteredData.map((ingredient) => ingredient.name)}
          onSelect={handleSelection}
          placeholder="Type to select your item"
        />
      </div>

      <div className="w-1/6 border-r-2 p-2 text-center">
        <span className="font-bold">
          {selectedItem ? selectedItem.unit : ''}
        </span>
      </div>
      <div className="w-1/6 border-r-2 p-2 text-center">
        <span>{selectedItem && selectedItem.stock}</span>
      </div>
      <div className="flex w-1/6 items-center border-r-2 p-2 text-center">
        <TextField className="mb-0" />
      </div>
      <div className="flex w-1/6 items-center justify-center p-2">
        <button onClick={() => onDelete(id)} className="text-red-500">
          <XMarkIcon className="w-5" />
        </button>
      </div>
    </div>
  );
};

export default TableRow;
