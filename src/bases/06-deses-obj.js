// Desestructuración
// Asignación Desestructurante
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Iroman',
    rango: 'Soldado'
};


//const {nombre, edad, clave} = persona;
/* console.log(nombre);
console.log(edad);
console.log(clave); */

/* console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave); */

const useContext = ({clave,nombre , edad, rango = 'Capitán'}) =>{
   /*  const {nombre, edad, clave} = usuario */
   /*  console.log(edad,  nombre, rango); */
    //console.log(usuario);
    return{
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 14.1232,
            lng: -12.3232,
        }
    }
}

const {nombreClave, anios,latlng:{lat,lng}} = useContext(persona);
/* retornaPersona( persona); */
console.log(nombreClave,anios);
console.log(lat, lng);