import './App.css';
import Nav from './components/Nav/Nav';
import ItemListContainer from './containers/ItemListCointainer/ItemListContainer';
import ItemDetailContainer from './containers/itemDetailContainer/ItemDetailContainer';

function App() {

  const mensaje = "Lleva tu figura al siguiente nivel";

  return (
    <>
    <Nav/>
    <ItemListContainer greeting={mensaje}/>
    <ItemDetailContainer/>
    </>
);
}

export default App;

