// components/Breadcrumb.tsx
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HomeIcon } from '@heroicons/react/24/outline';

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathArray = pathname.split('/').filter((path) => path);

  return (
    <nav className="flex items-center space-x-2 text-sm font-medium text-gray-600">
      <Link
        href="/dashboard"
        className="flex items-center gap-1 hover:text-indigo-600"
      >
        <HomeIcon className="h-5 w-5" />
        {/* <span>Dashboard</span> */}
      </Link>
      {pathArray.map((path, index) => {
        const href = `/dashboard/${pathArray.slice(1, index + 1).join('/')}`;
        const isLast = index === pathArray.length - 1;

        return (
          <div key={href} className="flex items-center">
            <span className="mx-2 capitalize">/</span>
            {isLast ? (
              <span className="capitalize">{path}</span>
            ) : (
              <Link href={href} className="capitalize hover:text-indigo-600">
                {path}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
