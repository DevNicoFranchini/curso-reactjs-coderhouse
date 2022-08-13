import { useState } from "react";
import { Container, Button } from "react-bootstrap";

const ItemCount = ({ stock, onAdd, initial }) => {
  const [count, setCount] = useState(initial);

  const restar = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  return (
    <Container>
      <Button variant="danger" size="sm" onClick={restar}>
        {" "}
        -{" "}
      </Button>
      <span className="mx-2"> {count} </span>
      <Button variant="success" size="sm" onClick={sumar}>
        {" "}
        +{" "}
      </Button>
      <Button
        className="my-2"
        variant="outline-secondary"
        disabled={count === 0}
        onClick={() => onAdd(count)}
      >
        Agregar al carrito
      </Button>
    </Container>
  );
};

export default ItemCount;

/* <div>
      <Button variant="danger" onClick={restar}>
        {" "}
        -{" "}
      </Button>
      <span> {count} </span>
      <Button variant="success" onClick={sumar}>
        {" "}
        +{" "}
      </Button>

      <Button disabled={count === 0} onClick={() => onAdd(count)}>
        Agregar al carrito
      </Button>
    </div> */
