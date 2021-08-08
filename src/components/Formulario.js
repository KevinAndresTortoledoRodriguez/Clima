import React, {useState} from "react";
const Formulario = () => {
    const [busqueda, setBusqueda] = useState({
        ciudad: '',
        pais: '',
    })

    const [error, setError] = useState(false)

    //extraer la ciudad y el pais
    const {ciudad, pais} = busqueda;



    //funcion que coloca los elementos en el state
    const handleChange = (e) => {
        //actualizar el state
        setBusqueda({...busqueda, [e.target.name]:e.target.value})
    }
    
    //cuando el usuario da submit al form
    const handleSubmit = (e) => {
        e.preventDefault();
        //validar

        //pasarlo al componente principal
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div className="input-field col s12">
                <input type="text" name="ciudad" id="ciudad" value={ciudad} onChange={handleChange}/>
                <label htmlFor="ciudad">Ciudad:</label>
            </div>
            <div className="input-field col s12">
                <select name="pais" id="pais" value={pais} onChange={handleChange}>
                    <option value="">-- Seleccione un pais</option>
                </select>
                <label htmlFor="pais">País:</label>
            </div>
        </form>
     );
}
 
export default Formulario;