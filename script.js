// console.log pro.argv to run it on the terminal
console.log(process.argv)

// define process.argv as a variable to define the elements inside the array
let input = process.argv;

// define the elements from 2 onwards so as to be able to used
let color = input[2];
let color1 = input[3];
let color2 = input[4];

// define the variable to be able to use the functions from the separate file
const my = require('./module')

// console.log to change from hex to rgb when the function is in a separate file
// console.log(my.hexToRgb(color))

// console.log to change from rgb to hex when function is in a separate function
// console.log(my.rgbToHex(parseInt(color),parseInt(color1),parseInt(color2)))

// console.log it to show up on the terminal(hex to rgb)
// console.log(hexToRgb(color));


// console.log it to to show up on the terminal(rgb to hex)
// console.log(rgbToHex(parseInt(color),parseInt(color1),parseInt(color2)))