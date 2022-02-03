import "bootstrap-icons/font/bootstrap-icons.css";

const ItemListContainer = ({greeting}) => {
    return (
     <>
        <p className="container row align-items-start">{greeting}</p>    
     </>   
    );
    }

export default ItemListContainer;