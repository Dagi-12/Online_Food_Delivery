import React from 'react'
import { Banner } from '../../components/Banner'
import { ProductsPreview } from '../../components/ProductsPreview'
import { RideWithUs } from '../../components/RideWithUs'
import { PartnerWithUs } from '../../components/PartnerWithUs'
import Slider from '../../components/Slider';
import Information from '../../components/Information'

 const Home=()=> {
   
  return (
    <>  
    <Banner/>
    <ProductsPreview/>
    <PartnerWithUs/>
    <Information/>
    <RideWithUs/>  
     <Slider  />
     
    </>
    )
}
export default Home