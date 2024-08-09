'use client';
import { useState } from 'react';
import TableRow from '@/components/TableRow';
import { CheckIcon, PlusIcon } from '@heroicons/react/24/outline';
import Button from '@/components/Button';
import Breadcrumb from '@/components/BreadCrumb';

const CheckingInventory = () => {
  const [rows, setRows] = useState<{ id: number }[]>([{ id: 0 }]);

  const addRow = () => {
    setRows([...rows, { id: rows.length }]);
  };

  const deleteRow = (id: number) => {
    if (rows.length > 1) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  return (
    <div className="container mx-auto w-full p-4">
      <div className="w-full p-4">
        <div className="mb-16 flex w-full items-center justify-between">
          <Breadcrumb />
        </div>
        <div className="mt-4 flex border-b-2 border-gray-200 pb-2">
          <div className="w-2/6 border-x-2 text-center text-sm">INGREDIENT</div>
          <div className="w-1/6 border-r-2 text-center text-sm">UNIT</div>
          <div className="w-1/6 border-r-2 text-center text-sm">
            STOCK IN INVENTORY
          </div>
          <div className="w-1/6 border-r-2 text-center text-sm">
            STOCK ADJUST
          </div>
          {/* <div className="w-1/6"></div> */}
        </div>
        {rows.map((row) => (
          <TableRow key={row.id} id={row.id} onDelete={deleteRow} />
        ))}
      </div>
      <div className="flex justify-center">
        <Button
          onClick={addRow}
          className="flex h-10 w-20 cursor-pointer items-center justify-center rounded-full bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          <PlusIcon className="w-5" />
        </Button>
      </div>
      <div className="mt-5 flex w-full flex-col gap-3">
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Your message
        </label>
        <textarea
          id="message"
          rows={4}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Write your note here..."
        />

        <div className="mt-5 flex justify-end">
          <Button
            onClick={() => {}}
            className="text-md  rounded-md p-3 text-white"
          >
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckingInventory;
