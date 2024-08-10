import React from 'react';
import clsx from 'clsx';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Button from '../Button';
import Link from 'next/link';

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
      aria-label="pagination"
      className="mx-auto my-4 flex w-full justify-center"
      role="navigation"
    >
      <ul className="flex flex-row items-center gap-1">
        <li className={currentPage === 1 ? 'cursor-not-allowed' : ''}>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={clsx(
              'ring-offset-background  focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground inline-flex h-10 items-center justify-center gap-1 whitespace-nowrap rounded-md bg-white px-4 py-2 pl-2.5 text-sm font-medium text-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
              currentPage === 1
                ? 'cursor-not-allowed bg-gray-100 text-gray-500'
                : ' bg-white text-black ',
            )}
            aria-label="Go to previous page"
          >
            <ChevronLeftIcon className="w-3" />
            <span>Previous</span>
          </button>
        </li>

        {pages &&
          pages.map((page, index) => (
            <li className="" key={index}>
              <div
                aria-current="page"
                className={clsx(
                  'ring-offset-background focus-visible:ring-ring border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-10 w-10 cursor-pointer items-center justify-center whitespace-nowrap rounded-md border text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
                  page === currentPage
                    ? 'text-md bg-white text-black outline outline-1 outline-black'
                    : 'border border-gray-300 bg-white text-black hover:bg-gray-300',
                )}
                onClick={() => onPageChange(page)}
              >
                {page}
              </div>
            </li>
          ))}

        <li className={currentPage === totalPages ? 'cursor-not-allowed' : ''}>
          <button
            className={clsx(
              'ring-offset-background focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground inline-flex h-10 items-center justify-center gap-1 whitespace-nowrap rounded-md px-4 py-2 pl-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
              currentPage === totalPages
                ? 'cursor-not-allowed bg-gray-100 text-gray-500 '
                : ' bg-white text-black ',
            )}
            aria-label="Go to previous page"
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
          >
            <span className="cursor-not-allowed">Next</span>
            <ChevronRightIcon className="w-3" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
