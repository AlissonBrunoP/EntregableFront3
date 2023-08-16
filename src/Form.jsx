import { useState } from 'react'
 

function Form({onAddDatosUser}){

const [nombre, setNombre] = useState("");
const [color, setColor] = useState("");
const [mensajeError, setMensajeError] = useState('');


const handleSubmit = (e) => {
    e.preventDefault();



 
    if(nombre.length < 3 || color.length < 6){
        setErrorMessage('Por favor chequea que la información sea correcta');

    }
    else {
        
        onAddDatosUser({nombre, color});
        setNombre("");
        setColor("");
        setMensajeError("");
    }
}

return(

    <form onSubmit={handleSubmit} >
        <input type="text" placeholder='Ingrese su nombre' value={nombre} onChange={(e)=> setNombre(e.target.value)} />
        <input type="text" placeholder='Ingrese su color favorito' value={color} onChange={(e)=> setColor(e.target.value)} />
        <button type='submit'>Enviar</button>
    </form>
)

}
export default Form;