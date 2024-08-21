// object below and then log all of them


// Destructure the properties from the 'car'


    /*const car = {
        manufacture: "Nissan",
        model: "Skyline GT-R",
        country: "Japan",
        coupe: true,
    };

    const { manufacture, model, country, coupe } = car;

    console.log(car);*/


// Destructure the properties from the 'person'
/*const person = {
        firstName: "Kari",
        lastName: "Nordmann",
        isAdmin: false,
    };


const myArray = [230, 59, 390, 348, 1239];

console.log(myArray[2]);*/

// Destructure the first, second and fifth value from
// the array. You are free to call the variables whatever
// you would like. Once you have destructured the values,
// log the variables so you know that you have destructured
// them correctly.

/*const values = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const [firstValue, secondValue, , , fifthValue] = values;
console.log(firstValue, secondValue, fifthValue);*/


// Function to combine multiple arrays into one
function combineArrays(...arrays) {
    // The '...arrays' uses the Rest operator to collect all arguments into an array
	// 'arrays' is now an array of arrays
    //your code here

    // We use the Spread operator '...' to expand each inner array
	// Then, we use the Array.concat() method to combine them into a single array
    return [].concat(...arrays);
   
}


// Testing the function with different arrays

console.log(combineArrays([1, 2], [3, 4], [5, 6]));
// Expected output: [1, 2, 3, 4, 5, 6]

// Additional test with different types of elements
console.log(combineArrays(['Ola', 'Kari'], [true, false], [10, 20]));
// Expected output: ['Ola', 'Kari', true, false, 10, 20]

let myError = new Error("Something went wrong");

console.log(myError.name);
console.log(myError.message);