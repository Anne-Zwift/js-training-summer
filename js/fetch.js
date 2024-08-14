fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));


// Making a network request to an API
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    // Check if the response is OK (status code 200-299)
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json(); // Parsing the JSON body of the response
  })
  .then(data => {
    console.log('Data received:', data); // Handling the data
  })
  .catch(error => {
    console.error('Fetch error:', error.message); // Handling any errors
  });

  async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Await the fetch request
      if (!response.ok) {
        // Check for HTTP error statuses
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const data = await response.json(); // Parsing JSON
      console.log('Data received:', data); // Handling the data
    } catch (error) {
      console.error('Fetch error:', error.message); // Handling any errors
    }
  }
  
  fetchData(); // Execute the async function