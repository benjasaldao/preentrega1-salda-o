import { useState } from "react";

const ItemCount = ({ initialValue, onAdd }) => {
  const [counter, setCounter] = useState(initialValue);

  const sumar = () => setCounter(counter + 1);
  const restar = () => setCounter(counter - 1);

  const handleOnAdd = () => {
    onAdd(counter);
  };

  return (
    <>
      <div className="text-center text-4xl border rounded-md px-[25%] py-2 my-4">
        <button onClick={() => restar()}>-</button>
        <span className="mx-5">{counter}</span>
        <button onClick={() => sumar()}>+</button>
      </div>
      <button onClick={() => handleOnAdd()} className="pointer bg-secondary w-[70%] rounded-md p-2 text-center">
        Añadir al carrito
      </button>
    </>
  );
};

export default ItemCount;
