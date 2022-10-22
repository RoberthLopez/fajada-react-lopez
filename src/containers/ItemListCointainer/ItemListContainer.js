import React, { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/firebase';
import { getDocs, collection, query, where } from 'firebase/firestore';
import Loading from '../../components/Loading/Loading';

const ItemListContainer = ({greeting}) => {

  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(true)
  let { IdCategoria } = useParams({});
  

  useEffect(() => {
    try {
      const categoria = IdCategoria || ""
      const productsCol = collection(db, 'productos');
      const q = query(productsCol, where('category', '==', categoria));
      getDocs(IdCategoria === undefined ? productsCol : q)
      .then((info)=>{
        const list = info.docs.map((product)=> {
          return {...product.data(), id: product.id}
        })
        setItems(list);
      })
    }
    catch (err){
      console.error(err)
      setError(true)
    }
    finally{
      setLoader(false)
    }

  }, [IdCategoria]);
  
    
  
  return (
    <>
      
      {loader ? <Loading /> :
      error ? 
      (<div>Ocurrio un error</div>) :
      (<><div className='pt-[100px] text-3xl text-center text-pink-600 font-extrabold flex place-content-center'>{greeting}</div>
      <ItemList items={items} /> </>)}
      
    </>
    
  )
}

export default ItemListContainer;