// ! 1. Create a function that calculates the sum of two given numbers.
//! Input: 3, 5  Output: 8

// function sum(x,y){
//     return x+y;
// }
// num1=prompt("enter num1 = ");
// num2=prompt("enter num2 = ");
// console.log(sum(+num1,+num2));

// ! 2. Write a function that checks if a number is prime (a number that can only be divided
// ! by 1 and itself without any remainder).
// ! Input: 7 Output: true

// function prime(n){
//     is_prime=true;
//     if(n==0 || n==1){
//         is_prime=false;
//     }
//     for(i=2;i<=n/2;i++){
//         if(n%i==0){
//             is_prime=false;
//             break;
//         }
//     }
//     if(is_prime){
//         console.log("True")
//     }
//     else{
//         console.log("False");
//     }

// }
// num1=prompt("enter the num is prime or not");
// prime(+num1);

// ! 3. Write a function to reverse a given string (using built in method).
// ! Input: "hello" Output: "olleh"

// function Reverse(word){
//     return word.split('').reverse().join('');
// }
// var text = prompt("enter the text to reverse = ");
// console.log(Reverse(text));

// ! 4. Write a function to find the largest number in an array.
// !Input: [1, 3, 7, 2, 4] Output: 7

// function Large(arr){
//     return Math.max(...arr);
// }
// var numbers  =[1,2,3,7,2,4];
// console.log(Large(numbers));

// ! 5. Write a function that filters an array and returns only the even numbers.
// ! Input: [1, 2, 3, 4, 5, 6] Output: [2, 4, 6]

// function Filter(arr){
//     return arr.filter(function(number) {
//         return number % 2 === 0; // Check if the number is even
//     });
// }
// var numbers = [1, 2, 3, 4, 5, 6];
// console.log(Filter(numbers));

// ! 6. Implement a function to reverse a string without using the built-in reverse() method.
// !Input: "route" Output: "etuor"

// function reverseString(word) {
//     let reversed = '';
//     for (let i = word.length - 1; i >= 0; i--) {
//         reversed += word[i];
//     }
//     return reversed;
// }

// var input = prompt("enter the text to reverse = ");
// console.log( reverseString(input));

// ! 7. Write a function to calculate the average value of all numbers in an array.
// ! Input: [1, 2, 3, 4, 5] Output: 3

// var arr1 = [1, 2, 3, 4, 5];
// let sum = 0;
// for (var i = 0; i < arr1.length; i++) {
//     sum += arr1[i];
// }
// console.log("Average = ", sum / arr1.length);

//! 8. Write a function that determines whether a given day number (1-7) represents a weekday or weekend.
//! Input: 5 Output: "Weekday" Input: 7 Output: "Weekend"

// function determines(num){
//     if(num==7){
//         console.log("Weekend");
//     }
//     else if(num>7){
//         console.log("sorry enter num from 1 to 7");
//     }
//     else{
//         console.log("Weekday");
//     }
// }
// num = prompt("enter the day number");
// determines(num);

//! 9. Write a function that filters an array of numbers and returns only those that are divisible by 2 or 3.
//! Input: [1, 2, 3, 4, 5, 6, 7, 8, 9] Output: [2, 3, 4, 6, 8, 9]

// function FilterDivisible(arr){
//     return arr.filter(num=>num%2===0 || num%3===0);
// }
// const array=[1, 2, 3, 4, 5, 6, 7, 8, 9];
// const result= FilterDivisible(array);
// console.log("result = ", result);

// ! 10. Write a function that finds the index of a given element in an array. If the element isn't found, return `-1`.
// ! Input: [1, 2, 3, 4, 5], 3 Output: 2
// ! Input: [1, 2, 3, 4, 5], 10 Output: -1

// function IndexArray(arr, num) {
//     const index = arr.indexOf(num);
//     return index !== -1 ? index : -1;
// }
// const input = [1, 2, 3, 4, 5];
// console.log(IndexArray(input, 3));
// console.log(IndexArray(input, 10));

// ! 11. Write a function to calculate the factorial of a given number.
// ! Input: 5 Output: 120

// function factorial (n){
//     if (n == 0 ){
//         return 1;
//     }
//     let result =1;
//     for (let i=1 ; i<=n;i++){
//         result *=i;
//     }
//     return result;
// }

// let num =prompt("enter num to calculate factorial = ");
// console.log(factorial(num));

// ! 12. Write a function that takes an object and returns an array containing only its keys.
// ! Input: {name: "John", age: 30} Output: ["name", "age"]

// function GetKey(obj){
//     return Object.keys(obj);
// }
// const person={name: "John", age: 30};
// const result= GetKey(person);
// console.log(result);

