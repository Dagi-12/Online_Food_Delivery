import logo from "../assets/images/logo.png";
import cartIcon from "../assets/icons/cart.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "./elements/Button";
import { useEffect, useState } from "react";
import { FaHome, FaSignOutAlt } from "react-icons/fa";

export const Header = ({ cartCount }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    sessionStorage.removeItem('Auth token');
    sessionStorage.removeItem('User Id');
    setIsLoggedIn(false);
    navigate("/");
  };

  useEffect(() => {
    const checkAuthToken = () => {
      const token = sessionStorage.getItem('Auth token');
      if (token) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };

    checkAuthToken(); // Call checkAuthToken directly

    window.addEventListener('storage', checkAuthToken);

    return () => {
      window.removeEventListener('storage', checkAuthToken);
    };
  }, []);

  return (
    <nav id="header" className="gradient bg-gradient-to-tr from-amber-200 to-orange-400 text-white rounded-md mx-3">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="logo-wrapper pl-4 flex items-center">
          <Link to="/" className="toggleColor text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
            <img src={logo} alt="logo" className="w-40 h-40 object-cover"/>
          </Link>
        </div>
        <div className="font-bold nav-menu-wrapper flex items-center justify-between space-x-10">
          <Link to="/" className="text-2xl hover:text-black"><FaHome className="inline-block mr-2 text-4xl hover:text-black" /></Link>
          <Link to="about-us" className="text-2xl hover:text-black">About</Link>
          <Link to="contact-us" className="text-2xl hover:text-black pr-2">Contact_Us</Link>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <Link to="/cart" className="mr-4 relative ml-2 ">
            <img  src={cartIcon} alt="cart"/>
            {cartCount > 0 ? <div className="rounded-full bg-yellow-400 text-white inline-flex justify-center items-center w-full absolute -top-1 -right-1">{cartCount}</div> : null}
          </Link>
          {isLoggedIn ? (
            <Button onClick={handleLogout} className="hover:text-black">
              <FaSignOutAlt className="inline-block mr-2 " />Log Out
            </Button>
          ) : (
            <>
              <Link className="text-xl font-bold hover:text-black" to="/login">Log In</Link>
              <Link className="text-xl font-bold hover:text-black" to="/register">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
