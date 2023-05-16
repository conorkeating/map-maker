const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/mapMakerDatabase';
let dbClient;


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/out')));

app.get('/', (req,res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World\n')
});

app.get('/show', (req,res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    dbClient.collection('map').find({}).toArray((err, result) => {
        res.end(JSON.stringify(result));
    });
});

app.get('/maps', (req,res) => {
    res.statusCode = 200
    dbClient.collection('map').find({}).toArray((err, result) => {
        console.log(result);
        res.json(result);
    });
});

app.listen(port, () => {
    MongoClient.connect(url, function(err, client) {
        if (err) throw err;
        console.log("Connected successfully to MongoDB server");
        dbClient = client.db('mapMakerDatabase'); // Replace 'myDatabase' with the name of your database
        // Use the db object to perform database operations
    });
    console.log(`Server listening on the port::${port}`);
});