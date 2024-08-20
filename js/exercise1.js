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

const values = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const [firstValue, secondValue, , , fifthValue] = values;
console.log(firstValue, secondValue, fifthValue);




