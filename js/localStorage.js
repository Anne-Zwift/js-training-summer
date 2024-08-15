/*localStorage.setItem("first name", "Anne ");
localStorage.setItem("last name", "Mathisen ");
localStorage.setItem("age", "52 ");

const firstName = localStorage.getItem("first name");
const lastName = localStorage.getItem("last name");
const age = localStorage.getItem("age");

console.log(firstName, lastName, age);
document.write(firstName,lastName,age);*/

const person = {
    firstName: 'Ola',
    lastName: 'Nordmann',
    age: 30
  };
  
  localStorage.setItem('person', JSON.stringify(person));
  
  const personString = localStorage.getItem('person');
  const personObject = JSON.parse(personString);
  
  console.log(personObject);


