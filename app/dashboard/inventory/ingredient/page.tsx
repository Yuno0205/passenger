'use client';
import Breadcrumb from '@/components/BreadCrumb';
import Button from '@/components/Button';
import Dropdown from '@/components/Dropdown';
import TextBox from '@/components/TextBox';
import InternalTextBox from '@/components/TextBox';
import { categoriesData, unitData } from '@/scripts/data';
import {
  ArrowUpTrayIcon,
  PlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import React, { useState } from 'react';

const CategoryForm: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  return (
    <div className="mx-auto max-w-full rounded bg-white p-6">
      <h1 className="mb-10 text-xl font-bold">
        <Breadcrumb />
      </h1>

      <div className="mb-5 flex">
        <label
          className="block min-w-[120px] text-sm font-bold text-gray-700"
          htmlFor="ingredientname"
        >
          Ingredient name
        </label>
        <div className="ml-20 flex-1">
          <TextBox placeholder="Enter ingredient" />
        </div>
      </div>

      <div className="mb-5 flex">
        <label
          className="block min-w-[120px] text-sm font-bold text-gray-700"
          htmlFor="description"
        >
          Description
        </label>
        <div className="ml-20 flex-1">
          <textarea
            id="description"
            className="h-32 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:shadow-outline focus:outline-none"
            placeholder="Write a short description"
          />
        </div>
      </div>

      <div className="mb-5 flex">
        <label
          className="block min-w-[120px] text-sm font-bold text-gray-700"
          htmlFor="infoLink"
        >
          Ingredient Image
        </label>
        <div className="relative ml-20 flex-1">
          <div className="block w-full cursor-pointer appearance-none rounded border border-dashed bg-gray-50 px-4 py-4">
            <input
              type="file"
              id="infoLink"
              className="absolute inset-0 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
              onChange={handleFileChange}
            />
            <div className="flex flex-col items-center justify-center space-y-3">
              <span className="border-stroke dark:border-strokedark dark:bg-boxdark flex h-10 w-10 items-center justify-center rounded-full border bg-white">
                <ArrowUpTrayIcon className="w-5" />
              </span>
              <p className="text-sm font-medium">
                <span className="text-primary">Click to upload</span>
                or drag and drop
              </p>
              <p className="mt-1.5 text-sm font-medium">SVG, PNG, JPG or GIF</p>
            </div>
            {image && (
              <div className="relative mt-4">
                <img
                  src={image}
                  alt="Selected"
                  className="h-auto w-full rounded"
                />
                <button
                  onClick={handleRemoveImage}
                  className="absolute right-2 top-2 rounded-full bg-red-500 p-2 text-white hover:bg-red-600"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="my-10 flex gap-[200px]">
        <div className="flex w-1/2">
          <label className="block min-w-[120px] text-sm font-bold text-gray-700">
            Category
          </label>
          <div className="ml-20 flex-1">
            <Dropdown
              onSelect={() => {}}
              options={categoriesData.map((cate) => cate.name)}
              className="w-full"
            />
          </div>
        </div>
        <div className="flex w-1/2 justify-between">
          <label className="block min-w-[120px] text-sm font-bold text-gray-700">
            Unit
          </label>
          <div className="flex-1">
            <Dropdown
              onSelect={() => {}}
              options={unitData.map((unitData) => unitData.unitName)}
              className="w-full"
            />
          </div>
        </div>
      </div>

      <div className="my-10 flex gap-[200px]">
        <div className="flex w-1/2">
          <label
            className="block min-w-[120px] text-sm font-bold text-gray-700"
            htmlFor="ingredientname"
          >
            Stock
          </label>
          <div className="ml-20 flex-1">
            <TextBox />
          </div>
        </div>
        <div className="flex w-1/2 justify-between">
          <label
            className="block min-w-[120px] text-sm font-bold text-gray-700"
            htmlFor="ingredientname"
          >
            Low stock
          </label>
          <div className="flex-1">
            <TextBox />
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Button className="gap-2" disabled>
          Add Ingredient <PlusIcon className="w-5" />
        </Button>
      </div>
    </div>
  );
};

export default CategoryForm;
