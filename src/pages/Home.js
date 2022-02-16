import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "../components/Navbar";
import ItemListContainer from "../components/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer";

const Home = () => {
    return (
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<div className="row"><ItemListContainer/></div>}/>
            <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
            <Route path="/category/:idCategory" element={<div className="row"><ItemListContainer/></div>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Home
