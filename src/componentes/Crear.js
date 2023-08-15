import React, { useEffect, useState } from 'react'
import { guardarStorage } from '../Helper/guardarStorage';


export const Crear = ({setlistadosteate}) => {

  
  useEffect(()=>{
    const elementos = JSON.parse(localStorage.getItem("pelis"))
    let elementosInicio = [];
      elementos ? console.log("existen datos"):  localStorage.setItem("pelis", JSON.stringify(elementosInicio));
    
  },[])

  const Titulo1 = "Añadir pelicula";
  const [pelititulo, setpelititulo] = useState("");
  
  
  const conseguirDatos = (e) => {
    
    e.preventDefault();

    let titulo = e.target.title.value;
    let descripcion = e.target.description.value;

    setTimeout(() => {
      e.target.title.value = null;
      e.target.description.value = null;
      
    }, 2000);


    let peli = {
      id: new Date().getTime(),
      titulo,
      descripcion
    }

  
      guardarStorage("pelis", peli);

      setpelititulo(titulo);
      setTimeout(() => {
        setpelititulo("");

           }, 20000);
{/* Aqui tenemos un error si nos quedamos sin peliculas la funcion no sabe realizar el spreed y no lo deja guardar: la solucion fue poner settime en el componenete listado para que tome unos segundos y asi en listadostate exista algo*/}
           setlistadosteate((element)=>{
            return  [...element , peli]
          });        
  };

  return (
    <div>
      <div className="add">
        <h3 className="title">{Titulo1}</h3>

        <strong>
          {(pelititulo.length > 1) ? "has creado la pelicula:  " + pelititulo : ""}
        </strong>
        <form onSubmit={e => conseguirDatos(e)}>
          <input
            type="text"
            id="title"
            placeholder="Titulo" required/>
          <textarea
            id="description"
            placeholder="Descripción" required></textarea>
          <input
            type="submit"
            id="save"
            value="Guardar" />
        </form>
      </div></div>
  )
}
