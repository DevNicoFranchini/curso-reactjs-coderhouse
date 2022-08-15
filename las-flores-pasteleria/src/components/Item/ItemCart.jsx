import { Card, Button } from "react-bootstrap";
import { memo } from "react";
import { useCartContext } from "../../context/CartContext";

const ItemCart = memo(({ product }) => {
  const { eliminarProducto } = useCartContext();

  return (
    <Card className="text-center my-1 w-50 mx-1 shadow">
      <Card.Header as="h5">{product.nombre}</Card.Header>
      <Card.Img variant="top" src={product.img} className="p-2" />
      <Card.Body>
        <Card.Text>Cantidad agregada: {product.cantidad}</Card.Text>
        <Button variant="danger" onClick={() => eliminarProducto(product.id)}>
          Eliminar del carrito
        </Button>
      </Card.Body>
    </Card>
  );
});

export default ItemCart;
