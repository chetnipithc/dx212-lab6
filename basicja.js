// this is lab 5 in lab6 folder

let name = "peter";
let age = 20;
let graduated = true;
let gpa = 3.75;

let student1 = {
name:"Manee",
age: 19,
graduated: false,
gpa: 2.65
};

let student2 = {
name:name,
age: age,
graduated: graduated,
gpa: gpa
};
console.log(student1.name);
console.log(student2);

let grade = ["A", "B", "C", "D", "F"];
let score = [90, 80, 70, 60, 50];
let student = [student1, student2];
console.log(student[1].gpa);
function calculateGrade(scoreValue) {
    if (scoreValue >= 90) {
        return "A";
    } else if (scoreValue >= 80) {
        return "B";
    } else if (scoreValue >= 70) {
        return "C";
    } else if (scoreValue >= 60) {
        return "D";
    } else {
        return "F";
    }
}
console.log(calculateGrade(90));


for (let i = 0; i < score.length; i++) {
    console.log(calculateGrade(score[i]));
}   