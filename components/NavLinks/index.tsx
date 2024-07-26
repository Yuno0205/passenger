'use client';

import {
  CalendarDaysIcon,
  HomeIcon,
  SwatchIcon,
  BuildingStorefrontIcon,
  ChevronDownIcon,
  UserGroupIcon,
  TableCellsIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface Link {
  name: string;
  href: string;
  icon: any;
  children?: ChildLink[];
}

interface ChildLink {
  childName: string;
  childLink: string;
}

const links: Link[] = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Inventory',
    href: '/dashboard/inventory',
    icon: BuildingStorefrontIcon,
    children: [
      { childName: 'History', childLink: '/dashboard/inventory/history' },
      { childName: 'Ingredient', childLink: '/dashboard/inventory' },
      {
        childName: 'Add ingredient',
        childLink: '/dashboard/inventory/ingredient',
      },
      { childName: 'Checking', childLink: '/dashboard/inventory/checking' },
    ],
  },
  {
    name: 'Categories',
    href: '/dashboard/categories',
    icon: SwatchIcon,
    children: [
      { childName: 'Categories', childLink: '/dashboard/categories' },
      { childName: 'Unit', childLink: '/dashboard/categories/unit' },
    ],
  },
  {
    name: 'Schedule',
    href: '/dashboard/schedule',
    icon: CalendarDaysIcon,
    children: [
      { childName: 'Vacants', childLink: '/dashboard/schedule' },
      { childName: 'Shifts', childLink: '/dashboard/schedule/shifts' },
    ],
  },
  { name: 'User', href: '/dashboard/user', icon: UserGroupIcon },
  { name: 'Unit', href: '/dashboard/unit', icon: TableCellsIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  const [openSubmenus, setOpenSubmenus] = useState<{ [key: number]: boolean }>(
    {},
  );

  const toggleSubmenu = (index: number) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <nav className="flex flex-col space-y-2">
      {links.map((link, index) => {
        const LinkIcon = link.icon;
        const isSubmenuOpen = openSubmenus[index];
        const isActive =
          pathname === link.href ||
          (link.children && pathname.startsWith(link.href));

        if (link.children) {
          return (
            <div key={index} className="flex flex-col space-y-2">
              <div
                onClick={() => toggleSubmenu(index)}
                className={clsx(
                  'flex cursor-pointer items-center justify-between rounded-md p-3 text-sm font-medium transition-all hover:bg-indigo-100 hover:text-indigo-600',
                  {
                    'bg-indigo-100 text-indigo-600': isActive,
                  },
                )}
              >
                <div className="flex items-center gap-2">
                  <LinkIcon className="w-6" />
                  <p className="hidden md:block">{link.name}</p>
                </div>
                <ChevronDownIcon className="w-5" />
              </div>
              {isSubmenuOpen && (
                <ul className="ml-4 flex flex-col space-y-1">
                  {link.children.map((child, childIndex) => (
                    <li key={childIndex}>
                      <Link
                        href={child.childLink}
                        className={clsx(
                          'flex items-center rounded-md p-3 text-sm font-medium hover:text-indigo-600',
                          {
                            'text-indigo-600': pathname === child.childLink,
                          },
                        )}
                      >
                        <span className="mr-2 rounded-full">•</span>
                        {child.childName}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        }

        return (
          <Link
            key={index}
            href={link.href}
            className={clsx(
              'flex items-center justify-between rounded-md p-3 text-sm font-medium transition-all hover:bg-indigo-100 hover:text-indigo-600',
              {
                'bg-indigo-100 text-indigo-600': pathname === link.href,
              },
            )}
          >
            <div className="flex items-center gap-2">
              <LinkIcon className="w-6" />
              <p className="hidden md:block">{link.name}</p>
            </div>
          </Link>
        );
      })}
    </nav>
  );
}
