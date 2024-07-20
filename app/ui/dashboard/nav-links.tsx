'use client';

import {
  CalendarDaysIcon,
  HomeIcon,
  SwatchIcon,
  BuildingStorefrontIcon,
  ChevronDownIcon,
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
    href: '/',
    icon: BuildingStorefrontIcon,
    children: [
      {
        childName: 'History',
        childLink: '/dashboard/inventory/history',
      },
      {
        childName: 'Ingredient',
        childLink: '/dashboard/inventory',
      },
      {
        childName: 'Add ingredient',
        childLink: '/dashboard/inventory/ingredient',
      },
      {
        childName: 'Checking',
        childLink: '/dashboard/inventory/checking',
      },
    ],
  },
  { name: 'Categories', href: '/dashboard', icon: SwatchIcon },
  {
    name: 'Schedule',
    href: '/dashboard/schedule',
    icon: CalendarDaysIcon,
    children: [
      {
        childName: 'Vacants',
        childLink: '/dashboard/schedule',
      },
      {
        childName: 'Shifts',
        childLink: '/dashboard/schedule/shifts',
      },
    ],
  },
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
    <>
      {links.map((link, index) => {
        const LinkIcon = link.icon;
        const isSubmenuOpen = openSubmenus[index];

        if (link.children) {
          return (
            <div key={index}>
              <div
                onClick={() => toggleSubmenu(index)}
                className={clsx(
                  'flex h-[48px] grow cursor-pointer items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium transition-all hover:bg-violet-100 hover:text-primary-500 md:flex-none md:justify-start md:p-2 md:px-3',
                  {
                    'bg-violet-100 text-primary-500': pathname === link.href,
                  },
                )}
              >
                <div className="flex w-full justify-between">
                  <div className="flex items-center gap-2">
                    <LinkIcon className="w-6" />
                    <p className="hidden md:block">{link.name}</p>
                  </div>
                  <ChevronDownIcon className="w-5" />
                </div>
              </div>
              {isSubmenuOpen && (
                <ul className="ml-4">
                  {link.children.map((child, childIndex) => (
                    <li key={childIndex}>
                      <Link
                        href={child.childLink}
                        className={clsx(
                          'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-violet-100 hover:text-primary-500 md:flex-none md:justify-start md:p-2 md:px-8',
                          {
                            'bg-violet-100 text-primary-500':
                              pathname === child.childLink,
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
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-violet-100 hover:text-primary-500 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-violet-100 text-primary-500': pathname === link.href,
              },
            )}
          >
            <div className="flex w-full justify-between">
              <div className="flex items-center gap-2">
                <LinkIcon className="w-6" />
                <p className="hidden md:block">{link.name}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
}
