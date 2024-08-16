'use client';

import AddProductModal from '@/components/Modal/Product';
import Table from '@/components/Table';
import { categoriesData, unitData } from '@/scripts/data';
import { Ingredient } from '@/types';
import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useState } from 'react';

import ActionDropdown from '@/components/ActionDropdown';
import Dropdown from '@/components/Dropdown';
import Pagination from '@/components/Pagination';
import Link from 'next/link';

interface InventoryListProps {
  inventory: Ingredient[];
}

const InventoryList = ({ inventory }: InventoryListProps) => {
  const columns = [
    {
      header: 'Products',
      accessor: 'ingredient_name',
      render: (row: any) => (
        <div className="flex items-center">
          <Image
            src={row.image}
            alt={row.name}
            width={50}
            height={50}
            className="mr-3 h-[50px] rounded-xl object-cover"
          />
          <span>{row.name}</span>
        </div>
      ),
    },
    { header: 'Category', accessor: 'category' },
    { header: 'Stock', accessor: 'stock' },
    { header: 'Unit', accessor: 'unit' },
    {
      header: 'Status',
      accessor: 'status',
      render: (row: any) => (
        <div>
          {row.status === 'In Stock' ? (
            <div className="flex items-center gap-2 text-green-500">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              {row.status}
            </div>
          ) : row.status == 'Out of stock' ? (
            <div className="flex items-center gap-2 text-red-500">
              <div className="h-2 w-2 rounded-full bg-red-500"></div>
              {row.status}
            </div>
          ) : (
            <div className="flex items-center gap-2 text-orange-500">
              <div className="h-2 w-2 rounded-full bg-orange-500"></div>
              {row.status}
            </div>
          )}
        </div>
      ),
    },
    {
      header: 'Action',
      accessor: 'action',
      render: (row: any) => (
        // <div className="relative">
        //   <EllipsisVerticalIcon className="w-5 cursor-pointer" />
        //   <div className="absolute right-0 top-[30px] w-full bg-red-500">
        //     Ha
        //   </div>
        // </div>
        <ActionDropdown onAdjust={() => {}} onDelete={() => {}} />
      ),
    },
  ];

  const data = [...inventory];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isShowFilter, setIsShowFilter] = useState(false);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const items = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const currentItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  console.log(isShowFilter);

  return (
    <div className="flex flex-col overflow-x-auto p-4">
      {/* Table header */}
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
                      placeholder="Search for inventory"
                      required
                    />
                  </div>
                </form>

                <Dropdown
                  type="checkbox"
                  label="Categories"
                  onSelect={(value) => console.log(value)}
                  options={categoriesData.map((cate) => ({
                    label: cate.name,
                    value: cate.name,
                  }))}
                />

                <Dropdown
                  type="checkbox"
                  label="Unit"
                  onSelect={(value) => console.log(value)}
                  options={unitData.map((unit) => ({
                    label: unit.unitName,
                    value: unit.unitName,
                  }))}
                />

                <Dropdown
                  label="Status"
                  onSelect={(value) => console.log(value)}
                  options={[
                    { label: 'In Stock', value: 'In Stock' },
                    { label: 'Out of stock', value: 'Out of stock' },
                    { label: 'Low on stock', value: 'Low on stock' },
                  ]}
                />
              </div>
            </div>
            <div className="flex w-full flex-shrink-0 flex-col items-stretch justify-end space-y-2 md:w-auto md:flex-row md:items-center md:space-x-3 md:space-y-0">
              <Link
                href={'/dashboard/inventory/add'}
                className="flex rounded-md bg-black px-5 py-2.5 text-sm text-white"
              >
                <PlusIcon className="mr-2 w-3" />
                Add ingredient
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Table columns={columns} data={data} className="my-4 rounded-lg" />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      <AddProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default InventoryList;
