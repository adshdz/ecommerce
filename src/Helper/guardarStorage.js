export const guardarStorage = ( campo, pelis) =>{
    let elementos = JSON.parse(localStorage.getItem(campo));

    if(Array.isArray(elementos)){
      elementos.push(pelis);
    } else{
      elementos = [pelis]}

      localStorage.setItem(campo, JSON.stringify(elementos));

     }