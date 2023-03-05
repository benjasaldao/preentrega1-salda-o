
const CartItemList = ({ products, totalPrice }) => {
  
  return (
    <div className="border rounded-md text-center md:max-w-[75%] max-w-[95%] mx-auto">
      {products.map((item) => (
        <div key={item.id} className="flex items-center m-3">
          <div className="h-40 w-40">
          <img className="h-full " src={item.image} alt={item.name} />
          </div>
          <p>{item.name}</p>
          <p className="ml-2">Cantidad: <span className="font-bold">{item.quantity}</span></p>
          <p className="ml-2">precio: <span className="font-bold">${item.price}</span></p>
          <p className="ml-2">Subtotal: <span className="font-bold">${item.price*item.quantity}</span></p>
        </div>
      ))}
      <h3 className="">
        Resumen de la compra : <span className="font-bold">${totalPrice}</span>
      </h3>
    </div>
  );
};

export default CartItemList;
