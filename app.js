var express = require('express');
var route = require('./route');
var app = express();
var port = 80;

app.post('/items', route.items);
app.listen(port, function () {
    console.log('Example app listening on port 80!');
});

