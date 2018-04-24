var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.get('/api/friends', function (req, res) {
    res.send('inside of /api/friends GET');
});

app.post('/api/friends', function (req, res) {
    res.send('inside of /api/friends POST');
});