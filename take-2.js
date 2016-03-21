var greeting = document.getElementById("greeting");
var listItems = document.getElementsByTagName("li");
var image = document.createElement("img");
var imageArray = ["images/milk.jpeg", "images/honey.jpeg", "images/water.jpeg", "images/wine.jpeg", "images/beer.jpeg"];
var reset = document.getElementById('reset');



document.addEventListener("DOMContentLoaded", function(event) {
    greeting.innerHTML = "Hello, World!";
    classyYellow();
    greeting.appendChild(image);
    image.src = "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif";


});

function classyYellow() {
    for (i = 0; i < listItems.length; i++) {
        listItems[i].style.backgroundColor = "yellow";
        listItems[i].setAttribute("class", "");
        listItems[i].image = imageArray[i];
    }
}

//Bubbling listener
document.getElementsByTagName("ul")[0].addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        classyYellow();
        e.target.setAttribute("class", "selected");
        image.src = e.target.image;
    }
});

//Capturing 

//Ghost Remove
document.getElementById("ghosting").addEventListener("mouseover", function(e) {
    e.target.style.display = "none";
});


//Orange Resize
document.getElementById("resize").addEventListener("mouseover", function(e) {
    e.target.style.width = "400px";
    e.target.style.marginLeft = "-200px";
});
document.getElementById("resize").addEventListener("mouseout", function(e) {
    e.target.style.width = "200px";
    e.target.style.marginLeft = "-100px";
});


//Reset Action
reset.addEventListener("click", function() {
    classyYellow();
    image.src = "images/panic.jpeg";
});

//Number Press
document.onkeydown = function(e) {
    e = e || window.event;
    if (e.keyCode > 46 && e.keyCode < 65) {
        alert("I hate numbers!");
    }
};


//Konami 
var k = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var n = 0;

document.onkeydown = function(e) {
    if (e.keyCode === k[n++]) {
        if (n === k.length) {
            alert('Konami !!!');
            n = 0;
            return false;
        }
    } else {
        n = 0;
    }
};