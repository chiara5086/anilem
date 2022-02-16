import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {customFetch} from "../utils/customFetch"
import "bootstrap-icons/font/bootstrap-icons.css";
import ItemList from './ItemList';


const {products} = require('../utils/products')

const ItemListContainer = () => {

    const [datos, setDatos] = useState([]);

    const {idCategory} = useParams();

    console.log(idCategory)

    useEffect (() => {
        if (idCategory === undefined) {
            
            customFetch(1000, products)
            .then(result => setDatos(result))
            .catch(err => console.log(err))
        } else {
            
            customFetch(1000, products.filter(item => item.categoryId === parseInt(idCategory)))
            .then(result => setDatos(result))
            .catch(err => console.log(err)) 
        }
        
    }, [idCategory]);

    return (
     <>
        <ItemList productos={datos}/>
     </>   
    );
    }

export default ItemListContainer;