const fs = require('fs');
console.log("Creando lista de personas...")
const argumentos = process.argv[2];

let listaPersonas = [];
const nombres = ["Juan", "Pepito", "Emanuel", "Josefina", "Laura", "Ana", "Hortencia", "Roco", "Juan", "Pablo", "María", "Patricia", "Juan", "Patricio", "Julieta", "Romeo", "Eugenia", "Eugenio", "Flor", "Gustavo", "Martina", "Juan", "Martha", "Ruben", "Dario", "Daniela", "Lucas", "Florencia", "Gaston", "Javier", "Milena", "Sandra", "Franco", "Francisco", "Edgardo"];
const apellidos = ["Venegas", "Guemes", "Rodriguez", "Saenz", "Peltrovianca", "Desconfianza", "Miruela", "Guemes", "Agena Gutierrez", "Guemes", "Patmarrat", "Rodriguez", "Sanchez", "Papita Suelta", "Guemes", "Matracio", "Murciano", "Pelado", "Rodriguez", "Lopez", "Papita Suelta", "Guemes", "Matracio", "Murciano", "Pelado", "Rodriguez", "Lopez", "Guemes", "Rodriguez", "Saenz", "Peltrovianca", "Desconfianza", "Miruela", "Guemes",]

const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
}

const generarLista = (argumentos = 5) => {
    shuffle(nombres);
    shuffle(apellidos);
    for (let i = 0; i < argumentos; i++) {
        const persona = {
            nombre: `${nombres[i]}`,
            apellido: `${apellidos[i]}`,
            img: `./img/personas/per${i}.png`,
            descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        };
        /* listaPersonas[`persona${i}`] = {
            nombre: `Persona ${i}`,
            apellido: `Apellido ${i}`,
            img: `./img/personas/per${i}`,
            descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        } */
        listaPersonas.push(persona);
    }
    console.log("Lista creada.")
}

generarLista(argumentos);

const recorrerLista = (() => {
    console.log("Recorriendo lista de personas...")
    /*     for (const item in listaPersonas) {
            console.log(listaPersonas[item])
        } */
    listaPersonas.map(item => console.log(item.nombre, item.apellido))
})();

console.log("Guardando JSON..")

fs.writeFile('./src/db/personas.json', JSON.stringify(listaPersonas), 'utf8', (err) => {
    if (err) throw err;
    console.log("Archivo guardado con éxito!")
})