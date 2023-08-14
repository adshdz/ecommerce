import React, { useEffect, useState } from 'react'
import { Editar } from './Editar';

export const Listado = ({ listadostate, setlistadosteate }) => {

    const [edit, setEdit] = useState(0);

  const conseguirPeliculas = () => {
    let peliculasStorage = JSON.parse(localStorage.getItem("pelis"));
    setlistadosteate(peliculasStorage);
    return peliculasStorage;
  }

  useEffect(() => {
    setTimeout(() => {
      conseguirPeliculas();
    }, 200);}, []);


  function borrarPeli(id) {
    let nuevoArrayPelis = conseguirPeliculas();
    let nuevoArrayGuardar = nuevoArrayPelis.filter(peli => peli.id !== parseInt(id));
    setlistadosteate(nuevoArrayGuardar);
    localStorage.setItem("pelis", JSON.stringify(nuevoArrayGuardar))

    console.log(listadostate)
  }

  function editPeli(id) {
    setEdit(id);

    
  }

  return (
    <>
    <section id="content" className="content">

      {listadostate !==[]?
        listadostate.map(pelicula => {
          return (<article className="peli-item" key={pelicula.id}>
            <h3 className="title">{pelicula.titulo}</h3>
            <p className='description'> {pelicula.descripcion}</p>
            <button className="edit" onClick={() => editPeli(pelicula.id)}>Editar</button>
             <button className="delete" onClick={() => borrarPeli(pelicula.id)}>Borrar</button>
             {edit === pelicula.id && (
          <Editar  pelicula = {pelicula} />
          )}
          </article>)


        }) : "no hay nada"}
    </section>
    </>
  )
}