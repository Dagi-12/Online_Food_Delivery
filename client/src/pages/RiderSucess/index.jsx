import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export const RiderSucess = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const firstName = queryParams.get("firstName");
  const capitalizedFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);

  return (
    <div className="banner w-full md:w-full px-7 mx-auto relative flex items-center justify-between bg-white">
      <div className="banner bg-white shadow-red-600 rounded-lg overflow-hidden shadow-md rounded-lg banner-description w-full md:w-1/2 p-3">
        <h2 className="mb-6 text-4xl font-bold text-green-500">
          Dear <span className="text-orange-500">{capitalizedFirstName}</span>, your application has been submitted successfully!
        </h2>
        <p className=" font-semibold font-sans text-xl text-gray-600 py-2 p-5 mb-5">
          Thank you for submitting your application. We will be in touch with you soon regarding the status 
          of your application. We understand that waiting can be difficult, but we want to ensure that we give 
          each application the attention it deserves. Rest assured that we will contact you as soon as we have an 
          update on your application.
        </p>
        <Link to="/" className="px-4 py-2 rounded-md bg-orange-500 text-white hover:bg-gray-200 hover:text-green-500 ">
  Return Home
</Link>
      </div>
      <div className="banner-image w-full md:w-1/2 p-3 flex justify-end">
        <img src={require("../../assets/images/ride-regist.png")} alt="banner" className="max-h-95" />
      </div>
    </div>
  );
};
