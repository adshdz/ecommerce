import React, { useEffect } from 'react'

export const Listado = ({listadostate, setlistadosteate}) => {

  const conseguirPeliculas = () => {
    let peliculasStorage = JSON.parse(localStorage.getItem("pelis"));
    setlistadosteate(peliculasStorage);
    return peliculasStorage;
  }

  useEffect(() => {
    conseguirPeliculas();
  }, []);


  function borrarPeli(id){
    let nuevoArrayPelis = conseguirPeliculas();
    let nuevoArrayGuardar = nuevoArrayPelis.filter( peli => peli.id !== parseInt(id));
    setlistadosteate(nuevoArrayGuardar);
    localStorage.setItem("pelis", JSON.stringify(nuevoArrayGuardar))

    console.log(nuevoArrayGuardar);
    console.log("id para borrar" + id)
  }

  function editPeli(id){
   console.log("editar")
  }
  
  return (
    <section id="content" className="content">

      {Array.isArray(listadostate) ?
        listadostate.map(pelicula => {
        return(<article className="peli-item" key={pelicula.id}>
            <h3 className="title">{pelicula.titulo}</h3>
            <p className='description'> {pelicula.descripcion}</p>
            <button className="edit" onClick={ ()=>editPeli(pelicula.id)}>Editar</button>
            <button className="delete" onClick={ ()=>borrarPeli(pelicula.id)}>Borrar</button>
          </article>)

        }) : "No tenemos peliculas disponibles en el momento"}
    </section>
  )}