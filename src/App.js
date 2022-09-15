import './App.css';
import Nav from './components/Nav/Nav';
import ItemListContainer from './containers/ItemListCointainer/ItemListContainer';

function App() {

  const mensaje = "Lleva tu figura al siguiente nivel";

  return (
    <>
    <Nav/>
    <ItemListContainer greeting={mensaje}/>
    </>
);
}

export default App;

