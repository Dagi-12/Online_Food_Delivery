import React from 'react';
import { useNavigate } from 'react-router-dom';
import FeaturedRestaurantsSlider from '../../components/FeaturedRestaurantsSlider';
import { FaHeadset,FaLock,FaTruck } from  "react-icons/fa";
import aboutImage from "../../assets/images/aboutus.png";

export const About = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/register');
  };

  return (
    <div className="bg-white">
      <div className="text-center pl-5 pr-5 pt-10">
        <h2 className="text-4xl font-bold mb-4 text-orange-500">
          About Us
        </h2>
        <div className="h-1 w-full bg-red-600 mx-auto mb-5"></div>
      </div>
      <div className="p-6 sm:p-12">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="flex items-center justify-center">
              <div className="animate-pulse animate-delay-7000">
                <img
                  src={aboutImage}
                  alt=""
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 text-orange-500">Welcome to our online food delivery platform!</h3>
                <p className="text-lg leading-8">
                  Our mission is to make ordering food as easy and convenient as possible for you. We offer a wide variety of delicious meals from many different restaurants, all available for delivery straight to your doorstep.
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2  text-orange-500">Discover a wide selection of cuisines</h3>
                <p className="text-lg leading-8">
                  Our platform is user-friendly and easy to navigate, with menus from different restaurants clearly displayed. You can search for specific types of cuisine or dishes, or simply browse through our extensive list of options.
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2  text-orange-500">Support local businesses</h3>
                <p className="text-lg leading-8">
                  So what are you waiting for? Sign up today and start exploring all the delicious food options our platform has to offer. And remember, with every meal you order, you're supporting local businesses and helping to build a stronger, more vibrant community.
                </p>
              </div>
              <button
                className="bg-orange-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded mt-8 animate-bounce"
                onClick={handleSignUpClick}
              >
                Sign Up Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-10 m-5">
        <div className="max-w-screen-xl mx-auto ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold mb-4"><FaHeadset className="mr-2 text-orange-500" /> 24/7 Customer Support</h4>
              <p className="text-gray-700">
                Our dedicated customer support team is available 24/7 to assist you with any issues or inquiries you may have. We strive to provide the best service possible to ensure your satisfaction.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-4"><FaLock className="mr-2 text-orange-500 " /> Secure Online Payments</h4>
              <p className="text-gray-700">
                We prioritize the security of your payments. Our platform uses advanced encryption technology to ensure that your financial information is safe and protected throughout the transaction process.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-4"><FaTruck className="mr-2 text-orange-500" /> Fast and Reliable Delivery</h4>
              <p className="text-gray-700">
                We partner with trusted delivery services to ensure that your orders are delivered promptly and reliably. You can track your delivery in real-time and rest assured that your food will arrive fresh and delicious.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h2 className='text-3xl text-orange-500 text-center font-bold mb-5'>Featured Restaurants</h2>
      < FeaturedRestaurantsSlider />
    </div>
  );
};


