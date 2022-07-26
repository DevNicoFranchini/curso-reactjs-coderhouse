import { useCartContext } from "../../../context/CartContext";
import { Card, Button } from "react-bootstrap";

import ItemCart from "../../Item/ItemCart";

const Cart = () => {
  const { cart, emptyCart, precioTotal } = useCartContext();

  return (
    <div>
      <h1>Carrito</h1>
      <div className="row">
        <div className="col-md-6">
          {cart.map((product) => (
            <ItemCart product={product} />
          ))}
        </div>
        <div className="w-25">
          <Button variant="primary" onClick={emptyCart}>
            Vaciar Carrito
          </Button>
        </div>
        <div className="w-25">
          {precioTotal() !== 0 && `Precio Total: $${precioTotal()}`}
        </div>
      </div>
    </div>
  );
};

export default Cart;
