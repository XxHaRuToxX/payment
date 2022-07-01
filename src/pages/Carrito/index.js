import React from "react";
import { Link } from "react-router-dom";
import { useCarritoContext } from "../../context/CarritoContext";
import { createCheckouSession } from "../../functions/createCheckoutSession";
/* import { useUserAuth } from "../../context/UserAuthContextProvider"; */

export const Carrito = () => {
    const { carrito } = useCarritoContext();
    /*     const { user, setUser } = useUserAuth(); */

    /*  function isAuthenticated() {
         if (user) {
             createCheckouSession(user.uid, carrito);
             console.log(user.uid);
 
         }
     } */
    /*     console.log("CARRITO" + carrito); */
    console.log("nuevo " + carrito);

    return (
        <div className="relative w-100">
            Tu carrito:

            {/*  {
                carrito?.map((item) => (
                    <p>{item.name}</p>
                ))
            }
            <button */}
            {/*  onClick={isAuthenticated} */}
            {/*   className="bg-dark px-5 py-3 text-white">COMPRAR</button>
            <Link to="/news">Volver al inicio</Link> */}

        </div >
    )
}

export default Carrito;