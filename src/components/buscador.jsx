import React from "react";
import { useState } from "react";
import "../App.css";

const Buscador = ({ buscarPersona }) => {
    const [name, setName] = useState("");
    const [apellido, setApellido] = useState("");

    const handleName = (name) => {
        setName(name);
        buscarPersona(name);
        setApellido("")
    }
    const handleSurName = (name) => {
        setApellido(name);
        buscarPersona(name, "apellido");
        setName("")
    }
    const onChange = (event) => {
        event.preventDefault();
        alert(name);
    }
    return (
        <form className="Barra-Busqueda-Container" onSubmit={onChange} >
            <div className="SubBarra-Busqueda">
                <label>Buscar por Nombre</label>
                <input type="text" value={name} onChange={(e) => handleName(e.target.value)}></input>
            </div>
            <div className="SubBarra-Busqueda">
                <label>Buscar por Apellido</label>
                <input type="text" value={apellido} onChange={(e) => handleSurName(e.target.value)}></input>
            </div>
        </form>
    )
}

export default Buscador;