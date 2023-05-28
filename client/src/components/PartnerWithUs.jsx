import React from 'react';

export const PartnerWithUs = () => {
  return (
    <div >
      <h2 className="text-white text-3xl font-bold py-2 px-4 bg-amber-500 text-center rounded-md">
        Looking For A Place To Provide Your Products?
      </h2>

      <div className="banner-image w-full md:w-full p-10">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-1/2 px-1 mx-auto relative flex items-center justify-center ">
            <img
              src={require('../assets/images/part.jpg')}
              alt="banner"
              className="max-h-95 rounded-lg"
              style={{ maxHeight: '350px' }}
             
            />
          </div>
          <div className="w-full md:w-1/2 px-1">
            <h2 className="mb-4 text-3xl font-bold text-black text-center">
              No Worries You can Apply Using the following link 
            </h2>
            <h2 className="text-center">
              <a
                href="/partner-registration"
                className="justify-center text-orange-500 center w-900 font-bold text-3xl hover:bg-orange-500 hover:text-white font-bond hover:text-3xl text-decoration-line px-4 rounded-xl p-2"
              >
                Become A Partner
              </a>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
