import getHeroeById from './bases/08-imp-exp'

/* const promesa = new Promise((resolve, reject) =>{
    setTimeout(() => {
       /* console.log("2 Segudos después");  */
        // Tarea 
        // Importar el
       /*  const p1 = getHeroeById(2);
        //console.log(heroe);

        reject(p1);
       //resolve( p1);
    }, 2000);
});

promesa.then( (heroe) =>{
    console.log('heroe',heroe);
})
.catch( err => console.warn(err));  */

const getHeroeByIdAsync = (id) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
           /* console.log("2 Segudos después");  */
            // Tarea 
            // Importar el
            const p1 = getHeroeById(id);
            //console.log(heroe);
            if (p1){
                resolve( p1);
            }else{
                reject("No se encuentra el héroe");
            }
            
            
        }, 2000);
    });
}
/* getHeroeByIdAsync(1)
    .then(heroe => console.log('Heroe', heroe))
    .catch( err => console.warn(err))


 */
getHeroeByIdAsync(1)
    .then(console.log)
    .catch( console.warn)