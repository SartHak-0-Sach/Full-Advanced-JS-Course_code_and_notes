"use strict";

var a = "hello" // global scope
let b = 12; // block scope
// b = "Hi"
// let c = 34;

{
    // var c = 21;
    // let b = "Namaste"; // b will not throw error but c will due to var datatype
    let b = 'Hola';
    console.log(b);
}

const e = 255;