import React from 'react';
import { Link } from 'react-router-dom';

const IdSale = ( {buyerId, setOpenModal}) => {
  return (
    <div className='max-w-[300px] rounded h-[300px] bg-white py-[33px] px-[40px] flex justify-center items-center flex-col gap-4 border-lg relative'>
        <h2 className='font-bold text-pink-700 text-3xl'>¡Felicidades!</h2>
        <p className='text-black text-center'>Tu compra ha finalizado exitosamente</p>
        <p className='text-black text-center'>El id de tu compra es <span className='font-bold'>{buyerId}</span></p>
        <Link to="/">
            <button onClick={()=>setOpenModal(false)} className="rounded-lg mt-2 bg-pink-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-pink-800 focus:outline-none focus:ring-4 focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800">Aceptar</button>
        </Link>
    </div>
  );
};

export default IdSale;