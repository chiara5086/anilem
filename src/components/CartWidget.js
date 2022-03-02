import "bootstrap-icons/font/bootstrap-icons.css";
import './components.css';
import Badge from "@material-ui/core/Badge";
import { Link } from "react-router-dom";
import { CartContext } from './CartContext';
import { useContext } from "react";

const CartWidget = () => {

    const test = useContext(CartContext);

    return (
     <>
     <Badge color="secondary" badgeContent={test.calcItems()}>
     <Link to="/cart" style={{textDecoration: 'none', color: 'white'}}><i className="bi bi-cart4"></i></Link>
    </Badge>
     </>   
    );
    }

export default CartWidget;