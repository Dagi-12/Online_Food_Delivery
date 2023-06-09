
import React from 'react'
import Button from "../../components/elements/Button";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";



export const RiderRegistration = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
 let navigate = useNavigate();
  const onSubmit = async (data) => {
    console.log(data)
  setLoading(true);
  try {
    const response = await fetch('http://localhost:4000/api/rider', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (response.ok) {
     
      navigate(`/rider-sucess?firstName=${data.firstName}`);
      // Reset the form
      
    } else {
      console.error('Failed to create rider');
    }
  } catch (err) {
    console.error(err);
  }
  setLoading(false);
};


  return (
    <>
   <div className="max-w-3/4 mx-auto px-4 sm:px-6 lg:px-8 mt-4 ">
  <h2 className="text-3xl font-bold text-white text-center mb-8 animate-pulse bg-amber-300 rounded-xl p-3">Become a Rider for Our Company</h2>
<div className="max-w-3/4 mx-auto px-4 sm:px-6 lg:px-8">
  <div className="transform -skew-x-3 bg-gray-100 shadow-xl">
    <div className="p-8">
      <p className="text-gray-700 text-lg leading-loose mb-8 animate-fade-in-up">
        At our company, we're always on the lookout for talented and motivated riders to join our team. If you're passionate about delivering great service to our customers and want to become a part of our growing community, we encourage you to apply using the following form. Simply fill out your details and submit your application, and we'll get back to you as soon as possible.
      </p>
      <p className="text-gray-700 text-lg leading-loose animate-fade-in-up">
        After submitting your application, our team will carefully review your information and contact you to discuss the next steps in the application process. We appreciate your interest in working with our company, and we look forward to hearing from you soon.
      </p>
    </div>
  </div>
</div>

</div>


    <div className=' m-50 '>
    <div className="h-full bg-white flex items-center justify-center mb-10 mt-10 " >
     
      <div className="rounded-lg max-w-xl w-full flex flex-col items-center justify-center relative">
        <div className="absolute inset-0 transition duration-300 animate-pink blur gradient bg-gradient-to-tr from-red-500 to-yellow-500"></div>
        <div className="p-10 rounded-xl z-10 w-full h-full bg-white">
          <h5 className="text-3xl text-center">Rider Registration</h5>
          <form className="w-full space-y-6 h-full" onSubmit={handleSubmit(onSubmit)}>
           <div>
  <label htmlFor="firstName" className="block text-lg font-medium text-orange-400">First Name</label>
  <input
    {...register('firstName', {
      required: true,
      pattern: /^[A-Za-z]+$/i
    })}
    id="firstName"
    type="text"
    className="block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
  />
  {errors.firstName && <p className="text-red-600">First Name is required and should only contain characters</p>}
</div>
<div>
  <label htmlFor="lastName" className="block text-lg font-medium text-orange-400">Last Name</label>
  <input
    {...register('lastName', {
      required: true,
      pattern: /^[A-Za-z]+$/i
    })}
    id="lastName"
    type="text"
    className="block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
  />
  {errors.lastName && <p className="text-red-600">Last name is required and should only contain characters</p>}
</div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium text-orange-400">Email</label>
              <input
                {...register('email', { required: true })}
                id="email"
                type="email"
                // required
                className={`block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200 ${errors.email ? "border-red-500" : ""}`}
              />
              {errors.email && <p className="text-red-600">Email is required</p>}
            </div>
            <div>
  <label htmlFor="phone" className="block text-lg font-medium text-orange-400">Phone Number</label>
  <input
    {...register('phone', {
      required: true,
      pattern: /^09[0-9]{8}$/,
      minLength: 10,
      maxLength: 10
    })}
    id="phone"
    type="tel"
    className={`block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200 ${errors.phone ? 'border-red-500' : ''}`}
  />
  {errors.phone && (
    <p className="text-red-600">
      wrong format, Enter a valid phone number
    </p>
  )}
</div>

            <div>
  <label htmlFor="vehicleType" className="block text-lg font-medium text-orange-400">Vehicle Type</label>
<div>
  <input 
    {...register('vehicleType' )}
    type="radio" 
    id="car" 
    name="vehicleType" 
    value="car" 
    className="mr-2"
    required
    defaultChecked
  />
  <label htmlFor="car" className="text-orange-500 mr-4">Car</label>
  
  <input 
    {...register('vehicleType')}
    type="radio" 
    id="bicycle" 
    name="vehicleType" 
    value="bicycle" 
    className="mr-2"
  />
  <label htmlFor="bicycle" className="text-orange-500 mr-4">Bicycle</label>
  
  <input 
    {...register('vehicleType')}
    type="radio" 
    id="motorcycle" 
    name="vehicleType" 
    value="motorcycle" 
    className="mr-2"
  />
  <label htmlFor="motorcycle" className="text-orange-500 mr-4">Motorcycle</label>
</div>
 <div>
   <label htmlFor="AboutYourSelf" className="block text-lg font-medium text-orange-400">About Your Self</label>
              <textarea
                {...register('AboutYourSelf',{ required: true })}
                id="AboutYourSelf"
                type="text-area"
                placeholder='Write about you self and previous professions in words not more than 50.'
                // required
                className="block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
              />
              {errors.AboutYourSelf && <p className="text-red-600">About you is required</p>}
            </div>

</div>
<Button  size="large">{loading ? "loading" : 'Register'}</Button>
           </form>
         
           </div>
           </div>
           </div>
           </div></>)}

