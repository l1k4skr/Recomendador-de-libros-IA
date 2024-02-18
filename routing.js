// Importing express module and other required modules
const express = require('express');
const app = express();
const port = 8000;
const path = require('path');

// Defining middleware to serve static files
app.use(express.static(path.join(__dirname)));

// Defining route for home page
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/home', (req, res) => {

    console.log('POST request received');
    console.log(req.body);
});

// Start the server on the specified port
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});