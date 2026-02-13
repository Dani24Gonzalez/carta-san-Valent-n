const files = [
    "cuando dure mas de 24 horas en el hospital de madrid esperando razon de mis hermanos, sin domir .jpeg",
    "cuando estaba arrelgando documentos de la registraduria y me encontre esto.jpeg",
    "cuando estavamos viendo lo que le querias comprar a paula.jpeg",
    "cuando estuvimos en el cumpleaños de paula.jpeg",
    "cuando fui al portal una de tantas veces y te concentia tus piecitos .jpeg",
    "cuando fuimos a la cafeteria con pipe .jpeg",
    "cuando la  doctora me dijo que no habia mucha gente para que le ayudara y me dio esos guantes y le ayude .jpeg",
    "cuando liam estaba gordito .jpeg",
    "cuando llego el pedido de paula, tu la mas feliz .jpeg",
    "cuando me dibujaste un snoopy, mi favorito .jpeg",
    "cuando me estaba alistando para llevarte flores y que estabas ayudandole a pipe .jpeg",
    "cuando me toco sostener a miguel mientras le tomaban la radiografia de la clavicula porque se la partio .jpeg",
    "cuando me volviste a morder en el local de pipe jaja .jpeg",
    "cuando mi hermano se accidento y yo le estaba pagando el arreglo con felipe, entre los 2 le mandamos arreglar la moto mientras el estaba en el hospital.jpeg",
    "cuando te quite el zapato en el portal y te lo deje abajo en donde tiran la basura jaja .jpeg",
    "diego unos minutos despues de que se accidento.jpeg",
    "el casco que llevaba diego.jpeg",
    "el mas feliz con su termo de snoopy.jpeg",
    "este es el video del sticker jajja .mp4",
    "este es un video que surgio mientras recopilaba lo que necesitaba para la carta.mp4",
    "fotos con tu prima a la que le caigo mal,  no se si aun sea asi .jpeg",
    "la maleta que diego llevaba .jpeg",
    "las pantuflas de mi mamà  jaaja .jpeg",
    "lo que algun dia prometimos hacernos.png.jpeg",
    "lo que te envie con juanjo .jpeg",
    "una foto mas en el cumple de paula.jpeg",
    "ya me estaba calmando 01 55 am .mp4"
];

// Sort matches the list_dir order (alphabetical)
files.sort();

let counter = 37;
const newRecuerdos = files.map(file => {
    const ext = file.toLowerCase().endsWith('.mp4') ? '.mp4' : '.jpeg';
    const type = ext === '.mp4' ? 'video' : 'img';
    const text = file.replace(/\.(jpeg|jpg|png|mp4)$/i, '');

    return {
        t: text,
        i: counter++,
        type: type
    };
});

console.log(JSON.stringify(newRecuerdos, null, 2));
