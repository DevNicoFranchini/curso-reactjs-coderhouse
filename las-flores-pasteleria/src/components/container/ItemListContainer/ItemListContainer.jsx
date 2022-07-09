import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { gFetch } from "./../../../helpers/getFetch";

import ItemsList from "../../ItemsList/ItemsList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { tipoId } = useParams();

  useEffect(() => {
    if (tipoId) {
      gFetch
        .then((resp) =>
          setProducts(resp.filter((prod) => prod.tipo === tipoId))
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      gFetch
        .then((resp) => setProducts(resp))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [tipoId]);

  return loading ? (
    <div className="text-center mt-4">
      <Spinner animation="border" role="status" variant="info" />
    </div>
  ) : (
    <ItemsList producto={products} />
  );
};

export default ItemListContainer;
