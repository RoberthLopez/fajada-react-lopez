import React, { useEffect, useState } from 'react'
import ItemList from '../../components/ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { db } from '../../firebase/firebase'
import { getDocs, collection, query, where } from 'firebase/firestore'

const ItemListContainer = ({greeting}) => {

  const [items, setItems] = useState([])
  const [error, setError] = useState(false)
  let { IdCategoria } = useParams({});
  

  useEffect(() => {
    const categoria = IdCategoria || ""
    const productsCol = collection(db, 'productos');
    const q = query(productsCol, where('category', '==', categoria))
    getDocs(IdCategoria === undefined ? productsCol : q)
    .then((info)=>{
      const list = info.docs.map((product)=> {
        return {...product.data(), id: product.id}})
      setItems(list)
    })
    .catch(()=> {
      setError(true)
    })

  }, [IdCategoria])
  
    
  
  return (
    <>
      {error ? 
      (<div>Ocurrio un error</div>) :
      (<><div className='pt-20 flex place-content-center'>{greeting}</div>
      <ItemList items={items} /> </>)}
      
    </>
    
  )
}

export default ItemListContainer