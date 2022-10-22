import React,{ useContext, useState } from 'react';
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm';
import { db } from '../../firebase/firebase';
import { collection, addDoc, serverTimestamp, doc, updateDoc } from 'firebase/firestore';
import { CartContext } from '../../context/CartContext';
import IdSale from '../../components/IdSale/IdSale';
import UserIdModal from '../../components/UserIdModal/UserIdModal';

const Checkout = () => {
    const { cart, billTotal, reset } = useContext(CartContext);
    const [openModal, setOpenModal] = useState(false);
    const [buyerId, setBuyerId] = useState("");

    const handleSell = (values) => {
        const salesCol = collection(db, 'sales');
        addDoc(salesCol, {
            buyer: values,
            items: cart,
            date: serverTimestamp(),
            total: billTotal
         })
         .then(result=>{
            setBuyerId(result.id);
            cart.map((e)=>{
                const updateStock = doc(db, 'productos', e.item.id);
                return updateDoc(updateStock, {stock: e.item.stock - e.itemQty});               
            });
            reset();
            setOpenModal(true);
        });
    };
        
  return (
    <>
    <div className='pt-20 flex w-full justify-center'>
        <CheckoutForm handleSell={handleSell} setOpenModal={setOpenModal}/>
    </div>
    {openModal &&(<UserIdModal >
        <IdSale buyerId={buyerId} setOpenModal={setOpenModal} />
    </UserIdModal>)}
    </>
  );
};

export default Checkout;