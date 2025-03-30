import './index.css'; // or './App.css' if that's where you placed the Tailwind directives
import Header from './components/header';
import cards from './components/cards';
import React from 'react'
import Footer from './components/footer';
import Hero from './components/hero';
import BeautyProducts from './components/ProductListing';
import Carousel from './components/Carousel';
import Images from './components/images';
import Cards6 from './components/Cards6';
import OccasionWear from './components/OccasionWear';
import WinterWonders from './components/WinterWonders';
import AccessoriesSection from './components/AccessoriesSection';
import FootwearSection from './components/FootwearSection';
import MomsCorner from './components/MomsCorner';
import SportswearBanner from './components/SportswearBanner';


import BrandPromotion from './components/BrandPromotion';

const App = () => {
  function alertuser(){
    alert('this is alert function');

  }
  return (
  
    <div>
      {/* <button className='text-red-300' onClick={alertuser}>click me</button> */}
     
      <Header />
      {/* <Hero title={"this first page"} alertmassage={alertuser
      }/> */}

    <Carousel />
      <BeautyProducts />
      <Images />
      <Cards6 />
      <BeautyProducts />
      <OccasionWear />
      <WinterWonders />
      <AccessoriesSection />
      <FootwearSection />
      <MomsCorner />
      <SportswearBanner />
      <BeautyProducts />
      <BrandPromotion />
      <Footer />
      
    </div>
  )
}

export default App
