import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div className="p-4"> {/* Padding for the carousel */}
<Slider {...settings}>
  <div className="relative flex justify-center items-center">
    <img src="/src/assets/Sikki-jewelry-a-slow-dance-in-auburn.jpg" alt="Slide 1" className="max-h-80 w-auto object-cover filter blur-sm" />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
      <h2 className="text-3xl font-bold">Discover the Best in Jewelry</h2>
      <p className="text-xl">Professional Craftsmanship, Unique Designs</p>
    </div>
  </div>
  <div className="relative flex justify-center items-center">
    <img src="/src/assets/istockphoto-1272917232-612x612.jpg" alt="Slide 2" className="max-h-80 w-auto object-cover filter blur-sm" />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
      <h2 className="text-3xl font-bold">Exquisite Handcrafted Jewelry</h2>
      <p className="text-xl">Elegance and Sophistication in Every Piece</p>
    </div>
  </div>
  <div className="relative flex justify-center items-center">
    <img src="/src/assets/istockphoto-1503330770-612x612.jpg" alt="Slide 3" className="max-h-80 w-auto object-cover filter blur-sm" />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
      <h2 className="text-3xl font-bold">Perfect for Any Occasion</h2>
      <p className="text-xl">Jewelry that Adds a Touch of Luxury</p>
    </div>
  </div>
  <div className="relative flex justify-center items-center">
    <img src="/src/assets/istockphoto-1272917232-612x612.jpg" alt="Slide 4" className="max-h-80 w-auto object-cover filter blur-sm" />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
      <h2 className="text-3xl font-bold">Crafted with the Finest Materials</h2>
      <p className="text-xl">Timeless Designs that Reflect Quality and Elegance</p>
    </div>
  </div>
</Slider>


        </div>
    );
};

// Custom arrow components
const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow next text-black text-3xl`}
            style={{ ...style }}
            onClick={onClick}
        />
    );
};

const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-arrow prev text-black text-3xl`}
            style={{ ...style }}
            onClick={onClick}
        />
    );
};

export default Carousel;
