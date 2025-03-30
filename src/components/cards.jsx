import React from 'react';

const BeautyProducts = () => {
  const products = [
    {
      imageUrl: 'https://example.com/image1.png',
      title: 'Skin care',
      items: '09 items'
    },
    {
      imageUrl: 'https://example.com/image2.png',
      title: 'Makeup',
      items: '12 items'
    },
    {
      imageUrl: 'https://example.com/image3.png',
      title: 'Beauty Brushes',
      items: '10 items'
    },
    {
      imageUrl: 'https://example.com/image4.png',
      title: 'Face Care',
      items: '09 items'
    },
    {
      imageUrl: 'https://example.com/image5.png',
      title: 'Hair Care',
      items: '08 items'
    },
    {
      imageUrl: 'https://example.com/image6.png',
      title: 'Nail Polish',
      items: '15 items'
    },
    {
      imageUrl: 'https://example.com/image7.png',
      title: 'Perfumes',
      items: '07 items'
    },
    {
      imageUrl: 'https://example.com/image8.png',
      title: 'Body Lotion',
      items: '13 items'
    },
    {
      imageUrl: 'https://example.com/image9.png',
      title: 'Hand Cream',
      items: '06 items'
    },
    {
      imageUrl: 'https://example.com/image10.png',
      title: 'Lipstick',
      items: '10 items'
    },
    {
      imageUrl: 'https://example.com/image11.png',
      title: 'Face Masks',
      items: '05 items'
    },
    {
      imageUrl: 'https://example.com/image12.png',
      title: 'Shampoo',
      items: '11 items'
    }
  ];

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-center text-3xl font-bold mb-6">2025 Top Collections</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img src={product.imageUrl} alt={product.title} className="w-full h-48 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold mb-2">{product.title}</h3>
              <p className="text-gray-500">{product.items}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
};



export default BeautyProducts;
