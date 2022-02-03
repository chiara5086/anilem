import "bootstrap-icons/font/bootstrap-icons.css";
import './components.css';
import Badge from "@material-ui/core/Badge";

const CartWidget = () => {
    return (
     <>
     <Badge color="secondary" badgeContent={3}>
     <i className="bi bi-cart4"></i>
    </Badge>
     </>   
    );
    }

export default CartWidget;