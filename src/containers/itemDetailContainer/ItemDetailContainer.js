import React, {useState, useEffect} from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    let { IdProducto } = useParams({});

    useEffect(() => {
        
    const getItem  = async () => {
        try {
            const res = await fetch('https://fajada-react-default-rtdb.firebaseio.com/productos.json');
            const data = await res.json();
            setItem(data[IdProducto])
        }
        catch (err) {
            console.error(err)
        }
    }
    getItem()
    }, [IdProducto])
    


  return (
    <>
    <ItemDetail item={item}/>
    </>
  )
}

export default ItemDetailContainer