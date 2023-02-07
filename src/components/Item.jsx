import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <div className="p-10 border rounded-md flex flex-col items-center justify-center">
            <h4 className="mb-3 font-bold">{item.name}</h4>
            <img src={item.image} alt={item.name + "image"} className="w-full object-cover object-center lg:h-full lg:w-full" />
            <p>Precio: <span className="font-bold">${item.price}</span></p>
            <Link className="pointer bg-secondary w-[70%] rounded-md p-2 text-center" to={"/item/" + item.id}>Ver Producto</Link>
        </div>
    );
}

export default Item;