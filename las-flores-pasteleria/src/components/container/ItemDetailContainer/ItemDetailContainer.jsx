import { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { gFetch } from "../../../helpers/getFetch";

import ItemDetail from "../../Item/ItemDetail";

const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setTimeout(() => {
      gFetch
        .then((resp) =>
          setProducts(resp.find((prod) => prod.id === Number(id)))
        )
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 2000);
  }, [id]);

  console.log(id);

  return loading ? (
    <div className="text-center mt-4">
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Cargando...
      </Button>
    </div>
  ) : (
    <ItemDetail item={products} />
  );
};

export default ItemDetailContainer;
