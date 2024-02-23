export const processMessage = async (message) => {
    const response = await fetch("http://localhost:3000/procesarTexto", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
    });
    const data = await response.json();
    console.log(data);
    return data;

}
