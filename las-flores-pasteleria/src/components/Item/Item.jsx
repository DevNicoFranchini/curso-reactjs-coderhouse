import { Card, Button } from "react-bootstrap";
import { memo } from "react";
import { Link } from "react-router-dom";

const Item = memo(({ products }) => {
  return (
    <Link
      to={`/detail/${products.id}`}
      className="d-flex justify-content-evenly w-25"
    >
      <Card className="text-center my-1 w-100 mx-1 shadow">
        <Card.Header as="h5">{products.nombre}</Card.Header>
        <Card.Img variant="top" src={products.img} className="p-2" />
        <Card.Body>
          <Card.Text>{products.descripcion}</Card.Text>
          <Card.Text>${products.precio}</Card.Text>
          <Button variant="primary">Ver más</Button>
        </Card.Body>
      </Card>
    </Link>
  );
});

export default Item;
