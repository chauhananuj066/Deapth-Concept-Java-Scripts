let a=10;
let b=20;
let c=a+b;  
console.log("The sum of a and b is: " + c);

// Execution Context in java scrpts in hinglish:    
// Execution context ka matlab hai ki jab bhi koi function ya code block execute hota hai, to uska ek context banta hai.
// Ye context define karta hai ki uss code block ke andar kaunse variables, functions aur objects available hain.

// JavaScript mein execution context teen tarah ke hote hain:
// 1. Global Execution Context: Ye sabse pehla context hota hai jo JavaScript engine create karta hai jab script load hoti hai. Isme global variables aur functions define hote hain.
// 2. Function Execution Context: Jab bhi koi function call hota hai, to uska ek naya execution context create hota hai. Isme function ke parameters aur local variables define hote hain.
// 3. Eval Execution Context: Ye context tab create hota hai jab eval() function ka use kiya jata hai. Isme eval ke andar likha code execute hota hai.  
// Execution context ka use karne se JavaScript engine ko pata chalta hai ki kaunse variables aur functions kis context mein available hain, aur unhe kaise access karna hai. Isse code execution efficient aur organized hota hai.
// JavaScript mein execution context ka concept samajhna bahut zaroori hai, kyunki isse humein code ke behavior aur scope ka pata chalta hai.  
 //1. Global Execution Context IN DEPTH:
// Global Execution Context ka matlab hai ki jab bhi JavaScript code run hota hai, to sabse pehle ek global execution context create hota hai. Is context mein global variables aur functions define hote hain.
// Ye context tab tak active rehta hai jab tak JavaScript code run hota hai. Isme global scope ke variables aur functions accessible hote hain.
