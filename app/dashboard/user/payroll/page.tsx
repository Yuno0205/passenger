'use client';

import { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/Button';
import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import Table from '@/components/Table';
import Pagination from '@/components/Pagination';
import MultiOptionFilter from '@/components/MultiOptionsFilter';
import clsx from 'clsx';

import adminImg from '@/public/images/3d-illustration-human-avatar-profile_23-2150671140.jpg';
import { employees } from '@/scripts/data';
import ActionDropdown from '@/components/ActionDropdown';

const Payroll = () => {
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

  // Filter out admin users
  const staffEmployees = employees.filter(
    (employee) => employee.role === 'staff',
  );
  const totalPages = Math.ceil(staffEmployees.length / itemsPerPage);
  const currentUsers = staffEmployees.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const columns = [
    { header: 'UID', accessor: 'id' },
    {
      header: 'Employee',
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
    { header: 'Work Hours', accessor: 'workHours' },
    { header: 'Rate Per Hour', accessor: 'ratePerHour' },
    { header: 'Monthly Salary', accessor: 'monthlySalary' },
    { header: 'Bonus', accessor: 'bonus' },
    {
      header: 'Total Pay',
      accessor: (row: any) => {
        const totalPay =
          row.monthlySalary + row.bonus + row.ratePerHour * row.workHours;
        return totalPay.toLocaleString('vi-VN');
      },
      render: (row: any) => {
        const totalPay =
          row.monthlySalary + row.bonus + row.ratePerHour * row.workHours;
        return (
          <span className="font-bold">{totalPay.toLocaleString('vi-VN')}</span>
        );
      },
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
        <div className="relative bg-white dark:bg-gray-800 sm:rounded-lg">
          <div className="flex flex-col items-center justify-between space-y-3 p-4 md:flex-row md:space-x-4 md:space-y-0">
            <div className="flex w-full items-center gap-3">
              <div className="flex w-full gap-2 md:w-1/3">
                <form className="flex min-w-[300px] items-center">
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
                      placeholder="Search for users"
                      required
                    />
                  </div>
                </form>
                <div className="relative flex">
                  <Button onClick={() => setIsShowFilter(!isShowFilter)}>
                    Filter <AdjustmentsHorizontalIcon className="ml-2 w-5" />
                  </Button>
                  {isShowFilter && (
                    <div
                      className={clsx(
                        'border-gray-2 absolute top-[60px] flex min-h-[100px] flex-col rounded-xl bg-white p-6 shadow-lg transition-all',
                        isShowFilter ? 'hidden' : 'visible',
                      )}
                    >
                      <div
                        className={clsx(
                          'flex max-h-[300px] w-[400px] flex-wrap gap-2 overflow-y-auto',
                        )}
                      >
                        <MultiOptionFilter
                          label="Roles"
                          options={rolesOptions}
                          selectedOptions={selectedRoles}
                          onChange={setSelectedRoles}
                          className="mb-4"
                        />
                        <MultiOptionFilter
                          label="Status"
                          options={statusOptions}
                          selectedOptions={selectedStatuses}
                          onChange={setSelectedStatuses}
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
                  )}
                </div>
              </div>
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
      {/* AddPayrollModal should be implemented similarly to AddProductModal */}
    </div>
  );
};

export default Payroll;
