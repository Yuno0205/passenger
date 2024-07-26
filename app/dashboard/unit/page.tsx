'use client';
import { useState } from 'react';
import Table from '@/components/Table';
import 'tailwindcss/tailwind.css';
import Breadcrumb from '@/components/BreadCrumb';
import Button from '@/components/Button';
import { PlusIcon } from '@heroicons/react/24/outline';
import Pagination from '@/components/Pagination';

interface Unit {
  id: number;
  name: string;
  abbreviation: string;
  type: 'Weight' | 'Volume' | 'Quantity' | 'Others';
}

const initialUnits: Unit[] = [
  { id: 1, name: 'Gram', abbreviation: 'g', type: 'Weight' },
  { id: 2, name: 'Kilogram', abbreviation: 'kg', type: 'Weight' },
  { id: 3, name: 'Milliliter', abbreviation: 'ml', type: 'Volume' },
  { id: 4, name: 'Liter', abbreviation: 'l', type: 'Volume' },
  { id: 5, name: 'Item', abbreviation: 'item', type: 'Quantity' },
  { id: 6, name: 'Pack', abbreviation: 'pack', type: 'Quantity' },
  { id: 7, name: 'Cup', abbreviation: 'cup', type: 'Others' },
];

export default function Units() {
  const [units, setUnits] = useState<Unit[]>(initialUnits);
  const [newUnit, setNewUnit] = useState({
    name: '',
    abbreviation: '',
    type: 'Weight',
  });

  const handleAddUnit = () => {
    // const newId = units.length ? units[units.length - 1].id + 1 : 1;
    // setUnits([...units, { ...newUnit, id: newId }]);
    // setNewUnit({ name: '', abbreviation: '', type: 'Weight' });
  };

  const handleDeleteUnit = (id: number) => {
    setUnits(units.filter((unit) => unit.id !== id));
  };

  const columns = [
    { header: 'ID', accessor: 'id' },
    { header: 'Unit name', accessor: 'name' },
    { header: 'Abbreviation', accessor: 'abbreviation' },
    // { header: 'Loại', accessor: 'type' },
    {
      header: 'Actions',
      accessor: 'actions',
      render: (row: Unit) => (
        <button
          onClick={() => handleDeleteUnit(row.id)}
          className="rounded bg-red-500 p-2 text-white shadow-md transition-colors duration-300 hover:bg-red-700"
        >
          Delete
        </button>
      ),
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  return (
    <div className="container mx-auto px-6 py-10">
      <div className="mb-8">
        <Breadcrumb />
      </div>

      <div className="mb-8 rounded-lg bg-gray-100 p-6 shadow-lg">
        <div className="mb-4 flex flex-col gap-4 md:flex-row">
          <input
            type="text"
            placeholder="Unit name"
            value={newUnit.name}
            onChange={(e) => setNewUnit({ ...newUnit, name: e.target.value })}
            className="w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-1/3"
          />
          <input
            type="text"
            placeholder="Abbreviation"
            value={newUnit.abbreviation}
            onChange={(e) =>
              setNewUnit({ ...newUnit, abbreviation: e.target.value })
            }
            className="w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-1/3"
          />
          {/* <select
            value={newUnit.type}
            onChange={(e) => setNewUnit({ ...newUnit, type: e.target.value })}
            className="w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-1/3"
          >
            <option value="Weight">Weight</option>
            <option value="Volume">Volume</option>
            <option value="Quantity">Quantity</option>
            <option value="Others">Others</option>
          </select> */}
          <Button
            onClick={handleAddUnit}
            className="rounded-lg bg-blue-600 p-3 text-white shadow-md transition-colors duration-300 hover:bg-blue-700"
          >
            Add <PlusIcon className="w-5" />
          </Button>
        </div>
      </div>

      <Table columns={columns} data={units} className="rounded-lg shadow-lg" />

      <Pagination
        className="mt-8"
        currentPage={currentPage}
        totalPages={10}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
