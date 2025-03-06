const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/greet', (req, res) => {
    const name = req.query.name;
    if (name) {
        res.json({ message: `Hello, ${name}! Welcome to Younglabs.` });
    } else {
        res.json({ error: 'Name is missing' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
