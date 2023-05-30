import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowAltCircleLeft } from 'react-icons/fa';
export default function Terms() {
  return (
    <div><div class="bg-gray-100 min-h-screen">
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-4 text-orange-500"><Link to="/" className=" ">
              <FaArrowAltCircleLeft className="inline-block mr-5 ml-5 text-4xl hover:text-black" />
              
        </Link>Terms & Conditions</h1>
    
    <div class="bg-white p-6 shadow rounded">
      <p class="mb-4">
        Welcome to <span className='font-bold text-xl text-orange-500' >መሶብ Delivery</span>. These Terms & Conditions govern your use of our website and services. By accessing or using our website, you agree to comply with these terms. Please read them carefully.
      </p>
      
      <h2 class="text-xl font-bold mb-2 text-orange-500">Use of Our Services</h2>
      <p class="mb-4">
        You must have a valid email address to use our services. By using our services, you agree to provide accurate and complete information and to comply with all applicable laws and regulations.
      </p>
      
      <h2 class="text-xl font-bold mb-2 text-orange-500">Intellectual Property</h2>
      <p class="mb-4">
        All content on our website, including text, graphics, logos, and images, is the property of <span className='font-bold ' >መሶብ Delivery</span> and is protected by intellectual property laws. You may not use, modify, or distribute any content without our prior written consent.
      </p>
      
      <h2 class="text-xl font-bold mb-2 text-orange-500">User Accounts</h2>
      <p class="mb-4">
        To access certain features of our services, you may need to create a user account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Notify us immediately of any unauthorized use or security breach.
      </p>
      
      <h2 class="text-xl font-bold mb-2 text-orange-500">Limitation of Liability</h2>
      <p class="mb-4">
        <span className='font-bold ' >መሶብ Delivery</span> shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use or inability to use our services. We make no warranties or representations regarding the accuracy or reliability of the information provided on our website.
      </p>
      
      <h2 class="text-xl font-bold mb-2 text-orange-500">Indemnification</h2>
      <p class="mb-4">
        You agree to indemnify and hold <span className='font-bold ' >መሶብ Delivery</span> harmless from any claims, losses, liabilities, expenses, or damages arising out of your use of our services or violation of these Terms & Conditions.
      </p>
      
      <h2 class="text-xl font-bold mb-2 text-orange-500">Governing Law</h2>
      <p>
        These Terms & Conditions shall be governed by and construed in accordance with the laws of Ethiopia. Any legal action or dispute arising out of these terms shall be brought exclusively in the courts of the country.
      </p>
    </div>
  </div>
</div>
</div>
  )
}
