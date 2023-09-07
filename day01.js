//1. Write a code to ﬁnd area of rectangle
//INPUT: length, width
let length = 2;
let width = 3;

//PROCESS
let area = length * width;

//OUTPUT
console.log("Area = ", area);

//2. Write a code to ﬁnd perimeter of rectangle
//INPUT
let Length = 5;
let Width = 10;

//PROCESS
let Perimeter = 2 * (Length + Width);

//OUTPUT
console.log("Perimeter = ", Perimeter);

//3. Write a code to ﬁnd diameter, circumference and area of a circle
//INPUT
let radius = 7;
const PI = Math.PI;

//PROCESS
/**
 * FORMULA:
 * Diameter = 2 x radius
 * Circumference = 2 x phi x radius
 * Area = phi x radius x radius
 */

let diameter = 2 * radius;
let circumference = 2 * PI * radius;
let areaCircle = PI * Math.pow(radius, 2);

//OUTPUT
console.log("Diameter of Circle >> ", diameter);
console.log("Circumference of Circle >> ", circumference);
console.log("Area of Circle >> ", areaCircle);

//4. Write a code to ﬁnd angles of triangle if two angles are given
//INPUT
let anglesA = 90;
let anglesB = 30;

//PROCESS
let angles = 180 - anglesA - anglesB;

//OUTPUT
console.log("Angles >> ", angles);

//5. Write a code to get difference between dates in days
//INPUT
let dateA = new Date("9/10/2023");
let dateB = new Date("10/10/2023");

//PROCESS
let diffDay = Math.abs((dateA - dateB) / 1000 / 60 / 60 / 24);

//OUTPUT
console.log("Difference day between ", dateA, "and ", dateB, "is ", diffDay, "Day");

//6. Write a code to convert days to years, months and days
//INPUT
let days = 395;

//PROCESS
let years = parseInt(days / 365);
let months = parseInt(days / 30);
let totalMonth = months - years * 12;
let totalDay = days - (years * 365 + totalMonth * 30);

//OUTPUT
console.log(`${days} "Days = " ${years} "year" ${totalMonth} "months" ${totalDay} "Days"`);
