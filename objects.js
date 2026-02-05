// TODO: Yeh code copy karo aur apne editor mein run karo
console.log("=== Exercise 1.1: Object Basics ===");

// 1. Ek simple object banaye
let student = {
    name: "Rahul",
    age: 20,
    course: "Computer Science",
    marks: [85, 90, 78, 92, 88]
};

console.log("Student object:", student);

// 2. Properties access karo
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Third subject marks:", student.marks[2]);

// 3. New property add karo
student.email = "rahul@college.com";
console.log("After adding email:", student);

// 4. Property modify karo
student.age = 21;
console.log("After birthday:", student);

// 5. Method add karo
student.getAverage = function() {
    let sum = this.marks.reduce((a, b) => a + b, 0);
    return sum / this.marks.length;
};

console.log("Average marks:", student.getAverage());

// 6. Object iterate karo
console.log("\nAll properties:");
for(let key in student) {
    if(typeof student[key] !== 'function') {
        console.log(`${key}: ${student[key]}`);
    }
}