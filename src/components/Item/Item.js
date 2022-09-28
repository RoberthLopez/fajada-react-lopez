import React from 'react'
import { Card } from 'flowbite-react'
import { Link } from "react-router-dom"
import ItemCount from '../ItemCount/ItemCount'

const Item = ({item}) => {

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
    <div className="flex items-center justify-between">
      <span className="text-3xl font-bold text-gray-900 dark:text-white">
          {item.price}$
      </span>
      <Link to={"/producto/" + item.id }>
        <button
        className="rounded-lg bg-pink-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-pink-800 focus:outline-none focus:ring-4 focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800">
              Ver detalles
        </button> 
      </Link>
     
    </div>
    </Card>

</div>

  )
}

export default Item