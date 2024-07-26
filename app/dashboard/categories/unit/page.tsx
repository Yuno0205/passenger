'use client';

import { useState } from 'react';
import { categoriesData, ingredientData } from '@/scripts/data';
import Image from 'next/image';
import Button from '@/components/Button';
import { PlusIcon, MagnifyingGlassIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import Table from '@/components/Table';
// import AddCategoryModal from '@/components/Modal/AddCategoryModal';
import Pagination from '@/components/Pagination';
import MultiOptionFilter from '@/components/MultiOptionsFilter';

const CategoriesManagement = () => {
  const columns = [
    {
      header: 'Category',
      accessor: 'name',
      render: (row: any) => (
        <div className="flex items-center">
          <Image
            src={row.image || '/placeholder-image.png'}
            alt={row.name}
            width={50}
            height={50}
            className="mr-3 h-[50px] rounded-xl object-cover"
          />
          <span>{row.name}</span>
        </div>
      ),
    },
    { header: 'Description', accessor: 'description' },
    {
      header: 'Products',
      accessor: 'products',
      render: (row: any) => (
        <span>{row.items.length}</span>
      ),
    },
    {
      header: 'Action',
      accessor: 'action',
      render: (row: any) => (
        <div className="flex gap-2">
          <Button className="flex items-center p-1 text-sm gap-2" onClick={() => handleEdit(row)}>
            <PencilIcon className="w-5 mr-2" />
            Edit
          </Button>
          <Button style={{ color: 'red' }} className="flex items-center p-1 text-sm text-red-500 bg-white border-2 border-red-500" onClick={() => handleDelete(row)}>
            <TrashIcon className="w-5 mr-2" />
            Delete
          </Button>

         

        </div>
      ),
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredData = categoriesData.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleEdit = (category: any) => {
    // Handle edit logic
    console.log('Edit:', category);
  };

  const handleDelete = (category: any) => {
    // Handle delete logic
    console.log('Delete:', category);
  };

  return (
    <div className="flex flex-col p-4">
      {/* Page header */}
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-bold">Categories</h1>
        <Button
          onClick={() => setIsModalOpen(true)}
          className="rounded-md text-sm text-white"
        >
          <PlusIcon className="mr-2 w-5" />
          Add category
        </Button>
      </div>

      {/* Search bar */}
      <div className="mb-4">
        <form className="flex items-center">
          <label htmlFor="search-categories" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MagnifyingGlassIcon className="w-5" />
            </div>
            <input
              type="text"
              id="search-categories"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
              placeholder="Search for categories"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </form>
      </div>

      

      {/* Categories table */}
      <Table columns={columns} data={currentData} className="rounded-lg my-4" />

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      {/* Add category modal */}
      {/* <AddCategoryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      /> */}
    </div>
  );
};

export default CategoriesManagement;
