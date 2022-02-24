import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import CartContextProvider from './components/CartContext';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<div className="row"><ItemListContainer/></div>}/>
            <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
            <Route path="/category/:idCategory" element={<div className="row"><ItemListContainer/></div>}/>
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
        </BrowserRouter>
        </CartContextProvider>
    </div>
  );
}

export default App;
