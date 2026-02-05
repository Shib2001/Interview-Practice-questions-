// remove duplication from an array 

const arr = [1,2,2,3,4,5,6,6,,8,99,34,34,34,5678,865];
const newArr = [...new Set(arr)];
console.log(newArr);

// Another method with filter

const arr2 = [1,2,2,3,4,5,6,6,,8,99,34,34,34,5678,865];

const newaar2 = arr2.filter((item,index)=>arr2.indexOf(item)===index);
console.log(newaar2);

// ____________________________________________________________________________________________________________________________________________________


// sort an array in ascending/descending order 



const newnum = num.sort((a,b)=>a-b);
console.log(newnum);


const newnum2= num.sort((a, b)=>b-a);
console.log(newnum2);

// ____________________________________________________________________________________________________________________________________________________


// Reverse a String


const str = "hello";

const reversed = str.split("").reverse().join("");

console.log(reversed);

//Using a loop 

function reversedString(str){
    let reversed = "";
    for(let i = str.length-1; i>=0; i--){
        reversed = reversed + str[i];
    }
    return reversed;
}

console.log(reversedString("hello"));





// ____________________________________________________________________________________________________________________________________________________


//  Reverse a number 


const num = 12345;

const reversedNum = Number(num.toString().split("").reverse().join(""));

console.log(reversedNum);


// using while lopp 

function reverseNumber(num) {
  let n = Math.abs(num);
  let reversed = 0;

  while (n > 0) {
    let digit = n % 10;
    reversed = reversed * 10 + digit;
    n = Math.floor(n / 10);
  }

  return num < 0 ? -reversed : reversed;
}

console.log(reverseNumber(12345));


//_____________________________________________________________________________________________________________________________________________________________________________


// odd or even 

const num1 = 10;

const result = num1 % 2 === 0 ? "Even" : "Odd";
console.log(result);

//____________________________________________________________________________________________________________________________________________________________________________________________


// palindrome or not 



function palin(num){
    const str= num.toString();
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}

console.log(palin(121));




//____________________________________________________________________________________________________________________________________________________________________________________________


//arthimetic ( +, -, *, / ) by a specific number on each values of arrays 

const num = [1,2,3,4,5];

const result = num.map((num)=>num*2);
console.log(result);



//____________________________________________________________________________________________________________________________________________________________________________________________

//Find Largest or smallest  Number in an Array

const num = [2,4,6,8,91,-340,56];

const largest = Math.max(...num);
const smallest = Math.min(...num);

console.log(largest,smallest);

//____________________________________________________________________________________________________________________________________________________________________________________________

// Find Frequency of Elements

const arr = [1, 2, 2, 3, 1, 4, 2,4,5,6,7,7,4,3,55,3,223,33,6,57,57,57,57,57,57];
const freq = {};

for (let i = 0; i < arr.length; i++) {
  const item = arr[i];
  freq[item] = (freq[item] || 0) + 1;
}

console.log(freq);

// | item | freq before | freq after                 |
// | ---- | ----------- | -------------------------- |
// | 1    | undefined   | `{1: 1}`                   |
// | 2    | undefined   | `{1: 1, 2: 1}`             |
// | 2    | 1           | `{1: 1, 2: 2}`             |
// | 3    | undefined   | `{1: 1, 2: 2, 3: 1}`       |
// | 1    | 1           | `{1: 2, 2: 2, 3: 1}`       |
// | 4    | undefined   | `{1: 2, 2: 2, 3: 1, 4: 1}` |
// | 2    | 2           | `{1: 2, 2: 3, 3: 1, 4: 1}` |


//____________________________________________________________________________________________________________________________________________________________________________________________

// Closures 

function outer(){
    let count = 0;

    function inner(){
        count++;
        console.log(count);
    }

    return inner;
}


const counter = outer();
counter();
counter();
counter();
counter();
counter();

//___________________________________________________________________________________________________________________________________________________________________________________________________________



// var 

function testVar() {
  if (true) {
    var x = 10;
  }
  console.log(x); // 10 (NOT block-scoped)
}
testVar();


