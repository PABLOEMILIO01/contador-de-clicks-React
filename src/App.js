import React from 'react';
import '../src/App.css'
import Boton from './componentes/boton';
import clickLogo from './imagenes/clickLogo.png'
import Contador from './componentes/contador';
import { useState } from 'react';



  function App() {

    const [numClicks, setNumClicks ] = useState(0);

    const manejarClick = () => {
      setNumClicks(numClicks + 1);
    }

    const reiniciarContador = () => {
      setNumClicks(0);
    }
    return (
      <div className='App'>
        <div className='logo-contenedor'>
          <img 
             className='logo-contador'
             src={clickLogo}
             alt='logo' />
        </div>
        <div className='contenedor-principal'>
          <Contador numClicks={numClicks} />
          <Boton 
            texto='click'
            esBotonDeClick={true}
            manejarClick={manejarClick} />
          <Boton  
            texto='reiniciar'
            esBotonDeClick={false}
            manejarClick={reiniciarContador} />
          </div>
      </div>
    );
  }

export default App;
