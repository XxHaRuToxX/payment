import React from "react";
import { Link } from "react-router-dom";
import { useCarritoContext } from "../../context/CarritoContext";

/* function Carrito() { */
export const Carrito = () => {
    const { carrito } = useCarritoContext();
    /*   console.log(carrito); */

    return (
        <div className="relative w-100">
            <div className="absolute top-0 left-0 bg-slate-600/40 w-screen h-screen z-30 backdrop-blur-sm  ">
                <div className="bg-warning w-1/3 h-1/3">
                    MODAL
                </div>
            </div>
            {/*  <div class="modal-body blurredbackground">
                <h5>Popover in a modal</h5>
                <p>This <a href="#" role="button" class="btn btn-secondary popover-test" title="Popover title" data-content="Popover body content is set in this attribute.">button</a> triggers a popover on click.</p>
                <hr />
                <h5>Tooltips in a modal</h5>
                <p><a href="#" class="tooltip-test" title="Tooltip">This link</a> and <a href="#" class="tooltip-test" title="Tooltip">that link</a> have tooltips on hover.</p>
            </div> */}
            Tu carrito:
            {
                carrito?.map((item) => (
                    <p>{item.name}</p>
                ))
            }
            <button
                type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
                className="bg-dark px-5 py-3 text-white">COMPRAR</button>
            <Link to="/news">Volver al inicio</Link>
        </div >
    )
}

export default Carrito;