import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.css';

const ItemDetail = (props) => {
 
    return (
    <>
    <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={props.image} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">Descripción: {props.description}</p>
        <h5>${props.cost}</h5>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>     
  </>
  )}

  export default ItemDetail;
  