'use client';

import { useState } from 'react';
import { lusitana } from '@/app/ui/fonts';
import ShiftItem from '@/components/TimeFrame';
import SimpleToggle from '@/components/Toogle';
import { PlusIcon } from '@heroicons/react/24/outline';

const Schedule = () => {
  const [shiftItems, setShiftItems] = useState<number[]>([]);

  const handleAddShiftItem = () => {
    setShiftItems([...shiftItems, shiftItems.length]);
  };

  const handleRemoveShiftItem = (id: number) => {
    setShiftItems(shiftItems.filter((item) => item !== id));
  };

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Schedule</h1>
      </div>

      <div className="grid grid-cols-2 items-start gap-4 p-4">
        <div className="col-span-1 space-y-4">
          <div className="flex flex-col gap-4 rounded-xl border border-solid border-gray-300 py-4 pl-6 pr-5">
            <div className="flex justify-between">
              <h3 className="text-medium font-medium">Sunday</h3>

              <label className="flex cursor-pointer items-center">
                <input type="checkbox" value="" className="peer sr-only" />
                <span className="mr-2 ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Available
                </span>
                <SimpleToggle size="large" onChange={() => {}} />
              </label>
            </div>
            <div className="flex flex-col gap-4">
              {shiftItems.map((item) => (
                <ShiftItem
                  key={item}
                  id={item}
                  removeShiftItem={handleRemoveShiftItem}
                />
              ))}
              <div
                onClick={handleAddShiftItem}
                className="flex w-[150px] items-center justify-center gap-2 rounded-lg border-[1.5px] border-dashed border-gray-400 p-2 text-gray-500 hover:cursor-pointer hover:border-black disabled:opacity-50"
              >
                <PlusIcon width={10} /> Add more
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
