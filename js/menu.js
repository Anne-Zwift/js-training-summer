function onSubmit(event) {
    // Prevent the default form submission
    event.preventDefault();
    // Get the form data
    const formData = new FormData(event.target);
    // Convert the form data into an object
    const data = Object.fromEntries(formData.entries());
    // Calculate the total price
    const sidesArray = formData.getAll("side");
    // Convert the array of strings into an array of numbers
    const sides = sidesArray.reduce((total, price) => {
      return total + Number(price);
    }, 0);
    // Add the total price to the data object
    data.sides = sides;
  
    // Calculate the total price
    const total = Object.values(data).reduce((total, price) => {
      return total + Number(price);
    }, 0);
  
    // Display the total price
    alert(`Your total is $${total.toFixed(2)}`);
  }

function onSelectDiet(event) {
    // Get the value of the selected option
    const { value } = event.target;
    
    // Find all the inputs
    document.forms.menu.querySelectorAll('input').forEach((element) => {
      // If the user has selected a diet
      if (value) {
        // Disable the input if it doesn't have the correct data attribute
        element.disabled = element.dataset[value] === undefined;
      } else {
        // Enable all the inputs
        element.disabled = false;
      }
    })
  }

// Listen for the form submission
document.forms.menu.addEventListener("submit", onSubmit)
// Listen for the diet selection
document.querySelector("select#diet").addEventListener("change", onSelectDiet)

/*function calculateSum(a, b) {
    return a + b;
}

/*console.log('start');
console.log(calculateSum(2, 3));
console.log('end');*/

/*console.log('start');

setTimeout(() => {
    console.log('Inside timeout');
}, 2000);

console.log('end');*/

/*function greeting(name) {
    alert('Hello ' + name + '!' + ' welcome');
}

/*function processUserInput(callback) {
    let name = prompt('Please enter your name.');
    callback(name);
}*/

function delayGreeting() {
    console.log('Hello, after 2 seconds');
}

setTimeout(delayGreeting, 2000);
/*processUserInput(greeting);*/

