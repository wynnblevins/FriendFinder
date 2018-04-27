var arrayConverter = {
    convertToIntArray: function (stringArray) {
        var numArray = [];
        
        for (var i = 0; i < stringArray.length; i++) {
            numArray.push(parseInt(stringArray[i]));
        }

        return numArray;
    }
}

module.exports = arrayConverter;