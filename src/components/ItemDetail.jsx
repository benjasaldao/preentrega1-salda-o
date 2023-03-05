import ItemCount from "./ItemCount";
import { useCartContext } from "../context/CartContext";

const ItemDetail = ({ item }) => {
  const { addToCart } = useCartContext()

  const onAdd = (cantidad) => {
    addToCart({...item, quantity: cantidad})
  }
  
  return (
    <div className="md:flex justify-center">
      <img
        className="w-full md:w-[50%] lg:w-[30%]"
        src={item.image}
        alt={"Imagen " + item.name}
      />
      <div className="border p-5 rounded-md mt-4 md:mt-0 md:ml-3 w-full lg:w-[30%]">
        <h3 className="font-bold">{item.name}</h3>
        <p>{item.description}</p>
        <p>
          Precio: <span className="font-bold">${item.price}</span>
        </p>
        <div className="flex flex-col items-center">
          {" "}
          <ItemCount initialValue={1} onAdd={onAdd} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
