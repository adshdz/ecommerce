import React from 'react'

export const Editar = ({ pelicula, conseguirPeliculas, setEdit }) => {


    const guardarEdicion = (e) => {

        let descripcion = "";
        let titulo = ""

        e.preventDefault();


        if (e.target.title_edit.value) { titulo = e.target.title_edit.value; } else { titulo = pelicula.titulo }
        (e.target.description_edit.value) ? descripcion = e.target.description_edit.value : descripcion = pelicula.descripcion;

        let peli = {
            id: pelicula.id,
            titulo,
            descripcion
        }


        const conseguirPelis = conseguirPeliculas();
        const indicePeli = conseguirPelis.findIndex(element => element.id === pelicula.id);
        conseguirPelis[indicePeli] = peli;

        console.log(conseguirPelis);
        localStorage.setItem("pelis", JSON.stringify(conseguirPelis));

        setEdit(0);
    }

    const cancelar = ()=>{
        setEdit(0);
    }

    return (
        <div className='edit_form'>
            <form onSubmit={e => guardarEdicion(e)}>
                <input
                    type="text"
                    id="title_edit"
                    placeholder={pelicula.titulo} />
                <textarea
                    id="description_edit"
                    placeholder={pelicula.descripcion} ></textarea>
                <input
                    type="submit"
                    id="save"
                    value="Guardar" />

                <button
                    className="cancel"
                    onClick={() => cancelar()}>Cancelar</button>
            </form>
        </div>
    )
}
