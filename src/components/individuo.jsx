import React from "react";
import "../App.css";

const Individuo = (props) => {

    return (
        <div className="Individuo-Container">
            <img src={props.img} alt={props.img}></img>
            <div className="Nombre-Apellido">
                {`${props.name} ${props.surname}`}
            </div>
            <div className="Individuo-Descripcion">
                {props.descripcion}
            </div>
        </div>
    )
}

export default Individuo;