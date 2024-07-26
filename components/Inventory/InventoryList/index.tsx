'use client';

import { categoriesData, ingredientData, unitData } from '@/scripts/data';
import Image from 'next/image';
import Button from '@/components/Button';
import {
  AdjustmentsHorizontalIcon,
  EllipsisHorizontalIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';
import Table from '@/components/Table';
import AddProductModal from '@/components/Modal/Product';
import { useState } from 'react';
import { Ingredient } from '@/types';
import MultiOptionFilter from '@/components/MultiOptionsFilter';
import clsx from 'clsx';
import Pagination from '@/components/Pagination';

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
        <EllipsisHorizontalIcon className="w-5 cursor-pointer" />
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

  const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const currentItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className="flex flex-col overflow-x-auto p-4">
      {/* Table header */}
      <div className="mx-auto mb-5 w-full max-w-screen-xl">
        <div className="relative bg-white  dark:bg-gray-800 sm:rounded-lg">
          <div className="flex flex-col items-center justify-between space-y-3 p-4 md:flex-row md:space-x-4 md:space-y-0">
            <div className="flex w-full items-center gap-3">
              <div className="flex w-full gap-2 md:w-1/3">
                <form className="flex items-center">
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
                <div className="relative flex">
                  <Button
                    variant="primary"
                    onClick={() => setIsShowFilter(!isShowFilter)}
                  >
                    Filter <AdjustmentsHorizontalIcon className="ml-2 w-5" />
                  </Button>
                  <div
                    className={clsx(
                      'border-gray-2 absolute top-[60px] flex min-h-[100px] flex-col rounded-xl bg-white p-6 shadow-lg transition-all ',
                      isShowFilter ? 'hidden' : 'visible',
                    )}
                  >
                    <div
                      className={clsx(
                        'flex max-h-[300px] w-[400px] flex-wrap gap-2 overflow-y-auto',
                      )}
                    >
                      <MultiOptionFilter
                        label="Categories"
                        options={categoriesData.map((cate) => ({
                          label: cate.name,
                          value: cate.name,
                        }))}
                        selectedOptions={selectedSizes}
                        onChange={setSelectedSizes}
                        className="mb-4"
                      />

                      <MultiOptionFilter
                        label="Unit"
                        options={unitData.map((unit) => ({
                          label: unit.unitName,
                          value: unit.unitName,
                        }))}
                        selectedOptions={selectedSizes}
                        onChange={setSelectedSizes}
                        className="mb-4"
                      />

                      <MultiOptionFilter
                        label="Stock Status"
                        options={[
                          { label: 'In Stock', value: 'In Stock' },
                          { label: 'Out of Stock', value: 'Out of Stock' },
                          { label: 'Low Stock', value: 'Low Stock' },
                        ]}
                        selectedOptions={selectedSizes}
                        onChange={setSelectedSizes}
                        className="mb-4"
                      />
                    </div>
                    <div className="flex justify-between p-2">
                      <Button
                        className="border-2 border-black bg-white text-black"
                        style={{ color: 'black' }}
                      >
                        Clear
                      </Button>
                      <Button>Apply</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-shrink-0 flex-col items-stretch justify-end space-y-2 md:w-auto md:flex-row md:items-center md:space-x-3 md:space-y-0">
              <Button
                onClick={() => {
                  setIsModalOpen(true);
                }}
                className="rounded-md text-sm text-white"
              >
                <PlusIcon className="mr-2 w-5" />
                Add ingredient
              </Button>
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
