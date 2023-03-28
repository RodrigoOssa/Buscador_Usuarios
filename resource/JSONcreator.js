const argumentos = process.argv[2];
console.log("Argumentos: ", argumentos)
console.log("Creando lista de personas...")

let listaPersonas = [];

const generarLista = () => {
    for (let i = 0; i < 2; i++) {
        const persona = {
            nombre: `Persona ${i}`,
            apellido: `Apellido ${i}`,
            img: `./img/personas/per${i}`,
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

generarLista();

const recorrerLista = (() => {
    console.log("Recorriendo lista de personas...")
    /*     for (const item in listaPersonas) {
            console.log(listaPersonas[item])
        } */
    listaPersonas.map(item => console.log(item))
})();