// hoisting 

// console.log(a); // undefined
// var a = 5;

//______________________________________________________________________________________________________________________________________________________________________________________________________________________________

// let 

// function testLet() {
//   if (true) {
//     let y = 20;
//   }
//   console.log(y); because it's not inside the block 
// }


// TDZ here 


//______________________________________________________________________________________________________________________________________________________________________________________________________________________________

// const 

// const z = 30;
// z = 40; // ❌ Error

//object mutation allowed 
// const user = { name: "Shiv" };
// user.name = "Kumar"; // ✅ Allowed



//______________________________________________________________________________________________________________________________________________________________________________________________________________________________


const section = ["shiv", "jai", "kumar","hey","lookism","nuru"];

const reverse = section.reverse();
console.log(reverse);

// __________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

//filter method 


const num = [1,2,3,4,5,6,7,8,9,10];

const filtered = num.filter((num)=> num % 2 ===0 );
console.log(filtered);

//____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

//for each method 

const fruits = ["apple", "banana", "mango"];

fruits.forEach(fruit => {
  console.log(fruit);
});


//____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

//for loop



for (i=2;i<=20;i=i+2){
    console.log(i);
}

//____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

//ternary operator


const age = 35;

const ternary = age >= 18 ? "Eligible" : "Not Eligible";
console.log(ternary);

//____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

// math random digit genrator 

const random = Math.floor(1000000 + Math.random() * 9000000);
console.log(random);


//___________________________________________________________________________________________________________________________________________________________________________


// name is palindorme or not 

function isPalindrome(name) {
  return name === name.split('').reverse().join('');
}

// console.log(isPalindrome("madam")); // true
// console.log(isPalindrome("shiv"));  // false


// __________________________________________________________________________________________________________________________________________________________________________
// Check if the word is anagram or not 

function isAnagram(str1, str2) {
  const a = str1.toLowerCase().split("").sort().join("");
  const b = str2.toLowerCase().split("").sort().join("");

  return a === b;
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world")); 



// __________________________________________________________________________________________________________________________________________________________________________

// Merge two arrays

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const merged = [...arr1, ...arr2];
console.log(merged);


//_________________________________________________________________________________________________________________________________________________________________________________________

// Count vowels and consonants

function countVowelsConsonants(str) {
  let vowels = 0;
  let consonants = 0;

  const vowelSet = "aeiou";

  for (let char of str.toLowerCase()) {

    if (char >= 'a' && char <= 'z') {   // only letters
      if (vowelSet.includes(char)) {
        vowels++;
      } else {
        consonants++;
      }
    }

  }

  return { vowels, consonants };
}

console.log(countVowelsConsonants("Hello World 123"));



//_________________________________________________________________________________________________________________________________________________________________________________________


// Find second largest number in an array 

function findSecondLargest(arr) {
  const uniqueSorted = [...new Set(arr)].sort((a, b) => b - a);
  return uniqueSorted[1];
}

console.log(findSecondLargest([1, 2, 3, 4, 5])); // 4



//_________________________________________________________________________________________________________________________________________________________________________________________

// check if array is sorted or not 

function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(isSorted([1, 2, 3, 4, 5])); // true
console.log(isSorted([1, 3, 2, 4, 5])); // false


//_________________________________________________________________________________________________________________________________________________________________________________________

// find common elements between two arrays 

function findCommonElements(arr1, arr2) {
  const set1 = new Set(arr1);
  return arr2.filter(item => set1.has(item));
}

console.log(findCommonElements([1, 2, 3, 4, 5], [4, 5, 6, 7, 8])); // [4, 5]


//_________________________________________________________________________________________________________________________________________________________________________________________

// find the average of elements 

function Avg(arr){
    if(arr.length === 0 ) return 0;
    
    let sum = 0;
    for(let num of arr){
        sum = sum + num;
    }
    return sum / arr.length;

}

console.log(Avg([10, 20, 30, 40])); // 25


//_________________________________________________________________________________________________________________________________________________________________________________________
