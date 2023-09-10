/**
 * 1. Create a function that can create a triangle pattern according to the height we provide like the following :
 * 
 * 01
 * 02 03
 * 04 05 06
 * 07 08 09 10
 * 
 * Parameters : height → triangle height
 */
const trianglePattern = function(number){
    let pattern = "", count = 1;

    for(let i = 0; i < number; i++){
        for(let j = i; j > 0; j--){
            count < 10 ? pattern += `0${count} ` : pattern += `${count} `;
            count++;
        }
        count < 10 ? pattern += `0${count}\n` : pattern += `${count}\n`;
        count++;
    }
    return pattern;
}

let triangle = trianglePattern(4);
console.log(triangle);

/**
 * 2. Create a function that can loop the number of times according to the input we provide, and will replace multiples of 3 
 * with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz".
 * 
 * Parameters : n → total looping
 */
function fizzBuzz(number){
    
    let result = "";

    for(let i = 1; i <= number; i++){
        if(i % 3 === 0 && i % 5 === 0) result += `FizzBuzz `;
        else if(i % 3 === 0) result += `Fizz `;
        else if(i % 5 === 0) result += `Buzz `;
        else result += `${i} `;
    }
    return result;
}

let fizz = fizzBuzz(15);

console.log(fizz);


/**
 * 3. Create a function to calculate Body Mass Index (BMI)
 * Formula : BMI = weight (kg) / (height (meter))²
 * Parameters : weight & height
 * Return values :
 * => < 18.5 return “less weight”
 * => 18.5 - 24.9 return “ideal”
 * => 25.0 - 29.9 return “overweight”
 * => 30.0 - 39.9 return “very overweight”
 * => > 39.9 return “obesity”
 */
function bmi(weight, height){
    let BMI = weight / (height * height);

    if(BMI < 18.5) return "less weight";
    else if(BMI >= 18.5 && BMI <= 24.9) return "ideal";
    else if(BMI >= 25 && BMI <= 29.9) return "overweight";
    else if(BMI >= 30 && BMI <= 39.9) return "very overweight";
    else return "obesity";
}

let body = bmi(80,1.9);

console.log(body);


// 4. Write a function to remove all odd numbers in an array and return a new array that contains even numbers only

let number = [3, 2, 4, 5, 1, 7, 12, 22];

function evenNumber(number){
    let even = [], x = 0;
    
    for(let i = 0; i < number.length; i++){
        if(number[i] % 2 == 0){
            even[x] = number[i]; //return a new array that contains even numbers only
            x++;
        }else{
            number.splice(i,1); //remove all odd numbers in an array
            i--;
        }
    }

    return even;
}

console.log(number)
console.log(evenNumber(number));
console.log(number)

/**
 * 5. Write a function to split a string and convert it into an array of words
 *      Example : “Hello World” → [“Hello”, “World”]
 */

const split = (string) => string.split(" ");

let words = split("hello world");
console.log(words);