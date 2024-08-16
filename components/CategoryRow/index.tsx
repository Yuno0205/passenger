// components/SingleLevelCategoryRow.tsx
import React from 'react';

interface SingleLevelCategoryRowProps {
  name: string;
  featured: boolean;
  products: string;
  status: string;
}

const SingleLevelCategoryRow: React.FC<SingleLevelCategoryRowProps> = ({
  name,
  featured,
  products,
  status,
}) => {
  return (
    <div className="flex items-center justify-between border-b p-4">
      <span>{name}</span>
      <div className="flex items-center space-x-4">
        <span>{featured ? '✅' : '❌'}</span>
        <span>{products}</span>
        <span
          className={`text-sm ${
            status === 'Active' ? 'text-green-500' : 'text-red-500'
          }`}
        >
          {status}
        </span>
        <div className="flex space-x-2">
          <button className="rounded bg-blue-500 px-3 py-1 text-white">
            Edit
          </button>
          <button className="rounded bg-gray-200 px-3 py-1">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default SingleLevelCategoryRow;
