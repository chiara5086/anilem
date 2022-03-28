import './components.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from "react-router-dom";
import ItemCount from "./ItemCount";
import {useState, useContext} from "react";
import { CartContext } from './CartContext';



const Item = (props) => {

  const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext)
  
  const onAdd = (cantidad) => {
    mensaje(cantidad);
    setItemCount(cantidad);
    test.addToCart(props, cantidad);
    
  }

  const mensaje = (cantidad) => {
    alert(cantidad>1 ? "Ha agregado al carrito "+cantidad+" items.": "Ha agregado al carrito "+cantidad+" item.");   
}

    return (
        <div className="card border-secondary" style={{width: "18rem"}}>
        <img src={props.image} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Precio: {props.cost}</li>
          <li className="list-group-item">Stock: {props.stock}</li>
        </ul>
        <div className="card-body">
          <Link to={`/item/${props.id}`}><p href="#" className="btn btn-outline-dark">Ver detalle</p></Link>
          <div><ItemCount forma={""} stock={props.stock} initial={itemCount} onAdd={onAdd}/></div>
        </div>
      </div>
    )
  } 
  
   

export default Item;