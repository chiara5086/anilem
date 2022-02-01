import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = () => {
    return (
        <div><nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Anilem</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
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
          </div>
        </div>
      </nav></div>
    );
}

export default Navbar;