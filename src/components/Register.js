import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted', formData);
  };

  return (
    <div className='flex flex-col justify-center items-center mt-10 px-4'>
      <div className='bg-white p-8 rounded-lg shadow-2xl w-full max-w-md'>
        <h2 className='text-3xl font-bold mb-8 text-center text-gray-800'>Register</h2>
        <form onSubmit={handleSubmit} className='flex flex-col'>
          <input
            type='text'
            name='firstName'
            placeholder='Enter your first name'
            value={formData.firstName}
            onChange={handleChange}
            className='w-full p-3 mb-5 border border-gray-300 rounded-lg'
          />
          <input
            type='text'
            name='lastName'
            placeholder='Enter your last name'
            value={formData.lastName}
            onChange={handleChange}
            className='w-full p-3 mb-5 border border-gray-300 rounded-lg'
          />
          <input
            type='password'
            name='password'
            placeholder='Enter your password'
            value={formData.password}
            onChange={handleChange}
            className='w-full p-3 mb-5 border border-gray-300 rounded-lg'
          />
          <input
            type='password'
            name='confirmPassword'
            placeholder='Confirm your password'
            value={formData.confirmPassword}
            onChange={handleChange}
            className='w-full p-3 mb-8 border border-gray-300 rounded-lg'
          />
          <button
            type='submit'
            className='w-full bg-gradient-to-r from-teal-500 to-lime-600 hover:from-teal-600 hover:to-lime-700 text-white font-bold py-3 rounded-lg'
          >
            Register
          </button>
          <p className='mt-4 text-center'>
            New here? <Link to="/login" className='text-blue-500 hover:underline'>Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
