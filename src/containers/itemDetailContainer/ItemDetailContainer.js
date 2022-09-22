import React, {useState, useEffect} from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});

    useEffect(() => {
        
    const getItem  = async () => {
        try {
            const res = await fetch('https://fajada-react-default-rtdb.firebaseio.com/0.json');
            const data = await res.json();
            setItem(data);
        }
        catch (err) {
            console.error(err)
        }
    }
    
    getItem()

    }, [])
    


  return (
    <>
    <ItemDetail item={item}/>
    </>
  )
}

export default ItemDetailContainer