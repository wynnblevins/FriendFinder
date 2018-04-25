var friends = require('../data/friends.js');

var friendFinder = {
    getMostCompatible: function () {
        // TODO: implement algorithm for picking friends as described in instructions
        return friends[0];
    }
};

module.exports = friendFinder;