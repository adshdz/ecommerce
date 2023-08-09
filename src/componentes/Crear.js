import React, { useState } from 'react'


export const Crear = () => {

  
const [pelicula, setpelicula]= useState({});

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

      console.log(pelicula);
  };

  const Titulo = "Añadir pelicula";

  return (
    <div>
      <div className="add">
        <h3 className="title">{Titulo}</h3>
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
