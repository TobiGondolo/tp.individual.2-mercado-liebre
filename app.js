var express = require('express');
var path = require('path');

var app = express();

var publicPath  = path.join(__dirname,'public');

app.use(express.static(publicPath));

app.get('/',function(req,res){
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/css', function(req,res){
    res.sendFile(__dirname + '/public/assets/css/stylesheet.css');
});

app.listen(3002, () => {
    console.log("Servidor corriendo");
});