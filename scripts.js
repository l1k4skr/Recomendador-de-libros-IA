const form = document.querySelector('form');
const listaLibros = document.querySelector('.lista-libros');
console.log(listaLibros)
let counter = 1;

form.addEventListener('submit', function(event) {
    listaLibros.innerHTML += `
        <li>Libro ${counter}</li>

    `;
    counter++;
});


