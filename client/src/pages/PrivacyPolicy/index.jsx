import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowAltCircleLeft } from 'react-icons/fa';
export default function Policy() {
  return (
    <div><div class="bg-gray-100 min-h-screen">
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-4 text-orange-500"> <Link to="/" className=" ">
              <FaArrowAltCircleLeft className="inline-block mr-5 ml-5 text-4xl hover:text-black" />
              
        </Link>Privacy Policy</h1>
    
    <div class="bg-white p-6 shadow rounded">
      <p class="mb-4">
          At <span className='font-bold text-xl text-orange-500' >መሶብ Delivery</span> , we value the privacy of our users and are committed to protecting it. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you use our website and services.
      </p>
      
      <h2 class="text-xl font-bold mb-2 text-orange-500">Information We Collect</h2>
      <p class="mb-4">
        We may collect various types of information from our users, including:
        - Personal information such as name, email address, and phone number.
        - Demographic information such as location.
        - Usage data such as IP address, browser type, and pages visited.
      </p>
      
      <h2 class="text-xl font-bold mb-2 text-orange-500">How We Use Your Information</h2>
      <p class="mb-4">
        The information we collect is used to provide and improve our services, personalize user experience, analyze usage patterns, and communicate with users. We may also use your information for marketing and promotional purposes with your consent.
      </p>
      
      <h2 class="text-xl font-bold mb-2 text-orange-500">Information Sharing</h2>
      <p class="mb-4">
        We do not sell or rent your personal information to third parties. However, we may share your information with trusted partners and service providers who assist us in operating our website and delivering our services. We ensure that these third parties handle your information securely and in compliance with applicable privacy laws.
      </p>
      
      <h2 class="text-xl font-bold mb-2 text-orange-500">Data Security</h2>
      <p class="mb-4">
        We take reasonable measures to protect your information from unauthorized access, disclosure, or alteration. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.
      </p>
      
      <h2 class="text-xl font-bold mb-2 text-orange-500">Your Choices</h2>
      <p class="mb-4">
        You have the right to access,create you own account. You may also choose to opt out of receiving marketing communications from us. Please contact us if you wish to exercise any of these rights.
      </p>
      
      <h2 class="text-xl font-bold mb-2 text-orange-500">Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we encourage you to review the policy periodically.
      </p>
    </div>
  </div>
</div>
</div>
  )
}
