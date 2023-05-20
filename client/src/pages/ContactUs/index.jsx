import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';


export default function ContactUs() {
 const { register, handleSubmit, formState: { errors } } = useForm();
 const [loading, setLoading] = useState(false);

 const onSubmit = async (data,e) => {
    console.log(data)
  setLoading(true);
  try {
    const response = await fetch('http://localhost:4000/api/contactUs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (response.ok) {
     setLoading(false);
      toast.success("FeedBack Sent Sucessfully!🎉", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
           // Reset the form
           e.target.reset()
    } else {
      console.error('Failed to create rider');
    }
  } catch (err) {
    console.error(err);
  }
  setLoading(false);
};

  return (
    <div>
        <h2 className="mb-6 text-5xl font-bold text-gray-700 text-center p-5">GET IN TOUCH!</h2>
        {/* 3 section */}
        <div className='mr-5 ml-5 p-2 bg-gradient-to-r from-amber-300 via-purple-300 to-green-300 rounded-md'>
         <div className="flex flex-wrap mt-8 w-full justify-between ">
        <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <h1 className="font-bold mb-2 text-xl">Address</h1>
          <p>DebreTabor university</p>
          <p>BahirDar</p>
        </div>
        <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <h1 className="font-bold mb-2 text-xl">Phone</h1>
        
          <p>+251 921792299</p>
        </div>
        <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <h1 className="font-bold mb-2 text-xl">Email</h1>
          <p>Dagimawiengidawork371@gmail.com</p>
          <p>Temsgenteferi19@gmail.com</p>
          <p>Memex@gmail.com</p>
        </div>
      </div></div>
      {/* 3section */}
      
    <div className="grid grid-cols-2 gap-4 items-center px-4 py-8 mx-auto mt-4 rounded-md shadow-md bg-gray-100 sm:max-w-md md:max-w-lg lg:max-w-5xl xl:max-w-2xl m-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Message us</h1>
        <p className="text-gray-800">We would be happy to get a request or suggestion from you, lets build something great together!</p>
      </div>
      <div>
        <h3 className="mb-6 text-4xl font-bold text-orange-400">Provide your Feedback</h3>
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium text-gray-800">
              Email
            </label>
            <input
            {...register('email',{ required: true })}
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:bg-white focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="feedback" className="block mb-2 font-medium text-gray-800">
              Feedback
            </label>
            <textarea
            {...register('feedback',{ required: true })}
              id="feedback"
              name="feedback"
              rows="5"
              required
              className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:bg-white focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-orange-400 rounded-md hover:bg-orange-600 focus:outline-none focus:bg-green-600"
            >
              {loading ? "loading" : 'Submit'}
            </button>
          </div>
        </form>
         <ToastContainer />
      </div>
    </div></div>
  );
}
