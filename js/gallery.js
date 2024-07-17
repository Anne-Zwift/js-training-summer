//1. ![Image 1](https://picsum.photos/200/300)
//2. ![Image 2](https://picsum.photos/200/300?random=1)
//3. ![Image 3](https://picsum.photos/200/300?random=2)
//4. ![Image 4](https://picsum.photos/200/300?random=3)
//5. ![Image 5](https://picsum.photos/200/300?random=4)
//6. ![Image 6](https://picsum.photos/200/300?random=5)
//7. ![Image 7](https://picsum.photos/200/300?random=6)
//8. ![Image 8](https://picsum.photos/200/300?random=7)
//9. ![Image 9](https://picsum.photos/200/300?random=8)
//10. ![Image 10](https://picsum.photos/200/300?random=9)

//creating a list of URL from IDs

//let listOfImagesId = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//let imagesUrls = listOfImagesId.map((id) => `https://picsum.photos/200/300/${id}`);
//console.log(imagesUrls);

//function createImage() {
    //const img = document.createElement("img");

    //img.src = imagesUrls;

    //return img;
//}

//const button = document.createElement("button");
//document.body.append(button);

//button.textContent = "Click Me";
//button.addEventListener("click", () => {
    //button.textContent = "Clicked!";
//});

//button.style.backgroundColor = "green";
//button.style.color = "white";
//button.style.width = 100;

/*var links = document.getElementsByTagName("a");

for (i = 0; i < links.length; i++) {

    links[i].className = "links-" + i;
   
}

function getAverage(a, b) {
    var average = (a + b) /2;
    console.log(average);
}
//getAverage(7, 12);

var myCar = new Object();
myCar.maxSpeed = 50;
myCar.driver = "Shaun";
myCar.drive = function(){console.log("now driving");};

myCar.drive();

var myCar2 = {maxSpeed: 50, driver: "Net Ninja", drive: function(){console.log("now driving");}
};

//console.log(myCar2);

//console.log(this);


//var myDate = new Date();*/


//console.log(myDate);

//document.getElementsByClassName("h1");

//var myH1 = document.getElementsByClassName("h1");
//console.log(myH1);

//myH1[0].innerHTML = "New page";
//console.log(myH1[0]);


//creating styles

//var title = document.getElementById("page-title");

//console.log(title.textContent);


//title.textContent = "Changing the second heading";

/*var myH2 = document.getElementById("page-title");

myH2.setAttribute("style", "left: 100px;");
console.log(myH2);

// Grab the variables to set up

var content = document.getElementById("content");
var button = document.getElementById("show-more");

// attach an EVENT element to the button
// class.Name "open" is from css page #content.open

button.onclick = function() {
    
    if (content.className == "open") {
        //shrink the box
        content.className = "";
        button.innerHTML = "Show More"
    }
    else {
        //expand the box
        content.className = "open";
        button.innerHTML = "Show Less";
    }


};*/


/*var myMessage = document.getElementById("message");

function showMessage() {
    myMessage.className = "show";

}

setTimeout(showMessage, 3000);*/


var colourChanger = document.getElementById("colour-changer");

var colours = ["red", "blue", "green", "grey", "pink"];

var counter = 0;

function changeColour() {

    if (counter >= colours.length) {
        counter = 0;
    }

    colourChanger.style.background = colours[counter];
    counter++;
}

setInterval(changeColour, 3000);



var myTimer = setInterval(changeColour, 3000);

colourChanger.onclick = function () {

    clearInterval(myTimer);
    colourChanger.innerHTML = "Timer stopped";

};

