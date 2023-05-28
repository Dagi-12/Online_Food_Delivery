import React from 'react';
import { FaTruck, FaUsers, FaBicycle, FaClock } from "react-icons/fa";

export default function Information() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
      <div className="bg-white rounded-lg shadow-xl p-8 pb-15">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <FaTruck className="text-3xl text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-700 text-center">Enjoy speedy and efficient food delivery right to your doorstep. We prioritize delivering your favorite meals in the shortest possible time.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <FaUsers className="text-3xl text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Become a Partner</h3>
            <p className="text-gray-700 text-center">Join our network of partner restaurants and expand your customer base. Partner with us to grow your business and reach a wider audience.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <FaBicycle className="text-3xl text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Ride with Us</h3>
            <p className="text-gray-700 text-center">Looking for flexible work opportunities? Join our team of riders and earn money while delivering delicious meals to our customers.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <FaClock className="text-3xl text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Saves Time</h3>
            <p className="text-gray-700 text-center">Skip the hassle of cooking and waiting at restaurants. Our online food delivery service saves you valuable time so you can focus on what matters most.</p>
          </div>
        </div>
        <h2 className='mt-10 text-center text-3xl font-semibold text-orange-500 '>Join Our Community And Grow Your Business</h2>
      </div>
    </div>
  );
}
