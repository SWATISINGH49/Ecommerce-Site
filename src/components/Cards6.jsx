import React from 'react';

const cardData = [
  {
    id: 1,
    title: 'Tops & Tees',
    price: 'Starts @ 119',
    image: 'https://imgs.search.brave.com/NgFfA53aYvzIkE5plMfSMzMyvVB6ARS3piT1zbgS9Gs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzI0NjEyMDkwL2Mv/MTM2OS8xMzY5LzMx/NS8xMTUvaWwvNmVj/ZTMxLzU5NTE2NzYz/OTEvaWxfNjAweDYw/MC41OTUxNjc2Mzkx/X2FxYTUuanBn',
    description: 'Stylish and comfortable tops and tees for every occasion.',
    discount: '20% Off',
  },
  {
    id: 2,
    title: 'Bottoms',
    price: 'Starts @ 109',
    image: 'https://imgs.search.brave.com/fWISZyMTTPj5MnXS7GNBv5arQEY1ENXm-DT3rPI57H0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YTEuY2Fsdmlua2xl/aW4uY29tL2ltYWdl/cy8yMDI0MDMwN19t/aXNjL1BMUF9WaXN1/YWxfTmF2L1dvbWVu/X0JvdHRvbXNfUGFu/dHNfMnguanBn',
    description: 'Versatile bottoms to match your style and comfort.',
    discount: '15% Off',
  },
  {
    id: 3,
    title: 'Loungewear',
    price: 'Starts @ 129',
    image: 'https://imgs.search.brave.com/A3_csPBfoVogk3BfGOJr7mAGFyy_M-ofeSwxUsdCBws/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5jbnRyYXZlbGVy/LmNvbS9waG90b3Mv/NjYwMTljMDEyNjZj/MDRhMTlmMmRjY2E4/L21hc3Rlci93XzEy/ODAsY19saW1pdC9S/b290cy1MdXhlLUNy/ZXctU3dlYXRlci1h/bmQtUGludHVjay1Q/YW50LWluLWNvZmZl/ZS1saXF1ZXVyLmpw/Zw',
    description: 'Cozy loungewear for relaxed days at home or out.',
    discount: '10% Off',
  },
  {
    id: 4,
    title: 'Dresses',
    price: 'Starts @ 160',
    image: 'https://imgs.search.brave.com/X6hxfuF1Vx3vYvRN5--czQAWJ4yEfYttvHQTIQmYihI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE4/NDE4NzE1Ny9waG90/by9yZWQtZHJlc3Mu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PVpYeHE3aU8wczhj/d2h0cVZIME5IaE5Q/cmgyRUp4a0lZNGNV/WFJic3Nmd1U9',
    description: 'Elegant dresses for all your special occasions.',
    discount: '25% Off',
  },
  {
    id: 5,
    title: 'Shirt',
    price: 'Starts @ 199',
    image: 'https://imgs.search.brave.com/m8wYN4XEw5103-fKXtuavH5iDZMlyIoVOTH4ttJtKlI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDg4/MTYwMDQxL3Bob3Rv/L21lbnMtc2hpcnQu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PXhWWmpLQVVKZWNJ/cFljX2ZLUnpfRUI4/SHVSbVhDT09QT3Ra/LVNUNmVGdlE9',
    description: 'Classic shirts that blend style and comfort.',
    discount: '5% Off',
  },
  {
    id: 6,
    title: 'Sets & Suits',
    price: 'Starts @ 209',
    image: 'https://imgs.search.brave.com/HcLr_RCH9OL7MU5HMkuo6LCU3mGj26FMH_h0HMTaTSM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dXNtYWdhemluZS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjQvMDkvbWF0Y2hp/bmctc2V0LmpwZz93/PTMwMCZoPTMwMCZj/cm9wPTEmcXVhbGl0/eT04NiZzdHJpcD1h/bGw',
    description: 'Chic sets and suits for professional or casual wear.',
    discount: '30% Off',
  },
  {
    id: 7,
    title: 'Lightlayers',
    price: 'Starts @ 149',
    image: 'https://imgs.search.brave.com/yMEK__ZwESoGil8qQpFAgXAkmp71FE3Ew-IFrIsgjoM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vdGhlcmln/aHRoYWlyc3R5bGVz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxMy8xMi84LWxv/bmctaGFpcmN1dC13/aXRoLWFuZ2xlZC1s/YXllcnMuanBnP3c9/NTAwJnNzbD0x',
    description: 'Light layers for versatile styling throughout the seasons.',
    discount: '15% Off',
  },
  {
    id: 8,
    title: 'Kurti',
    price: 'Starts @ 149',
    image: 'https://imgs.search.brave.com/mlKAE6grP-Esup0XJXKo5tLQPPXJm7xy94rNPAILio4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly92aW50/YWdlaW5kaWFueWMu/Y29tL2Nkbi9zaG9w/L2ZpbGVzL3Bpbmtn/aGFyYXJhMzguanBn/P3Y9MTY5ODI5MDMz/NiZ3aWR0aD0yMDAw',
    description: 'Traditional Kurtis for a blend of comfort and style.',
    discount: '20% Off',
  },
];

function Cards6() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {cardData.map((card) => (
        <div key={card.id} className="rounded-md shadow-md p-4 bg-white text-center transition-shadow hover:shadow-lg">
          <img src={card.image} alt={card.title} className="w-full h-48 object-cover rounded-md" />
          <h2 className="text-lg font-semibold mt-4">{card.title}</h2>
          <p className="text-gray-500">{card.price}</p>
          <p className="text-gray-700 mt-2">{card.description}</p>
          <p className="text-red-500 font-bold mt-2">{card.discount}</p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
            View More
          </button>
        </div>
      ))}
    </div>
  );
}

export default Cards6;
