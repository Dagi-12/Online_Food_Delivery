import { useNavigate } from "react-router-dom";
import Button from "./elements/Button";
import { useState, useEffect } from "react";

export const Banner = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkAuthToken(); // Call the function when the component mounts
  }, []);

  const checkAuthToken = () => {
    const token = sessionStorage.getItem("Auth token");
    setIsLoggedIn(!!token); // Set isLoggedIn based on token existence
  };

  const handleSeeMenu = () => {
    if (isLoggedIn) {
      navigate("/menu"); // Navigate to /menus if logged in
    } else {
      navigate("/login"); // Navigate to /login if not logged in
    }
  };

  return (
    <div className="banner w-full md:w-2/3 px-7 mx-auto relative flex items-center justify-between">
      <div className="banner-description w-full md:w-1/2 p-3">
        <h2 className="mb-6 text-4xl font-bold text-black">Food Ordering made easy</h2>
        <p className="font-semibold text-lg text-black py-2">
          We deliver our kitchen's finest offerings to your doorstep with utmost speed.
        </p>
        <div className="btn-container">
   <button
  onClick={handleSeeMenu}
  className="text-white font-bold text-2xl bg-orange-400 hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out shadow-md rounded-full px-2 py-2 hover:scale-110"
>
  See Menu
</button>


        </div>
      </div>
      <div className="banner-image w-full md:w-1/2 p-3 flex justify-end">
        <img src={require("../assets/images/food-banner.png")} alt="banner" className="max-h-95" />
      </div>
    </div>
  );
};
