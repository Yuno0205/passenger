import Button from '@/components/Button';
import ImageUploader from '@/components/ImageUpload';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useState, ChangeEvent, FormEvent } from 'react';

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  image: string;
  category: string;
  stock: number;
  lowstock: number;
  unit: string;
  status: string;
  description: string;
}

const AddProductModal: React.FC<AddProductModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    image: '',
    unit: '',
    stock: 0,
    lowstock: 0,
    category: '',
    status: '',
    description: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'price' ? Number(value) : value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
      <div className="relative max-h-[700px] w-full max-w-2xl overflow-y-scroll rounded-lg bg-white p-4 shadow dark:bg-gray-800 md:h-auto">
        {/* Modal header */}
        <div className="mb-4 flex items-center justify-between rounded-t border-b pb-4 dark:border-gray-600">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Add Product
          </h3>
          <button
            type="button"
            className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={onClose}
          >
            <XMarkIcon className="w-5" />
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        {/* Modal body */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="title"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="focus:ring-primary-600 focus:border-primary-600 dark:focus:border-primary-500 dark:focus:ring-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder="Type product title"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="brand"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Unit
              </label>
              <select
                id="category"
                name="category"
                className="focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select unit
                </option>
                <option value="TV">Kg</option>
                <option value="PC">Pack</option>
                <option value="GA">Litters</option>
                <option value="PH">Cans</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="price"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Stock
              </label>
              <input
                type="number"
                name="price"
                id="price"
                className="focus:ring-primary-600 focus:border-primary-600 dark:focus:border-primary-500 dark:focus:ring-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder="$2999"
                required
                value={formData.stock}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="price"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Low stock
              </label>
              <input
                type="number"
                name="lowStock"
                id="price"
                className="focus:ring-primary-600 focus:border-primary-600 dark:focus:border-primary-500 dark:focus:ring-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder="$2999"
                required
                value={formData.lowstock}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="category"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                className="focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select category
                </option>
                <option value="TV">Dairy</option>
                <option value="PC">Coffee Beans</option>
                <option value="GA">Syrup</option>
                <option value="PH">Powder</option>
                <option value="PH">Sweeteners</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="price"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Ingredient
              </label>
              <ImageUploader />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="description"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                className="focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder="Write product description here"
                value={formData.description}
                onChange={handleChange}
              ></textarea>

              <div className="mt-5 flex justify-end">
                <Button>Add ingredient</Button>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 inline-flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
          >
            <svg
              className="-ml-1 mr-1 h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            Add new product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;
