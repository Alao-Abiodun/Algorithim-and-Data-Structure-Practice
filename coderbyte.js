// Task 1
// const obj = {
//   name: { first: "Robert", middle: "", last: "Smith" },
//   age: 25,
//   DOB: "-",
//   hobbies: ["running", "coding", "-"],
//   education: { highschool: "N/A", college: "Yale" },
// };

// const cleanUp = (obj) => {
//   for (let key in obj) {
//     if (obj[key] === "-" || obj[key] === "" || obj[key] === "N/A") {
//       delete obj[key];
//     }
//     if (typeof obj[key] === "object") {
//       for (let item in obj[key]) {
//         if (
//           obj[key][item] === "-" ||
//           obj[key][item] === "" ||
//           obj[key][item] === "N/A"
//         ) {
//           delete obj[key][item];
//         }
//       }
//       if (Array.isArray(obj[key])) {
//         // console.log(obj[key]);
//         obj[key] = obj[key].filter((item) => item);
//       }
//     }
//   }
//   return obj;
// };

// console.log(cleanUp(obj));

// // Task 2`

// // str is "2.36"
// // "full full half empty empty".

// const starRating = (rate) => {
//   const splitted = rate.toString().split(".");
//   const mainNum = Number(splitted[0]);
//   const subNum = Number(splitted[1]);
//   let str = "";
//   if (Number(mainNum) === 0 && subNum > 00) str += "half";
//   else {
//     str += "full ".repeat(mainNum);
//     if (subNum > 00) {
//       str += "half";
//     } else str += "empty";
//   }
//   let arr = str.split(" ");
//   if (arr.length < 5) {
//     arr[4] = "empty";
//     arr = [...arr.fill("empty", mainNum + 1, 4)];
//   }
//   console.log(arr.join(" "));
// };

// starRating("5");

// // Swap Case
// // Have the function SwapCase(str) take the str parameter and swap the case of each character.
// // For example: if str is "Hello World" the output should be hELLO wORLD. Let numbers and symbols stay the way they are.
// // Input: "Hello-LOL"
// // Output: hELLO-lol
// // Input: "Sup DUDE!!?"
// // Output: sUP dude!!?

// const swapCase = (letters) => {
//   let swapped = "";
//   for (let i = 0; i < letters.length; i++) {
//     if (letters[i] === letters[i].toLowerCase()) {
//       swapped += letters[i].toUpperCase();
//     } else {
//       swapped += letters[i].toLowerCase();
//     }
//   }
//   console.log(swapped);
//   return swapped;
// };
// swapCase("Hello-LOL");
// swapCase("Sup DUDE!!?");
// // o(1)

// // Array Addition
// // Have the function ArrayAddition(arr) take the array of numbers stored in arr and return the string true if any combination of numbers in the array (excluding the largest number) can be added up to equal the largest number in the array, otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the same elements, and may contain negative numbers.
// // Input: [5,7,16,1,2]
// // Output: false
// // Input: [3,5,-1,8,12]
// // Output: true
// const ArrayAddition = (arr) => {
//   arr.sort(function (a, b) {
//     return b - a;
//   });
//   var largest = arr.shift();
//   console.log("largest", largest);

//   const test = (a) => {
//     var sum = a.reduce(function (a, b) {
//       return a + b;
//     }, 0);
//     if (sum == largest) {
//       return true;
//     } else {
//       for (var i = 0; i < a.length; i++) {
//         var newArr = a.slice();
//         newArr.splice(i, 1);
//         if (test(newArr)) {
//           return true;
//         }
//       }
//       return false;
//     }
//   };

//   console.log(test(arr));
//   return test(arr);
// };

// // ArrayAddition([3, 5, -1, 8, 12]);
// ArrayAddition([5, 7, 16, 1, 2]);

// QUESTION 1
// A function takes a str with set of character pairs seperated by commas,
// and each pair is seperated by '-', e.g "5-5,5-5,4-4,5-5,5-5,5-5,5-5,4-4"

// A matching pair is when the ending character of a pair is same as the beginning character of the next pair.

// Find the longest occuring matching pair in the input string.
// If no matching pair exists, return 1

// const longestMatchingPair = (str) => {
//   let arr = str.split(",");
//   console.log(arr);

//   let solution = 0;
//   let count = 1;

//   if (arr.length <= 1) return 1;

