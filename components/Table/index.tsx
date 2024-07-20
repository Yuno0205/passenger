import React from 'react';

interface Column {
  header: string;
  accessor: string;
  render?: (row: any) => React.ReactNode;
}

interface TableProps {
  columns: Column[];
  data: any[];
  className?: string;
}

const Table: React.FC<TableProps> = ({ columns, data, className = '' }) => {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="min-w-full border border-gray-300 bg-white">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.accessor}
                className="border-b-1 border-gray-300 bg-slate-100 px-6 py-3 text-left text-sm font-medium uppercase text-gray-600 last:border-r"
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
              className={`bg-white ${rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
            >
              {columns.map((column) => (
                <td
                  key={column.accessor}
                  className="border-b border-gray-300 px-6 py-4 text-sm font-semibold text-gray-700 last:border-r-0"
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
