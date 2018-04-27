var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var friendFinder = require('../services/friendFinder.js');

module.exports = function (app) {
    app.post('/api/friends', function (req, res) {
        console.log('inside endpoint');
        var mostCompatible = friendFinder.getMostCompatible(req.body);        
        
        console.log('Most Compatible: ' + mostCompatible.friend.name);

        res.send(mostCompatible.friend);
    });
    
    app.get('/api/friends', function (req, res) {
        res.send('inside /api/friends get endpoint');
    });
};