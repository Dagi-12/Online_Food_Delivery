import React from 'react';
import axios from 'axios';

import { useState } from 'react';
import { Tabs } from "../../components/Tabs";
import Button from "../../components/elements/Button";
import { useSelector } from "react-redux";
import {cartProducts} from "../../stores/cart/cartSlice"
import useTabSwitch from '../../hooks/useTabSwitch';
import { ReactComponent as ArrowRightSvg } from "../../assets/icons/arrow-right-long-svgrepo-com.svg";
import { AddressForm } from '../../components/AddressForm';
import { ProductsSummary } from '../../components/ProductsSummary';
import PaymentForm from '../../components/PaymentForm';

const Cart=()=> {
const cart=useSelector(cartProducts);
const tabs= ['Summary', 'Delivery', 'Payment'];
const [currentTab, handleTabSwitch] = useTabSwitch(tabs, 'Summary');
const [cartData, setCartData] = useState(null);
   if (!cart || cart.length === 0) {
        return (
            <div className="bg-white h-full text-black flex justify-center p-4">
                <h1>Your Cart is empty</h1>
            </div>
        )
    }

         //just passes the cart values
//     const allProducts=()=>{
// setCartData(cart);
// handleTabSwitch('Delivery')
// console.log(cart)
//     }
//new
const allProducts = async () => {
  try {
    const response = await axios.post('http://localhost:4000/api/orders', { cart: cart });
    const { data } = response;
    console.log('Order recorded:', data);
    setCartData(cart);
    handleTabSwitch('Delivery');
  } catch (error) {
    console.error('Error recording order:', error);
  }
};
   return (
    
     <div className="bg-white  text-black mx-auto mt-2 border mb-10 border-gray-200 p-4 md:w-2/3 rounded-lg shadow-md sm:p-6 lg:p-8  min-h-screen flex flex-col  pt-8 sm:justify-center">
      
            <Tabs list={tabs} onTabSwitch={handleTabSwitch} activeTab={currentTab} />
            <div className={`tabs ${currentTab !== 'Summary' ? 'hidden' : ''}`}>
               <ProductsSummary/>
               <div className="flex justify-end p-2">
               
                <Button variant="dark" className="flex items-center" onClick={allProducts}><span className="mr-1">Next</span><ArrowRightSvg /></Button>
            
             </div>
            </div>
            <div className={`tabs ${currentTab !== 'Delivery' ? 'hidden' : ''}`}>
               <AddressForm onTabSwitch={handleTabSwitch} cart={cartData}/>
            </div>
            <div className={`tabs ${currentTab !== 'Payment' ? 'hidden' : ''}`}>
             <PaymentForm/>
            </div>
            </div>
  )
}
export default Cart  
