'use client';

import Breadcrumb from '@/components/BreadCrumb';
import ReportItem from '@/components/ReportItem';
import { useState } from 'react';

const OrderList = () => {
  const orders = [
    {
      orderNumber: '2471',
      orderDate: '13 Sep, 2022 at 4:39 PM',
      productImage:
        'https://cdn.vn.alongwalk.info/wp-content/uploads/2023/11/26040319/image-gourmet-coffee-noi-dau-ban-ca-phe-thuong-hang-ngon-nhat-170092099826617.jpg',
      productName:
        'Burberry Beige 38mm Stainless Steel Watch with Smoked Check...',
      sku: 'II300cab-12',
      quantity: 2,
      price: 580.99,
    },
    {
      orderNumber: '2472',
      status: 'Delivered',
      paymentStatus: 'Waiting payment',
      orderDate: '14 Sep, 2022 at 8:27 PM',
      shippingNumber: '61833014106',
      productImage:
        'https://cdn.vn.alongwalk.info/wp-content/uploads/2023/11/26040319/image-gourmet-coffee-noi-dau-ban-ca-phe-thuong-hang-ngon-nhat-170092099826617.jpg',
      productName: 'Coffee Basics 101 Blends',
      sku: 'dfr-t685y-1',
      quantity: 1,
      price: 340.48,
    },
  ];

  return (
    <section className="w-full dark:bg-gray-900">
      <div className="max-w-screen-xl">
        <div className="w-full">
          <div className="gap-4 sm:flex sm:items-center sm:justify-between">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
              <Breadcrumb />
            </h2>
          </div>

          <div className="mt-6 flow-root sm:mt-8">
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {orders.map((order) => (
                <ReportItem key={order.orderNumber} {...order} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderList;
