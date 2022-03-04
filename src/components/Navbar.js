import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './components.css';
import CartWidget from './CartWidget';


const Navbar = () => {
    return (
        <div><nav className="fondomenu navbar navbar-expand-lg navbar-dark">
        <div className="barramenu container-fluid">
          <Link to="/" style={{textDecoration: 'none', color: 'white'}}><p className="navbar-brand" href="#">Anilem</p></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link to="/" style={{textDecoration: 'none', color: 'white'}}><p className="nav-link active" aria-current="page" href="#">Inicio</p></Link>
              </li>
               <li className="nav-item">
                <Link to="/category/1" style={{textDecoration: 'none', color: 'white'}}><p className="nav-link" href="#">Cuadros</p></Link>
              </li>
              <li className="nav-item">
              <Link to="/category/2" style={{textDecoration: 'none', color: 'white'}}><p className="nav-link" href="#">Tazas</p></Link>
              </li>
              <li className="nav-item">
              <Link to="/category/3" style={{textDecoration: 'none', color: 'white'}}><p className="nav-link" href="#">Velas</p></Link>
              </li>           
            </ul>
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="right-b nav-item">
                <a className="nav-link" href="#">Registrarse</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Iniciar cesión</a>
              </li> 
            <a className="nav-link"><CartWidget/></a>
            </ul>
            
          </div>
        </div>
      </nav></div>
    );
}

export default Navbar;