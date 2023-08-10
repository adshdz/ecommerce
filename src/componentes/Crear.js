import React, { useState } from 'react'


export const Crear = () => {

  const Titulo1 = "Añadir pelicula";
  const [pelicula, setpelicula] = useState({});
  const [pelititulo, setpelititulo] = useState("");
  function conseguirDatos(e) {
    ;
    e.preventDefault();

    let titulo = e.target.title.value;
    let descripcion = e.target.description.value;

    let peli = {
      id: new Date().getTime(),
      titulo,
      descripcion
    }

    setpelicula(peli);
    setpelititulo(titulo);
    setTimeout(() => {
      setpelititulo("");
    }, 20000);
      guardarStorage(peli);
      
  };

const guardarStorage = (pelis) =>{
      let elementos = JSON.parse(localStorage.getItem("pelis"));

      if(Array.isArray(elementos)){
        elementos.push(pelis);
      } else{
        elementos = [pelis]}

        localStorage.setItem("pelis", JSON.stringify(elementos));

        console.log(elementos);
}

  return (
    <div>
      <div className="add">
        <h3 className="title">{Titulo1}</h3>

        <strong>
          {(pelititulo.length > 1) ? "has creado la pelicula:  " + pelicula.titulo : ""}
        </strong>
        <form onSubmit={e => conseguirDatos(e)}>
          <input
            type="text"
            id="title"
            placeholder="Titulo" />
          <textarea
            id="description"
            placeholder="Descripción"></textarea>
          <input
            type="submit"
            id="save"
            value="Guardar" />
        </form>
      </div></div>
  )
}
