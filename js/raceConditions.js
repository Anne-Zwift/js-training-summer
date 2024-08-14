let globalCounter = 0;

function asyncOperationA() {
    setTimeout(() => { globalCounter += 1; }, 1000);
}

function asyncOperationB() {
    setTimeout(() => { globalCounter += 2; }, 500);
}

asyncOperationA();
asyncOperationB();

async function sequentialOperations() {
    await asyncOperationA();
    await asyncOperationB();
}

sequentialOperations();

// Function to show an alert after 5 seconds
function showAlert() {
    alert("This is a delayed alert!");
}

// Setting the timeout
setTimeout(showAlert, 5000); // Alert will appear after 5 seconds

// Function to update time every second
/*function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    console.log(timeString);
}

// Setting the interval to update every second
setInterval(updateTime, 1000);*/

