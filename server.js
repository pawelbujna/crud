// https://zellwk.com/blog/crud-express-mongodb/


const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log( 'listening on 300' );
})

app.get('/', (req, res) => {
    res.sendFile( __dirname + '/index.html' );
})

app.post('/quotes', (req, res) => {
    console.log(req.route.stack);
    res.sendFile(__dirname + '/thanks.html')
})

