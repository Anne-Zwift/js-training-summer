//let db;
//const request = window.indexedDB.open("My TestDatabase"),

//request.onerror = function(event) {

//};

//request.onsuccess = function(event) {
    //db = event.target.result;
//};

/*const customerData = [
    {id: "444-44-4444", name: "Ola", age: 35, email: "ola@example.com"},
    {id: "555-55-5555", name: "Kari", age: 32, email: "kari@example.com"}
];*/

//const transaction = db.transaction(["customers"], "readwrite");

/*transaction.oncomplete = function(event) {
    console.log("All done!");
};*/

/*transaction.onerror = function(event) {
};*/

/*const objectStore = transaction.objectStore("customers");
customerData.forEach(function(customer){
    objectStore.add(customer);
});*/

//const transaction = db.transaction(["customers"]);
//const objectStore = transaction.objectStore("customers");
//const request = objectStore.get("444-44-4444");

/*request.onerror = function(event) {

};*/

//request.onsuccess = function(event) {

//};

// Step 1: Open a database
let db;
const request = indexedDB.open("todoList", 1);

request.onupgradeneeded = function(event) {
  db = event.target.result;
  const objectStore = db.createObjectStore("tasks", { keyPath: "id" });
};

request.onsuccess = function(event) {
  db = event.target.result;
};

// Step 2: Function to add tasks
function addTask(id, task) {
  const transaction = db.transaction(["tasks"], "readwrite");
  transaction.objectStore("tasks").add({ id: id, task: task });
}

// Step 3: Function to display tasks
function displayTasks() {
  const objectStore = db.transaction("tasks").objectStore("tasks");
  objectStore.openCursor().onsuccess = function(event) {
    const cursor = event.target.result;
    if (cursor) {
      console.log("Task ID: " + cursor.key + ", Task: " + cursor.value.task);
      cursor.continue();
    }
  };
}

//Step 4: Function to delete tasks
function deleteTask(id) {
  const request = db.transaction(["tasks"], "readwrite")
                    .objectStore("tasks")
                    .delete(id);
  request.onsuccess = function(event) {
    console.log("Task deleted");
  };
}

//Getting Current Epoch Time
const currentEpochTime = Date.now();
console.log(currentEpochTime);

//Converting Date to Epoch Time
//const date = new Date();
//const epochTime = date.getTime();
//console.log(epochTime);

/*const epochTimestamp = 1700000000000;
const date = new Date(epochTimestamp);
console.log(date);


const now = new Date();
console.log(now);
document.write(now);*/

//const specificDate = new Date("2024-01-28T12:00:00");
//console.log(specificDate);




/*function convertToOsloTime(date) {
    const osloTimezoneOffset = 60;
    const utcTime = date.getTime();
    const osloTime = utcTime + (osloTimezoneOffset * 1000);
    return new Date(osloTime);
}
const date = new Date();
console.log(convertToOsloTime(date));*/

/*function daysUntilNextYear() {
    const today = new Date();
    const nextYear = new Date(today.getFullYear() + 1, 0, 1);
    const difference = nextYear - today;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24 ));
    return days;
}
console.log(daysUntilNextYear());


let date = new Date();
let norwegianDateFormatter = new Intl.DateTimeFormat("no-No");

console.log(norwegianDateFormatter.format(date));*/


/*function formatReviewDate(date, locale) {
    const formatter = new Intl.DateTimeFormat(locale);
    return formatter.format(new Date(date));
}

const sampleDate = "2024-01-28";
console.log(formatReviewDate(sampleDate, "no-NO"));
console.log(formatReviewDate(sampleDate, "en-US"));

const person = {
    firstName: "Ola",
    lastName: "Nordmann",
    country: "Norway",
};

const greeting = `Hello, I am ${person.firstName} ${person.lastName} from ${person.country} . `;
console.log(greeting);*/


const person = {
    firstName: "Ola",
    lastName: "Nordmann",
    country: "Norway",
};

// Destructured the properties here
const { firstName, lastName, country } = person;

const greeting = `Hello, I am ${person.firstName} ${person.lastName} from ${person.country} . `;
console.log(greeting);
	// Logs:
	// Hello, I am Ola Nordmann from Norway.