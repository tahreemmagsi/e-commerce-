import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes,Redirect } from 'react-router-dom';

import Navbar from "./components/navbar";
import Cart from "./components/cart";
import Shop from './components/shop';
import Emptycart from './components/emptycart';
import Footer from './components/footer';
import About from './components/about';
import Home from './components/home';
import Contact from './components/contact';
import SingleProduct from './components/singleproduct';
function App() {
  return (
    <Router>
<>
        <Navbar />
        <Routes>
        <Route path="/singleproduct/:id" element={<SingleProduct />} />

        <Route path="/empty" element={<Emptycart />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />

  <Route path="/cart" element={<Cart />} />
  <Route path="/" element={<Home />} />
</Routes>
<Footer/>
      </>
    </Router>
  );
}

export default App;
