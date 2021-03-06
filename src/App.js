import React, {Fragment, useEffect, useState} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import Error from './components/Error';

function App() {

  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    pais: '',
  })

  const [consultar, setConsultar] = useState(false);
  const [resultado, setResultado] = useState([]);
  const [error, setError] = useState(false);

  //extraer la ciudad y el pais
  const {ciudad, pais} = busqueda;
  
  useEffect(() => {
    const consultarApi = async () => {
      console.log('effect')
      if(consultar){
        
        const appId = 'b41340949e024dd0f83f33cc1aec5a83';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setResultado(resultado)
        setConsultar(false);

        //Detecta si hubo resultados correctos en la consola
        if(resultado.cod === "404"){
          setError(true);
        } else {
          setError(false);
        }
      } 
    }
    consultarApi()
    //eslint-disable-next-line
  }, [consultar])

  let componente;
  if(error) {
    componente = <Error mensaje="No hay resultados" />
  } else {
    componente = <Clima resultado={resultado}/>
  }
  return (
    <Fragment>
      <Header titulo="Clima React"/>
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario busqueda={busqueda} setBusqueda={setBusqueda} setConsultar={setConsultar}/>
            </div>
            <div className="col m6 s12">
              {componente}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
