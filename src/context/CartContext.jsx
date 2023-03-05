import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (newProducto) => {
    const idxProd = cartList.findIndex(
      (product) => product.id === newProducto.id
    );

    if (idxProd !== -1) {
      cartList[idxProd].quantity += newProducto.quantity;
      setCartList([...cartList]);
      return;
    }

    setCartList([...cartList, newProducto]);
  };

  const totalPrice = () =>
    cartList.reduce(
      (count, producto) => (count += producto.quantity * producto.price),
      0
    );

  const getTotalQuantity = () =>
    cartList.reduce((count, producto) => (count += producto.quantity), 0);

  const removeItem = (id) =>
    setCartList(cartList.filter((prod) => prod.id !== id));

  const emptyCart = () => setCartList([]);

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        emptyCart,
        totalPrice,
        getTotalQuantity,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
