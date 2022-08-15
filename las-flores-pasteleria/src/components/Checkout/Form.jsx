import { useCartContext } from "../../context/CartContext";
import { Form, Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const FormOrder = () => {
  const { user, setUser, precioTotal, emptyCart, generateOrder } =
    useCartContext();

  const validUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const validData = (e) => {
    setUser({ ...user, checked: e.target.checked });
  };

  return (
    <Container className="d-flex justify-content-center">
      <div className="container p-4">
        <h3 className="text-center mb-3">Datos personales</h3>
        <Form>
          <Row>
            <Col>
              <Form.Control
                placeholder="Nombre"
                name="name"
                required
                onChange={(e) => {
                  validUser(e);
                }}
              />
            </Col>
            <Col>
              <Form.Control
                placeholder="Telefono"
                name="phone"
                required
                onChange={(e) => {
                  validUser(e);
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control
                className="mt-2"
                placeholder="Email"
                name="email"
                required
                onBlur={(e) => {
                  validUser(e);
                }}
              />
            </Col>
          </Row>
        </Form>
        <div className="d-flex flex-column gap-2 col-2 w-100">
          <div className="w-100">
            {precioTotal() !== 0 && `Precio final: $${precioTotal()}`}
          </div>
          <Button variant="danger" size="sm" onClick={emptyCart}>
            Vaciar Carrito
          </Button>
          <div className="w-100">
            <Link to="/checkout">
              <Button
                variant="primary"
                size="sm"
                onClick={generateOrder}
                className="w-100"
              >
                Generar Orden
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FormOrder;
