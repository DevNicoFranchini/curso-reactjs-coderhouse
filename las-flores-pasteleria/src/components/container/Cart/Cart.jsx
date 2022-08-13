import { useCartContext } from "../../../context/CartContext";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getFirestore, addDoc, collection } from "firebase/firestore";

import ItemCart from "../../Item/ItemCart";

const Cart = () => {
  const { cart, emptyCart, precioTotal } = useCartContext();

  const generateOrder = () => {
    const order = {};
    (order.buyer = {
      name: "Nombre",
      phone: "11111",
      email: "nombre@gmail.com",
    }),
      (order.items = cart.map((prod) => {
        const id = prod.id;
        const title = prod.nombre;
        const cantidad = prod.cantidad;

        return { id, title, cantidad };
      }));
    order.total = precioTotal();

    const db = getFirestore();
    const queryInsertCollection = collection(db, "orders");
    addDoc(queryInsertCollection, order)
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err))
      .finally(() => emptyCart());
  };

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
                <h3>
                  {cart.length == 0 && `Volver al inicio y empezar a comprar`}
                </h3>
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
              </div>

              <div className="d-flex flex-column gap-2 col-2">
                <div className="w-100">
                  {precioTotal() !== 0 && `Precio final: $${precioTotal()}`}
                </div>
                <Button variant="danger" size="sm" onClick={emptyCart}>
                  Vaciar Carrito
                </Button>
                <Button variant="primary" size="sm" onClick={generateOrder}>
                  Generar Orden
                </Button>
              </div>
            </Container>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Cart;
