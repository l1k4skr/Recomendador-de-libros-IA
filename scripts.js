const form = document.querySelector("form");
const listaLibros = document.querySelector(".lista-libros");
let books = []

let counter = 1;


const leerLibros = async () => {
	try {
		const response = await fetch("books.json");
		const data = await response.json();
		books = data;
	} catch (error) {
		console.error("Error: ", error);
	}
}

const procesarLibros = async () => {
	books.map((book) => { // Esto debe cambiar , no se puede usar map
		console.log(book);
		const { id, title: titulo, author: autor, year, genre: genero, price: precio, cover } = book;
		listaLibros.innerHTML += `
		<li>
		<span>${id}</span>
		<h3>${titulo}</h3>
		<p>${autor}</p>
		<p>${year}</p>
		<p>${genero}</p>
		<p>${precio}</p>
		<img src="${cover}" alt="${titulo}">
		
		</li>
	`;
		counter++;

	});
}
form.addEventListener("submit", async function (event) {
	event.preventDefault();
	if (books.length === 0) {
		await leerLibros();
		await procesarLibros();
	}
	
});
