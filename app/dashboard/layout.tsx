'use client';
import DashHeader from '@/components/DashHeader';
import SideNav from '@/app/container/SideNav';
import { useState } from 'react';
import { Bars3CenterLeftIcon } from '@heroicons/react/24/outline';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [sideNavVisible, setSideNavVisible] = useState(false);

  const toggleSideNav = () => {
    setSideNavVisible(!sideNavVisible);
  };

  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div
        className={`w-full flex-none md:w-64 ${
          sideNavVisible ? 'block' : 'hidden'
        } md:block`}
      >
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12 md:pt-0">
        <div className="pb-6">
          <DashHeader onMenuClick={toggleSideNav} />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
