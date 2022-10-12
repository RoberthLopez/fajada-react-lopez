import React, { useContext, useState } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from "react-router-dom";
import CartModal from '../CartModal/CartModal';
import { CartContext } from '../../context/CartContext';



const ItemDetail = ({item}) => {

    const [count, setCount] = useState("");

    const { addItem } = useContext(CartContext);

    const onAdd = (qty) => {
        let itemQty = qty;
        setCount(qty);
        addItem(item, itemQty);             
    };

    const stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(<StarIcon key={i} className='w-5 h-5 text-yellow-300'/>);
    }

  return (
    
    <>
    <div className='flex flex-col md:flex-row py-[100px] px-4 md:mt-15'>
        <div className='flex flex-col md:w-1/2'>
            <div className=''>
                <h1 className=' text-2xl md:text-3xl font-bold tracking-wide'>{item.title}</h1>
            </div>
            <div className='flex items-center justify-between pt-4'>
                <span className='text-xl md:text-3xl'>{item.price}</span>
                <div className='flex items-center'>
                    <div className='flex space-x-px'>
                        {stars}
                    </div>
                    <div className='pl-2 leading-none'>
                        4.6 / 5.0 <span className='text-gray-900/40'> (556)</span>
                    </div>
                </div>
            </div>
            <p className='text-xl pt-8 leading-relaxed'>
                {item.description}
            </p>
            <CartModal />
            {count === "" ? 
            <ItemCount stock={item.stock} initial={1} onAdd={onAdd} /> :
            <Link to={"/cart"} className="mt-2.5 flex">
                <button
                className="rounded-lg w-full items-center bg-pink-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-pink-800 focus:outline-none focus:ring-4 focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800">
                Terminar mi compra
                </button>
            </Link>}
            
        </div>
        <div className='flex flex-col items-center mt-4 md:w-1/2'>
            <div className='max-w-md'>
                <div>
                    <img src={item.pictureUrl} alt='Imagen Producto' className='object-contain w-[440px] h-auto'/>

                </div>

            </div>
        </div>
    </div>

    
    </>
  );
};

export default ItemDetail