import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { gFetch } from "../utils/gFetch";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      gFetch()
        .then((res) => {
          setProducts(res.filter((item) => item.category === categoryId));
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      gFetch()
        .then((res) => {
          setProducts(res);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [categoryId]);

  return loading ? (
    <h2
      className="text-center font-bold text-4xl
    mt-8"
    >
      Cargando...
    </h2>
  ) : (
    <div className="max-w-[98%] md:max-w-[95%] mx-auto">
      <h3 className="font-bold text-2xl text-center m-3">
        {categoryId ? categoryId : "Nuestros productos"}
      </h3>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
