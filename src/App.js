import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return(
    <div className="App"> 
    <BrowserRouter>
    <Navbar />
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
  </Routes>
</BrowserRouter>

    </div>

  )
}
export default App;