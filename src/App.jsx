import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { CartContextProvider } from "./context/CartContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer />}
          />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
