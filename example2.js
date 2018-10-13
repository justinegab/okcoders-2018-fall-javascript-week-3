var test = true;
function makemessage(test, message) {
    console.log(message);
    if(test){
        console.log("Evaluated as True")
    }
    else {
        console.log("Evaluated as False")
    }
}

makemessage(NaN, "Evaluate this");

// // Loops inside of loops
// for (var num1 = 1; num1 < 9; num1++) {
//     message = ""
//     for (var num2 = 1; num2 <= num1; num2++) {
//         message = message + num2 + " ";
//     }
//     console.log(message);
// }