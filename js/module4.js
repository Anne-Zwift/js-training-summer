const h1 = document.querySelector("h1");
    setTimeout(() => {
        h1.textContent = "This is the new h1";

}, 2000);
    

function fakeApiCall() {
    return {
      // Fake article data
      id: "XYZ-123",
      image: "https://picsum.photos/800/200",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
    }
  }
  
  function stopLoading() {
    const article = document.querySelector("article");
    // Patch the article class to remove the loading class
    article.classList.remove("loading");
  }
  
  function updateArticle(data) {
    // Search the document for the root element we want to update
    const article = document.querySelector("article");
    // Search inside the article for the elements we want to update
    const img = article.querySelector("img");
    const h2 = article.querySelector("h2");
    const p = article.querySelector("p");
  
    // Patch each child element
    img.src = data.image;
    h2.textContent = data.title;
    p.textContent = data.description;
  
    // Patch the article id
    article.id = data.id;
  
    // Return a reference in case we need this later
    return article;
  }
  
  async function example() {
    const data = fakeApiCall();
    const article = updateArticle(data);
    console.log(article);
    stopLoading();
  }
  
  function reset() {
    const article = document.querySelector("article");
    article.classList.add("loading");
    article.id = "";
    article.querySelector("img").src = "";
    article.querySelector("h2").textContent = "";
    article.querySelector("p").textContent = "";
  }


  // Array of item objects, each with a name and price
const items = [
    { name: "Item 1", price: 100 },
    { name: "Item 2", price: 299 },
    { name: "Item 3", price: 30 },
    { name: "Item 4", price: 1400 },
    { name: "Item 5", price: 550 },
  ];
  
  // Function to create a list item element for an item
  function createItem(itemData) {
    const li = document.createElement("li"); // Create a new list item element
    li.textContent = `${itemData.name} - $${itemData.price}`; // Set text content to item name and price
    return li; // Return the created list item
  }
  
  // Function to create and display the entire list of items
  function createList() {
    const list = document.querySelector("ul"); // Select the <ul> element
    for (let i = 0; i < items.length; i++) { // Loop through all items
      const itemData = items[i]; // Get data for current item
      const listItem = createItem(itemData); // Create a list item for the current item
      list.appendChild(listItem); // Add the list item to the <ul> element
    }
  }
  
  // Function to update an individual list item element
  function updateItem(itemData, itemElement) {
    itemElement.textContent = `${itemData.name} - $${itemData.price}`; // Update text content of the list item
  }
  
  // Function to update the entire list on the UI
  function updateList() {
    const list = document.querySelector("ul"); // Select the <ul> element
    const listItems = list.querySelectorAll("li"); // Select all list item elements
  
    for (let i = 0; i < items.length; i++) { // Loop through all items
      const itemData = items[i]; // Get data for current item
      const listItem = listItems[i]; // Get corresponding list item element
      updateItem(itemData, listItem); // Update the list item with new data
    }
  }
  
  // Function to sort items by price and update the list
  function sortByPrice() {
    items.sort((a, b) => a.price - b.price); // Sort items array by price in ascending order
    updateList(); // Update the list to reflect sorted items
  }
  
  // Function to reset the list to its original order
  function reset() {
    items.sort((a, b) => a.name.localeCompare(b.name)); // Sort items array by name in alphabetical order
    updateList(); // Update the list to reflect the original order
  }
  
  createList(); // Initially create and display the list when the script loads

  