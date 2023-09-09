//1. Write a code to display the multiplication table of a given integer.
const multi = 9, limit = 10;
let result = 0;

for(let i = 1; i <= limit; i++){
    result = multi * i;
    console.log(`9 x ${i} = ${result}`);
}

//2. Write a code to check whether a string is a palindrome or not
const string = "aPa";

let reverse = "";

console.log(string.substring(4,5))

console.log(string.length)

for(let i = string.length; i > 0; i--){
    reverse += string.substring(i-1,i);   
}

console.log(string.toLocaleLowerCase === reverse.toLocaleLowerCase ? "Palindrome" : "Not Palindrome")

//3. Write a code to convert centimeter to kilometer.
let cm = 100;

let convert = cm / 1000;

console.log(`${cm} cm = ${convert} km`)

//4. Write a code to format number as currency (IDR)
//Example : 1000 → “Rp. 1.000,00”
let curr = 1000000;

let format = curr.toLocaleString("id",{style:"currency", currency: "IDR"})

console.log(format)

//5. Write a code to remove the ﬁrst occurrence of a given “search string” from a string
//Example : string = “Hello world”, search string = “ell” → “Ho world”
let str = "Hello world", search = "ell";

let replace = str.replace(search,"");

console.log(replace)

//6. Write a code to capitalize the ﬁrst letter of each word in a string
//Example : “hello world” → “Hello World”
let input = "hello world", capitalize = "", counter = 0;

for(let i = 0; i < input.length; i++){
    if(i == 0) capitalize += input.charAt(i).toLocaleUpperCase();
    else if(input.charAt(i) == " ") {
        capitalize += input.charAt(i);
        counter = 1;   
        capitalize += input.charAt(i+1).toLocaleUpperCase();
    } 
    else capitalize += input.charAt(i+counter);
}

console.log(capitalize)


//7. Write a code to reverse a string.
let s = "Hello world", rev = "";

for(let i = s.length; i >= 0; i--){
    rev += s.charAt(i);
}
console.log(rev);

//8. Write a code to swap the case of each character from string
//      Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’
let word = "oXTaiL SoUp", swapCase = "";

console.log(word.charAt(0))

for(let i = 0; i < word.length; i++){
    word.charAt(i) == word.charAt(i).toLowerCase() ? swapCase += word.charAt(i).toUpperCase() : swapCase += word.charAt(i).toLowerCase();
}

console.log(swapCase)

//9. Write a code to ﬁnd the largest of two given integers
let int1 = 10, int2 = 20, largest = "";

int1 < int2 ? largest = `${int2} is largest than ${int1}` : largest = `${int1} is largest than ${int2}`;

console.log(largest)

//10. Write a conditional statement to sort three numbers
let num1 = 6, num2 = 4, num3 = 3, sort = "";

if(num1 < num2 && num1 < num3 && num2 < num3) sort = `${num1}, ${num2}, ${num3}`;
else if(num1 < num2 && num1 < num3 && num2 > num3) sort = `${num1}, ${num3}, ${num2}`;
else if(num2 < num1 && num2 < num3 && num1 < num3) sort = `${num2}, ${num1}, ${num3}`;
else if(num2 < num1 && num2 < num3 && num1 > num3) sort = `${num2}, ${num3}, ${num1}`;
else if(num3 < num1 && num3 < num2 && num1 < num2) sort = `${num3}, ${num1}, ${num2}`;
else sort = `${num3}, ${num2}, ${num1}`;

console.log(sort)

//11. Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type.
let input11 = false, dataType = 0;

if(typeof(input11) === typeof("a")) dataType = 1;
else if(typeof(input11) === typeof(1)) dataType = 2;
else dataType = 3;

console.log(dataType);

//12. Write a code to change every letter a into * from a string of input
//      Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y`
let letter = "An apple a day keeps the doctor away", output = "";

for(let i = 0; i < letter.length; i++) letter.charAt(i) === "a" || letter.charAt(i) === "A" ? output += "*" : output += letter.charAt(i);

console.log(output)