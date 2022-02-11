import "bootstrap-icons/font/bootstrap-icons.css";
import ItemCount from './ItemCount';
import ItemList from './ItemList';

const ItemListContainer = ({greeting}) => {
    return (
     <>
        <p className="container row align-items-start">{greeting}</p>
        <ItemList/>
        <ItemCount/>
     </>   
    );
    }

export default ItemListContainer;