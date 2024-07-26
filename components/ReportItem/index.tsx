import {
  ChevronDownIcon,
  ChevronUpIcon,
  EyeIcon,
} from '@heroicons/react/24/outline';
import { CalendarIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Button from '../Button';
import Link from 'next/link';
import { useState } from 'react';

interface ReportItemProps {
  orderNumber: string;

  orderDate: string;

  productImage: string;
  productName: string;

  quantity: number;
}

const ReportItem: React.FC<ReportItemProps> = ({
  orderNumber,

  productImage,
  productName,
  quantity,
}) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="mb-4 rounded-lg border p-4 shadow-xl">
      <div className="flex items-center justify-between">
        <div>
          <h2>
            <span className=" font-medium text-gray-600">Report</span> #
            <Link
              href={`/dashboard/inventory/history/1`}
              className="text-xl font-bold underline"
            >
              {orderNumber}
            </Link>
          </h2>
        </div>
        <div className="flex">
          <CalendarIcon className="font-xs ml-1 w-5 text-gray-500" />
          <span className="font-xs ml-1 text-gray-500">
            13 ,June 2024 at 4:00 PM
          </span>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex">
          <div>
            <Image
              src={productImage}
              alt={productName}
              className="h-16 w-16 rounded-xl object-cover"
              width={500}
              height={50}
              objectFit="cover"
            />
          </div>
          <div className="ml-4">
            <p className="font-semibold">{productName}</p>
            <div className="flex items-center">
              <span className=" text-sm text-gray-500">Category:</span>
              <h3 className="font-semibold text-blue-500">Coffee</h3>
            </div>
            <div className="flex gap-3">
              <p className="text-sm text-gray-500">
                Quantity: <span className="text-red-500">-{quantity}</span>
              </p>
              <p className="text-sm text-gray-500">Unit: Pack</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          showMore
            ? 'transition-max-height max-h-[1000px] duration-500'
            : 'transition-max-height max-h-0 overflow-hidden duration-500'
        }
      >
        <div className="mt-4 flex items-center justify-between">
          <div className="flex">
            <div>
              <Image
                src={productImage}
                alt={productName}
                className="h-16 w-16 rounded-xl object-cover"
                width={500}
                height={50}
                objectFit="cover"
              />
            </div>
            <div className="ml-4">
              <p className="font-semibold">{productName}</p>
              <div className="flex items-center">
                <span className=" text-sm text-gray-500">Category:</span>
                <h3 className="font-semibold text-blue-500">Coffee</h3>
              </div>
              <div className="flex gap-3">
                <p className="text-sm text-gray-500">
                  Quantity: <span className="text-green-500">+{quantity}</span>
                </p>
                <p className="text-sm text-gray-500">Unit: Pack</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex">
            <div>
              <Image
                src={productImage}
                alt={productName}
                className="h-16 w-16 rounded-xl object-cover"
                width={500}
                height={50}
                objectFit="cover"
              />
            </div>
            <div className="ml-4">
              <p className="font-semibold">{productName}</p>
              <div className="flex items-center">
                <span className=" text-sm text-gray-500">Category:</span>
                <h3 className="font-semibold text-blue-500">Coffee</h3>
              </div>
              <div className="flex gap-3">
                <p className="text-sm text-gray-500">Quantity: -{quantity}</p>
                <p className="text-sm text-gray-500">Unit: Pack</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex">
            <div>
              <Image
                src={productImage}
                alt={productName}
                className="h-16 w-16 rounded-xl object-cover"
                width={500}
                height={50}
                objectFit="cover"
              />
            </div>
            <div className="ml-4">
              <p className="font-semibold">{productName}</p>
              <div className="flex items-center">
                <span className=" text-sm text-gray-500">Category:</span>
                <h3 className="font-semibold text-blue-500">Coffee</h3>
              </div>
              <div className="flex gap-3">
                <p className="text-sm text-gray-500">Quantity: -{quantity}</p>
                <p className="text-sm text-gray-500">Unit: Pack</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="item-center flex cursor-pointer gap-2">
          <span
            onClick={() => setShowMore((prev) => !prev)}
            className={`text-sm text-gray-500`}
          >
            {showMore ? 'Show less item' : 'Show more 3 items'}
          </span>
          {showMore ? (
            <ChevronUpIcon className="w-4" />
          ) : (
            <ChevronDownIcon className="w-4" />
          )}
        </div>
        <div className="flex space-x-2">
          <Link href={`/dashboard/inventory/history/1`}>
            <Button className="rounded px-3 py-1 text-white">
              View Details <EyeIcon className="ml-2 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReportItem;
