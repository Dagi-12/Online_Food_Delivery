// import Button from "./elements/Button";
import { FaMotorcycle } from "react-icons/fa";

export const RideWithUs = () => {
  return (
    <div className="banner w-full md:w-2/3 px-7 mx-auto flex flex-col md:flex-row items-center justify-between">
      <div className="banner-image w-full md:w-1/2 p-3 md:order-1">
        <img src={require("../assets/images/rider.jpg")} alt="banner" className="max-h-95" style={{ maxHeight: '400px' }} />
      </div>
      <div className="banner-description w-full md:w-1/2 p-3 flex flex-col items-start justify-center md:order-2">
        <h2 className="mb-6 text-4xl md:text-6xl font-bold text-orange-400">Ride With Us!</h2>
        <p className="font-semibold text-lg md:text-xl text-gray-600 py-2">Deliver with us and become a family. Let's grow together.</p>
        <div className="btn-container mt-4">
          <a href="/rider-registration" className="text-yellow-400 font-bold text-xl md:text-3xl hover:text-4xl hover:text-yellow-500  flex items-center">
            Apply as a Rider
            <FaMotorcycle className="ml-2 text-4xl hover:text-4xl" />
          </a>
        </div>
      </div>
    </div>
  );
}
