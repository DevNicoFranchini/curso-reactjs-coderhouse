import { useState } from "react";

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const existeEnCart = (id) => {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].item.id === id) {
        return true;
      } else {
        return false;
      }
    }
  };

  const quitarCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const vaciarCart = () => {
    setCart([]);
  };

  const addCart = (item) => {
    let itemId = item.id;

    if (!existeEnCart(itemId)) {
      let items = cart.find((i) => i.item.id === itemId);
      cart.push(item);
      alert("Producto agregado correctamente");
    } else {
      console.log(items);
      alert("Producto ya existente");
    }
  };

  return (
    <CartContext.Provider
      value={[cart, existeEnCart, addCart, quitarCart, vaciarCart]}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
