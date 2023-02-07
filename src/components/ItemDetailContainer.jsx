import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { gFetch } from "../utils/gFetch";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();
  useEffect(() => {
    gFetch()
      .then((res) => {
        const item = res.find((prod) => prod.id === itemId);
        setProduct(item);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [itemId]);

  return loading ? (
    <h2 className="text-center font-bold text-4xl
    mt-8">Cargando...</h2>
  ) : (
    <div className="max-w-[96%] md:max-w-[95%] mx-auto my-5">
      <ItemDetail item={product} />
    </div>
  );
};

export default ItemDetailContainer;
