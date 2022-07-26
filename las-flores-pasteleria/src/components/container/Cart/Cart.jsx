import { useCartContext } from "../../../context/CartContext";
import { Container, Button } from "react-bootstrap";

import ItemCart from "../../Item/ItemCart";

const Cart = () => {
  const { cart, emptyCart, precioTotal } = useCartContext();

  console.log(cart);
  return (
    <Container>
      <div>
        <div className="d-flex align-items-center">
          <h2>Carrito</h2>
          <div className="ms-5">
            {cart.length === 0 ? (
              ""
            ) : (
              <Button variant="danger" onClick={emptyCart}>
                Vaciar Carrito
              </Button>
            )}
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            {cart.map((product) => (
              <ItemCart product={product} />
            ))}
          </div>
          <div className="w-25">
            {precioTotal() !== 0 && `Precio Total: $${precioTotal()}`}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
