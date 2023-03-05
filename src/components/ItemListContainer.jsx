import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { gFetch, } from "../utils/gFetch";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import ItemList from "./ItemList";
import Loading from "./Loading";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryCollections = collection(db, "products");
    const queryFilter = categoryId
      ? query(queryCollections, where("category", "==", categoryId))
      : queryCollections;
    getDocs(queryFilter)
      .then((res) =>
        setProducts(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [categoryId]);

  return loading ? (
    <Loading />
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
