import React, { useEffect } from 'react'

export const Listado = ({listadostate, setlistadosteate}) => {

  const conseguirPeliculas = () => {
    let peliculasStorage = JSON.parse(localStorage.getItem("pelis"));
    setlistadosteate(peliculasStorage);
    return peliculasStorage;
  }

  useEffect(() => {
    conseguirPeliculas();
  }, [listadostate]);

  return (
    <section id="content" className="content">

      {Array.isArray(listadostate) ?
        listadostate.map(pelicula => {
        return(<article className="peli-item" key={pelicula.id}>
            <h3 className="title">{pelicula.titulo}</h3>
            <p className='description'> {pelicula.descripcion}</p>
            <button className="edit">Editar</button>
            <button className="delete">Borrar</button>
          </article>)

        }) : "No tenemos peliculas disponibles en el momento"}
    </section>
  )}