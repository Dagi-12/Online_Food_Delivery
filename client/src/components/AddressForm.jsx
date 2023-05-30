import { useForm } from "react-hook-form";
import { useState,useEffect } from "react";
import Button from "./elements/Button";
import { ReactComponent as ArrowRightSvg } from "../assets/icons/arrow-right-long-svgrepo-com.svg";
import { useDispatch } from "react-redux";
import { setAddress } from "../stores/userInfo/addressSlice";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const AddressForm = ({onTabSwitch,cart}) => {
    //what we require from the use form are the followings
    const { register, handleSubmit, formState:{errors}} = useForm();
    const dispatch=useDispatch();





    //email part
const sendEmail = (data, cartValue, recipientEmail) => {
  const { address, city, phone } = data; // Extract the address value from data

  const formattedCartValue = cartValue.map((item) => {
    return `${item.name}: ${item.amount}`; // Format each item as "name: amount"
  });

  const templateParams = {
    to_email: recipientEmail,
  
    address: address, // Use the extracted address value
    city: city, // Use the extracted address value
    phone: phone, // Use the extracted address value
    cartValue: formattedCartValue.join(","), // Join the formatted cartValue array with line breaks
  };

  emailjs
    .send(
      "service_1acc5y9",
      "template_0bw187s",
      templateParams,
      "319NcNThA74MK8pzY"
    )
    .then((response) => {
      console.log("Email sent successfully!", response.text);
      // Handle success, e.g., display a success message to the user
      toast.success("Orderd successfully! and notification email sent✅", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    })
    .catch((error) => {
      console.error("Error sending email:", error);
      toast.error('❌Error sending the order')
      // Handle error, e.g., display an error message to the user
    });
};


    //emal part




    const onSubmit=(data)=>{
        //to send the address and record it in stores/userinfo
        dispatch(setAddress(data));
        onTabSwitch('Payment');
        console.log(data)
      
        const recipientEmail = cart[0].category.email;
        const cartValue=cart
          console.log( cartValue);
          sendEmail(data, cartValue,recipientEmail);

    }

    return (
        <form className="md:w-2/3 md:mx-auto px-3 pt-1" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="pt-4 text-2xl md:text-center font-medium">Address for the delivery</h3>
            <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" for="streetAddress">Street Address</label>
                <input 
                    {...register('address',{required:true}) }
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border roundedn shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="street address"
                    type="text"
                    placeholder="Exact Street Address and Location"
                    />
                {errors.address && <span className="text-red-500">This field is required</span>}
            </div>
            <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0 flex-1">
                    <label className="block mb-2 text-sm font-bold text-gray-700" for="city">City</label>
                    <input 
                    {...register('city')}
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border roundedn shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="city"
                    type="text"
                    value={"BahirDar"}
                    placeholder="City"
                    />
                </div>
                <div className="mb-4 md:mr-2 md:mb-0 flex-1">
                    <label className="block mb-2 text-sm font-bold text-gray-700" for="phone">Phone</label>
                    <input 
                    {...register('phone',{required:true})}
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border roundedn shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="phone"
                    pattern="09\d{8}"
                    type="tel"
                    placeholder="phone"
                    />
                     {errors.phone && <span className="text-red-500">This field is required</span>}
                </div>
            </div>
            <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0 flex-1">
                    <label className="block mb-2 text-sm font-bold text-gray-700" for="country">Country</label>
                    <input 
                    {...register('country')}
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border roundedn shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="country"
                    type="text"
                    value={"Ethiopia"}
                    />
                </div>
                {/* <div className="mb-4 md:mr-2 md:mb-0 flex-1">
                    <label className="block mb-2 text-sm font-bold text-gray-700" for="postalCode">Postal Code</label>
                    <input 
                    {...register('postalCode')}
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border roundedn shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="postal code"
                    type="text"
                    placeholder="Postal Code"
                    />
                </div> */}
            </div>
            <div className="flex justify-end p-2">
                <Button variant="dark" className="flex items-center" type="submit"><span className="mr-1">Next</span><ArrowRightSvg /></Button>
            </div>
        </form>
    )
}