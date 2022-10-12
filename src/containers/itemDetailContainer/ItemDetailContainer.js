import React, {useState, useEffect} from 'react';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    let { IdProducto } = useParams({});

    useEffect(() => {

      const productCol = collection(db, 'productos');
      const refDoc = doc(productCol, IdProducto);
      getDoc(refDoc)
      .then((data) => {
        setItem({
          id: data.id,
          ...data.data()
        });
      });
    }, [IdProducto]);
    


  return (
    <>
    <ItemDetail item={item}/>
    </>
  )
}

export default ItemDetailContainer;