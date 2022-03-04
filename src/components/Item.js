import './components.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from "react-router-dom";

// your link creation


const Item = (props) => {
  
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
          <Link to={`/item/${props.id}`}><p href="#" className="card-link">Ver detalle</p></Link>
          <a href="#" className="card-link">Agregar</a>
        </div>
      </div>
    )
  } 
  
   

export default Item;