import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import ItemList from './ItemList';
import db from "../utils/firebaseConfig";
import { collection, getDocs, query, where  } from "firebase/firestore";


const ItemListContainer = () => {

    const [datos, setDatos] = useState([]);

    const {idCategory} = useParams();


    useEffect (() => {
        
        if (idCategory === undefined) {
            const firestoreFetch = async () => {
         const querySnapshot = await getDocs(collection(db, "products"));
         return querySnapshot.docs.map(document => ({
           id: document.id,
           ...document.data()
         }));
         
        }
        firestoreFetch()
            .then(result => setDatos(result))
            .catch(error => console.log(error));
        } else {
            const firestoreFetch2 = async () => {
                const q = query(collection(db, "products"), where("category", "==", parseInt(idCategory)));
                const querySnapshot = await getDocs(q);
                return querySnapshot.docs.map(document => ({
                  id: document.id,
                  ...document.data()
                }));

               }
            
               firestoreFetch2()
               .then(result => setDatos(result))
               .catch(error => console.log(error));
            
        }
        
                     
    }, [idCategory]);

    return (
     <>
        <ItemList productos={datos}/>
     </>   
    );
    }

export default ItemListContainer;