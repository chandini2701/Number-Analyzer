let num = 25;

console.log("Number Analyzer");
console.log("Number:", num);

// Check positive, negative, or zero
if (num > 0) {
  console.log("Type: Positive Number");
} else if (num < 0) {
  console.log("Type: Negative Number");
} else {
  console.log("Type: Zero");
}

// Check even or odd
if (num % 2 === 0) {
  console.log("Even or Odd: Even");
} else {
  console.log("Even or Odd: Odd");
}

// Check divisibility by 5
if (num % 5 === 0) {
  console.log("Divisible by 5: Yes");
} else {
  console.log("Divisible by 5: No");
}

// Calculate square
console.log("Square:", num * num);
