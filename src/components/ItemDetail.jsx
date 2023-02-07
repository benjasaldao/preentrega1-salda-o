import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
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
          <ItemCount initialValue={1} />
          <button className="pointer bg-secondary w-[70%] rounded-md p-2 text-center">
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
