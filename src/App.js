import React, {Fragment, useEffect, useState} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {

  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    pais: '',
  })

  //extraer la ciudad y el pais
  const {ciudad, pais} = busqueda;
  
  useEffect(() => {
    console.log('cambio')
    console.log(ciudad, pais)
    return () => {
      console.log('limpio')
    }
  }, [ciudad,pais])
  return (
    <Fragment>
      <Header titulo="Clima React"/>
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario busqueda={busqueda} setBusqueda={setBusqueda} />
            </div>
            <div className="col m6 s12">
              2
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
