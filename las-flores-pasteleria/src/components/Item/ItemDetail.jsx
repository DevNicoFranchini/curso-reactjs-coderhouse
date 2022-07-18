import { Card, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "./../../context/CartContext";

import ItemCount from "./../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
  const [cart, existeEnCart, addCart, quitarCart, vaciarCart] =
    useContext(CartContext);
  const [cantidad, setCantidad] = useState();
  console.log(cart);

  const funcionContador = (cantidad) => {
    console.log("El valo del contador es: ", cantidad);
    setCantidad(cantidad);

    const producto = {
      item: item,
      quantity: cantidad,
      costo: item.precio,
      id: item.id,
    };

    addCart(producto);
  };

  return (
    <Container className="d-flex w-100 justify-content-center">
      <Card className="text-center mt-3 w-25 mx-1 shadow">
        <Card.Header as="h5">{item.nombre}</Card.Header>
        <Card.Img variant="top" src={item.img} className="p-2" />
        <Card.Body>
          <Card.Text>{item.descripcion}</Card.Text>
          <Card.Text>{item.precio}</Card.Text>
          {cantidad ? (
            <Link to="/cart">
              {" "}
              <Button>Terminar compra</Button>{" "}
            </Link>
          ) : (
            <ItemCount
              stock={item.cantidad}
              initial={0}
              onAdd={funcionContador}
            />
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ItemDetail;
