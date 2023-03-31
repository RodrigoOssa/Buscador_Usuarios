import React from "react";
import "../App.js";
import Individuo from "./individuo.jsx";

const Personas = ({ personas }) => {

    return (
        <div className="Personas-Container">
            {
                personas.map(item => {

                    return (
                        <Individuo img={item.img} name={item.nombre} surname={item.apellido} descripcion={item.descripcion}></Individuo>
                    )
                })
            }
        </div>
    )
}

export default Personas;