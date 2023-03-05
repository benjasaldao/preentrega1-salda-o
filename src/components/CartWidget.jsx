import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import cart from "../assets/carrito-de-compras.png";

const CartWidget = () => {
    const {getTotalQuantity} = useCartContext()
    return (
        <Link to="/cart" className="cursor-pointer relative w-10 rounded-xl my-2 p-2 bg-white">
            <img src={cart} alt="carrito" />
            <span className="absolute bottom-6 left-8 bg-secondary rounded-md px-1">{getTotalQuantity()}</span>
        </Link>
    );
}

export default CartWidget;