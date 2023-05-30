import React, { useState } from 'react';
import Pay from './Pay';

export default function PaymentForm() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  // const [amount, setAmount] = useState('50');
  const tx_ref = `${fname}-tx-5202023`;
  const public_key = 'CHAPUBK_TEST-1Ks6af4nuwRg9hBpIhrbE6LG3k9BpFi6';

  const handleFnameChange = (e) => {
    setFname(e.target.value);
  };

  const handleLnameChange = (e) => { 
    setLname(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // const handleAmountChange = (e) => {
  //   setAmount(e.target.value);
  // };

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-md mx-auto bg-white p-6 ">
        <h2 className="text-2xl font-medium mb-4 text-center">Payment Form</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="fname" className="text-gray-800 font-bold text-center">
              First Name
            </label>
            <input
              id="fname"
             
                pattern="[A-Za-z]+"
                required 
                 onChange={handleFnameChange}         
              type="text"
              className="bg-gray-100 px-3 py-2 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lname" className="text-gray-800 font-bold">
              Last Name
            </label>
            <input
              id="lname"
              onChange={handleLnameChange}
               pattern="[A-Za-z]+"
               required
              type="text"
              className="bg-gray-100 px-3 py-2 rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-gray-800 font-bold">
              Email
            </label>
            <input
              id="email"
              onChange={handleEmailChange}
              type="email"
              className="bg-gray-100 px-3 py-2 rounded w-full"
            />
          </div>
          {/* <div className="mb-4">
            <label htmlFor="amount" className="text-gray-800 font-bold">
              Amount
            </label>
            <input
              id="amount"
              onChange={handleAmountChange}
              type="number"
              className="bg-gray-100 px-3 py-2 rounded w-full"
            />
          </div> */}
          <Pay
            fname={fname}
            lname={lname}
            email={email}
            // amount={amount}
            tx_ref={tx_ref}
            public_key={public_key}
          />
        </form>
      </div>
    </div>
  );
}
