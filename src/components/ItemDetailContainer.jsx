import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore"
import ItemDetail from "./ItemDetail";
import Loading from "./Loading";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();
  
  useEffect(() => {
    const db = getFirestore()
    const query = doc(db, 'products', itemId);
    getDoc(query)
    .then(res => setProduct({id: res.id, ...res.data()}))
    .catch(err => console.log(err))
    .finally(() => setLoading(false));
  }, [itemId]);

  return loading ? (
    <Loading />
  ) : (
    <div className="max-w-[96%] md:max-w-[95%] mx-auto my-5">
      <ItemDetail item={product} />
    </div>
  );
};

export default ItemDetailContainer;
