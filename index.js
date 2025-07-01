const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, World from Railway!');
})

app.get('/api/info', (req, res) => {
    res.json({ message: 'This is a new endpoint!' });
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})