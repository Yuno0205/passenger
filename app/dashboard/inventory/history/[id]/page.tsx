import React from 'react';

const Invoice: React.FC = () => {
  return (
    <div className="mx-auto max-w-4xl bg-white p-8 shadow-md">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">CHECKING INVENTORY</h1>
        <span className="text-blue-500">#002121</span>
      </div>
      <div className="mb-8 grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold">Created by:</h2>
          <p>Nhật Hào</p>
          <p>Staff</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Created at:</h2>
          <p>Tuesday, June 25, 2024</p>
        </div>
      </div>
      <table className="mb-8 w-full text-left">
        <thead>
          <tr className="border-b-2">
            <th className="py-2">Ingredients</th>
            <th className="py-2">Unit</th>
            <th className="py-2">Stock</th>
            <th className="py-2">Stock adjusted</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-2">Ingredient 1</td>
            <td className="py-2">Kg</td>
            <td className="py-2">10</td>
            <td className="py-2">9.5</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">Ingredient 2</td>
            <td className="py-2">Cans</td>
            <td className="py-2">1</td>
            <td className="py-2">0</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">Ingredient 3</td>
            <td className="py-2">Litter</td>
            <td className="py-2">3</td>
            <td className="py-2">2.2</td>
          </tr>
        </tbody>
      </table>

      <div>
        <h3 className="font-semibold">NOTES</h3>
        <p>Ingredient 2 is out of stock. Thank you!</p>
      </div>
    </div>
  );
};

export default Invoice;
