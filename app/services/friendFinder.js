var friends = require('../data/friends.js');
var arrayConverter = require('./arrayConversionService.js');

function pickMostCompatible(compatibilityObjs) {
    var mostCompatible = null;

    // based on compatibility array pick most compatible friend
    for (var i = 0; i < compatibilityObjs.length; i++) {
        if (mostCompatible === null || 
            compatibilityObjs[i].compatibility < mostCompatible.compatibility) {
            mostCompatible = compatibilityObjs[i];            
        }        
    }
    
    return mostCompatible;
}

function sumCompatibility(compatibilityData) {
    var sum = 0;
    
    for (var i = 0; i < compatibilityData.length; i++) {
        sum += compatibilityData[i];
    }

    return sum;
}

function createCompatibilityArray(userAnswerData, friendAnswerData) {
    var compatibility = []; 

    // calculate a single compatibility array
    for (var i = 0; i < userAnswerData.length; i++) {
        var value = Math.abs(userAnswerData[i] - friendAnswerData[i]);
        compatibility.push(value);
    }

    return compatibility;
}

var friendFinder = {
    getMostCompatible: function (userAnswerData) {
        var compatibilityObjs = [];
        var compatibilityArray = null;
        var compatibilityObj = null;

        // ensure array is filled with ints (aka, not strings)
        var userAnswerScores = userAnswerData.scores;
        userAnswerScores = arrayConverter.convertToIntArray(userAnswerScores);

        // looping through friends, 
        for (var i = 0; i < friends.length; i++) {
            
            // create an array of compatibility values for the current friend
            compatibilityArray = createCompatibilityArray(userAnswerScores, 
                friends[i].scores);
            
            var compatibilitySum = sumCompatibility(compatibilityArray);
            compatibilityObj = {
                friend: friends[i],
                compatibility: compatibilitySum
            };
            
            compatibilityObjs.push(compatibilityObj);
        }
        
        return pickMostCompatible(compatibilityObjs);
    }
};

module.exports = friendFinder;