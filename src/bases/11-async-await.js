
const getImagen = async () => {

    try {
        const apiKey = 'bQdlYTcDuuUiY2wP5kVi0JRYizqL7j3X';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();

        const url = data.images.original.url;
        //console.log(url + ' soy el console');
        const img = document.createElement('img');
        img.src = url;
        console.log(data.images.original.url);
        document.body.append(img);
        /* console.log(data);
        console.log(data.data.images.original.url);   */
    } catch (error) {
        // Manejo del error
        console.error(error);
    }

}

getImagen();



/* const apiKey = 'bQdlYTcDuuUiY2wP5kVi0JRYizqL7j3X';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);


peticion
    .then( resp => resp.json())
    .then(({data}) => {
        const url = data.images.original.url;

        const img = document.createElement('img');
        img.src = url;
        console.log( data.images.original.url);

        document.body.append(img);
    })
    .catch(console.warn);
 */