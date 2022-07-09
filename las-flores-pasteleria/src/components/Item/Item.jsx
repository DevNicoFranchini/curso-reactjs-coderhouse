import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Item({ products }) {
  const { id, img, nombre, precio } = products;

  return (
    <Card className="text-center mt-3 w-25 mx-1 shadow">
      <Card.Header as="h5">{nombre}</Card.Header>
      <Card.Img variant="top" src={img} className="p-2" />
      <Card.Body>
        <Card.Text>{precio}</Card.Text>
        <Link to={`/detail/${id}`}>
          <Button variant="primary">Ver más</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Item;
