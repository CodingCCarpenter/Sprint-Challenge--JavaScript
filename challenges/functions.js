// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
let consume = (param1, param2, callback) => {
  return callback(param1, param2)
};

  // * Step 2: Create several functions to callback with consume();
  // * Create a function named add that returns the sum of two numbers
  const add = (num1, num2) => num1 + num2;
  // console.log(add(2,3));
  // * Create a function named multiply that returns the product of two numbers 
  const multiply = (num1, num2) =>  num1 * num2;
  // console.log(multiply(2, 3));
  // * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
const greeting = (firstName, lastName) => `Hello ${firstName} ${lastName}, nice to meet you!`

// console.log(greeting('Christine', 'Denton'));



/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2,2,add)); // 4
console.log(consume(10,16,multiply)); // 160
console.log(consume("Mary","Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation:  'nestedfunction()' can access the variable 'internal' because functions can reach outward to find information (but never inward). Since the variable 'internal' is outward from the nested function, it can access it.


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();