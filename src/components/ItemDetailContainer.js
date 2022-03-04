import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ItemDetail from './ItemDetail';
import db from "../utils/firebaseConfig";
import { collection, getDocs, query, where  } from "firebase/firestore";

const {products} = require('../utils/products')

const ItemDetailContainer = () => {

    const [dato, setDato] = useState ([]);
    const {idItem} = useParams();


    useEffect(() => {
        const firestoreFetch2 = async () => {
            const q = query(collection(db, "products"), where("id", "==", parseInt(idItem)));
            const querySnapshot = await getDocs(q);
            return querySnapshot.docs.map(document => ({
              id: document.id,
              ...document.data()
            }));

           }
        
           firestoreFetch2()
           .then(result => setDato(result))
           .catch(error => console.log(error));
    }, [idItem]);
    
    return (
        <>
        {
        dato.length > 0 ? (
            dato.map(item => {
            return (
                <>
                    <ItemDetail item={dato}
                    key={item.id+ "header"}
                    id={item.id}
                    name={item.name}
                    cost={item.cost}
                    image={item.image}
                    description={item.description}
                    capacity={item.capacity}
                    stock={item.stock}/>
                </>
                    )
                })
        ):       
        <p>Cargando...</p>
        
          }
        </>
        
    )}

export default ItemDetailContainer;