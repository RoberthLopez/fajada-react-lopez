import React from 'react';
import { Table } from 'flowbite-react';

const OrderSearch = ({searchItem, setShowSearchIdModal}) => {


  return (
    <div className='w-full rounded h-[500px] bg-white py-[33px] px-[40px] flex justify-center items-center flex-col gap-4 border-lg relative text-black'>
    <div className='text-pink-700 font-bold text-3xl p-5'>
      Orden de compra
    </div>
    <Table striped={true}>
        <Table.Head>
          <Table.HeadCell>
            Nombre de producto
          </Table.HeadCell>
          <Table.HeadCell>
            Precio
          </Table.HeadCell>
          <Table.HeadCell>
            Cantidad
          </Table.HeadCell>
          <Table.HeadCell>
            Precio Total
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          { searchItem &&
            searchItem.items.map((e)=>{
              return(
          <Table.Row key={e.item.title} className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {e.item.title}
            </Table.Cell>
            <Table.Cell>
              {e.item.price}
            </Table.Cell>
            <Table.Cell>              
              {e.itemQty}
            </Table.Cell>
            <Table.Cell>
              {e.item.price*e.itemQty}
            </Table.Cell>
          </Table.Row>
          )})
          }
        </Table.Body>
      </Table>
      {searchItem && <div className='flex gap-4'>
        <div className='font-bold'>Total pagado:</div>
        <div>{searchItem.total}</div>
      </div>}

    <button onClick={()=>setShowSearchIdModal(false)} className="rounded-lg mt-2 bg-pink-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-pink-800 focus:outline-none focus:ring-4 focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800 w-[150px]">
        Aceptar    
    </button>

  </div>
  );
};

export default OrderSearch;