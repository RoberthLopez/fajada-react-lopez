import React from 'react'
import { Card } from 'flowbite-react'
import { Link } from "react-router-dom"
import ItemCount from '../ItemCount/ItemCount'

const Item = ({item}) => {

     const onAdd = (qty) => {
         console.log(qty)
       }

  return (
    <div className="max-w-sm">

    <Card
      imgAlt={item.title}
      imgSrc={item.pictureUrl}
    >
    <Link to={"/producto/" + item.id }>
      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {item.title}
      </h5>
    </Link>      
      <ItemCount stock={6} initial={1} onAdd={onAdd} price={item.price} item={item}/>
    </Card>

</div>

  )
}

export default Item