// import React, { useState } from 'react';
// import Button from '@/components/Button';
// import TextField from '@/components/TextField';

// interface AddUserModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const AddUserModal: React.FC<AddUserModalProps> = ({ isOpen, onClose }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     username: '',
//     password: '',
//     role: 'staff',
//     status: 'Active',
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission logic
//     onClose();
//   };

//   return (
//     <div isOpen={isOpen} onClose={onClose}>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <TextField
//           label="Name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
          
//         />
//         <TextField
//           label="Username"
//           name="username"
//           value={formData.username}
//           onChange={handleChange}
          
//         />
//         <TextField
//           label="Password"
//           name="password"
//           type="password"
//           value={formData.password}
//           onChange={handleChange}
          
//         />
//         <div className="space-y-1">
//           <label htmlFor="role" className="block text-sm font-medium text-gray-700">
//             Role
//           </label>
//           <select
//             id="role"
//             name="role"
//             value={formData.role}
//             onChange={handleChange}
//             className="block w-full rounded-md border border-gray-300 p-2.5 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//           >
//             <option value="admin">Admin</option>
//             <option value="staff">Staff</option>
//           </select>
//         </div>
//         <div className="space-y-1">
//           <label htmlFor="status" className="block text-sm font-medium text-gray-700">
//             Status
//           </label>
//           <select
//             id="status"
//             name="status"
//             value={formData.status}
//             onChange={handleChange}
//             className="block w-full rounded-md border border-gray-300 p-2.5 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//           >
//             <option value="Active">Active</option>
//             <option value="Inactive">Inactive</option>
//           </select>
//         </div>
//         <div className="flex justify-end space-x-2">
//           <Button type="button" onClick={onClose} className="bg-gray-200 text-black">
//             Cancel
//           </Button>
//           <Button type="submit" className="bg-blue-500 text-white">
//             Save
//           </Button>
//         </div>
//       </form>
//     </d>
//   );
// };

// export default AddUserModal;
