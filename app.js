let pronombres = ["mi", "tu", "el", "nuestro", "vuestro"];
let adjetivos = ["gran", "buen", "increible", "pequeño"];
let sustantivos = ["pantalon", "mapache", "proyecto", "viaje"];
let extensiones = [".com", ".net", ".us", ".io"];

// Array para almacenar los nombres de dominio generados
let dominios = [];

// Generar todas las combinaciones posbles
for (let pronombre of pronombres) {
    for (let adjetivo of adjetivos) {
        for (let sustantivo of sustantivos) {
            for (let extension of extensiones) {
                // Concatenar las palabras con la extensión
                let dominioCompleto = pronombre + adjetivo + sustantivo + extension;
                dominios.push(dominioCompleto); // Guardar en el array
            }
        }
    }
}

// Imprimir los dominios generados
dominios.forEach(dominio => console.log(dominio));