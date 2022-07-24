import { useState, createContext, useContext } from "react";

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar producto

  const addProduct = (product) => {
    const indexProduct = cart.findIndex((prod) => prod.id === product.id);
    if (indexProduct === -1) {
      setCart([...cart, product]);
    } else {
      const cantidadvieja = cart[indexProduct].cantidad;
      cart[indexProduct].cantidad = cantidadvieja + product.cantidad;
      setCart([...cart]);
    }
  };

  const precioTotal = () => {
    return cart.reduce(
      (acumPrecio, prodObj) =>
        (acumPrecio = acumPrecio + prodObj.precio * prodObj.cantidad),
      0
    );
  };

  const cantidadTotal = () => {
    return cart.reduce(
      (contador, produObject) => (contador += produObject.cantidad),
      0
    );
  };

  const eliminarProducto = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  const emptyCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        eliminarProducto,
        emptyCart,
        cantidadTotal,
        precioTotal,
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
