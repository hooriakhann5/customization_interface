const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the public directory
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/products', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'products.html'));
});

app.get('/mockup', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'mockup.html'));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
}); 