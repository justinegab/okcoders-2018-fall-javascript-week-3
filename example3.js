// var person1 = {
//     firstname:'sally', 
//     lastname:'mae', 
//     age:23
// }

// var person2 = {
//     firstname:'freddy', 
//     lastname:'mae', 
//     age:25
// }

// var person3 = {
//     firstname:'fanny', 
//     lastname:'mae', 
//     age:26
// }

// var people = [person1, person2, person3];

// var people =[]
// people.push(person1);
// people.push(person2);
// people.push(person3);

// var people = [
//    {
//         firstname:'sally', 
//         lastname:'mae', 
//         age:23
//     },
    
//     {
//         firstname:'freddy', 
//         lastname:'mae', 
//         age:25
//     },
    
//     {
//         firstname:'fanny', 
//         lastname:'mae', 
//         age:26
//     }
// ]

// for(var i=0; i < people.length; i++){
//     console.log(people[i].firstname);
// }

// function changeObject(thing){

// }

// var tmp = {
//     repeat3: function(x){
//         for (var i = 1; i <= 3; i++){
//             x();
//         }
//     },
//     hello: function(){
//         console.log('Goodbye');
//     }
// }

// // function hello(){
// //     console.log('Hello')
// // }

// var functionName='hello';

// tmp.repeat3(tmp.hello);

var maths = {
    add: function(x,y){
        return x+y;
    },

    subtract: function(x,y){
        return x-y;
    },

    divide: function(x,y){
        return x/y;
    },

    multiply: function(x,y){
        return x*y;
    }
}

console.log (maths.add(2,3))
console.log (maths.subtract(2,3))
console.log (maths.divide(2,3))
console.log (maths.multiply(2,3))