//   for (let i = 0; i < arr.length - 1; i++) {
//     console.log(arr[i][2]);
//     console.log(arr[i + 1][0]);
//     if (arr[i][2] === arr[i + 1][0]) {
//       count++;
//       console.log("count:", count);
//     } else {
//       solution = count > solution ? count : solution;
//       count = 1;
//     }
//   }

//   solution = count > solution ? count : solution;
//   // console.log("result:", solution || 1);
//   return solution || 1;
// };

// // console.log("result:", longestMatchingPair("6-3"));
// console.log("result:", longestMatchingPair("1-2,1-2"));
// console.log("result:", longestMatchingPair("1-1,3-5,5-2,2-3,2-4"));
// console.log("result:", longestMatchingPair("5-5,5-5,4-4,5-5,5-5,5-5,5-5,5-5"));

// QUESTION 2

// A function takes an input string, S and a number N,
// The string contains a mix patterns of '+' and '-',
// e.g: "++--++-++--+++++-----+++--++--++-++++"

// Subtracting the total number of '-' from total number of '+' gives the Balance

// You can modify the string by removing characters from the rightmost part of the string.

// Return the minimum number of modification that can be done to the string to have a Balance
// that is greater than or equal to N.

// Given an array arr[] of size N containing elements from 0 to N - 1.
// Find the position after exactly K jumps from index 0 where the jump from ith index sends to arr[i] index.

// const findPosition = (arr, K) => {
//   let currPos = 0;

//   while (K > 0) {
//     currPos = arr[currPos];
//     K--;
//   }

//   return currPos;
// };

// console.log(findPosition([2, 0, 1], 2));

