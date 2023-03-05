import { Link } from "react-router-dom";
import ItemList from "./ItemList";
import { useCartContext } from "../context/CartContext";
import CartItemList from "./CartItemList";

const Cart = () => {
  const { cartList, totalPrice, emptyCart } = useCartContext();

  return (
    <>
      {cartList.length === 0 ? (
        <>
          <div className="text-center">
            <h2
              className="font-bold text-4xl
        mt-8"
            >
              El Carrito está vacío
            </h2>
            <Link to="/">
              <button className="p-3 rounded-md mt-8 bg-primary">
                Buscar productos
              </button>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="container px-5">
            <h2 className="text-center font-bold text-4xl mt-8">Carrito</h2>
          </div>
            {<CartItemList products={cartList} totalPrice={totalPrice()} />}
            <div className="flex flex-col flex-wrap content-center md:flex-row justify-center">
              <Link to="/">
                <button className="p-3 rounded-md m-3 bg-primary">Añadir mas productos</button>
              </Link>
              <button className="p-3 rounded-md m-3 bg-red" onClick={() => emptyCart()}>
                Vaciar carrito
              </button>
              <Link to="/checkout">
                <button className="p-3 rounded-md m-3 bg-secondary">Finalizar compra</button>
              </Link>
            </div>
        </>
      )}
    </>
  );
};

export default Cart;
