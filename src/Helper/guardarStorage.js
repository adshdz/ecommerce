export const guardarStorage = ( campo, pelis) =>{
    let elementos = JSON.parse(localStorage.getItem("pelis"));

    if(Array.isArray(elementos)){
      elementos.push(pelis);
    } else{
      elementos = [pelis]}

      localStorage.setItem(campo, JSON.stringify(elementos));

      console.log(elementos);
}