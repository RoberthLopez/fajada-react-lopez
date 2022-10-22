import React, {useState, useEffect} from 'react';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import Loading from '../../components/Loading/Loading';

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const [loader, setLoader] = useState(true)
    const [itemExist, setItemExist] = useState(false)
    let { IdProducto } = useParams({});

    useEffect(() => {

      try {
          const productCol = collection(db, 'productos');
          const refDoc = doc(productCol, IdProducto);
          getDoc(refDoc)
          .then((data) => {
            if (data.data())
            setItem({
              id: data.id,
              ...data.data()
            });
            else {
              setItemExist(true)
            }
        });
      }
      catch(err){
        console.error(err)
      }
      finally {
        setLoader(false)
      }

    }, [IdProducto]);
    


  return (
    <>
    { loader ? <Loading /> :
      itemExist ? 
      <div className='flex w-screen h-screen justify-center items-center text-center font-extrabold text-pink-600 text-3xl'>
        El producto no existe
      </div> :
       <ItemDetail item={item}/>
    }    
    </>
  )
}

export default ItemDetailContainer;