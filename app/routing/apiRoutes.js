var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var friendFinder = require('../services/friendFinder.js');

module.exports = function (app) {
    app.post('/api/friends', function (req, res) {
        // TODO: Handle incoming survey results here - and - compute compatibility 
        var mostCompatible = friendFinder.getMostCompatible(); // returns hardcoded friend for now        
        res.send(mostCompatible);
    });
    
    app.get('/api/friends', function (req, res) {
        res.send('inside /api/friends get endpoint');
    });
};