// import React ,{useEffect,useState}from 'react'
// import axios from "axios";
// export default function PaymentForm() {
//     const [response, setResponse] = useState("");
//   const [error, setError] = useState("");
//   const [amount, setAmount] = useState("");
//   const [currency, setCurrency] = useState("");
//   const [email, setEmail] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [txRef, setTxRef] = useState("chewatatest-6669");
//   const [callbackUrl, setCallbackUrl] = useState(
//     window.location.href + "/callback"
//   );
//   const [returnUrl, setReturnUrl] = useState(window.location.href);
//   const [title, setTitle] = useState(" ");
//   const [description, setDescription] = useState("");
//  const handlePayment = () => {
//   const requestOptions = {
//     method: "POST",
//     headers: {
//       Authorization: "Bearer CHASECK_TEST-69uuVj151ueF6Uiessh8Elie8utu23VT",
//       "Content-Type": "application/json",
//     },
//     data: {
//       amount,
//       currency,
//       email,
//       first_name: firstName,
//       last_name: lastName,
//       phone_number: phoneNumber,
//       tx_ref: txRef,
//       callback_url: callbackUrl,
//       return_url: returnUrl,
//       customization: {
//         title,
//         description,
//       },
//     },
//   };

//   axios
//     .post("https://api.chapa.co/v1/transaction/initialize", requestOptions)
//     .then((response) => response.data)
//     .then((data) => {
//       // Redirect the user to the checkout URL returned by the Chapa API
//       window.location.href = data.data.checkout_url;
//     })
//     .catch((error) => {
//       // Handle errors (e.g., network error, server down, etc)
//       console.error("Error:", error);
//     });
// };

//   return (
//     <div>
//  <div className="paymentdetail">
//            <form onSubmit={handlePayment} className="max-w-xs mx-auto">
//   <input
//     type="text"
//     value={amount}
//     onChange={(e) => setAmount(e.target.value)}
//     placeholder="Amount"
//     className="border border-gray-300 rounded-md px-4 py-2 mb-2 w-full"
//   />
//   <input
//     type="text"
//     value={currency}
//     onChange={(e) => setCurrency(e.target.value)}
//     placeholder="Currency"
//     className="border border-gray-300 rounded-md px-4 py-2 mb-2 w-full"
//   />
//   <input
//     type="email"
//     value={email}
//     onChange={(e) => setEmail(e.target.value)}
//     placeholder="Email"
//     className="border border-gray-300 rounded-md px-4 py-2 mb-2 w-full"
//   />
//   <input
//     type="text"
//     value={firstName}
//     onChange={(e) => setFirstName(e.target.value)}
//     placeholder="First Name"
//     className="border border-gray-300 rounded-md px-4 py-2 mb-2 w-full"
//   />
//   <input
//     type="text"
//     value={lastName}
//     onChange={(e) => setLastName(e.target.value)}
//     placeholder="Last Name"
//     className="border border-gray-300 rounded-md px-4 py-2 mb-2 w-full"
//   />
//   <input
//     type="text"
//     value={phoneNumber}
//     onChange={(e) => setPhoneNumber(e.target.value)}
//     placeholder="Phone Number"
//     className="border border-gray-300 rounded-md px-4 py-2 mb-2 w-full"
//   />
//   <input
//     type="text"
//     value={txRef}
//     onChange={(e) => setTxRef(e.target.value)}
//     placeholder="Transaction Reference"
//     className="border border-gray-300 rounded-md px-4 py-2 mb-2 w-full"
//   />
//   <input
//     type="hidden"
//     value={callbackUrl}
//     onChange={(e) => setCallbackUrl(e.target.value)}
//     placeholder="Callback URL"
//     className="border border-gray-300 rounded-md px-4 py-2 mb-2 w-full"
//   />
//   <input
//     type="hidden"
//     value={returnUrl}
//     onChange={(e) => setReturnUrl(e.target.value)}
//     placeholder="Return URL"
//     className="border border-gray-300 rounded-md px-4 py-2 mb-2 w-full"
//   />   
//   <input
//     type="hidden"
//     value={title}
//     onChange={(e) => setTitle(e.target.value)}
//     placeholder="Title"
//     className="border border-gray-300 rounded-md px-4 py-2 mb-2 w-full"
//   />
//   <input
//     type="hidden"
//     value={description}
//     onChange={(e) => setDescription(e.target.value)}
//     placeholder="Description"
//     className="border border-gray-300 rounded-md px-4 py-2 mb-2 w-full"
//   />

//   <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
//     Pay Now
//   </button>
// </form>

//           </div>
//     </div>
//   )
// }import React, { useState } from 'react';
