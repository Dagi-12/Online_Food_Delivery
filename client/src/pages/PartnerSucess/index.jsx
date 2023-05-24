import { useLocation } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { Link } from 'react-router-dom';
export default function PartnerSuccess() {
 
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const restaurantName = queryParams.get("restaurantName");

  const capitalizedRestaurantName =
    restaurantName.charAt(0).toUpperCase() + restaurantName.slice(1);

  return (
    <div className="banner w-full md:w-full px-7 mx-auto relative flex items-center justify-center bg-white p-5 mt-20 mb-20">
      <div className="banner bg-white shadow-amber-500 rounded-lg overflow-hidden shadow-md rounded-lg banner-description w-full md:w-1/2 p-3 ">
        <CSSTransition
          in={true}
          appear={true}
          timeout={1000}
          classNames="transition-all duration-1000 transform translate-y-10"
        >
          <h2 className="mb-6 text-4xl font-bold text-green-500 animate-fade-in-up">
            Dear Customer your application for your company{" "}
            <span className="text-orange-500">{capitalizedRestaurantName}</span>{" "}
            has been submitted successfully!
          </h2>
        </CSSTransition>
        <CSSTransition
          in={true}
          appear={true}
          timeout={1500}
          classNames="transition-all duration-1500 transform translate-y-10"
        >
          <p className="font-semibold font-sans text-xl text-black py-2 p-5 animate-fade-in-up">
            Thank you again for your interest in partnering with us, and we look
            forward to potentially working with you. We will contact you soon after reviewing your application.
          </p>
        

        </CSSTransition>
          <Link to="/" className="px-4 py-2 rounded-md bg-orange-500 text-white hover:bg-gray-200 hover:text-green-500">
  Return Home
</Link>

      </div>
    </div>
  );
}
