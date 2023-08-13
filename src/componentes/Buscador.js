import React from 'react'
import { Crear } from './Crear'

export const Buscador = ({setlistadosteate}) => {
  return (
    <div>{/*Barra lateral*/}
    <aside className="lateral">
      <div className="search">
        <h3 className="title">Buscador</h3>
        <form>
          <input type="text" id="search_field" />
          <button id="search">Buscar</button>
        </form>
      </div>

    <Crear setlistadosteate ={setlistadosteate}/>
    </aside>
</div>
  )
}
