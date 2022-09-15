import React, { useEffect, useState } from 'react'
import { promiseProducts } from '../../assets/promises/promiseProducts'
import { productList } from '../../assets/product-data/products-data'
import ItemList from '../../components/ItemList/ItemList'

const ItemListContainer = ({greeting}) => {

  const [items, setItems] = useState([])

  useEffect(() => {
    promiseProducts(productList)
      .then(res=> setItems(res))
  }, [])
    
  
  return (
    <>
      <div className='flex place-content-center'>{greeting}</div>
      <ItemList items={items} />
    </>
  )
}

export default ItemListContainer