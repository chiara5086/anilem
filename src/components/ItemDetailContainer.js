import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {customFetch} from "../utils/customFetch";
import ItemDetail from './ItemDetail';

const {products} = require('../utils/products')

const ItemDetailContainer = () => {

    const [dato, setDato] = useState ([]);
    const {idItem} = useParams();


    useEffect(() => {
        customFetch(2000, products.filter(item => item.id === parseInt(idItem)))
        .then(result => setDato(result))
        .catch(err => console.log(err))
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