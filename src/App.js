
import { useState } from 'react';
import './App.css';
import { Buscador } from './componentes/Buscador';
import { Listado } from './componentes/Listado';

function App() {

  const[ peliculas ,setpeliculas] =  useState();
  return (
    <>

      <div className="layout">
        {/*Cabecera*/}
        <header className="header">
          <div className="logo">
            <div className="play"></div>
          </div>

          <h1>MisPelis</h1>
        </header>

        {/*Barra de navegación*/}
        <nav className="nav">
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/">Peliculas</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/">Contacto</a></li>
          </ul>
        </nav>

        {/*Contenido principal modificacion de prueba*/}
        <Listado listadostate = {peliculas} setlistadosteate ={setpeliculas}/>
        <Buscador listadostate = {peliculas} setlistadosteate ={setpeliculas}/>
        {/*Pie de página*/}
        <footer className="footer">
          &copy; Máster en React - <a href="https://victorroblesweb.es">victorroblesweb.es</a>
        </footer>

      </div>


    </>
  );
}

export default App;
