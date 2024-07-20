import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import { signOut } from '@/auth';
import Image from 'next/image';
import { PowerIcon } from '@heroicons/react/24/outline';
import avatar from '@/public/images/9440461.jpg';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col border-r border-solid border-gray-300 px-5 py-2 md:px-4">
      <div className="mb-2 flex h-20 flex-col items-center justify-start rounded-md p-4 md:h-40">
        <div className="flex flex-col items-center justify-center">
          <div className="relative h-20 w-20 overflow-hidden">
            <Image
              src={avatar}
              quality={100}
              fill
              alt=""
              className="rounded-full object-cover"
            />
          </div>
        </div>
        <h1 className="py-2 text-2xl text-black">Nhật Hào</h1>
      </div>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-violet-100 hover:text-primary-500 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
