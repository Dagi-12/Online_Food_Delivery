import React from 'react';

const Slider = () => {
  const steps = [
    {
      title: 'Step 1',
      description: 'Sign Up',
      image: require('../assets/images/signup.jpg'),
      imageAlt: 'SignUp',
    },
    {
      title: 'Step 2',
      description: 'Browse Menu',
      image: require('../assets/images/browseMenu.jpg'),
      imageAlt: 'Browse menu',
    },
    {
      title: 'Step 3',
      description: 'Add to Cart',
      image: require('../assets/images/addCart.jpg'),
      imageAlt: 'Add to Cart',
    },
    {
      title: 'Step 4',
      description: 'Review Order',
      image: require('../assets/images/reviewOrder.jpg'),
      imageAlt: 'Review order',
    },
    {
      title: 'Step 5',
      description: 'Fill the Address Form',
      image: require('../assets/images/address.jpg'),
      imageAlt: 'Filling address form',
    },
    {
      title: 'Step 6',
      description: 'Fill Payment Form',
      image: require('../assets/images/payment.jpg'),
      imageAlt: 'Payment form filling',
    },
    {
      title: 'Step 7',
      description: 'Order will be Placed',
      image: require('../assets/images/placeOrder.jpg'),
      imageAlt: 'Order placed',
    },
  ];

  return (
    <>
    <h2 className="text-white text-3xl font-bold py-2 px-4 bg-amber-500 text-center rounded-md">
  How Order Process Works
</h2>

     <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {steps.map((step, index) => (
        <div
          key={index}
          className="flex flex-col items-center bg-gray-200 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:rotate-3 hover:shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-4">{step.title}</h2>
          <img
            src={step.image}
            alt={step.imageAlt}
            className="rounded-lg shadow-md mb-4 max-w-xs"
          />
          <p className="text-lg font-semibold p-4 bg-white rounded-sm">
            {step.description}
          </p>
        </div>
      ))}
    </div></>
  );
};

export default Slider;
