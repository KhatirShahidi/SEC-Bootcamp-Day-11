console.log("javascript loaded");

// LOOP INTRUCTIONS IN JAVASCRIPT

// Loop is a programming concept that repeats a sequence of instructions until a specific condition is met
// must have a starting point, a condition, and an increment or decrement
// iteration is the process of repeating a sequence of instructions

// 1. FOR LOOP
// for(starting point; condition; increment/decrement){}
// for (let i = 0; i < 3; i = i + 1) {
//   console.log(i);
// }

// get even number from 0 to 100
for (let i = 0; i < 100; i++) {
  if (i % 2 === 0) {
    // console.log(i);
  }
}

// ASSESSMENT LOOP

// 1. fizzbuzz (easiest)
// if the number is divisible by 3, console log fizz
// if the number is divisible by 5, console log buzz
// if the number is divisible by 3 and 5, console log fizzbuzz
// else console log the number
// example: 1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz
for (let i = 0; i < 100; i++) {
 if (i % 3 === 0 && i % 5 === 0) {
    // console.log("fizzbuzz");
  } else if (i % 3 === 0) {
    // console.log("fizz");
  } else if (i % 5 === 0) {
    // console.log("buzz");
  } else {
    // console.log(i);
  } 
}

// 2. straight triangle pattern (easy)
// *
// **
// ***
// ****
// *****
for (let i = 0; i < 100; i++) {
  if (i < 5) {
 console.log("*".repeat(i+1));
  }
}
// console.log("*");
// console.log("**");
// console.log("***");
// console.log("****");
// console.log("*****");
// console.log("******");

// 3. reverse triangle pattern (moderate)
// *****
// ****
// ***
// **
// *
for (let i = 0; i < 100; i++) {
  const numAsterisks = 5 - i;
  if (numAsterisks > 0) {
    console.log("*".repeat(numAsterisks));
  }
}

// console.log("*****");
// console.log("****");
// console.log("***");
// console.log("**");
// console.log("*");

// 4. christmas tree pattern (hard)
//     *
//    ***
//   *****
//  *******
// *********
for (let i = 0; i < 100; i++) {
  const spaces = " ".repeat(Math.max(0, 5 - i));
  const numAsterisks = 2 * i + 1;
  if (numAsterisks > 9) {
    break;
  }
  console.log(spaces + "*".repeat(numAsterisks));
}

// 5. diamond pattern (hard)
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
for (let i = 0; i < 5; i++) { // Loop for top half 
  const spaces = " ".repeat(Math.max(0, 5 - i));
  const numAsterisks = 2 * i + 1;
  console.log(spaces + "*".repeat(numAsterisks));
}

for (let i = 4; i >= 0; i--) { // Loop for bottom half (reversed)
  const spaces = " ".repeat(Math.max(0, 5 - i));
  const numAsterisks = 2 * i + 1;
  console.log(spaces + "*".repeat(numAsterisks));
}