import { useRef } from "react";
import { Link } from "react-router-dom";
import { addDoc, getFirestore, collection } from "firebase/firestore";
import { useCartContext } from "../context/CartContext";
import Alert from "./Alert";
import useAlert from "../hooks/useAlert";

const Checkout = () => {
  const { cartList, emptyCart, totalPrice } = useCartContext();
  const formRef = useRef(null);
  const { alert, setAlert, toggleAlert } = useAlert();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const client = Object.fromEntries(formData);

    const errorInForm = validateData(client);
    delete client.repmail;

    if (errorInForm) {
      setAlert({
        active: true,
        message: errorInForm,
        type: "error",
        autoClose: true,
      });
    } else {
      const db = getFirestore();
      addDoc(collection(db, "order"), {
        client: client,
        products: cartList,
        price: totalPrice(),
        date: new Date().toISOString(),
      }).then((res) => {
        setAlert({
            active: true,
            message: `Tu pedido fue confirmado con el id: ${res.id} por un total de ${totalPrice()}. Gracias por tu compra!`,
            type: 'success',
            autoClose: false,
          });
      });
    }
  };

  const validateData = ({ name, mail, repmail, phone, adress }) => {
    if (
      name.length === 0 ||
      mail.length === 0 ||
      repmail.length === 0 ||
      phone.length === 0 ||
      adress.length === 0
    ) {
      return "Debes completar todos los campos";
    }
    if (mail != repmail) {
      return "El mail es diferente";
    }
    if (!mail.includes("@")) {
      return "Ingresa un email valido";
    }

    return false;
  };

  return (
    <>
      {cartList.length === 0 ? (
        <div className="text-center">
          <h2 className="font-bold text-4xl mt-8">
            Debes elegir productos para ver el checkout!
          </h2>
          <Link to="/">
            <button className="p-3 rounded-md mt-8 bg-primary">
              Buscar productos
            </button>
          </Link>
        </div>
      ) : (
        <div className="mt-20">
          <form
            className="border flex flex-col items-center rounded-md p-5 md:max-w-[75%] z-1 max-w-[95%] mx-auto"
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <h3 className="font-bold text-4xl mt-8 text-center bg-white z-50 -mt-10">
              Un ultimo paso!
            </h3>
            <Alert alert={alert} handleClose={toggleAlert} />
            <div className="md:flex">
              <div className="md:m-4">
                <div>
                  <label htmlFor="name">
                    <input
                      placeholder="Nombre y apellido"
                      className="border my-3 rounded-md px-3 py-1"
                      type="text"
                      name="name"
                      id="name"
                    />
                  </label>
                </div>
                <div>
                  <label htmlFor="mail">
                    <input
                      placeholder="E-mail"
                      className="border my-3 rounded-md px-3 py-1"
                      type="text"
                      name="mail"
                      id="mail"
                    />
                  </label>
                </div>
                <div>
                  <label htmlFor="repmail">
                    <input
                      placeholder="Repetir E-mail"
                      className="border my-3 rounded-md px-3 py-1"
                      type="text"
                      name="repmail"
                      id="repmail"
                    />
                  </label>
                </div>
              </div>
              <div className="md:m-4">
                <div>
                  <label htmlFor="phone">
                    <input
                      placeholder="Telefono"
                      className="border my-3 rounded-md px-3 py-1"
                      type="text"
                      name="phone"
                      id="phone"
                    />
                  </label>
                </div>
                <div>
                  <label htmlFor="adress">
                    <input
                      placeholder="Direccion"
                      className="border my-3 rounded-md px-3 py-1"
                      type="text"
                      name="adress"
                      id="adress"
                    />
                  </label>
                </div>
              </div>
            </div>
            <button type="submit" className="p-3 rounded-md m-3 bg-primary ">
              Finalizar compra
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Checkout;
