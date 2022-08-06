import { useCartContext } from "../../../context/CartContext";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import ItemCart from "../../Item/ItemCart";

const Cart = () => {
  const { cart, emptyCart, precioTotal } = useCartContext();

  return (
    <Container>
      <div>
        <div className="d-flex align-items-center">
          <h3>{cart.length == 0 && `Carrito`}</h3>
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
              <ItemCart key={product.id} product={product} />
            ))}
          </div>
          <div className="w-25">
            {precioTotal() !== 0 && `Precio Total: $${precioTotal()}`}
          </div>
          <Link to="/">
            <div className="w-100">
              {cart.length == 0 && `UPS! Carrito vacío. Volver al inicio`}
            </div>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
