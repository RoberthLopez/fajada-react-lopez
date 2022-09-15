import React from 'react'
import Item from '../Item/Item'

const ItemList = ({items}) => {

  return (

    <div className='grid grid-rows-2 grid-flow-col gap-1'>
      {items.map((e) => {
        return <Item key={`${e.title}-${e.id}`} item={e}/>
        })}
    </div>

  )
}

export default ItemList