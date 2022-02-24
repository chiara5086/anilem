import './components.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";

const CheckoutBtn = () => {
    return (
        <>  
        <Link to="/cart">
         <button type="button" className="btn btn-dark">Finalizar compra</button>
         </Link>
        </>
    )
}

export default CheckoutBtn;