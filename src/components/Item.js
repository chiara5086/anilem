import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.css';

const Item = (props) => {
    return (
        <div className="row">
        <div className="card col-sm-3" style={{width: "18rem;"}}>
        <img src={props.image} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Precio: {props.cost}</li>
          <li className="list-group-item">Capcidad: {props.capacity}</li>
          <li className="list-group-item">Stock: {props.stock}</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">Ver detalle</a>
          <a href="#" className="card-link">Agregar</a>
        </div>
      </div>
      </div>
    )     
 }

export default Item;