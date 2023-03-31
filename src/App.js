import { useState } from 'react';
import './App.css';
import Titulo from './components/titulo';
import Firma from './components/firma';
import Buscador from './components/buscador';
import Personas from './components/personas';
import person from "./db/personas.json";

function App() {
  const [personas, setPersonas] = useState(person);

  return (
    <div className='App-Content'>
      <header>
        <Titulo></Titulo>
      </header>
      <main className='Main-Container'>
        <Buscador></Buscador>
        <Personas personas={personas}></Personas>
      </main>
      <footer className="Firma-Container">
        <Firma></Firma>
      </footer>
    </div>
  );
}

export default App;
