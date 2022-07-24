import { memo } from "react";
import { Link } from "react-router-dom";
import { Card, Container, Button } from "react-bootstrap";
import { useCartContext } from "./../../context/CartContext";

import ItemCount from "./../ItemCount/ItemCount";

const ItemDetail = memo(({ product }) => {
  const { addProduct, cart } = useCartContext();

  const onAdd = (count) => {
    addProduct({ cantidad: count, ...product });
  };

  console.log(cart);

  return (
    <Container className="d-flex w-100 justify-content-center">
      <Card className="text-center mt-3 w-25 mx-1 shadow">
        <Card.Header as="h5">{product.nombre}</Card.Header>
        <Card.Img variant="top" src={product.img} className="p-2" />
        <Card.Body>
          <Card.Text>{product.descripcion}</Card.Text>
          <Card.Text>{product.precio}</Card.Text>
          <ItemCount stock={product.stock} initial={0} onAdd={onAdd} />
        </Card.Body>
      </Card>
    </Container>
  );
});

export default ItemDetail;
