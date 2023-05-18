import React from 'react'
import { Banner } from '../../components/Banner'
import { ProductsPreview } from '../../components/ProductsPreview'
import { RideWithUs } from '../../components/RideWithUs'
import { PartnerWithUs } from '../../components/PartnerWithUs'
import Slider from '../../components/Slider';

 const Home=()=> {
      const images = [
    require('../../assets/images/about-image.jpg'),
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
  ];  
  return (
    <>  
    <Banner/>
    <ProductsPreview/>
    <PartnerWithUs/>
    <RideWithUs/>  
     <Slider images={images} />
    </>
    )
}
export default Home