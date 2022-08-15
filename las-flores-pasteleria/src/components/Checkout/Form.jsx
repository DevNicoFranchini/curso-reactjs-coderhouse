import { useCartContext } from "../../context/CartContext";
Container;
import { Form, Row, Col, Container } from "react-bootstrap";

const FormOrder = () => {
  const { user, setUser } = useCartContext();

  const validUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const validData = (e) => {
    setUser({ ...user, checked: e.target.checked });
  };

  return (
    <Container className="d-flex justify-content-center mt-4">
      <div className="container mt-3 ms-md-2 p-4 border">
        <h3 className="text-center mb-3">Datos personales</h3>
        <Form>
          <Row>
            <Col>
              <Form.Control
                placeholder="Nombre"
                name="name"
                onChange={(e) => {
                  validUser(e);
                }}
              />
            </Col>
            <Col>
              <Form.Control
                placeholder="Telefono"
                name="phone"
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
                onBlur={(e) => {
                  validUser(e);
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3 mt-3">
                <Form.Check
                  type="checkbox"
                  label="Aceptar Términos y Condiciones"
                  onClick={(e) => {
                    validData(e);
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </div>
    </Container>
  );
};

export default FormOrder;
