import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductList from './pages/ProductList.jsx';
import ContactUs from './pages/ContactUs.jsx';
import Login from './pages/Login.jsx';
import OTP from './pages/OTP.jsx';
import WomenEthnic from './components/WomenEthnic.jsx';
import WomenWestern from './components/WomenWestern.jsx';
import Men from './components/Men.jsx';
import SignUp from './pages/SignUp.jsx'; 
import TopNavBar from './pages/TopNavBar.jsx'; 
import Cart from './pages/cart.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/ContactUs',
    element: <ContactUs />
  },
  {
    path: '/products',
    element: <ProductList />
  },
  {
    path: '/Login',
    element: <Login />
  },
  {
    path: '/OTP',
    element: <OTP />
  },
  {
    path: '/WomenEthnic',
    element: <WomenEthnic />
  },
  {
    path: '/WomenWestern',
    element: <WomenWestern />
  },
  {
    path: '/Men',
    element: <Men />
  },
  {
    path: '/topnavbar', // Path is fine here
    element: <TopNavBar /> // Corrected component name
  },
  {
    path: '/signUp',  // Correct path name
    element: <SignUp />  // Corrected here
  },

  {
    path: '/Cart',  // Correct path name
    element: <Cart />  // Corrected here
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
