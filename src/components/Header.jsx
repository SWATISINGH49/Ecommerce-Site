import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaSearch,
  FaMapMarkerAlt,
  FaStore,
  FaHeadset,
  FaClipboardCheck,
  FaUserCircle,
  FaHeart,
  FaShoppingCart,
  FaBars,
} from 'react-icons/fa';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  const handleMouseEnter = (index) => {
    setOpenMenu(index);
  };

  const handleMouseLeave = () => {
    setOpenMenu(null);
  };

  return (
    <div>
      {/* Main Navigation Bar */}
      <nav className='flex items-center justify-between p-4 bg-white shadow-md'>
        {/* Logo */}
        <div className='flex items-center'>
          <div className='w-12'>
            <img
              src='/src/assets/logo.png'
              alt='Logo'
              className='rounded-[10%] shadow-lg shadow-gray-500'
            />
          </div>
        </div>

        {/* Search Bar */}
        <div className='flex items-center w-full max-w-xs'>
          <input
            type='text'
            placeholder='Search for a Category, Brand or Product'
            className='flex-grow h-10 border border-gray-400 rounded-l-lg px-4'
          />
          <button className='h-10 w-12 bg-pink-900 rounded-r-lg flex items-center justify-center'>
            <FaSearch className='text-white' />
          </button>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className='block lg:hidden' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <FaBars className='text-gray-600' />
        </div>

        {/* Right-side options */}
        <div className='hidden lg:flex items-center space-x-6'>
          <div className='flex items-center'>
            <FaMapMarkerAlt className='text-gray-600' />
            <a href='#' className='text-sm ml-1'>Select Location</a>
          </div>
          <div className='flex items-center'>
            <FaStore className='text-gray-600' />
            <a href='#' className='text-sm ml-1'>Stores & Preschools</a>
          </div>
          <div className='flex items-center'>
            <FaHeadset className='text-gray-600' />
            <a href='#' className='text-sm ml-1'>Support</a>
          </div>
          <div className='flex items-center'>
            <FaClipboardCheck className='text-gray-600' />
            <a href='#' className='text-sm ml-1'>Track Order</a>
          </div>
          <div className='flex items-center'>
            <FaUserCircle className='text-gray-600' />
            <Link to={'/Login'} className='text-sm ml-1'>Login / Register</Link>
          </div>
          <div className='flex items-center'>
            <FaHeart className='text-gray-600' />
            <a href='#' className='text-sm ml-1'>Shortlist</a>
          </div>
          <div className='flex items-center'>
            <FaShoppingCart className='text-gray-600' />
            <Link className='text-sm ml-1' to={'/Cart'}>Cart</Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='lg:hidden p-2 bg-pink-900' w-full>
          <ul className='flex flex-col space-y-2 text-sm text-white'>
            <li><a href='#' className='block hover:bg-pink-900 px-4 py-2'>Women Ethnic</a></li>
            <li><a href='#' className='block hover:bg-pink-900 px-4 py-2'>Women Western</a></li>
            <li><a href='#' className='block hover:bg-pink-900 px-4 py-2'>Men</a></li>
            <li><a href='#' className='block hover:bg-pink-900 px-4 py-2'>Kids</a></li>
            <li><a href='#' className='block hover:bg-pink-900 px-4 py-2'>Home & Kitchen</a></li>
            <li><a href='#' className='block hover:bg-pink-900 px-4 py-2'>Beauty & Health</a></li>
            <li><a href='#' className='block hover:bg-pink-900 px-4 py-2'>Jewellery & Accessories</a></li>
            <li><a href='#' className='block hover:bg-pink-900 px-4 py-2'>Bags & Footwear</a></li>
            <li><a href='#' className='block hover:bg-pink-900 px-4 py-2'>Electronics</a></li>
          </ul>
        </div>
      )}


      {/* Secondary Category Menu Bar */}
      <div className='p-2 bg-pink-900'>
  <ul className='flex flex-wrap justify-between items-center space-x-4 text-sm text-white'>
    {/* Women Ethnic Section */}
    <li className='relative' onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={handleMouseLeave}>
      <a href='#' onClick={() => toggleMenu(0)}>Women Ethnic</a>
      {openMenu === 0 && (
        <ul className='absolute left-0 mt-2 bg-white text-gray-700 rounded-lg shadow-lg p-2 space-y-2 z-10'>
          <li><a href='#' className='block hover:bg-gray-200 px-4 py-2 rounded'>All Women Ethnic</a></li>
          <li><a href='#' className='block hover:bg-gray-200 px-4 py-2 rounded'>Sarees</a>
            <ul className='pl-4'>
              <li><a href='#' className='block hover:bg-gray-200 px-4 py-2 rounded'>All Sarees</a></li>
              <li><a href='#' className='block hover:bg-gray-200 px-4 py-2 rounded'>Silk Sarees</a></li>
              <li><a href='#' className='block hover:bg-gray-200 px-4 py-2 rounded'>Cotton Silk Sarees</a></li>
              <li><a href='#' className='block hover:bg-gray-200 px-4 py-2 rounded'>Chiffon Sarees</a></li>
            </ul>
          </li>
          <li><a href='#' className='block hover:bg-gray-200 px-4 py-2 rounded'>Kurtis</a></li>
          <li><a href='#' className='block hover:bg-gray-200 px-4 py-2 rounded'>Kurta Sets</a></li>
        </ul>
      )}
    </li>

    {/* Women Western Section */}
    <li className='relative' onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}>
      <a href='#' onClick={() => toggleMenu(1)}>Women Western</a>
      {openMenu === 1 && (
        <ul className='absolute left-0 mt-2 bg-white text-gray-700 rounded-lg shadow-lg p-2 space-y-2 z-10'>
          <li><a href='#' className='block hover:bg-gray-200 px-4 py-2 rounded'>All Women Western</a></li>
          <li><a href='#' className='block hover:bg-gray-200 px-4 py-2 rounded'>Dresses</a></li>
          <li><a href='#' className='block hover:bg-gray-200 px-4 py-2 rounded'>Tops</a></li>
          <li><a href='#' className='block hover:bg-gray-200 px-4 py-2 rounded'>Skirts</a></li>
        </ul>
      )}
    </li>

    {/* Men Section */}
    <li className='relative' onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave}>
      <a href='#' onClick={() => toggleMenu(2)}>Men</a>
      {openMenu === 2 && (
        <ul className='absolute left-0 mt-2 bg-white text-gray-700 rounded-lg shadow-lg p-2 space-y-2 z-10'>
          <li><a href='#' className='block hover:bg-gray-200 px-4 py-2 rounded'>All Men</a></li>
          <li><a href='#' className='block hover:bg-gray-200 px-4 py-2 rounded'>Shirts</a></li>
          <li><a href='#' className='block hover:bg-gray-200 px-4 py-2 rounded'>T-Shirts</a></li>
          <li><a href='#' className='block hover:bg-gray-200 px-4 py-2 rounded'>Jeans</a></li>
        </ul>
      )}
    </li>

    {/* Kids Section */}
    <li className='relative' onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave}>
      <a href='#' onClick={() => toggleMenu(3)}>Kids</a>
      {openMenu === 3 && (
        <ul className='absolute left-0 mt-2 bg-white text-gray-700 rounded-lg shadow-lg p-2 space-y-2 z-10'>
          <li><a href='#' className='block hover:bg-gray-200 px-4 py-2 rounded'>All Kids</a></li>
          <li><a href='#' className='block hover:bg-gray-200 px-4 py-2 rounded'>Boys</a></li>
          <li><a href='#' className='block hover:bg-gray-200 px-4 py-2 rounded'>Girls</a></li>
        </ul>
      )}
    </li>

    {/* Accessories Section */}
    <li className='relative' onMouseEnter={() => handleMouseEnter(4)} onMouseLeave={handleMouseLeave}>
      <a href='#' onClick={() => toggleMenu(4)}>Accessories</a>
      {openMenu === 4 && (
        <ul className='absolute left-0 mt-2 bg-white text-gray-700 rounded-lg shadow-lg p-2 space-y-2 z-10'>
          <li><a href='#' className='block hover:bg-gray-200 px-4 py-2 rounded'>All Accessories</a></li>
          <li><a href='#' className='block hover:bg-gray-200 px-4 py-2 rounded'>Bags</a></li>
          <li><a href='#' className='block hover:bg-gray-200 px-4 py-2 rounded'>Watches</a></li>
          <li><a href='#' className='block hover:bg-gray-200 px-4 py-2 rounded'>Jewelry</a></li>
        </ul>
      )}
    </li>

    {/* Footwear Section */}
    <li className='relative' onMouseEnter={() => handleMouseEnter(5)} onMouseLeave={handleMouseLeave}>
      <a href='#' onClick={() => toggleMenu(5)}>Footwear</a>
      {openMenu === 5 && (
        <ul className='absolute left-0 mt-2 bg-white text-gray-700 rounded-lg shadow-lg p-2 space-y-2 z-10'>
          <li><a href='#' className='block hover:bg-gray-200 px-4 py-2 rounded'>All Footwear</a></li>
          <li><a href='#' className='block hover:bg-gray-200 px-4 py-2 rounded'>Womens Footwear</a></li>
          <li><a href='#' className='block hover:bg-gray-200 px-4 py-2 rounded'>Mens Footwear</a></li>
          <li><a href='#' className='block hover:bg-gray-200 px-4 py-2 rounded'>Kids Footwear</a></li>
        </ul>
      )}
    </li>

    {/* Beauty Section */}
    <li className='relative' onMouseEnter={() => handleMouseEnter(6)} onMouseLeave={handleMouseLeave}>
      <a href='#' onClick={() => toggleMenu(6)}>Beauty</a>
      {openMenu === 6 && (
        <ul className='absolute left-0 mt-2 bg-white text-gray-700 rounded-lg shadow-lg p-2 space-y-2 z-10'>
          <li><a href='#' className='block hover:bg-gray-200 px-4 py-2 rounded'>All Beauty Products</a></li>
          <li><a href='#' className='block hover:bg-gray-200 px-4 py-2 rounded'>Makeup</a></li>
          <li><a href='#' className='block hover:bg-gray-200 px-4 py-2 rounded'>Skincare</a></li>
          <li><a href='#' className='block hover:bg-gray-200 px-4 py-2 rounded'>Haircare</a></li>
        </ul>
      )}
    </li>

  </ul>
</div>

    </div>
  );
};

export default Navbar;
