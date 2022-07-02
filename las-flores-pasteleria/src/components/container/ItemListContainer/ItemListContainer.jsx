import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { gFetch } from "./../../../helpers/getFetch";
import { Spinner } from "react-bootstrap";
import ItemsList from "../../ItemsList/ItemsList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    gFetch
      .then((resp) => {
        setProducts(resp);
      })
      .catch((rej) => {
        console.log(rej);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return loading ? (
    <div className="text-center mt-4">
      <Spinner animation="border" role="status" variant="info" />
    </div>
  ) : (
    <ItemsList producto={products} />
  );
};

export default ItemListContainer;
