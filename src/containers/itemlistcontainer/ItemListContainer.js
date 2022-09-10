import React from 'react'
import ItemCount from '../../components/itemcount/ItemCount'

const ItemListContainer = ({greeting}) => {

  const onAdd = (qty) => {
    console.log(qty)
  }
  
  return (
    <>
    <div className='flex place-content-center'>{greeting}</div>
    <ItemCount stock="6" initial="1" onAdd={onAdd}/>
    </>
  )
}

export default ItemListContainer