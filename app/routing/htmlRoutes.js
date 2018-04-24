var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.get('/survey', function (req, res) {
    res.send('inside of /survey endpoint');
});