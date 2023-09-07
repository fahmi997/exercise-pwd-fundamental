// Exercise 1 : Memeriksa angka ganjil atau denap
let angka = 1;

if(angka % 2 === 0) console.log("genap")
else console.log("ganjil")

// Exercise 2 : Dapatkan nilai bulan dari date.getMonth() kemudian sebutkan nama bulannya
const getMonth = new Date("2023-12-06").getMonth();
console.log(getMonth)

switch(getMonth){
    case 0:
        console.log("January");
        break;
    case 1:
        console.log("February");
        break;
    case 2:
        console.log("March");
        break;
    case 3:
        console.log("April");
        break;
    case 4:
        console.log("May");
        break;
    case 5:
        console.log("June");
        break;
    case 6:
        console.log("July");
        break;
    case 7:
        console.log("August");
        break;
    case 8:
        console.log("September");
        break;
    case 9:
        console.log("October");
        break;
    case 10:
        console.log("November");
        break;
    case 11:
        console.log("Desember");
        break;
    default:
        console.log("ERROR");
        break;
        
}

//1.Write a code to convert celsius to fahrenheit
let celcius = 0;

let convert = (celcius * 9) / 5 + 32;

console.log(convert)

//2.Write a code to check whether the number is odd or even
let number = 1;

if(number % 2 === 0) console.log("even")
else console.log("odd")

//3.Write a code to check whether the number is prime number or not
let n = 5;

let isPrime = true;

if (n <= 1) isPrime = false;
else {
  for (let i = 2; i * i <= n; i++) {
    if (n % i == 0) isPrime = false;
  }
}

console.log(isPrime ? `${n} "is prime number"` : `${n} "is not prime number"`)

//4.Write a code to ﬁnd the sum of the numbers 1 to N
let num = 5;
let result = 0;

for(let i = 1; i <= num; i++){
    result += i;
}

console.log(result)

//5.Write a code to ﬁnd factorial of a number
let input = 5;
let factorial = 1;

for (let i = input; i > 0; i--) {
  factorial *= i;
}

console.log(factorial);

//6.Write a code to print the ﬁrst N ﬁbonacci numbers

let inputN = 7  , f1 = 0, f2 = 1, fibo = "";

if(inputN === 0) console.log(f1)
else if(inputN === 1) console.log(f2)
else{
    for(let i = 1; i < inputN; i++){
        fibo += `${f2},`; 
        let step = f1 + f2;
        f1 = f2;
        f2 = step;
        // console.log(f2)
    }
}

console.log(fibo)


/**
 * Pola 1
 * *#*
 * *#*
 * *#*
 */

let pola = 6, temp1 = "";

for(let i = 0; i < pola; i++){
    for(let j = 0; j < pola; j++){
        j % 2 == 0 ? temp1 += "*" : temp1 += "#";
    }
    temp1 += "\n";
};

console.log(temp1);

/**
 * Pola 2
 * 1
 * 001
 * 0001
 * 00001
 */

let x = 5, temp = "";

for(let i = 0; i < x; i++){
    for(let j = i; j > 0; j--){
        temp += "0";
    }
    temp += "1\n";
}

console.log(temp);