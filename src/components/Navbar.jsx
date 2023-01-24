import logo from "../assets/loquesea-removebg.png"
import CartWidget from "./CartWidget";

const Navbar = () => {
    return (
        <header className="flex flex-column flex-col md:flex-row md:justify-evenly  items-center p-5 bg-primary">
            <div className="w-40"><a href="/"><img src={logo} className="" alt="logo" /></a></div>
            <nav className="my-2 flex flex-col items-center">
                <a href="/">Categorias</a>
                <a href="/">Sobre Nosotros</a>
                <a href="/">Contacto</a>
            </nav>
            <CartWidget />
        </header>
    );
}

export default Navbar;