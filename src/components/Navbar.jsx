import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Navbar = () => {
const item = useSelector((state) =>  state.cart);
  return (
    <div>
        <h1>Re<span>DUX
      </span></h1>
<div>
<Link  className="navLink" to="/">Home</Link>
<Link  className="navLink" to="/cart">Cart</Link>
<span  className="cartCount">Cart item: {item}</span>
</div>
    </div>

  )
}

export default Navbar;
