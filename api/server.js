const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/out')));

app.get('/', (req,res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World\n')
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});