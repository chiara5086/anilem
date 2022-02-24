import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
    const test = useContext(CartContext);

    return (
        <div className="card">
    <div className="row">
        <div className="col-md-8 cart">
            <div className="title">
                <div className="row">
                    <div className="col">
                        <h4><b>Carrito de compras</b></h4>
                    </div> 
                    <div className="col align-self-center text-right text-muted">{test.cartList[0].cantidad} items</div>
                </div>
            </div>
                    {
                        test.cartList.map(item => {
                            return(
                                <>
                              <div className="row border-top border-bottom">
                <div className="row main align-items-center">
                    <div className="col-2"><img className="img-fluid" src={test.cartList[0].image}/></div>
                    <div className="col">
                        <div className="row text-muted">Shirt</div>
                        <div className="row">{test.cartList[0].name}</div>
                    </div>
                    <div className="col"> <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a> </div>
                    <div className="col">$ {test.cartList[0].price} <button type="button" className="btn-close"></button></div>
                </div>
            </div>
            <div className="back-to-shop"><a href="#">← </a><span className="text-muted">Back to shop</span></div>
        
        <div className="col-md-4 summary">
            <div>
                <h5><b>Summary</b></h5>
            </div>
            <hr/>
            <div className="row">
                <div className="col" style={{paddingLeft:"0"}}>{test.cartList[0].cantidad}</div>
                <div className="col text-right">$ {test.cartList[0].price}</div>
            </div>
            <form>
                <p>SHIPPING</p> <select>
                    <option className="text-muted">Standard-Delivery- $ 5.00</option>
                </select>
                <p>GIVE CODE</p> <input id="code" placeholder="Enter your code"/>
            </form>
            <div className="row" style={{borderTop: "1px solid rgba(0,0,0,.1)", padding: "2vh 0"}}>
                <div className="col">TOTAL PRICE</div>
                <div className="col text-right">{test.cartList[0].price}</div>
            </div> 
            </div>
            <button className="btn">CHECKOUT</button>
            
            </>
                            )
                        }

                        )
                    }
                   
            
        </div>
    </div>
</div>
    );
}

export default Cart;