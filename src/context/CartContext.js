import React, { createContext, useState, useEffect } from 'react';
import useLocalStorage from '../customHooks/useLocalStorage';


export const CartContext = createContext([]);

const CartProvider = ({children}) => {
  const [cart, saveCart] = useLocalStorage('CART_V1', []);
  const [show, setShow] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [billTotal, setBillTotal] = useState(0);

  useEffect(() => {

    const getCartTotal = () => {
      let cartTotal = 0;
      cart.map((e) => cartTotal += e.itemQty);
  
      setCartCount(cartTotal);
    }
    setBillTotal(cart.map((e)=>e.item.price*e.itemQty).reduce((prev, act)=> prev + act, 0));

    getCartTotal();
  }, [cart]);
  

  const closeModal = () => {
    setShow(false);
  };

  const addItem = (item, itemQty) => {
    let isInCart = cart.findIndex((e) => e.item.id === item.id );
    let newCart = [...cart]
    if (isInCart !== -1) {
      newCart = newCart.filter((e)=> e !== cart[isInCart]);
      itemQty = cart[isInCart].itemQty + itemQty;

      if (itemQty > item.stock) {
        setShow(true);
      }
      else {
      saveCart([...newCart, { item, itemQty }]);
      }
    }
    else {
      saveCart([...newCart, { item, itemQty }]);
      }
}

  const removeItem = (item) => {
    let newCart = cart.filter((e)=> e.item !== item);
    saveCart([...newCart]);
  }

  const reset = () => {
    saveCart([]);
  }

  return (
    <CartContext.Provider value={{cart, addItem, removeItem, reset, show, closeModal, cartCount, billTotal}}>{children}</CartContext.Provider>
  )
}

export default CartProvider;