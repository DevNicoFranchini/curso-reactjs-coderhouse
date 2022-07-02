import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/container/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
