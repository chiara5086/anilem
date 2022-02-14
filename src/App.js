import './App.css';
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (

    <div className="App">
      <Navbar/>
      {/*<ItemListContainer greeting="Este es el ItemListContainer!"/>*/}
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
