import React, {useEffect, useState} from 'react';
import Nav from './components/Nav/Nav';
import ItemListContainer from './containers/ItemListCointainer/ItemListContainer';
import ItemDetailContainer from './containers/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './containers/CartView/Cart'
import CartProvider from './context/CartContext';
import Checkout from './containers/Checkout/Checkout';
import NotFound from './components/NotFound/NotFound';
import { getDocs, collection} from 'firebase/firestore';
import { db } from './firebase/firebase';
import LogIn from './components/LogIn/LogIn';
import Register from './components/Register/Register';
import UserProvider from './context/UserContext';

function App() {
  const [categories, setCategories] = useState([]);
  const mensaje = "Lleva tu figura al siguiente nivel";

  useEffect(() => {
    try {
        const categoriesCol = collection(db, 'categorias');
        getDocs(categoriesCol)
        .then((data) => {
          const lista = data.docs.map((cat)=> {
            return {name:cat.data().name, route:`/categoria/${cat.data().name}`, id:cat.id}
          })
          setCategories(lista);
      });
    }
    catch(err){
      console.error(err);
    }
  }, []);


  return (
    <>
      <BrowserRouter>
        <CartProvider>
        <UserProvider>
          <Nav categories={categories}/>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={mensaje} />}/>
            <Route path="/categoria/:IdCategoria" element={<ItemListContainer greeting={mensaje} />}/>
            <Route path="/producto/:IdProducto" element={<ItemDetailContainer />}/>
            <Route path="/cart" element={<Cart />}/> 
            <Route path='/cart/checkout' element={<Checkout />}/>
            <Route path='*' element={<NotFound />}/>
            <Route path='/login' element={<LogIn />}/>
            <Route path='/register' element={<Register />}/>
          </Routes>
        </UserProvider>
        </CartProvider>
      </BrowserRouter>
    </>
);
};

export default App;


