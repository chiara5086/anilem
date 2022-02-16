import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {customFetch} from "../utils/customFetch";
import ItemDetail from './ItemDetail';
import ItemCount from './ItemCount'

const {products} = require('../utils/products')

const ItemDetailContainer = (props) => {
    const [dato, setDato] = useState ([]);
    const {idItem} = useParams();
   

    console.log(idItem)

    useEffect(() => {
        customFetch(2000, products.filter(item => item.id === parseInt(idItem)))
        .then(result => setDato(result), console.log(dato))
        .catch(err => console.log(err))
    }, []);
    
    return (
        <>
        {
        dato.id>0
        ? dato.map (item => {
            return (
                <>
                    <ItemDetail item={dato}
                    id={item.id}
                    name={item.name}
                    cost={item.cost}
                    image={item.image}
                    description={item.description}
                    capacity={item.capacity}
                    stock={item.stock}/>
                    <ItemCount/>
                </>
                    )}
        ):        
        <p>Cargando...</p>
        
          }
        </>
        
    )}

export default ItemDetailContainer;