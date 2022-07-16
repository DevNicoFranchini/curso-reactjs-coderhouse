import { Card } from "react-bootstrap";
import { Container } from "react-bootstrap";

import ItemCount from "./../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
  const functionCount = (count) => {
    console.log("El valor del contador es: ", count);
  };

  return (
    <Container className="d-flex w-100 justify-content-center">
      <Card className="text-center mt-3 w-25 mx-1 shadow">
        <Card.Header as="h5">{item.nombre}</Card.Header>
        <Card.Img variant="top" src={item.img} className="p-2" />
        <Card.Body>
          <Card.Text>{item.descripcion}</Card.Text>
          <Card.Text>{item.precio}</Card.Text>
          <ItemCount stock={item.cantidad} initial={0} onAdd={functionCount} />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ItemDetail;
