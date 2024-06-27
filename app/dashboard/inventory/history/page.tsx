'use client';

import SelectionSearch from '@/components/SelectionSearch';
import { useState } from 'react';

const OrderList = () => {
  const [orderType, setOrderType] = useState('All orders');
  const [duration, setDuration] = useState('this week');

  const orders = [
    {
      id: 'FWB127364372',
      date: '20.12.2023',
      creator: 'Nhật Hào',
      status: 'Pre-order',
      statusColor: 'primary',
    },
    {
      id: 'FWB125467980',
      date: '11.12.2023',
      creator: 'Nhật Hào',
      status: 'In transit',
      statusColor: 'yellow',
    },
    {
      id: 'FWB139485607',
      date: '08.12.2023',
      creator: 'Nhật Hào',
      status: 'Confirmed',
      statusColor: 'green',
    },
    {
      id: 'FWB137364371',
      date: '16.11.2023',
      creator: 'Nhật Hào',
      status: 'Confirmed',
      statusColor: 'green',
    },
    {
      id: '#FWB134567890',
      date: '02.11.2023',
      creator: 'Nhật Hào',
      status: 'Confirmed',
      statusColor: 'green',
    },
    {
      id: '#FWB146284623',
      date: '26.09.2023',
      creator: 'Nhật Hào',
      status: 'Cancelled',
      statusColor: 'red',
    },
    {
      id: '#FWB145967376',
      date: '17.07.2023',
      creator: 'Nhật Hào',
      status: 'Confirmed',
      statusColor: 'green',
    },
  ];

  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mx-auto max-w-5xl">
          <div className="gap-4 sm:flex sm:items-center sm:justify-between">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
              Reports history
            </h2>

            <div className="mt-6 gap-4 space-y-4 sm:mt-0 sm:flex sm:items-center sm:justify-end sm:space-y-0">
              <SelectionSearch
                items={['Hào', 'Nhật', 'Bang', 'Clie', 'Xin', 'Lili', 'Lehend']}
              />
            </div>
          </div>

          <div className="mt-6 flow-root sm:mt-8">
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="flex flex-wrap items-center gap-y-4 py-6"
                >
                  <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                    <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                      Report ID:
                    </dt>
                    <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                      <a
                        href={`/dashboard/inventory/history/${order.id}`}
                        className="hover:underline"
                      >
                        {order.id}
                      </a>
                    </dd>
                  </dl>

                  <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                    <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                      Date:
                    </dt>
                    <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                      {order.date}
                    </dd>
                  </dl>

                  <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                    <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                      Creator:
                    </dt>
                    <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                      {order.creator}
                    </dd>
                  </dl>

                  <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                    <div className="flex  w-[120px] justify-center gap-3 rounded-2xl border border-gray-200 bg-white py-2 hover:cursor-pointer hover:border-black">
                      <span className="font-medium">View details</span>{' '}
                    </div>
                  </dl>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderList;
