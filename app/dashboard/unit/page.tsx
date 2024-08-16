'use client';
import { useState } from 'react';
import Table from '@/components/Table';
import 'tailwindcss/tailwind.css';
import Breadcrumb from '@/components/BreadCrumb';
import Button from '@/components/Button';
import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/24/outline';
import Pagination from '@/components/Pagination';
import ActionDropdown from '@/components/ActionDropdown';
import Dropdown from '@/components/Dropdown';

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
        <ActionDropdown onAdjust={() => {}} onDelete={() => {}} />
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

      <div className="mx-auto mb-5 w-full max-w-screen-xl">
        <div className="relative bg-white  dark:bg-gray-800 sm:rounded-lg">
          <div className="flex flex-col items-center justify-between space-y-3 p-4 md:flex-row md:space-x-4 md:space-y-0">
            <div className="flex w-full items-center gap-3">
              <div className="flex w-full gap-2">
                <form className="flex min-w-[250px] items-center">
                  <label htmlFor="simple-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <MagnifyingGlassIcon className="w-5" />
                    </div>
                    <input
                      type="text"
                      id="simple-search"
                      className="focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                      placeholder="Search... "
                      required
                    />
                  </div>
                </form>

                <Dropdown
                  type="checkbox"
                  label="Abbreviation"
                  onSelect={(value) => console.log(value)}
                  options={[
                    { label: 'kg', value: 'kg' },
                    { label: 'g', value: 'g' },
                    { label: 'ml', value: 'ml' },
                    { label: 'l', value: 'l' },
                    { label: 'item', value: 'item' },
                    { label: 'pack', value: 'pack' },
                    { label: 'cup', value: 'cup' },
                  ]}
                />
              </div>
            </div>
            <div className="flex w-full flex-shrink-0 flex-col items-stretch justify-end space-y-2 md:w-auto md:flex-row md:items-center md:space-x-3 md:space-y-0">
              <Button
                // onClick={() => setIsAddUserModalOpen(true)}
                className="flex rounded-md bg-black px-5 py-2.5 text-sm text-white"
              >
                <PlusIcon className="mr-2 w-3" />
                Add new
              </Button>
            </div>
          </div>
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
