//Step 1: Define Custom Error Types
/*class NetworkError extends Error {
    constructor(message) {
        super(message);
        this.name = "NetworkError";
    }
}

class AuthenticationError extends Error {
    constructor(message) {
        super(message);
        this.name = "AuthenticationError";
    }
}

//Step 2: Create a Login Function
async function loginUser(username, password) {
    try {
       // Simulate network and authentication errors
    if (Math.random() < 0.3) {
        throw new NetworkError("Unable to connect to the server");
    }
    if (username !== "user" || password !== "password") {
        throw new AuthenticationError("Invalid username or password");
    }

    //// Simulate successful login
    return "Login successfull!";
    } catch (error) {
        //// Rethrow the error to be handled by the caller
        throw error;
    }
}

//Step 3: Handling Errors
async function performLogin() {
    try {
        let response = await loginUser("user", "wrongpass");
        console.log(response);
    } catch (error) {
        if (error instanceof NetworkError) {
            console.error("Network problem: Please check your internet connection.");
        } else if (error instanceof AuthenticationError) {
            console.error("Login failed: Please check your credentials.");
        } else {
            console.error("An unexpected error occurred:", error.message);
        }
    }
}
performLogin();*/



// Custom Error Class
class InvalidInputError extends Error {
    constructor(message) {
      super(message); // Call the parent class constructor
      this.name = "InvalidInputError"; // Setting the error name
    }
  }
  
  // Function using the custom error
  function validateNumber(number) {
    // Check if the input is not a finite number
    if (!isFinite(number)) {
      throw new InvalidInputError("Input must be a valid number");
    }
    return "Valid number";
  }
  
  // Testing the function
  try {
    console.log(validateNumber(42)); // Should log "Valid number"
    console.log(validateNumber("hello")); // Should throw an error
  } catch (error) {
    if (error instanceof InvalidInputError) {
      console.error(error.message); // Log the error message
    } else {
      console.error("An unexpected error occurred");
    }
  }

  const jsonString = '{"name": "Ola", "age": 30}';

try {
    const user = JSON.parse(jsonString);
    console.log("User parsed successfully:", user);
} catch (error) {
    console.error("Parsing error:", error.message);
}