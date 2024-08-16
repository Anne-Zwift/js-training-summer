const settings = {
    theme: "black",
    volume: 3
};

sessionStorage.setItem("settings", JSON.stringify(settings));

//Retrieve
const settingsString = sessionStorage.getItem("settings");
const settingsObject = JSON.parse(settingsString);

console.log(settingsObject);


