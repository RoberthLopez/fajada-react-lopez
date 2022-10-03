import React, {useContext} from 'react'
import { Table } from 'flowbite-react'
import { CartContext } from '../../context/CartContext'
import { TrashIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const Cart = () => {
  const {cart, removeItem} = useContext(CartContext)
  
  let total = cart.map((e)=>e.item.price*e.itemQty).reduce((prev, act)=> prev + act, 0)

  return (
    <>
    {cart.length === 0 ?
    <div className='flex flex-col gap-10 justify-center items-center text-center h-100 m-20'>
      <div className='text-xl font-bold'>No tienes ningun item agregado al carrito</div>
      <Link to="/">
        <button className="rounded-lg bg-pink-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-pink-800 focus:outline-none focus:ring-4 focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800">
          Seguir comprando
        </button>
      </Link>
    </div> :
    <>
      <Table striped={true}>
        <Table.Head>
          <Table.HeadCell>
            Nombre de producto
          </Table.HeadCell>
          <Table.HeadCell>
            Cantidad
          </Table.HeadCell>
          <Table.HeadCell>
            Precio
          </Table.HeadCell>
          <Table.HeadCell>
            Precio Total
          </Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">
              Eliminar
            </span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {
            cart.map((e)=>{
              return(
          <Table.Row key={e.item.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {e.item.title}
            </Table.Cell>
            <Table.Cell>
              {e.itemQty}
            </Table.Cell>
            <Table.Cell>
              ${e.item.price}
            </Table.Cell>
            <Table.Cell>
              ${e.item.price*e.itemQty}
            </Table.Cell>
            <Table.Cell>
              <span
                onClick={() => removeItem(e.item)}
              >
                <TrashIcon className='w-4 h-4'/>
              </span>
            </Table.Cell>
          </Table.Row>
          )})
          }
        </Table.Body>
      </Table>
      <div className='flex justify-end gap-20  m-20 content-center'>
        <div className='text-xl font-bold'>
          Total a pagar
        </div>
        <div className=''>
          ${total}
        </div>
      </div>
    </>

  }
  </>

  )
}

export default Cart