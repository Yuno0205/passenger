import React from 'react';
import clsx from 'clsx';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className = '',
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      className={clsx('flex items-center justify-center space-x-3', className)}
    >
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={clsx(
          'flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm font-semibold',
          currentPage === 1
            ? 'cursor-not-allowed bg-gray-100 text-gray-500'
            : 'border border-gray-300 bg-white text-black hover:border-black',
        )}
      >
        Prev
        <ChevronLeftIcon className="w-4" />
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={clsx(
            'min-w-[40px] rounded-md px-2 py-1 text-center text-gray-600',
            page === currentPage
              ? 'text-md bg-black text-white'
              : 'border border-gray-300 bg-white text-black hover:bg-gray-300',
          )}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={clsx(
          'flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm font-semibold',
          currentPage === totalPages
            ? 'cursor-not-allowed bg-gray-300'
            : 'border border-gray-300 bg-white text-black hover:border-black',
        )}
      >
        Next
        <ChevronRightIcon className="w-4" />
      </button>
    </nav>
  );
};

export default Pagination;
