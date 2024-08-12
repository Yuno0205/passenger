import SideNav from '@/app/container/SideNav';
import {
  Bars3CenterLeftIcon,
  BellIcon,
  LanguageIcon,
  MagnifyingGlassIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

export default function DashHeader() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [sideNavVisible, setSideNavVisible] = useState(false);

  const toggleSideNav = () => {
    setSideNavVisible(!sideNavVisible);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex gap-3">
        <Bars3CenterLeftIcon
          className="w-6 cursor-pointer md:hidden"
          onClick={() => toggleSideNav()}
        />
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
              id="topbar-search"
              className="focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-9 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:text-sm"
              placeholder="Search"
            />
          </div>
        </form>
      </div>
      <div className="flex items-center gap-5">
        <div
          className={twMerge(
            'flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-white outline outline-1 outline-gray-200 hover:bg-gray-100 ',
            isDarkMode ? 'bg-black hover:bg-gray-600' : 'bg-white',
          )}
          onClick={toggleDarkMode}
        >
          {isDarkMode ? (
            <MoonIcon className="w-6 cursor-pointer text-white" fill="white" />
          ) : (
            <SunIcon className="w-6 cursor-pointer" />
          )}
        </div>
        <LanguageIcon width={25} className="w-6 cursor-pointer" />
        <div className="relative">
          <BellIcon
            // fill="#64748b"
            color="gray-100"
            width={25}
            className="w-6 cursor-pointer"
          />
          <div className="absolute right-1 top-0 z-10 h-2 w-2 rounded-full bg-red-500"></div>
        </div>
      </div>

      {/* SideNav mobile */}
      <div
        className={`fixed bottom-0 left-0 right-0 top-0 z-50  bg-gray-800 bg-opacity-50 transition-opacity duration-300 ease-in-out md:block ${
          sideNavVisible ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setSideNavVisible(false)}
      >
        <div
          className={`fixed left-0 top-0 h-full w-64 transform bg-white transition-transform duration-300 ease-in-out ${
            sideNavVisible ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <SideNav />
        </div>
      </div>
    </div>
  );
}
