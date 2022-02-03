import 'bootstrap/dist/css/bootstrap.min.css';
import './components.css';
import CartWidget from './CartWidget';


const Navbar = () => {
    return (
        <div><nav className="fondomenu navbar navbar-expand-lg navbar-dark">
        <div className="barramenu container-fluid">
          <a className="navbar-brand" href="#">Anilem</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Productos
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#">Todos los productos</a></li>
                  <li><a className="dropdown-item" href="#">Cuadros</a></li>
                  <li><a className="dropdown-item" href="#">Tazas y bols</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Historia</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Preguntas frecuentes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contacto</a>
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