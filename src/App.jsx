import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Product from './pages/product/Product';
import Menu from './pages/menu/Menu';
import Category from './pages/category/Category';
import Footer from './components/footer/Footer';
import './i18n/i18n';
import './App.css';
import ProducTDetail from './pages/product/ProducTDetail';
import Layout from './components/layout/Layout';
import Cart from './pages/cart/Cart';
import CartAitem from './pages/cartItem/CartAitem';


const App = () => {
  return (
    <div>
      <Layout />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/category' element={<Category />} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/detail/:productId' element={<ProducTDetail/>} />
        <Route path='/item'element={<CartAitem/>}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
