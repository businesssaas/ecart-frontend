import React, { useState } from "react"
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from "react-router-dom"
import { useContext } from "react"
import { ShopContext } from "../../Context"

const Navbar = () => {
    const [menu, setmenu] = useState("shop");
    const { cartItems } = useContext(ShopContext)
    const getNoOfItemInCart = (cartItems) => {
        let cartCount = 0;
        Object.keys(cartItems).forEach(key=>{
            cartCount+=cartItems[key];
        })
        return cartCount
    }
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => { setmenu("shop") }}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link> {menu === "shop" ? <hr /> : <></>}</li>
                <li onClick={() => { setmenu("Mens") }}><Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link> {menu === "Mens" ? <hr /> : <></>}</li>
                <li onClick={() => { setmenu("Womens") }}><Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link> {menu === "Womens" ? <hr /> : <></>}</li>
                <li onClick={() => { setmenu("Kids") }}><Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link> {menu === "Kids" ? <hr /> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getNoOfItemInCart(cartItems)}</div>


            </div>
        </div>
    )
}
export default Navbar