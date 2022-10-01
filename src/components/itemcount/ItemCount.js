import React, { useState } from 'react'
import { PlusIcon } from "@heroicons/react/24/outline"
import { MinusIcon } from "@heroicons/react/24/outline"


const ItemCount = ({stock, initial, onAdd}) => {
    const [qty, setQty] = useState(parseInt(initial))


    const clickHndlrAddition = () => qty < stock && setQty(qty + 1);

    const clickHndlrSubstraction = () => qty > initial && setQty(qty - 1);

    const addToCart = () => {
      stock > 0 ? onAdd(qty) : console.log("No hay stock")
    }
    


  return (
    <>
    <div className="mt-2.5 mb-3 flex items-center border-solid border-2 p-2 rounded border-pink-200">
      <button>
        <PlusIcon onClick={clickHndlrAddition} className='h-6 w-6 text-pink-500'/>
      </button>
      
      <span className="grow text-center">
          {qty}
      </span>
      <button>
        <MinusIcon onClick={clickHndlrSubstraction}className='h-6 w-6 text-pink-500'/>
      </button>
        
    </div>
      <button onClick={addToCart} className="rounded-lg bg-pink-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-pink-800 focus:outline-none focus:ring-4 focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800">
        Agregar al carrito
      </button>
    </>
    
  )
}

export default ItemCount