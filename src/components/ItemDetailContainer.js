import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ItemDetail from './ItemDetail';
import db from "../utils/firebaseConfig";
import { collection, getDocs, query, where  } from "firebase/firestore";


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
                
                <div key={item.key+'header'}>
                    <ItemDetail 
                    item={dato}
                    id={item.id}
                    name={item.name}
                    cost={item.cost}
                    image={item.image}
                    description={item.description}
                    capacity={item.capacity}
                    stock={item.stock}/>
                </div>
                
                    )
                })
        ):       
        <p>Cargando...</p>
        
          }
        </>
        
    )}

export default ItemDetailContainer;