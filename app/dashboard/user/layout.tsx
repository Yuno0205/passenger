'use client';
import { usePathname } from 'next/navigation';
import Breadcrumb from '@/components/BreadCrumb';
import Link from 'next/link';
import { BanknotesIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <Breadcrumb />
      <nav>
        <Link
          className={`mr-4 inline-block rounded-t-lg border-b-2 p-4 ${
            pathname === '/dashboard/user/account'
              ? 'border-blue-600 text-blue-600 dark:text-gray-300'
              : 'border-transparent hover:border-blue-600 hover:text-blue-600 dark:hover:text-gray-300'
          }`}
          href="/dashboard/user/account"
        >
          <div className="flex gap-3">
            Account Page
            <UserGroupIcon className="w-5" />
          </div>
        </Link>
        <Link
          className={`inline-block rounded-t-lg border-b-2 p-4 ${
            pathname === '/dashboard/user/payroll'
              ? 'border-blue-600 text-blue-600 dark:text-gray-300'
              : 'border-transparent hover:border-blue-600 hover:text-blue-600 dark:hover:text-gray-300'
          }`}
          href="/dashboard/user/payroll"
        >
          <div className="flex gap-3">
            Payroll <BanknotesIcon className="w-5" />
          </div>
        </Link>
      </nav>
      <div>{children}</div>
    </>
  );
}
