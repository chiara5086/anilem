import {createContext, useState} from "react";

export const CartContext = createContext ();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item, cantidad) => {
        setCartList([
            ...cartList,            
            {
            id: item.id,
            name: item.name,
            image: item.image,
            price: item.cost,
            cantidad: cantidad,
        }]);
    }
    return(
        <CartContext.Provider value={{cartList, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
