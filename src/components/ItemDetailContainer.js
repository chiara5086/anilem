import {useEffect, useState} from "react"
import {customFetch} from "../utils/customFetch"
import ItemDetail from './ItemDetail';
import ItemCount from './ItemCount'

const {products} = require('../utils/products')

const ItemDetailContainer = () => {
    const [dato, setDato] = useState ({});

    useEffect(() => {
        customFetch(2000, products[1])
        .then(result => setDato(result), console.log(dato))
        .catch(err => console.log(err))
    }, []);
    
    return (
        <>
        {
        dato.id>0
        ? (           <>
                    <ItemDetail
                    id={dato.id}
                    name={dato.name}
                    cost={dato.cost}
                    image={dato.image}
                    description={dato.description}
                    capacity={dato.capacity}
                    stock={dato.stock}/>
                    <ItemCount/>
                    </>
                    )
                
        
        :        
        <p>Cargando...</p>
        
          }
        </>
        
    )}

export default ItemDetailContainer;