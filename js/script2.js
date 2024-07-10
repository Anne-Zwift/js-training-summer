//Question 1
//Create a function called printSeason that accepts one argument (has one parameter) called season.
//Inside the function log the value of the argument.
function printSeason(season) {
    console.log(season);
}

//Call the function and pass in the value "summer` as the argument.
printSeason("summer");


//Question 2
//Create a function called printNumbers that has two parameters, firstNumber and secondNumber.
//Inside the function log each value that is passed in.

//function printNumbers(firstNumber, secondNumber) {
    //console.log("First: " + firstNumber, "Second: " + secondNumber);
//}

//Call the function and pass in two numbers as the arguments.
//printNumbers(1, 2);


//Question 3
//Create a function called addNumbers that has three parameters.
//Inside the function add all the paramters and return the result.

function addNumbers(firstNumber, secondNumber, thirdNumber) {
    const result = firstNumber + secondNumber + thirdNumber;
    return result;
}

//Assign the result to a variable and assign the variable to the innerHTML property of the DOM element with the class of total.
const total = addNumbers(5, 10, 15);
const totalContainer = document.querySelector(".total");
totalContainer.innerHTML = total;


//Question 4
//Create a function called createGreeting that has one parameter.
//Inside the function add the value passed in to the string "Hello, my name is " and return the new string.

function createGreeting(name) {
    const greeting = "Hello, my name is " + name + ".";
    return greeting;
}

//Assign the returned value to the innerHTML property of the DOM element with the id of name.
const greeting = createGreeting("Anne");
const nameContainer = document.querySelector(".name");
nameContainer.innerHTML = greeting;


//Question 5
//Create a function called printListItems that has one parameter.
//Inside the function loop through the value passed in and log each item.

function printListItems(list) {
    for(let i = 0; i < list.length; i++) {
        console.log(list[i]);
    }
}
const sports = ["golf", "football", "cricket"];
//Call the function and pass the sports array in script.js in as the argument.
printListItems(sports);


//Question 6
//Create a function called createGames that has one parameter.
//Inside the function loop through the value passed in, create HTML for each property in each object and return the HTML.
//Provide a default value for the released property if it is missing.
//Assign the return value of the function to the innerHTML property of the DOM element with the class of game-container.



function createGames(gameList) {
    let html = "";

    for(let i = 0; i < gameList.length; i++) {
        
        let releaseYear = "Unknown year";

        if(gameList[i].released) {
            releaseYear = gameList[i].released;
        }
        
        html += `<div class="game">
        <h5>${gameList[i].name}</h5>
        <p>Released: ${releaseYear}</p>
        </div>`;
    }

    return html;
}

const games = [{
    name: "Starcraft 2",
    released: "2010",
},
{
    name: "Age of Empires II",
},
{
    name: "Cyberpunk 2077",
    released: 2020
}
   
];

const newHTML = createGames(games);

const gameContainer = document.querySelector(".game-container");
gameContainer.innerHTML = newHTML;


//DOM

const todo = document.todo;
const todoForm = document.forms.todo;

function addTodoItem(text) {
  const li = document.createElement('li');
  li.textContent = text;
  li.addEventListener('click', onTodoCompleted);
  todo.appendChild(li);
}

function onTodoCompleted(event) {
  alert("Well done!");
  event.target.removeEventListener('click', onTodoCompleted);
  element.target.textContent += ' (Completed)';
}

function onNewTodo(event) {
  event.preventDefault();
  const text = event.target.new.value;
  addTodoItem(text);
  todoForm.new.value = '';
}

todoForm.addEventListener('submit', onNewTodo);

//example of the onerror attribute of the img tag is used to execute a JavaScript alert. 
//const maliciousData = '<img src="httpｓ://picsum.photos/200/300" onerror="alert(\'Attack Simulation!\')" />';
//document.body.innerHTML = maliciousData;

