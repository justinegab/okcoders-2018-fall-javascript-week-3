// Install package via npm install
// Local package with require
var _ = require('lodash');

// Use package based on variable we import with

for(var i = 0; i<5; i++){
    var r = _.random(3,10);
    console.log(r);
}
