import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css'
import App from './App.jsx'

import HomePage from './Landing_Page/home/HomePage.jsx';
import AboutPage from './Landing_Page/about/AboutPage.jsx';
import PricingPage from './Landing_Page/pricing/PricingPage.jsx';
import ProductPage from './Landing_Page/products/ProductPage.jsx';
import SupportPage from './Landing_Page/support/SupportPage.jsx';
import Navbar from './Landing_Page/Navbar.jsx';
import Footer from './Landing_Page/Footer.jsx';
import NotFound from './Landing_Page/NotFound.jsx';
import Signup from './Landing_Page/signup/SignUp.jsx';
import Login from './Landing_Page/signup/Login.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/products' element={<ProductPage />} />
      <Route path='/pricing' element={<PricingPage />} />
      <Route path='/support' element={<SupportPage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)
