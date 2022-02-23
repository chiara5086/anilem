import { useState } from 'react';
import './components.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";


const ItemCount = (props) => {

    const [cantidad, setCantidad] = useState(0);


const increment = () => {
    if(cantidad < props.stock) setCantidad(cantidad+1);
}
const decrease = () => {
    if (cantidad > props.stock) setCantidad(cantidad-1);
}

const Onclickevent = () => {
    if (cantidad>0){
        props.onAdd(cantidad)
    }
    
}

    return (
    <>
    <div className="row">
        <div className="col-sm-3">
            <div className="input-group">
                <button onClick={decrease} type="button" className="btn btn-outline-dark">-</button>
                <input type="text" name="quant[1]" className="form-control input-number" value={cantidad} min="1" max="10"/>
                <button onClick={increment} type="button" className="btn btn-outline-dark">+</button>
                <button onClick={Onclickevent} type="button" className="btn btn-outline-dark">Agregar al carrito</button>
            </div>
        </div>
    </div>
    </>
    )
}

export default ItemCount;