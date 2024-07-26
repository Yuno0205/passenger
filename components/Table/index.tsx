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
}

const Table: React.FC<TableProps> = ({ columns, data, className = '' }) => {
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
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              <input
                type="checkbox"
                onChange={handleSelectAllChange}
                checked={selectedRows.length === data.length && data.length > 0}
              />
            </th>
            {columns.map((column) => (
              <th
                key={column.accessor}
                className={clsx(
                  'px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500',
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
              <td className="border-b border-gray-300 px-6 py-4 text-sm font-semibold text-gray-700">
                <input
                  type="checkbox"
                  checked={selectedRows.includes(rowIndex)}
                  onChange={() => handleCheckboxChange(rowIndex)}
                />
              </td>
              {columns.map((column) => (
                <td
                  key={column.accessor}
                  className={clsx(
                    'border-b border-gray-300 px-6 py-4 text-sm font-semibold text-gray-700',
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
