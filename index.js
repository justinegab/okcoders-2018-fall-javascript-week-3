// Install package via npm install
// Local package with require
const _ = require('lodash');
const program = require('commander');
const fs = require('fs');

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

// program
//   .version('0.1.0')
//   .option('-p, --peppers', 'Add peppers')
//   .option('-P, --pineapple', 'Add pineapple')
//   .option('-b, --bbq-sauce', 'Add bbq sauce')
//   .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
//   .parse(process.argv);

// -p, --print
// -a, --add[name]
// -r, --remove[name]
// -d, --display

program
    .version('1.0')
    .option('-p, --print', 'Print Menu')
    .option('-a, --add [name]','Add to List')
    .option('-r, --remove [name]','Remove from List')
    .option('-d, --display','Display List')
    .parse(process.argv);

if(program.print) {
    console.log('Print Menu');
}

if(program.display) {
    console.log('Display List');
}

if(program.add) {
    addItemToList(program.add);
}

if(program.remove) {
    console.log('Remove',program.remove);
}

function addItemToList(itemName) {
    console.log('Added', itemName);
    fs.writeFileSync('./list.json', JSON.stringify([itemName]));
}

fs.writeFileSync('./testfile.txt','Hello Everybody!');
