const person = {
    name: "Ola Nordmann",
    age: 30,
    isDeveloper: true
};
//const jsonString = JSON.stringify(person);

//console.log(person);

//Serialization - JSON.stringify()
const book = {
    title: "What I think of when i run",
    author: "Hakuri Murakami",
    publication: 1992
};
const jsonString = JSON.stringify(book);

//console.log(book);
//document.write(jsonString);


//Deserialization - JSON.parse()
/*const jsonString = '{"title": "What I think of when i run", "author": "Hakuri Murakami", "publication": 1992 }';
const book = JSON.parse(jsonString);

console.log(book);*/

//Storing user name and theme preference in localStorage
localStorage.setItem("user", "Ola Nordmann ");
localStorage.setItem("theme", "dark");

//Retrieving user name and theme preference from localStorage
const user = localStorage.getItem("user");
const theme = localStorage.getItem("theme");

document.write(user, theme);
console.log(user, theme);

//Removing the theme preference from localStorage
localStorage.removeItem("theme");

