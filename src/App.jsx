import { useState } from 'react'
import './App.css'
import Form from './Form'
import Card from './Card'

function App() {

  const [datos, setDatos] = useState([]);

  const AddDatosUser = (dato) => {
    setDatos([...datos,dato]);
  }
  
  return (
 <div className='App'>
  <h1> Elige un color </h1> 
  <Form onAddDatosUser= {AddDatosUser}/>
  <Card datos = {datos} />

 </div>
  )
}

export default App;
