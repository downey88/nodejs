const tracer = require('dd-trace').init();
const express = require('express');
const app = express();

app.use(express.json());
app.get('/', (req, res) => {
    res.send("Testing with Data Dog")
});

const PORT = 80;
app.listen(PORT, () => {
    console.log("Started on port ", PORT)
});