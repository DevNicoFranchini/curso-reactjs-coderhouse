import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/container/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting = {'Hola, somos Las Flores Pastelería'} />
    </div>
  );
}

export default App;
