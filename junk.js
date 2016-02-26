var greeting = document.getElementById('greeting');
var li = document.getElementsByTagName('li');
var ul = document.getElementsByTagName('ul');
var gray = document.getElementById('ghosting');
var orange = document.getElementById('resize');
var reset = document.getElementById('reset');
var imageArray = ["images/milk.jpeg", "images/honey.jpeg", "images/water.jpeg", "images/wine.jpeg", "images/beer.jpeg"]


greeting.innerHTML = "Hello World!";

function yallow() {
    for (i = 0; i < li.length; i++) {
        li[i].style.backgroundColor = "yellow";
                if (li[i].classList.contains('selected')) {
                    li[i].classList.remove('selected')
                };
    }
}

var list = document.querySelector("ul");

//list.addEventListener("click", function (e) {
//    for (i = 0; i < li.length; i++) {
//        if (e.target === li[i]) {
//            if (li[i].classList.contains('selected')) {
//                
//            } 
//            else {
//                li[i].classList.add('selected')
//            }
//        } else {
//            li[i].classList.remove('selected');
//        }
//
//        yallow();
//    }
//})
//
//
//// e.target —> li, if you click on an li
//// e.target.tagName —> "LI" if you click on an li
yallow();

function imgMake() {
    img = document.createElement('img');
    img.id = 'swap'
    greeting.appendChild(img);
    img.src = "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif";
}

imgMake();

gray.addEventListener("mouseover", function () {
    gray.style.visibility = "hidden";
});
orange.addEventListener("mouseover", function () {
    orange.style.width = "400px";
});
orange.addEventListener("mouseleave", function () {
    orange.style.width = "200px";
});

reset.addEventListener("click",
    function () {
        for (i = 0; i < li.length; i++) {
            li[i].classList.remove('selected');
        }
        document.querySelector('img').src = "images/panic.jpeg";
    });

document.onkeydown = function (evt) {
    evt = evt || window.event;
    if (evt.keyCode > 46 && evt.keyCode < 65) {
        alert("I hate numbers!")
    }
};

function selectors() {
    for (i = 0; i < li.length; i++) {
        isSelected(i);
    }
}

function isSelected(i) {
    li[i].addEventListener('click', function() {
        yallow();
        li[i].classList.add('selected');
        img.src = imageArray[i];
   
    })}
selectors();
