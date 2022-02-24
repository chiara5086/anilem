import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.css';
import CheckoutBtn from './CheckoutBtn';
import ItemCount from './ItemCount';
import { useState, useEffect, useContext } from "react";
import { CartContext } from './CartContext';

const ItemDetail = (item) => {

    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext)

    useEffect(() => {
  }, [itemCount]);

    const onAdd = (cantidad) => {
      mensaje(cantidad);
      setItemCount(cantidad);
      test.addToCart(item, cantidad);
      
    }

    const mensaje = (cantidad) => {
      alert(cantidad>1 ? "Ha seleccionado "+cantidad+" items.": "Ha seleccionado "+cantidad+" item.");   
  }

    return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={item.image} className="img-fluid rounded-start" alt="..."/>
          </div>
        <div className="col-md-8">
          <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">Descripción: {item.description}</p>
          <h5>${item.cost}</h5>
          <p className="card-text"><small className="text-muted">Unidades en stock: {item.stock}</small></p>
          </div>
        </div>
        </div>
      </div>

    {
      itemCount === 0
      ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd}/>
      : <CheckoutBtn/>
    }

    </>
  )}

  export default ItemDetail;
  