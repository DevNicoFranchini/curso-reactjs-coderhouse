import { useState } from "react";

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
    <>
      <span onClick={restar}> - </span>
      <span> {count} </span>
      <span onClick={sumar}> + </span>
      <button disabled={count === 0} onClick={() => onAdd(count)}> Agregar al carrito </button>
    </>
  );
};

export default ItemCount;
