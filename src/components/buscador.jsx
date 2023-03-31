import React from "react";
import { useState } from "react";
import "../App.css";

const Buscador = () => {
    const [name, setName] = useState("");

    const handleName = (name) => {
        setName(name);
    }
    const onChange = (event) => {
        event.preventDefault();
        alert(name);
    }
    return (
        <form className="Barra-Busqueda-Container" onSubmit={onChange} >
            <input type="text" value={name} onChange={(e) => handleName(e.target.value)}></input>
            <input type="submit" value="Buscar"></input>
        </form>
    )
}

export default Buscador;