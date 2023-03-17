import React, { useState, useEffect } from 'react'
import { add } from '../store/cartSlice';
import { useDispatch } from 'react-redux';

const Product = () => {
  const dispatch = useDispatch();
const [product, setProducts] = useState([]);

useEffect(() => {
  const fetchProducts = async () => {
const res = await  fetch('https://fakestoreapi.com/products');
const data = await res.json();

setProducts(data);
  }
fetchProducts();

}, []);
 
const handleAdd = (product) => {
dispatch(add(product));
console.log(product)
};

  return (
    <div  className='product-wrap'>
{
  product.map(product => (
    <div className='cart' key={product.id}>
   <img src={product.image} alt="" />
   <h4>{product.title}</h4>
   <h5>Rs{product.price}</h5>
   <button  onClick={()  => handleAdd(product)}    className="btn">Add To Card</button>
    </div>
  ))
}    
    </div>
  )
}

export default Product;
