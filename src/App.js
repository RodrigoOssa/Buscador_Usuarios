import { useState } from 'react';
import './App.css';
import Titulo from './components/titulo';
import Firma from './components/firma';
import Buscador from './components/buscador';
import Personas from './components/personas';
import person from "./db/personas.json";

function App() {
  const [personas, setPersonas] = useState(person);
  const [resultadoBusqueda, setResultadoBusqueda] = useState(personas);

  const corroborar = (original, comparar) => {
    const long = comparar.length;
    for (let i = 0; i < long; i++) {
      if (original.toLowerCase().charAt(i) != comparar.toLowerCase().charAt(i)) {
        console.log("no coinciden", original + " " + comparar)
        return false
      }
    }
    return true
  }

  const buscarPersona = (termino, tipo = "nombre") => {
    if (termino != "") {
      setResultadoBusqueda(
        tipo == "nombre" ?
          personas.filter((elemento) =>
            elemento.nombre.toLowerCase().includes(termino.toLowerCase()) &&
            corroborar(elemento.nombre, termino)
          ) :
          personas.filter((elemento) =>
            elemento.apellido.toLowerCase().includes(termino.toLowerCase()) &&
            corroborar(elemento.apellido, termino)
          )
      )
      console.log(resultadoBusqueda);
    } else {
      setResultadoBusqueda(personas);
      console.log(resultadoBusqueda)
    }
  }

  return (
    <div className='App-Content'>
      <header>
        <Titulo></Titulo>
      </header>
      <main className='Main-Container'>
        <Buscador buscarPersona={buscarPersona}></Buscador>
        <Personas personas={resultadoBusqueda}></Personas>
      </main>
      <footer className="Firma-Container">
        <Firma></Firma>
      </footer>
    </div>
  );
}

export default App;
