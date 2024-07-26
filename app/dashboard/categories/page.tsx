// import React from 'react';
// import { categoriesData } from '@/scripts/data';
// import Image from 'next/image';
// import Button from '@/components/Button';
// import { lusitana } from '@/app/styles/fonts';

// const Dashboard = () => {
//   return (
//     <div className="w-full">
//       <div className="flex w-full items-center justify-between">
//         <h1 className={`${lusitana.className} text-2xl`}>Categories</h1>
//         <Button>Add category</Button>
//       </div>
//       <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-2 lg:grid-cols-3">
//         {categoriesData &&
//           categoriesData.map((cate) => (
//             <div
//               key={cate.id}
//               className="flex flex-col items-center rounded-lg border p-6 shadow"
//             >
//               <Image
//                 src={
//                   cate.image ||
//                   'https://clarionhealthcare.com/wp-content/uploads/2020/12/default-fallback-image.png'
//                 }
//                 width={200}
//                 height={100}
//                 alt="category"
//                 className="mb-4 min-h-[200px]"
//                 objectFit="cover"
//               />
//               <h2 className="mb-2 text-xl font-semibold">{cate.name}</h2>
//               <p className="mb-4 text-center">{cate.description}</p>

//               <Button>View product</Button>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

'use client';

import { useState } from 'react';
import { categoriesData, ingredientData } from '@/scripts/data';
import Image from 'next/image';
import Button from '@/components/Button';
import {
  PlusIcon,
  MagnifyingGlassIcon,
  PencilIcon,
  TrashIcon,
  PencilSquareIcon,
} from '@heroicons/react/24/outline';
import Table from '@/components/Table';
// import AddCategoryModal from '@/components/Modal/AddCategoryModal';
import Pagination from '@/components/Pagination';
import MultiOptionFilter from '@/components/MultiOptionsFilter';
import Breadcrumb from '@/components/BreadCrumb';

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
      render: (row: any) => <span>{row.items.length}</span>,
    },
    {
      header: 'Action',
      accessor: 'action',
      render: (row: any) => (
        <div className="flex gap-2">
          <Button
            className="flex items-center gap-2 bg-blue-500 p-1 text-sm text-white hover:bg-blue-600"
            onClick={() => handleEdit(row)}
          >
            <PencilSquareIcon className="mr-2 w-5" />
            Edit
          </Button>
          <Button
            style={{ color: 'red' }}
            className="flex items-center border-2 border-red-500 bg-white p-1 text-sm text-red-500"
            onClick={() => handleDelete(row)}
          >
            <TrashIcon className="mr-2 w-5" />
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

  const filteredData = categoriesData.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
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
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          <Breadcrumb />
        </h1>
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
              className="focus:border-primary-500 focus:ring-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900"
              placeholder="Search for categories"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </form>
      </div>

      {/* Categories table */}
      <Table columns={columns} data={currentData} className="my-4 rounded-lg" />

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
