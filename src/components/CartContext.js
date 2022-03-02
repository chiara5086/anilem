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

    const calcItems = () => {
        let cantItems = cartList.map(item => item.cantidad);
        return cantItems.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }

    const calcPerItem = (id) => {
        let index = cartList.map(item => item.id).indexOf(id);
        return cartList[index].price*cartList[index].cantidad;
    }
    const calcOrderTotal = () => {
        let orderTotal = cartList.map(item => calcPerItem(item.id));
        return orderTotal.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    const calcTotal = () => {
        if (cartList.length > 0) return calcOrderTotal();
        return 0;
    }

    return(
        <CartContext.Provider value={{cartList, addToCart, deleteProduct, removeList, calcItems, calcPerItem, calcTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;
