import React from 'react'
import { Card } from 'flowbite-react'
import ItemCount from '../ItemCount/ItemCount'

const Item = ({item}) => {

    const onAdd = (qty) => {
        console.log(qty)
      }

  return (
    <div className="max-w-sm">
  <Card
    imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
    imgSrc={item.pictureUrl}
  >
    <a href="#">
      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {item.title}
      </h5>
    </a>
    <ItemCount stock={6} initial={1} onAdd={onAdd} price={item.price}/>
  </Card>
</div>

  )
}

export default Item