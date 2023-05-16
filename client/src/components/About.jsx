import aboutImage from "../assets/images/about-image2.jpg";

export const About = () => {

    return (
        <div className="bg-white">
            <div className="p-24 grid grid-cols-2 gap-10">
                <div className="">
                    <h2 className="text-4xl font-bold mb-4">About Us</h2>
                    <p className="text-lg leading-8 mb-6">
                        Welcome to our online food delivery platform! Our mission is to make ordering food as easy and convenient as possible for you. We offer a wide variety of delicious meals from many different restaurants, all available for delivery straight to your doorstep.
                    </p>
                    <p className="text-lg leading-8 mb-6">
                        But that's not all. We also provide a platform for independent riders to register and become delivery partners. This means you can support local entrepreneurs while getting your favorite food delivered to you quickly and efficiently.
                    </p>
                    <p className="text-lg leading-8 mb-6">
                        Our platform is user-friendly and easy to navigate, with menus from different restaurants clearly displayed. You can search for specific types of cuisine or dishes, or simply browse through our extensive list of options.
                    </p>
                    <p className="text-lg leading-8 mb-6">
                        Our platform also offers a range of menu options, including vegetarian, gluten-free, and dairy-free meals.
                    </p>
                    <p className="text-lg leading-8 mb-6">
                        So what are you waiting for? Sign up today and start exploring all the delicious food options our platform has to offer. And remember, with every meal you order, you're supporting local businesses and helping to build a stronger, more vibrant community.
                    </p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Sign Up Now
                    </button>
                </div>
                <div className="flex items-center justify-center">
                    <img src={aboutImage} alt="" className="w-full h-auto object-cover rounded-lg shadow-lg" />
                </div>
            </div>
        </div>
    )
}
