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
const generaLinkDeFotoAleatorio = () => {
	return `https://picsum.photos/200/300?random=${generaNumeroAleatorio(1, 100)}`;
}
const generaNumeroAleatorio = (min, max) => {
	return Math.floor(Math.random() * (max - min)) + min;
}

const procesarLibros = async () => {
	books.map((book) => {
		 // Esto debe cambiar , no se puede usar map
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
			<img src="${generaLinkDeFotoAleatorio()}" alt="${titulo}" id="imagen">
			
		</li>
	`;
		counter++;

	});
}
form.addEventListener("submit", async function (event) {
	event.preventDefault();
	if (books.length === 0) {
		console.assert(true)
		await leerLibros();
		await procesarLibros();
	}
	
});
