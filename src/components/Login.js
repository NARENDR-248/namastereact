import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-10'>
      <div className='bg-white p-8 rounded-lg shadow-2xl overflow-y-hidden'>
        <h2 className='text-3xl font-bold mb-8 text-center text-gray-800'>Login</h2>
        <input
          type="text"
          placeholder='Enter your username'
          className='w-full p-3 mb-5 border border-gray-300 rounded-lg'
        />
        <input
          type="password"
          placeholder='Enter your password'
          className='w-full p-3 mb-8 border border-gray-300 rounded-lg'
        />
        <button
          className='w-full bg-gradient-to-r from-teal-500 to-lime-600 hover:from-teal-600 hover:to-lime-700 text-white font-bold py-3 rounded-lg'
        >
          Login
        </button>
        <p className='mt-4'>
          New here? <Link to="/register" className='text-blue-500 hover:underline'>Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
