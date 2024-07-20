'use client';
import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  category: string;
  unit: string;
  inStock: number;
  lowStock: number;
  description: string;
  image: File | null;
}

const AddProduct: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',

    category: '',
    unit: '',
    inStock: 0,
    lowStock: 0,
    description: '',
    image: null,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:
        name === 'image' ? (e.target as HTMLInputElement).files![0] : value,
    });
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              Category
            </label>
            <input
              type="text"
              name="category"
              id="category"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={formData.category}
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              htmlFor="inStock"
              className="block text-sm font-medium text-gray-700"
            >
              In Stock
            </label>
            <input
              type="number"
              name="inStock"
              id="inStock"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={formData.inStock}
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              htmlFor="lowStock"
              className="block text-sm font-medium text-gray-700"
            >
              Low Stock
            </label>
            <input
              type="number"
              name="lowStock"
              id="lowStock"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={formData.lowStock}
              onChange={handleChange}
            />
          </div>

          <div className="col-span-2">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="col-span-2">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Product Image
            </label>
            <input
              type="file"
              name="image"
              id="image"
              className="mt-1 block w-full"
              onChange={handleChange}
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-4 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
