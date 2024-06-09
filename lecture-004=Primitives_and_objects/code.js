let a = null;
let b = NaN;
let c = undefined;
let d = "Hi";
let e = 23
let g = true;
let h = BigInt("1556");
let i = Symbol("I am a symbol");


console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof g);
console.log(typeof h);
console.log(typeof i);

// Objects in JS = Non primitive

const item = {
    "Biscuit": 34,
    "Teabags": 110,
    "Chocolates": 29
}

console.log(item.Biscuit);
console.log(item["Teabags"]);