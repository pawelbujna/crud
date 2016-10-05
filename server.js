// https://zellwk.com/blog/crud-express-mongodb/


const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();

const mongoUrl = 'mongodb://root:root@ds033096.mlab.com:33096/custom-quotes';

var db;

MongoClient.connect(mongoUrl, (err, database) => {
    if (err) { console.log(err) };

    db = database;

    app.listen(3000, () => {
        console.log( 'listening on 300' );
    })
})

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    db.collection('quotes').find().toArray((err, result) => {
        res.send(result);
    })
})

app.post('/quotes', (req, res) => {
    db.collection('quotes').save(req.body, (err, result) => {
        if (err) { console.log(err) };

        console.log('Saved to Database :)')
        res.redirect('/');
    })
})

