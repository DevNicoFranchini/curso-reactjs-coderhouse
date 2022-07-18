import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/container/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/container/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/container/Cart/Cart";
import CartProvider from "./context/CartContext";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div>
          <NavBar />
          <Routes>
            <Route index path="/" element={<ItemListContainer />} />
            <Route index path="/tipo/:tipo" element={<ItemListContainer />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
