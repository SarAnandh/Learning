import { useState } from "react";

const Forms = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobileno: '',
    email: '',
    pincode: '',
  });

const [errors, setErrors] = useState({
  name: '',
  mobileno: '',
  email: '',
  pincode: '',
});

const validatedField = (field: string, value: string) => {
  let error = '';

  switch (field) {
    case 'name':
      if (!value.trim()) {
        error = 'Name is required';
      } else if (value.length < 2) {
        error = 'Name must be at least 2 characters';
      }
      break;

    case 'mobileno':
      if (!value.trim()) {
        error = 'Mobile number is required';
      } else if (!/^\d{10}$/.test(value)) {
        error = 'Mobile number must be exactly 10 digits';
      }
      break;

    case 'email':
      if (!value.trim()) {
        error = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = 'Invalid email format';
      }
      break;

    case 'pincode':
      if (!value.trim()) {
        error = 'Pincode is required';
      } else if (!/^\d{6}$/.test(value)) {
        error = 'Pincode must be 6 digits';
      }
      break;

    default:
      break;
  }

  setErrors(prev => ({
    ...prev,
    [field]: error,
  }));
};

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
    validatedField(field,value)
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert('Submitted successfully');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 shadow-2xl rounded-xl p-10 w-full max-w-2xl text-white space-y-8"
      >
        <h1 className="text-3xl font-bold text-center text-blue-400 hover:text-gray-50" >🚀 Contact Form</h1>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="w-full px-4 py-2 border border-gray-500 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-gray-900"
            />
           {errors.name && (
  <p className="text-red-400 text-sm mt-1">{errors.name}</p>
)}
          </div>

          {/* Mobile */}
          <div>
            <label className="flex  items-center block text-sm font-medium mb-1">Mobile<p className="text-red-400 m-2">*</p></label>
            <input
              type="tel"
              value={formData.mobileno}
              onChange={(e) => handleInputChange('mobileno', e.target.value)}
              className="w-full px-4 py-2 border border-gray-500 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400  hover:border-gray-900"
            />
           {errors.mobileno && (
  <p className="text-red-400 text-sm mt-1">{errors.mobileno}</p>
)}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full px-4 py-2 border border-gray-500 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400  hover:border-gray-900"
            />
            {errors.email && (
  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
)}
          </div>

          {/* Pincode */}
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <input
              type="text"
              value={formData.pincode}
              onChange={(e) => handleInputChange('pincode', e.target.value)}
              className="w-full px-4 py-2 border border-gray-500 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400  hover:border-gray-900"
            />
            {errors.pincode && (
  <p className="text-red-400 text-sm mt-1">{errors.pincode}</p>
)}
          </div>

        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 hover:bg-blue-200 text-white font-semibold rounded shadow transition w-2xs "
        
         >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Forms;
