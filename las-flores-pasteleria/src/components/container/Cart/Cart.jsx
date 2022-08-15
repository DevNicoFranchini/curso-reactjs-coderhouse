import { useCartContext } from "../../../context/CartContext";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import FormOrder from "./../../Checkout/Form";

import ItemCart from "../../Item/ItemCart";

const Cart = () => {
  const { cart, emptyCart, precioTotal, generateOrder } = useCartContext();

  return (
    <Container>
      <div>
        <div className="ms-5">
          {cart.length === 0 ? (
            <div className="d-flex flex-column align-items-center justify-content-center my-2">
              <h3>
                {cart.length == 0 && `Tu carrito de compras se encuentra vacío`}
              </h3>

              <Link to="/">
                <Button>
                  {cart.length == 0 && `Volver al inicio y empezar a comprar`}
                </Button>
              </Link>
            </div>
          ) : (
            <Container className="d-flex my-4">
              <div className="d-flex justify-content-evenly col-10">
                <div>
                  {cart.map((product) => (
                    <ItemCart key={product.id} product={product} />
                  ))}
                </div>
                <FormOrder />
              </div>

              <div className="d-flex flex-column gap-2 col-2">
                <div className="w-100">
                  {precioTotal() !== 0 && `Precio final: $${precioTotal()}`}
                </div>
                <Button variant="danger" size="sm" onClick={emptyCart}>
                  Vaciar Carrito
                </Button>
                <div className="w-100">
                  <Link to="/checkout">
                    <Button variant="primary" size="sm" onClick={generateOrder}>
                      Generar Orden
                    </Button>
                  </Link>
                </div>
              </div>
            </Container>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Cart;
