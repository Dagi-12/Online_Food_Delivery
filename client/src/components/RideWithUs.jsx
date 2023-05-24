import Button from "./elements/Button"

import { FaMotorcycle } from "react-icons/fa";
export const RideWithUs = () => {
  return (
    <div className="banner w-full md:w-2/3 px-7 mx-auto relative flex items-center-justify-between ">
      <div className="banner-image w-full md:w-1/2 p-3">
        <img src={require("../assets/images/rider.jpg")} alt="banner" className="max-h-95" />
      </div>
      <div className="banner-description w-full md:w-1/2 p-3 flex flex-col items-start justify-center">
        <h2 className="mb-6 text-6xl font-bold text-orange-400 ">Ride With Us !</h2>
        <p className="font-semibold text-lg text-grey-600 py-2 text-black-400">Deliver with us and become a family, lets grow together.</p>
        <div className="btn-container">
        
          <a href="/rider-registration" className="text-yellow-400  font-bold text-3xl  hover:text-yellow-500  text-decoration-line px 3 hover:scale-125 hover:text-4xl ">Register as a Rider<FaMotorcycle className="inline-block ml-2  " />  </a>
        </div>
      </div>
    </div>
  )
}
