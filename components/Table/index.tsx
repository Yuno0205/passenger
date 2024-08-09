import React, { useState } from 'react';
import clsx from 'clsx';

interface Column {
  header: string;
  accessor: string;
  render?: (row: any) => React.ReactNode;
  className?: string;
}

interface TableProps {
  columns: Column[];
  data: Record<string, any>[];
  className?: string;
  checkbox?: boolean;
}

const Table: React.FC<TableProps> = ({
  columns,
  data,
  className = '',
  checkbox,
}) => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const handleCheckboxChange = (rowIndex: number) => {
    if (selectedRows.includes(rowIndex)) {
      setSelectedRows(selectedRows.filter((index) => index !== rowIndex));
    } else {
      setSelectedRows([...selectedRows, rowIndex]);
    }
  };

  const handleSelectAllChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedRows(data.map((_, index) => index));
    } else {
      setSelectedRows([]);
    }
  };

  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="min-w-full bg-white">
        <thead className="bg-gray-50">
          <tr>
            {checkbox && (
              <th className="px-6 py-3 text-left font-medium capitalize tracking-wider text-gray-500">
                <input
                  type="checkbox"
                  onChange={handleSelectAllChange}
                  checked={
                    selectedRows.length === data.length && data.length > 0
                  }
                  className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
              </th>
            )}
            {columns.map((column) => (
              <th
                key={column.accessor}
                className={clsx(
                  'px-6 py-4 text-left text-sm font-semibold capitalize tracking-wider text-gray-600',
                  column.className,
                )}
                scope="col"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={clsx('bg-white', { 'bg-gray-50': rowIndex % 2 === 0 })}
            >
              {checkbox && (
                <td className="border-b border-gray-300 px-6 py-4 text-sm font-semibold text-gray-700">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(rowIndex)}
                    onChange={() => handleCheckboxChange(rowIndex)}
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                  />
                </td>
              )}
              {columns.map((column) => (
                <td
                  key={column.accessor}
                  className={clsx(
                    'border-b border-gray-300 px-6 py-4 text-sm font-normal text-gray-700',
                    column.className,
                  )}
                >
                  {column.render ? column.render(row) : row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
