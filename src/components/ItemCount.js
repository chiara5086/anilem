import { useState } from 'react';
import './components.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";


const ItemCount = () => {
    const [cantidad, setCantidad] = useState(1);

const increment = () => {
    if (cantidad<5) setCantidad(cantidad+1);
}
const decrease = () => {
    if (cantidad>1) setCantidad(cantidad-1);
}
const mensaje = () => {
    alert(cantidad>1 ? "Ha seleccionado "+cantidad+" items.": "Ha seleccionado "+cantidad+" item.");   
}
    return (
    <>
    <div className="row">
        <div className="col-sm-3">
            <div className="input-group">
                <button onClick={decrease} type="button" className="btn btn-outline-dark">-</button>
                <input type="text" name="quant[1]" className="form-control input-number" value={cantidad} min="1" max="10"/>
                <button onClick={increment} type="button" className="btn btn-outline-dark">+</button>
                <button onClick={mensaje} type="button" className="btn btn-outline-dark">Agregar al carrito</button>
            </div>
        </div>
    </div>
    </>
    )
}

export default ItemCount;