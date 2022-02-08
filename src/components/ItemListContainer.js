import "bootstrap-icons/font/bootstrap-icons.css";
import ItemCount from './ItemCount';

const ItemListContainer = ({greeting}) => {
    return (
     <>
        <p className="container row align-items-start">{greeting}</p>
        <ItemCount/>
     </>   
    );
    }

export default ItemListContainer;