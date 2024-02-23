import { processMessage } from "./openia.js";

const form = document.querySelector("form");
const listaLibros = document.querySelector(".lista-libros");
let books = []

let counter = 1;


async function leerLibros() {
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
		// Esto debe cambiar , no se puede usar map /?
		const { id, title: titulo, author: autor, year, genre: genero, price: precio, cover } = book;
		listaLibros.innerHTML += `
		<div class="libro">
			<h3>${titulo}</h3>
			<p>${autor}</p>
			<p>${year}</p>
			<p>${genero}</p>
			<p>${precio}</p>
			
		</div>
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
	console.assert(true)

	const message = document.querySelector("#prompt").value;

	fetch('http://localhost:3000/procesarTexto', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ texto: message })
	})
		.then(response => response.json())

	await processMessage(message);
});
