'use client';

import Button from '@/components/Button';
import Pagination from '@/components/Pagination';
import Table from '@/components/Table';
import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useState } from 'react';

import ActionDropdown from '@/components/ActionDropdown';
import Dropdown from '@/components/Dropdown';
import adminImg from '@/public/images/3d-illustration-human-avatar-profile_23-2150671140.jpg';
import { employees } from '@/scripts/data';

const UserManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isShowFilter, setIsShowFilter] = useState(false);
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const rolesOptions = [
    { label: 'Admin', value: 'admin' },
    { label: 'Staff', value: 'staff' },
  ];

  const statusOptions = [
    { label: 'Active', value: 'true' },
    { label: 'Inactive', value: 'false' },
  ];

  const totalPages = Math.ceil(employees.length / itemsPerPage);
  const currentUsers = employees.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const columns = [
    {
      header: 'UID',
      accessor: 'id',
      render: (row: any) => (
        <div className="flex items-center">
          <span className="font-bold">{row.id}</span>
        </div>
      ),
    },
    {
      header: 'Users',
      accessor: 'name',
      render: (row: any) => (
        <div className="flex items-center">
          <Image
            src={adminImg}
            alt={row.name}
            width={50}
            height={50}
            className="mr-3 h-[50px] rounded-xl object-cover"
          />
          <span className="font-bold">{row.name}</span>
        </div>
      ),
    },
    { header: 'Email', accessor: 'email' },

    {
      header: 'Role',
      accessor: 'role',
      render: (row: any) => (
        <div className="flex items-center">
          <span className="font-bold capitalize ">{row.role}</span>
        </div>
      ),
    },
    { header: 'Created At', accessor: 'created_at' },
    {
      header: 'Status',
      accessor: 'status',
      render: (row: any) => (
        <div>
          {row.status ? (
            <div className="flex w-[80px] items-center justify-center gap-2 rounded-full border border-green-400 bg-green-50 p-1 text-center font-semibold text-green-600">
              Active
            </div>
          ) : (
            <div className="flex w-[80px] items-center justify-center gap-2 rounded-full border border-red-400 bg-red-50 p-1 text-center font-semibold text-red-600">
              Inactive
            </div>
          )}
        </div>
      ),
    },
    {
      header: 'Action',
      accessor: 'action',
      render: (row: any) => (
        <ActionDropdown onAdjust={() => {}} onDelete={() => {}} />
      ),
    },
  ];

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
                  label="Role"
                  onSelect={(value) => console.log(value)}
                  options={[
                    { label: 'Admin', value: 'admin' },
                    { label: 'Staff', value: 'staff' },
                  ]}
                />

                <Dropdown
                  label="Status"
                  onSelect={(value) => console.log(value)}
                  options={[
                    { label: 'Active', value: 'Active' },
                    { label: 'Inactive', value: 'Inactive' },
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
      <Table
        columns={columns}
        data={currentUsers}
        className=" my-4 rounded-lg"
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
      {/* AddUserModal should be implemented similarly to AddProductModal */}
    </div>
  );
};

export default UserManagement;
