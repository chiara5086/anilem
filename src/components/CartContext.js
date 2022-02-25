import {createContext, useState} from "react";

export const CartContext = createContext ();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item, cantidad) => {
        const prodElegido = cartList.filter(prod => prod.id === item.id);
        if (prodElegido.length===0){
          setCartList([
            ...cartList,            
            {
            id: item.id,
            name: item.name,
            image: item.image,
            price: item.cost,
            cantidad: cantidad,
        }]);  
        } else {
            let cantCarrito;
            prodElegido.forEach(p => cantCarrito = p.cantidad);
            let index = cartList.findIndex(prod => prod.id === item.id);
        
            cartList.splice(index, 1);

            let cantidadNueva = cantCarrito + cantidad;
        
            setCartList([
                ...cartList,            
                {
                id: item.id,
                name: item.name,
                image: item.image,
                price: item.cost,
                cantidad: cantidadNueva,
            }]);
        }
        }

    const deleteProduct = (id) => {
     let result = cartList.filter(item => item.id !== id);
     setCartList(result);
    }

    const removeList = () => {
        setCartList([]);
    }

    return(
        <CartContext.Provider value={{cartList, addToCart, deleteProduct, removeList}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
