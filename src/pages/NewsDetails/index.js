import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import getPlansByIs from '../../functions/getPlansByID';
import { useCarritoContext } from '../../context/CarritoContext';
/* import { UserAuthContextProvider } from '../../context/UserAuthContextProvider'; */

export const NewsDetails = () => {

    const { id } = useParams();

    const [planInfo, setPlanInfo] = useState(null);
    const { carrito, setCarrito } = useCarritoContext();
    /*    const { user } = UserAuthContextProvider();
    */
    useEffect(() => {
        async function getPlanInfo() {
            const plan = await getPlansByIs(id);
            setPlanInfo(plan);
        }
        getPlanInfo();
    }, [id]);

    function addToCart() {
        setCarrito([...carrito, planInfo]);
    }

    /*  function isAuthenticated() {
         if (user) {
             //correr funcion de comprar
         }
         if (!user) {
             //mostrar modal de login
         }
     } */

    return (
        <div>
            <p>{planInfo?.name}</p>
            <Link to="/carrito" className='text-2xl font-bold underline'>
                <button className='btn bg-orange-600'>carrito</button>
            </Link>
            <p>{planInfo?.description}</p>

            <button
                onClick={addToCart}
                className='btn bg-black text-white'>
                Añadir al carrito
            </button>
            <button
                /*  isAuthenticated={isAuthenticated} */
                className='btn bg-warning text-white'>
                Comprar ahora
            </button>
        </div>
    )
}