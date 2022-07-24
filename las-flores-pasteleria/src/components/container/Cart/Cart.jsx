import { useCartContext } from "../../../context/CartContext";

const Cart = () => {
  const { cart, emptyCart, precioTotal, eliminarProducto } = useCartContext();

  return (
    <div>
      <h1>Carrito</h1>
      <div className="row">
        <div className="col-md-6">
          <h2>Producto</h2>
          <ul>
            {cart.map((product) => (
              <>
                <li key={product.id}>
                  <img src={product.img} className="w-25" />
                  <span> - Nombre: {product.nombre}</span>
                  <span> - Precio: ${product.precio}</span>
                  <span> - Cantidad: {product.cantidad}</span>
                  <button onClick={() => eliminarProducto(product.id)}>
                    {" "}
                    X{" "}
                  </button>
                </li>
              </>
            ))}
          </ul>
        </div>
        <div className="w-25">
          <button onClick={emptyCart}>Vaciar Carrito</button>
        </div>
        <div className="w-25">
          {precioTotal() !== 0 && `Precio Total: $${precioTotal()}`}
        </div>
      </div>
    </div>
  );
};

export default Cart;
