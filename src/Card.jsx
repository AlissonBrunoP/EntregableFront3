function Card({ datos }) {
    return (
      <div>
        {datos.map((dato, index) => (
          <div key={index} className="card">
            <h3>Hola {dato.nombre}</h3>
            <h3>Sabemos que tu color favorito es el {dato.color}</h3>
          </div>
        ))}
      </div>
    );
  }
  
  export default Card;
  