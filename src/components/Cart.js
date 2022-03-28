import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import {collection, serverTimestamp, setDoc, doc, updateDoc, where, query, getDocs, increment} from "firebase/firestore";
import db from '../utils/firebaseConfig';



const Cart = () => {
    const test = useContext(CartContext);
  
    const createOrder = () => {
      let order = {
        buyer: {
          email: 'juanperez@mail.com',
          name: 'Juan Perez',
          phone: '1133457859',
        },
        date: serverTimestamp(),
        items: test.cartList.map((it) => {
          return {
            id: it.id,
            price: it.price,
            title: it.name,
            cantidad: it.cantidad,
          };
        }),
        total: test.calcTotal(),
      };
      console.log(order);
  
      const createOrderInFirestore = async () => {
        const newOrderRef = doc(collection(db, 'orders'));
        await setDoc(newOrderRef, order);
        return newOrderRef;
      };
  
      createOrderInFirestore()
        .then((result) => {
          alert('Tu orden ha sido creada: ' + result.id);
          console.table(test.cartList);
          test.cartList.map(async (item) => {
            const itemQuery = query(
              collection(db, 'products'),
              where('id', '==', item.id)
            );
            const itemDocs = await getDocs(itemQuery);
            itemDocs.forEach(async (itemDoc) => {
              const itemRef = doc(db, 'products', itemDoc.id);
              await updateDoc(itemRef, {
                stock: itemDoc.data().stock - item.cantidad,
              });
            });
          });
          test.removeList();
        })
        .catch((error) => console.log(error));
    };
  
    return (
      <>
        <div className='cart_title'>Carrito de compras</div>
        {test.cartList.length > 0 ? (
          <div className='cart_buttons'>
            <button
              onClick={test.removeList}
              type='button'
              className='button cart_button_clear'
            >
              Vaciar Carrito
            </button>
          </div>
        ) : (
          <p>No hay productos en el carrito</p>
        )}
  
        {test.cartList.length > 0 ? (
          test.cartList.map((item) => {
            return (
              <div className='cart_section'>
                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-lg-10 offset-lg-1'>
                      <div className='cart_container'>
                        <div className='cart_items'>
                          <ul className='cart_list'>
                            <li className='cart_item clearfix'>
                              <div className='cart_item_image'>
                                <img src={item.image} alt='' />
                              </div>
                              <div className='cart_item_info d-flex flex-md-row flex-column justify-content-between'>
                                <div className='cart_item_name cart_info_col'>
                                  <div className='cart_item_title'>Nombre</div>
                                  <div className='cart_item_text'>
                                    {item.name}
                                  </div>
                                </div>
                                <div className='cart_item_quantity cart_info_col'>
                                  <div className='cart_item_title'>Cantidad</div>
                                  <div className='cart_item_text'>
                                    {item.cantidad}
                                  </div>
                                </div>
                                <div className='cart_item_price cart_info_col'>
                                  <div className='cart_item_title'>Precio</div>
                                  <div className='cart_item_text'>
                                    {item.price}
                                  </div>
                                </div>
                                <div className='cart_item_total cart_info_col'>
                                  <div className='cart_item_title'>Total</div>
                                  <div className='cart_item_text'>
                                    {test.calcPerItem(item.id)}
                                  </div>
                                </div>
                                <div>
                                  <button
                                    onClick={() => test.deleteProduct(item.id)}
                                  >
                                    <i className='bi bi-trash'></i>
                                  </button>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p></p>
        )}
        <div className='order_total'>
          <div className='order_total_content text-md-right'>
            <div className='order_total_title'>Order Total:</div>
            <div className='order_total_amount'>$ {test.calcTotal()}</div>
          </div>
        </div>
        <div className='cart_buttons'>
          {' '}
          <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
            <button type='button' className='button cart_button_clear'>
              Continuar comprando
            </button>
          </Link>{' '}
          <button
            onClick={createOrder}
            type='button'
            className='button cart_button_clear'
          >
            Finalizar compra
          </button>
        </div>
      </>
    );
  };
  
  export default Cart;
  