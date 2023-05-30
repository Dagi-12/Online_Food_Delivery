import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Menu from "../pages/Menu";
import ContactUs from "../pages/ContactUs";
import PaymentSuccess from "../pages/PaymentSuccess";
import Register from "../pages/Register";
import {RiderRegistration} from "../pages/RiderRegistration";
import PartnerRegistration from "../pages/PartnerRegistration";
import { useSelector } from "react-redux";
import { cartProducts } from "../stores/cart/cartSlice";
import { Footer } from "../components/Footer";
import  {RiderSucess}  from "../pages/RiderSucess";
import PartnerSucess from "../pages/PartnerSucess";
import { About } from "../pages/About";
import Policy from "../pages/PrivacyPolicy";
import Terms from "../pages/TermsAndConditions";
import Licensing from "../pages/Licensing";
const Navigation=()=>{

  const productsInCart = useSelector(cartProducts);

return(
    <BrowserRouter>
      <Header cartCount={productsInCart ? productsInCart.length : 0}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact-us" element={<ContactUs/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/rider-registration" element={<RiderRegistration/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/partner-registration" element={<PartnerRegistration/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/about-us" element={<About/>}/>
        <Route path="/payment-sucess" element={<PaymentSuccess/>}/>
        <Route path="/rider-sucess" element={<RiderSucess/>}/>
        <Route path="/partner-sucess" element={<PartnerSucess/>}/>
        <Route path="/privacy-policy" element={<Policy/>}/>
        <Route path="/terms" element={<Terms/>}/>
        <Route path="/licensing" element={<Licensing/>}/>


        

      </Routes>
     <Footer/>
    </BrowserRouter>
)
}
export default Navigation;