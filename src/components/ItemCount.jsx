import { useState } from "react";

const ItemCount = ({ initialValue }) => {
  const [contador, setContador] = useState(initialValue);

  const sumar = () => setContador(contador + 1);
  const restar = () => setContador(contador - 1);

  return (
    <>
      <div className="text-center text-4xl border rounded-md px-[25%] py-2 my-4">
        <button onClick={() => restar()}>-</button>
        <span className="mx-5">{contador}</span>
        <button onClick={() => sumar()}>+</button>
      </div>
    </>
  );
};

export default ItemCount;
