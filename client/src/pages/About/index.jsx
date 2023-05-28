import aboutImage from "../../assets/images/aboutus.png";
import { useNavigate } from 'react-router-dom';

export const About = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/register');
  };

  return (
    <div className="bg-white">
       <div className="text-center pl-5 pr-5 pt-10">
                <h2 className="text-4xl font-bold mb-4 text-orange-500">
                  About Us
                </h2>
                <div className="h-1 w-full bg-red-600 mx-auto mb-5"></div>
              </div>
      <div className="p-6 sm:p-12">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="flex items-center justify-center">
              <div className="animate-pulse animate-delay-7000">
                <img
                  src={aboutImage}
                  alt=""
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
             
              <div>
                <p className="text-lg leading-8 mb-6 text-cool-blue">
                  Welcome to our online food delivery platform! Our mission is
                  to make ordering food as easy and convenient as possible for
                  you. We offer a wide variety of delicious meals from many
                  different restaurants, all available for delivery straight to
                  your doorstep.
                </p>
              </div>
              <div>
                <p className="text-lg leading-8 mb-6 text-cool-green">
                  Our platform is user-friendly and easy to navigate, with menus
                  from different restaurants clearly displayed. You can search
                  for specific types of cuisine or dishes, or simply browse
                  through our extensive list of options.
                </p>
              </div>
              <div>
                <p className="text-lg leading-8 mb-6 text-cool-purple">
                  So what are you waiting for? Sign up today and start
                  exploring all the delicious food options our platform has to
                  offer. And remember, with every meal you order, you're
                  supporting local businesses and helping to build a stronger,
                  more vibrant community.
                </p>
              </div>
              <button
                className="bg-orange-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded mt-8 animate-bounce "
                onClick={handleSignUpClick}
              >
                Sign Up Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
