const apiKey = 'bQdlYTcDuuUiY2wP5kVi0JRYizqL7j3X';

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
