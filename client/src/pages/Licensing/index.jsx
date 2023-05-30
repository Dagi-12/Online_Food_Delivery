import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowAltCircleLeft } from 'react-icons/fa';
export default function Licensing() {
  return (
    <div><div class="bg-gray-100 min-h-screen">
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-4 text-orange-500"><Link to="/" className=" ">
              <FaArrowAltCircleLeft className="inline-block mr-5 ml-5 text-4xl hover:text-black" />
              
        </Link>Licensing</h1>
    
    <div class="bg-white p-6 shadow rounded">
      <p class="mb-4">
        Thank you for choosing <span className='font-bold text-xl text-orange-500' >መሶብ Delivery</span>. This page outlines the licensing terms for the use of our products and services. By accessing or using our products and services, you agree to comply with these terms. Please read them carefully.
      </p>
      
      <h2 class="text-xl font-bold mb-2 text-orange-500">License Agreement</h2>
      <p class="mb-4">
        <span className='font-bold  ' >መሶብ Delivery</span> grants you a non-exclusive, non-transferable license to use our products and services in accordance with the terms and conditions outlined in this agreement. The license is subject to the restrictions and limitations set forth herein.
      </p>
      
      <h2 class="text-xl font-bold mb-2 text-orange-500">Restrictions</h2>
      <p class="mb-4">
        You may not sublicense, sell, rent, lease, distribute, or otherwise transfer our products and services to any third party without our prior written consent. You may not modify, reverse engineer, or attempt to extract the source code of our products and services.
      </p>
      
      <h2 class="text-xl font-bold mb-2 text-orange-500">Ownership</h2>
      <p class="mb-4">
        All intellectual property rights in our products and services, including but not limited to copyrights and trademarks, are the property of <span className='font-bold ' >መሶብ Delivery</span>. You acknowledge and agree that you do not acquire any ownership rights by using our products and services.
      </p>
      
      <h2 class="text-xl font-bold mb-2 text-orange-500">Support and Updates</h2>
      <p class="mb-4">
        We may provide support and updates for our products and services at our discretion. Support and updates may be subject to additional fees or terms. We reserve the right to modify, suspend, or discontinue any part of our products and services without prior notice.
      </p>
      
      <h2 class="text-xl font-bold mb-2 text-orange-500">Disclaimer</h2>
      <p class="mb-4">
        Our products and services are provided "as is" without any warranty or representation of any kind, whether express or implied. We disclaim any and all warranties, including but not limited to fitness for a particular purpose and non-infringement.
      </p>
      
      <h2 class="text-xl font-bold mb-2 text-orange-500">Governing Law</h2>
      <p>
        This License Agreement shall be governed by and construed in accordance with the laws of Ethiopia. Any legal action or dispute arising out of this agreement shall be brought exclusively in the courts of Ethiopia.
      </p>
    </div>
  </div>
</div>
</div>
  )
}
