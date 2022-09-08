import './App.css';
import Nav from './components/nav/Nav';
import ItemListContainer from './containers/itemlistcontainer/ItemListContainer';

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

