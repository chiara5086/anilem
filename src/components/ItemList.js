import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './components.css';
import Item from './Item';
import { useEffect, useState } from 'react';



const products = [
    {
        id: 30,
        name: "Agua Con Gas 1,5 lts",
        stock: 100,
        cost: 140,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
        capacity: 1500,
        image: [
            "https://res.cloudinary.com/bodegas-del-sur/image/upload/v1631316114/BodegasDelSur/01_1619706181.webp"
        ],
    },
    {
        id: 29,
        name: "Agua Sin Gas 1,5 lts",
        stock: 100,
        cost: 140,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
        capacity: 1500,
        image: [
            "https://res.cloudinary.com/bodegas-del-sur/image/upload/v1631316114/BodegasDelSur/01_1619706076.webp"
        ],
    },
    {
        id: 76,
        name: "Alambrado Chardonnay 750 ml",
        stock: 92,
        cost: 575,
        description: "Se muestra con tonos amarillo verdoso de intensidad media. En la nariz encontramos frutas blancas maduras, peras, manzanas y banana, frutas tropicales, con notas de la maduración en barricas sobre las borras como vainilla, manteca y miel. Buen volumen, complejo, maduro, con una entrada untuosa en la boca, buen desarrollo y largo final. Se repiten las notas frutales del aroma.",
        capacity: 750,
        image: [
            "https://res.cloudinary.com/bodegas-del-sur/image/upload/v1631316095/BodegasDelSur/01_1605541215.jpg"
        ],
    }
]


function customFetch(products, error) {
    return new Promise((resolve, reject) => {
        if (products) {
            setTimeout(() => {
                resolve(products)
            }, 1000);
        } else {
            reject(error)
        }
    })
}


const ItemList = () => {
    const [productos, setproductos] = useState(1);
    //ComponentDidMount
    useEffect(() => {
        setTimeout(() => {
            customFetch(products, "Error")
                .then(products => setproductos(products))
                .catch((err) => console.log(err))
        }, 1000);
    }, []);
    return (
        <>
            {
            productos.length > 0
            ? productos.map(producto => {
                return(
                <div className="row">
                <Item
                    id={producto.id}
                    name={producto.name}
                    cost={producto.cost}
                    image={producto.image}
                />
            </div>
            )}
                    


                ): <p>Cargando...</p>
            }
        </>


    )
}
export default ItemList;