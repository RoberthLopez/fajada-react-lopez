import React, { useEffect, useState } from 'react'
import ItemList from '../../components/ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {

  const [items, setItems] = useState([])
  let { IdCategoria } = useParams({});
  

  useEffect(() => {
    const getItems= async () => {
      try {
        const res = await fetch("https://fajada-react-default-rtdb.firebaseio.com/productos.json")
        const data = await res.json();
        IdCategoria === undefined ? setItems(data) : setItems(data.filter(p => p.category === IdCategoria))
      }
      catch (err) {
        console.error(err)
      }
    }

    getItems()
  }, [IdCategoria])
  
    
  
  return (
    <>
      <div className='flex place-content-center'>{greeting}</div>
      <ItemList items={items} />
    </>
  )
}

export default ItemListContainer