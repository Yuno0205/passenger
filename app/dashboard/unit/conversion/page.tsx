'use client';
import ActionDropdown from '@/components/ActionDropdown';
import Breadcrumb from '@/components/BreadCrumb';
import Button from '@/components/Button';
import Dropdown from '@/components/Dropdown';
import Pagination from '@/components/Pagination';
import SelectionSearch from '@/components/SelectionSearch';
import Table from '@/components/Table';
import TableRow from '@/components/TableRow';
import Textbox from '@/components/TextBox';
import { ingredientData, unitConversion, unitData } from '@/scripts/data';
import { ArrowLongRightIcon, PlusIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';

const unitColumns = [
  { header: 'ID', accessor: 'id' },
  { header: 'Ingredient', accessor: 'item' },
  { header: 'From', accessor: 'from' },
  { header: 'To', accessor: 'to' },
  { header: 'Type', accessor: 'type' },
  { header: 'Ratio (From / To)', accessor: 'ratio' },
  {
    header: 'Action',
    accessor: 'action',
    render: (row: any) => (
      <ActionDropdown onAdjust={() => {}} onDelete={() => {}} />
    ),
  },
];

const CurrencyConverter: React.FC = () => {
  const [ratio, setRatio] = useState('1');
  const [defaultUnit, setDefaultUnit] = useState('Choose a unit');
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const handleSelection = (itemName: string) => {
    const item = ingredientData.find(
      (ingredient) => ingredient.name === itemName,
    );
    setSelectedItem(item);
  };

  return (
    <div className="mx-auto max-w-full p-4">
      <Breadcrumb />
      <div className="my-4 flex items-center gap-4">
        <div className="w-1/4">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Ingredient
          </label>

          <SelectionSearch
            items={ingredientData.map((ingre) => ingre.name)}
            onSelect={handleSelection}
            placeholder="Type to select your item"
          />
        </div>
        <div className="w-[80px]">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Value
          </label>
          <Textbox readOnly onChange={() => {}} value="1" className="mt-2" />
        </div>
        <div className="w-1/4">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            From
          </label>
          {selectedItem ? (
            <Textbox readOnly value={selectedItem.unit}></Textbox>
          ) : (
            <Textbox readOnly />
          )}
        </div>
        <div>
          <Button className="h-[50px] w-[50px] rounded-full">
            <ArrowLongRightIcon className="w-10" />
          </Button>
        </div>
        <div className="w-1/4">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            To
          </label>
          <Dropdown
            label="Select your unit"
            options={unitData.map((unit) => {
              return { label: unit.unitName, value: unit.unitName };
            })}
            onSelect={setDefaultUnit}
            defaultValue={'hào'}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Value
          </label>
          <Textbox defaultValue={ratio} />
        </div>
      </div>
      <div className="mb-5 flex items-center justify-end">
        <Button className="flex gap-2">
          <PlusIcon className="w-3" /> Conversion
        </Button>
      </div>

      <Table
        columns={unitColumns}
        data={unitConversion}
        className="rounded-lg shadow-lg"
      />

      <Pagination
        currentPage={1}
        totalPages={10}
        onPageChange={() => {}}
        className="mt-10"
      />
    </div>
  );
};

export default CurrencyConverter;