// QUESTION 3
// function compareTriplets(a, b) {
//   let alice = 0;
//   let bob = 0;
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] > b[i]) {
//       alice++;
//     } else if (a[i] < b[i]) {
//       bob++;
//     }
//   }
//   return [alice, bob];
// }
// // O(n);

// // const a = [1, 2, 3];
// // const b = [3, 2, 1];

// // const a = [5, 6, 7];
// // const b = [3, 6, 10];

// const a = [17, 28, 30];
// const b = [99, 16, 8];

// console.log(compareTriplets(a, b));

// function aVeryBigSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// const arr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
// console.log(aVeryBigSum(arr));

// function diagonalDifference(a) {
//   let left = 0;
//   let right = 0;
//   for (let i = 0; i < a.length; i++) {
//     left += a[i][i];
//     right += a[i][a.length - i - 1];
//   }
//   return Math.abs(left - right);
// }

// // const arr = [
// //   [1, 2, 3],
// //   [4, 5, 6],
// //   [9, 8, 9],
// // ];

// const arr = [
//   [11, 2, 4],
//   [4, 5, 6],
//   [10, 8, -12],
// ];

// console.log(diagonalDifference(arr));

// function plusMinus(arr) {
//   let pos = 0;
//   let neg = 0;
//   let zero = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       pos++;
//     } else if (arr[i] < 0) {
//       neg++;
//     } else {
//       zero++;
//     }
//   }
//   // format result into 6 decimal numbers places and into new line
//   return (
//     (pos / arr.length).toFixed(6) +
//     "\n" +
//     (neg / arr.length).toFixed(6) +
//     "\n" +
//     (zero / arr.length).toFixed(6)
//   );
// }

// const arr = [-4, 3, -9, 0, 4, 1];
// console.log(plusMinus(arr));

// function staircase(n) {
//   let str = "";
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (j < n - i - 1) {
//         str += " ";
//       } else {
//         str += "#";
//       }
//     }
//     str += "\n";
//   }
//   return str;
// }

// function staircase(n) {
//   let i;
//   for (i = 0; i < n; i++) {
//     // use the repeat function
//     console.log(" ".repeat(n - i - 1) + "#".repeat(i + 1));
//   }
// }

// staircase(6);

// let pattern1 = () => {
//   for (x = 0; x < 7; x++) {
//     console.log("#".repeat(x + 1));
//   }
// };
// pattern1()

// function to find minimum and maximum values of exactly 4 integers out 5 integers in an array
// function miniMaxSum(arr) {
//   let min = 0;
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     // find the total minimum and maximum value of each element except 1
//     let total = 0;
//     for (let j = 0; j < arr.length; j++) {
//       if (j !== i) {
//         total += arr[j];
//       }
//     }
//     // compare the total with the minimum and maximum value
//     if (i === 0) {
//       min = total;
//       max = total;
//     } else {
//       if (total < min) {
//         min = total;
//       } else if (total > max) {
//         max = total;
//       }
//     }
//   }
//   console.log(min + " " + max);
// }

// const arr1 = [1, 3, 5, 7, 9];
// const arr2 = [1, 2, 3, 4, 5];
// miniMaxSum(arr1);
// miniMaxSum(arr2);

// write a function to compute  term of a productnacci sequence is computed as Pn = (Pn-1) * (Pn-2) mod X for all n >= 2The mod operation returns the remainder or signed remainder of a division, after one number is divided by another. Reference: Modulo_operation.
// Given four integers P0, P1 , n, and, X can you find the term of the productnacci sequence? In other words find the term of the productnacci sequence that is equal to .
// write a function to compute  term of a productnacci sequence is computed as Pn = (Pn-1) * (Pn-2) mod X for all n >= 2
// The mod operation returns the remainder or signed remainder of a division, after one number is divided by another. Reference: Modulo_operation.

// function to perform a productnacci sequence computed as Pn (Pn-1) * (Pn-2) mod X for all n >= 2 using recursion techniques given input 11, 11, 1, 997 and output should be 12

// create function to compute productnacci sequence computed as Pn = (Pn-1) * (Pn-2) mod X for all n >= 2 using recursion techniques given input 11, 11, 1, 997 and output should be 12
// function productnacci(P0, P1, n, X) {
//   if (n === 1) {
//     return P0;
//   } else {
//     return (P1 * productnacci(P0, P1, n - 1, X)) % X;
//   }
// }

// // console.log(productnacci(2, 3, 5, 10));
// // console.log(productnacci(11, 12, 0, 997));
// console.log(productnacci(11, 12, 1, 997));

// // write a function to print YES or NO when Alice find Bob 2D array of integers, if Alice and Bob are in the same row or column then print YES otherwise print NO.

// // write a function to print YES or NO when Alice find Bob 2D array of integers, if Alice and Bob are in the
// // same row or column then print YES otherwise print NO.
// function findBob(arr) {
//   let alice = 0;
//   let bob = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       if (arr[i][j] === 1) {
//         alice++;
//       } else if (arr[i][j] === 2) {
//         bob++;
//       }
//     }
//   }
//   if (alice === bob) {
//     return "YES";
//   } else {
//     return "NO";
//   }
// }

// Write a function to determing counts of even numbers in an array of integers.
// function countEvens(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countEvens([1, 3, 5, 6, 7, 8, 9, 10]));

// find the target value in an array given arr and target value as a parameter.

// const findTargetValues = (arr, target) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       return arr.indexOf(arr[i]);
//     }
//   }
//   return "No Target value Found!";
// };

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(findTargetValues(numbers, 12));
// console.log(findTargetValues(numbers, 8));
// console.log(findTargetValues(numbers, 6));
// console.log(findTargetValues(numbers, 11));
// console.log(findTargetValues(numbers, 0));

// const binarySearch = (arr, target) => {
//   let start = 0;
//   let end = arr.length - 1;
//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2);
//     if (arr[mid] === target) {
//       return mid;
//     } else if (arr[mid] < target) {
//       start = mid + 1;
//     } else {
//       end = mid - 1;
//     }
//   }
//   return -1;
// };

// write a binary search function in recursive way
// function binarySearch(arr, target, start, end) {
//   if (start > end) {
//     return -1;
//   }
//   let mid = Math.floor((start + end) / 2);
//   if (arr[mid] === target) {
//     return mid;
//   } else if (arr[mid] < target) {
//     return binarySearch(arr, target, mid + 1, end);
//   } else {
//     return binarySearch(arr, target, start, mid - 1);
//   }
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(binarySearch(numbers, 12));
// console.log(binarySearch(numbers, 8));
// console.log(binarySearch(numbers, 6));

// const findSmallest = (arr) => {
//   let smallest = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//       smallest = arr[i];
//     }
//   }
//   return smallest;
// }

// const findLargest = arr => {
//   let largest = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }
//   return largest;
// }

// const selectionSort = (arr) => {
//   let newArr = [];
//   while (arr.length > 0) {
//     let smallest = findLargest(arr);
//     newArr.push(smallest);
//     arr.splice(arr.indexOf(smallest), 1);
//   }
//   return newArr;
// }

// console.log(selectionSort([5, 3, 6, 2, 10]));

function countdown(n) {
  if (n <= 0) {
    return;
  }
  console.log(n);
  countdown(n - 1);
}

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

countdown(6);
