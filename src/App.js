import './App.css';
import Nav from './components/Nav/Nav';
import ItemListContainer from './containers/ItemListCointainer/ItemListContainer';
import ItemDetailContainer from './containers/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './containers/CartView/Cart'
import CartProvider from './context/CartContext';
import Checkout from './containers/Checkout/Checkout';

function App() {

  const mensaje = "Lleva tu figura al siguiente nivel";

  const categories = [
    {id: 0, name: "fajas", route:"/categoria/fajas"},
    {id: 0, name: "leggins", route:"/categoria/leggins"},
    {id: 0, name: "tops", route:"/categoria/tops"},
    {id: 0, name: "buzos", route:"/categoria/buzos"},
    {id: 0, name: "enterizos", route:"/categoria/enterizos"}
  ]


  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Nav categories={categories}/>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={mensaje} />}/>
            <Route path="/categoria/:IdCategoria" element={<ItemListContainer greeting={mensaje} />}/>
            <Route path="/producto/:IdProducto" element={<ItemDetailContainer />}/>
            <Route path="/cart" element={<Cart />}/> 
            <Route path='/cart/checkout' element={<Checkout />}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
);
}

export default App;


