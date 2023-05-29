import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '../../components/elements/Button';

const Register = () => {
  let navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [loading, setLoading] = useState(false);

  const password = watch('password');

  const onSubmit = async (data) => {
    setLoading(true);
    const authentication = getAuth();

    try {
      // create user in Firebase Authentication
      const response = await createUserWithEmailAndPassword(
        authentication,
        data.email,
        data.password
      );
      const uid = response.user.uid;

      // store user ID in session storage
      sessionStorage.setItem('User Id', uid);
      sessionStorage.setItem('Auth token', response._tokenResponse.refreshToken);
      window.dispatchEvent(new Event('storage'));

      // create user in MongoDB
      const apiResponse = await fetch('http://localhost:4000/api/create-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          name: data.name,
          _id: uid,
        }),
      });

      if (apiResponse.status === 200) {
        setLoading(false);
        toast.success('Account created successfully!🎉', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
        navigate('/');
      } else {
        console.log(await apiResponse.json());
      }
    } catch (error) {
      setLoading(false);
      if (error.code === 'auth/email-already-in-use') {
        toast.error('Email Already In Use');
      } else {
        console.log(error);
      }
    }
  };

  return (
    <div className="h-screen bg-white flex items-center justify-center mt-20 mb-20 ">
      <div className="rounded-lg max-w-md w-full flex flex-col items-center justify-center relative">
        <div className="absolute inset-0 transition duration-300 animate-pink blur gradient bg-gradient-to-tr from-purple-500 to-green-500 "></div>
        <div className="p-10 rounded-xl z-10 w-full h-full bg-white">
          <h5 className="text-3xl">Register</h5>
          <form className="w-full space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-400">
                Name
              </label>
              <input
                {...register('name', { required: true, pattern: /^[A-Za-z ]+$/i })}
                id="name"
                type="text"
                className={`block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200 ${errors.name ? 'border-red-500' : ''}`}
              />
              {errors.name && <p className="text-red-500">Please enter a valid name</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-400">
                Email
              </label>
              <input
                {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                id="email"
                type="email"
                className={`block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200 ${errors.email ? 'border-red-500' : ''}`}
              />
              {errors.email && <p className="text-red-500">Please enter a valid email</p>}
            </div>
            <div>
              <label htmlFor="password" className="block text-lg font-medium text-gray-400">
                Password
              </label>
              <input
                {...register('password', { required: true, minLength: 8 })}
                id="password"
                type="password"
                className={`block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200 ${errors.password ? 'border-red-500' : ''}`}
              />
              {errors.password && (
                <p className="text-red-500">
                  Password must be at least 8 characters long
                </p>
              )}
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-lg font-medium text-gray-400">
                Confirm Password
              </label>
              <input
                {...register('confirmPassword', { required: true, validate: (value) => value === password })}
                id="confirmPassword"
                type="password"
                className={`block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200 ${errors.confirmPassword ? 'border-red-500' : ''}`}
              />
              {errors.confirmPassword && (
                <p className="text-red-500">Passwords do not match</p>
              )}
            </div>

            <Button size="large">{loading ? 'Loading' : 'Register'}</Button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Register;
