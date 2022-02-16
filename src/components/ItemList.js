import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './components.css';
import Item from './Item';


const ItemList = (props) => {
      return (
        <>
            {
            props.productos.length > 0
            ? props.productos.map(producto => {
                return(
                <div className="col-sm-3">
                <Item
                    key={producto.id}
                    id={producto.id}
                    name={producto.name}
                    cost={producto.cost}
                    image={producto.image}
                    stock={producto.stock}
                    capacity={producto.capacity}

                />
            </div>
            )}



                ): <p>Cargando...</p>
            }
        </>


    )
}

export default ItemList;