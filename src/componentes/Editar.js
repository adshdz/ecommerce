import React, { useEffect, useState } from 'react'

export const Editar = ({ pelicula }) => {



    return (
        <div className='edit_form'>
            <form>
                <input
                    type="text"
                    id="title"
                    placeholder={pelicula.titulo} />
                <textarea
                    id="description"
                    placeholder="Descripción"></textarea>
                <input
                    type="submit"
                    id="save"
                    value="Guardar" />
            </form>
        </div>
    )
}
