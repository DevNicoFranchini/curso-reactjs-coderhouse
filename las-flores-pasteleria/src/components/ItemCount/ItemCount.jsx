import { useState } from "react";
import { Button } from "react-bootstrap";

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
    <div>
      <Button onClick={restar}> - </Button>
      <span> {count} </span>
      <Button onClick={sumar}> + </Button>
      <Button disabled={count === 0} onClick={() => onAdd(count)}>
        Agregar al carrito
      </Button>
    </div>
  );
};

export default ItemCount;
