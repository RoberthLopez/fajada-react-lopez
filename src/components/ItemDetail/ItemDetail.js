import React from 'react'
import { StarIcon } from '@heroicons/react/24/solid'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'

const ItemDetail = ({item}) => {

    const stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(<StarIcon key={i} className='w-5 h-5 text-yellow-300'/>)
    }
  return (
    
    <>
    <div className='flex pt-10 pb-12 pl-20'>
        <ArrowLeftIcon className='w-8 h-5'/>
        <div className='flex flex-col w-1/2'>
            <div className='pt-10'>
                <h1 className='text-4xl font-bold tracking-wide'>{item.title}</h1>
            </div>
            <div className='flex items-center justify-between pt-4'>
                <span className='text-3xl'>{item.price}</span>
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
            <button
            className="rounded-lg mt-4 bg-pink-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-pink-800 focus:outline-none focus:ring-4 focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800">
        Agregar al carrito
      </button>
        </div>
        <div className='flex flex-col items-center w-1/2'>
            <div className='max-w-md'>
                <div>
                    <img src={item.pictureUrl} alt='Imagen Producto' className='object-contain w-[440px] h-auto'/>

                </div>

            </div>
        </div>
    </div>

    
    </>
  )
}

export default ItemDetail