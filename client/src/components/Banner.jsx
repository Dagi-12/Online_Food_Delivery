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
    <div className="banner w-full md:w-4/5 px-4 md:px-7 mx-auto relative flex flex-col md:flex-row items-center justify-between">
      <div className="banner-description w-full md:w-1/2 p-3">
      <h2 className="mb-4 text-4xl font-bold text-orange-500">"Food Ordering Made Easy"</h2>
  <p className="font-semibold text-base md:text-lg text-black py-2 animate-fadeIn">
  Experience the convenience of doorstep delivery. Enjoy mouthwatering pizzas, salads, burgers, and more, delivered hot and fresh to your door. Treat yourself to a delicious meal without leaving home.
</p>

        <div className="btn-container">
          <Button
            onClick={handleSeeMenu}
            variant="primary"
            className="text-xl md:text-2xl mt-4 hover:bg-orange-500"
          >
            See Menu
          </Button>
        </div>
      </div>
      <div className="banner-image w-full md:w-1/2 p-3 flex justify-end">
        <img src={require("../assets/images/bane.png")} alt="banner" className="max-h-72 md:max-h-95" />
      </div>
    </div>
  );
};
