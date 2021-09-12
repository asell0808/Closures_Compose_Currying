// Advanced Functions
const first = () =>{
    const greet = 'Hi';
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

// Closures - a function ran. the funtion executed. It is never going to be ran again
// BUT it is going to remember that there are references to those variables,
// so the child scope always has access to the parent scope but not the other way around.

// Currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5);

// Compose
// the act of putting two functions together, to form a third function
//where the output of one function, is the input of the other
const compose = (f, g) => (a) => f(g(a));

const sum =(num) => num + 1;

compose (sum, sum)(5);
// the answer is 7 because the a function runs once and you get 5, 
// then sum runs and you get 6,
// and then the sum funtion runs again, giving you 7.

// Closures, Currying, and Compose are advanced function topics 
// that are used in the industry and frameworks

// Ultimately, you want to create functions that have no side effects,
//  and have functional purity

//-----------------------
// Exercises
//-----------------------

//Solve these problems:

//#1 Create a one line function that adds adds two parameters
const sum = (a, b) => a + b;

//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3)// returns 13

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)// returns 31


//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)// returns  17

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)// returns 16

//What are the two elements of a pure function?
//1. Deterministic --> always produces the same results given the same inputs
//2. No Side Effects -->  It does not depend on any state, or data, 
// change during a program’s execution. It must only depend on its input elements.