// ! 13. Write a function that returns only the unique numbers from an array.
// ! Input: [1, 2, 2, 3, 4, 4, 5] Output: [1, 3, 5]

// function UniqueNumbers(arr) {
//     return arr.filter(
//         (num, index, array) => array.indexOf(num) === array.lastIndexOf(num)
//     );
// }
// const numbers = [1, 2, 2, 3, 4, 4, 5];
// const result = UniqueNumbers(numbers);
// console.log(result);

// ! 14. Write a function to count the occurrences of each character in a string.
// ! Input: "hello" Output: {h: 1, e: 1, l: 2, o: 1}

// function CountChar (word){
//     const charCount={};
//     for (let char of word){
//         charCount[char]=charCount[char] ? charCount[char]+ 1 : 1;
//     }
//     return charCount;
// }
// const word =prompt("please enter text");
// const result = CountChar(word);
// console.log(result);

// ! 15. Write a function that sorts an array of numbers in ascending order.
// ! Input: [5, 3, 8, 1, 2] Output: [1, 2, 3, 5, 8]

// function SortArray(arr){
//     return arr.sort();
// }
// const numbers=[5, 3, 8, 1, 2];
// const result = SortArray(numbers);
// console.log(result);

// ! 16. Write a function to check if a given string is an anagram of another string (i.e., contains
// ! the same characters in a different order).
// ! Input: "listen", "silent" Output: true

// function Anagrams(str1, str2) {
//     if (str1.length !== str2.length) {
//         return false;
//     }
//     const sortStr1 = str1.split("").sort().join("");
//     const sortStr2 = str2.split("").sort().join("");
//     return sortStr1 === sortStr2;
// }
// const str1= prompt("enter text 1 : ");
// const str2= prompt("enter text 2 : ");
// console.log(Anagrams(str1,str2));

// ! 17. Write a function that removes all falsy values (`false`, `null`, `0`, `""`, `undefined`, and `NaN`) from an array.
// ! Input: [0, false, "Hello", "", null, undefined, NaN, 42] Output: ["Hello", 42]

// function RemovesValues(arr){
//     return arr.filter(Boolean);
// }
// const numbers =[0, false, "Hello", "", null, undefined, NaN, 42];
// const result = RemovesValues(numbers);
// console.log(result);

// ! 18. Write a function that creates a car object with properties such as `model` and `year’
// ! and includes a method to display the car's details.
// ! Input: Toyota, 2020 Output: "Model: Toyota, Year: 2020"

// function createCar(model, year) {
//     return {
//     model: model,
//     year: year,
//     displayDetails: function() {
//         return `Model: ${this.model}, Year: ${this.year}`;
//     }
//     };
// }
// const car = createCar("Toyota", 2020);
// console.log(car.displayDetails());

// ! 19. Write a function that checks if a given object contains a specific property.
// ! Input: {name: "Alice", age: 25}, "name" Output: true
// ! Input: {name: "Alice", age: 25}, "address" Output: false

// function Property(obj, prop) {
//     return obj.hasOwnProperty(prop);
// }
// console.log(Property({name: "Alice", age: 25}, "name"));
// console.log(Property({name: "Alice", age: 25}, "address"));

// ! 20. Write a function to count the number of vowels (a, e, i, o, u) in a string, regardless of case.
// ! Input: "Hello World" Output: 3

// function countVowels(str) {
//         const vowels = "aeiouAEIOU";
//         let count = 0;
//         for (let char of str) {
//         if (vowels.includes(char)) {
//             count++;
//         }
//         }
//         return count;
// }
// console.log(countVowels("Hello World"));

// ! 21. Write a function that splits a string into an array of words based on spaces.
// ! Input: "The quick brown fox" Output: ["The", "quick", "brown", "fox"]

// function splitIntoWords(str) {
//     return str.split(' ');
//   }
//   console.log(splitIntoWords("The quick brown fox"));

// ! 22. Write a function that performs a mathematical operation (`+`, `-`, `*`, `/`) on two numbers.
// ! Input: 5, 3, "+" Output: 8
// ! Input: 5, 3, "%" Output: "Invalid operator"

// function calculate(num1, num2, operator) {
//   switch (operator) {
//     case "+":
//       return num1 + num2;
//     case "-":
//       return num1 - num2;
//     case "*":
//       return num1 * num2;
//     case "/":
//       return num1 / num2;
//     default:
//       return "Invalid operator";
//   }
// }
// console.log(calculate(5, 3, "+"));
// console.log(calculate(5, 3, "%"));
