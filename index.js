// Install package via npm install
// Local package with require
var _ = require('lodash');

// Use package based on variable we import with

// for(var i = 0; i<5; i++){
//     var r = _.random(3,10);
//     console.log(r);
// }

// Create a command line to do list using Commander
//  - Print menu
//  - Add to List
//  - Remove from List
//  - Display List

const args = process.argv;

console.log(args)

console.log('Choose an option:');
console.log('Add to List:');
console.log('Remove from List:');
console.log('Print List:');
