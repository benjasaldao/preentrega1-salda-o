import { Link, NavLink } from "react-router-dom";
import logo from "../assets/loquesea-removebg.png";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <header className="flex flex-column flex-col md:flex-row md:justify-evenly  items-center p-5 bg-primary">
      <div className="w-40">
        <Link to="/">
          <img src={logo} className="" alt="logo" />
        </Link>
      </div>
      <nav className="my-2 flex flex-col items-center md:flex-row">
        <NavLink
          className={({ isActive }) =>
            isActive ? "mr-2 px-2 border-b-4 border-secondary" : "mr-2 px-2"
          }
          to="/category/remeras"
        >
          Remeras
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "mr-2 px-2 border-b-4 border-secondary" : "mr-2 px-2"
          }
          to="/category/buzos"
        >
          Buzos
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "mr-2 px-2 border-b-4 border-secondary" : "mr-2 px-2"
          }
          to="/category/gorras"
        >
          Gorras
        </NavLink>
      </nav>
      <CartWidget />
    </header>
  );
};

export default Navbar;
