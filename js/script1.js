//array from video with module 3-4

let groceryList = ["carrot", "flowers", "coffee", "dark chocolate"];
//the [] makes it a list
//access different property, arreys always count from 0
console.log(groceryList[2]);
//output: coffee

//from task API assignment, this is an array example with an object
[
    {
      "id": "b8b528fc-6c60-41f6-a5a9-9a8b27a9482a",
      "title": "Rainy Days Akra Jacket",
      "description": "The Women's Rainy Days Akra jacket is bound to be your new go-to water-repellent rain jacket.",
      "gender": "Female",
      "sizes": ["XS", "S", "M", "L", "XL", "XXL"],
      "baseColor": "Red",
      "price": 129.99,
      "discountedPrice": 119.99,
      "onSale": true,
      "image": "https://static.cloud.noroff.dev/api/rainy-days/0-akra-jacket.jpg",
      "tags": ["jacket", "womens"],
      "favorite": true
    },

]

//what is a property - an attribute or a characteristic, they can be accessed with dot notation

console.log(groceryList.length);
//output: 4

//pop, dark chocolate is being removed as pop removes the last item 

let newGroceryList = groceryList.pop();
console.log(newGroceryList);

//push adds an item, but first after console logging twice

let newItem = groceryList.push("honey");
//console.log(newItem);

console.log(groceryList);


//looping through arrays

for (let i = 0; i < 4; i++) {
  console.log(groceryList[i]);
}

//strings and string properties

let example = "Ida Toldnæs";

console.log(example.length);

//functions and arguments

function makeSmoothie(ingredient1, ingredient2, ingredient3) {
  return `Your smoothie is made with ${ingredient1} and ${ingredient2} and ${ingredient3}`;
}
//template string literal
console.log(makeSmoothie("banana", "strawberry", "coconut."));


//return


//function processInput() {
  //let input = prompt("Please enter your input:");

  //if (!input) {
    //alert("No input provided or input is only whitespace!");
    //return;
  //}

  //alert("Processing input: " + input);
//}

//processInput();

