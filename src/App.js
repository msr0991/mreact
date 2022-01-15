/** @format */

import "./App.css";
import Navbar from "./Components/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer
        name='Mariano Rojo'
        city='Rosario'
        description='Estudiando Reactjs'
      />
    </>
  );
}

export default App;
