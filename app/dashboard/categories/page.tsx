'use client';

import { useState } from 'react';
import { categoriesData } from '@/scripts/data';
import Image from 'next/image';
import backupImg from '@/public/images/9440461.jpg';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Breadcrumb from '@/components/BreadCrumb';
import ActionDropdown from '@/components/ActionDropdown';
import Link from 'next/link';
import Pagination from '@/components/Pagination';

const CategoriesManagement = () => {
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

  return (
    <section className="w-full py-12">
      <div className="container mx-auto grid max-w-6xl gap-6 px-4 md:gap-8 md:px-6">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-8">
          <div className="grid gap-1">
            <Breadcrumb />
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="group relative grid gap-4">
            <a className="absolute inset-0 z-10" href="#" rel="ugc">
              <span className="sr-only">View</span>
            </a>
            <Image
              src={backupImg}
              alt="Clothing"
              width="450"
              height="300"
              className="aspect-[3/2] w-full rounded-lg object-cover transition-opacity group-hover:opacity-50"
            />
            <div className="grid gap-1">
              <h3 className="font-semibold">Coffee &amp; Tea</h3>
              <p className="text-sm leading-none">
                Find the latest coffee and tea products.
              </p>
            </div>
          </div>
          <div className="group relative grid gap-4">
            <a className="absolute inset-0 z-10" href="#" rel="ugc">
              <span className="sr-only">View</span>
            </a>
            <Image
              src={backupImg}
              alt="Electronics"
              width="450"
              height="300"
              className="aspect-[3/2] w-full rounded-lg object-cover transition-opacity group-hover:opacity-50"
            />
            <div className="grid gap-1">
              <h3 className="font-semibold">Granula</h3>
              <p className="text-sm leading-none">
                Find the latest coffee and tea products.
              </p>
            </div>
          </div>
          <div className="group relative grid gap-4">
            <a className="absolute inset-0 z-10" href="#" rel="ugc">
              <span className="sr-only">View</span>
            </a>
            <Image
              src={backupImg}
              alt="Home &amp; Garden"
              width="450"
              height="300"
              className="aspect-[3/2] w-full rounded-lg object-cover transition-opacity group-hover:opacity-50"
            />
            <div className="grid gap-1">
              <h3 className="font-semibold">Juice</h3>
              <p className="text-sm leading-none">
                Find the latest coffee and tea products.
              </p>
            </div>
          </div>
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={() => {}}
        />
      </div>
    </section>
  );
};

export default CategoriesManagement;
