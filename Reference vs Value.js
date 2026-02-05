console.log("\n=== Exercise 1.2: Reference vs Value ===");

// Primitive (value copy)
let a = 10;
let b = a;  // Copy value
b = 20;

console.log("Primitive:");
console.log("a =", a);  // Predict: ?
console.log("b =", b);  // Predict: ?

// Object (reference copy)
let obj1 = { value: 10 };
let obj2 = obj1;  // Copy REFERENCE, not value
obj2.value = 20;

console.log("\nObject (reference):");
console.log("obj1.value =", obj1.value);  // Predict: ?
console.log("obj2.value =", obj2.value);  // Predict: ?

// Real-world example
let cart = {
    items: ["Apple", "Banana"],
    total: 100
};

let backupCart = cart;  // ❌ Wrong way
backupCart.items.push("Orange");

console.log("\nCart bug example:");
console.log("Original cart items:", cart.items);  // Predict: ?
console.log("Backup cart items:", backupCart.items);  // Predict: ?

// Correct way: Deep copy
let correctBackup = JSON.parse(JSON.stringify(cart));
correctBackup.items.push("Mango");

console.log("\nAfter deep copy:");
console.log("Original cart items:", cart.items);  // Predict: ?
console.log("Correct backup items:", correctBackup.items);  // Predict: ?