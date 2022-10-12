import React from 'react';
import Item from '../Item/Item';

const ItemList = ({items}) => {

  return (

    <div className='grid grid-cols-auto justify-items-center gap-8 mt-10 md:m-10'>
      {items.map((e) => {
        return <Item key={`${e.title}-${e.id}`} item={e}/>
        })}
    </div>

  );
};

export default ItemList