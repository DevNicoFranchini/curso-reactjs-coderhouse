import { useState, memo } from "react";
import { Link } from "react-router-dom";
import { Card, Container, Button } from "react-bootstrap";
import { useCartContext } from "./../../context/CartContext";

import ItemCount from "./../ItemCount/ItemCount";

const ItemDetail = memo(({ product }) => {
  const { addProduct } = useCartContext();
  const [cantidad, setCantidad] = useState();

  const onAdd = (count) => {
    setCantidad(count);
    addProduct({ cantidad: count, ...product });
  };

  return (
    <Container className="d-flex w-100 justify-content-center">
      <Card className="text-center mt-3 w-25 mx-1 shadow">
        <Card.Header as="h5">{product.nombre}</Card.Header>
        <Card.Img variant="top" src={product.img} className="p-2" />
        <Card.Body>
          <Card.Text>{product.descripcion}</Card.Text>
          <Card.Text>{product.precio}</Card.Text>
          {cantidad ? (
            <>
              <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
              <Link to="/cart">
                <Button>Ver carrito</Button>
              </Link>
              <Button>Terminar compra</Button>
            </>
          ) : (
            <>
              <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
            </>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
});

export default ItemDetail;
