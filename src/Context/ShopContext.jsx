import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);
const getDefaultCart = () => {
    let cart = {};
    all_product.forEach(item => { cart[item.id]=0 })
    return cart;
}

const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        console.log(cartItems);
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item of all_product) {
            if (cartItems[item.id] > 0) {
                totalAmount += (item.new_price * cartItems[item.id]);
            }
        }
        return totalAmount;
    }
    const contextValue = { getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart };
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;