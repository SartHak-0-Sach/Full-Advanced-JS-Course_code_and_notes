// Q1. Make a string type variable and try to add a number to it.

// Ans.
let a = "Sarthak is ";
let b = 20;
a = a + b;
console.log(a + " years old");

// Q2. Use typeof operator and find datatype of the string in last question

// Ans.
console.log(typeof a);

// Q3. Create a const object in JavaScript? Can you change it to hold a number later?

// Ans.
const item = {
    "Biscuit": 34,
    "Teabags": 110,
    "Chocolates": 29
}

// item = 54; // will throw error due to redefinition of same variable with different datatype as one is primitive and other is non-primitive datatype

// Q4. Try to add a new key to const object above. Were you able to do it?

// Ans.
item["Bread"] = 45;

console.log(item);

// Yes we were able to add it

item["Teabags"] = 330;

console.log(item);

// item = {
//     "batteries": 394 // This will throw error as that reference to memory block is being changed here which would have been possible if it wasn't a const variable
// }

// console.log(item);

// We can even edit existing values in a const object as this item word refers to a reference in block of memory that has to remain constant now that it has bee declared as const but we cans till change, update, add or delete values key value pairs from it.

// Q5. Write JS program to make dictionary of word meanings of 5 words

const dictionary = {
    "Hello": "A greeting",
    "World": "The Earth and its inhabitants",
    "JavaScript": "A high-level, dynamic, and interpreted programming language",
    "Dictionary": "A collection of words with their meanings",
    "Programming": "The process of designing, writing, testing, and maintaining the source code of computer programs"
};

// To access a word meaning, use the word as a key
console.log(dictionary["Hello"]); // Output: A greeting

// To add a new word meaning, use the following syntax
dictionary["NewWord"] = "A new definition";

// To delete a word meaning, use the delete keyword
delete dictionary["World"];