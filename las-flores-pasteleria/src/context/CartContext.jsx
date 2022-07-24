import { useState, createContext, useContext } from "react";

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar producto

  /* const addProduct = (product) => {
    const indexProduct = cart.findIndex((prod) => prod.id === product.id);
    if (indexProduct === -1) {
      setCart([...cart, product]);
    } else {
      const cantidadVieja = cart[indexProduct].cantidad;
      cart[indexProduct].cantidad = cantidadVieja + product.cantidad;
      setCart([...cart]);
    }
  }; */

  const cantidadTotal = () => {
    return cart.reduce(
      (contador, produObject) => (contador += produObject.cantidad),
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cantidadTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

/* // Existe en cart?
  const existeEnCart = (id) => {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].item.id === id) {
        return true;
      } else {
        return false;
      }
    }
  }; */

/* // Eliminar producto
  const deleteCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    localStorage.setItem(
      "cart",
      JSON.stringify(cart.filter((prod) => prod.id !== id))
    );
    saveLocalStorage(
      "cart",
      cart.filter((item) => item.id !== id)
    );
  }; */

/* // Vaciar cart
  const emptyCart = () => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
    saveLocalStorage("cart", []);
  }; */

/* // Precio total
  const totalPrice = () => {
    return cart.reduce(
      (acumPrice, prodObj) =>
        (acumPrice = acumPrice + prodObj.price * prodObj.quantity),
      0
    );
  };

  // Cantidad total
  const totalQuantity = () => {
    return cart.reduce(
      (counter, produObj) => (counter += produObj.quantity),
      0
    );
  }; */
