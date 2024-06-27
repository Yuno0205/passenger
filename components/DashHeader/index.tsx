import {
  BellAlertIcon,
  BellIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { BellSnoozeIcon } from '@heroicons/react/24/solid';
import { BellSlashIcon } from '@heroicons/react/24/solid';

export default function DashHeader() {
  return (
    <div className="flex items-center justify-between py-3">
      <form action="#" method="GET" className="hidden lg:block lg:pl-2">
        <label htmlFor="topbar-search" className="sr-only">
          Search
        </label>
        <div className="relative mt-1 lg:w-96">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon className="w-5" />
          </div>
          <input
            type="text"
            name="email"
            id="topbar-search"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-9 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:text-sm"
            placeholder="Search"
          />
        </div>
      </form>
      <div className="relative">
        <BellSnoozeIcon
          fill="#64748b"
          color="gray-100"
          width={30}
          className="cursor-pointer hover:fill-black"
        />
        <div className="absolute right-1 top-0 z-10 h-2 w-2 rounded-full bg-red-500"></div>
      </div>
    </div>
  );
}
