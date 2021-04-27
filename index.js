// jQuery functions

// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}
  
// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}


function doGet() {
    return HtmlService.createTemplateFromFile('form.html')
        .evaluate() // evaluate MUST come before setting the Sandbox modenavDemo
        .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}


function addClass(el, className)
{
    document.getElementById("div1").classList.add("classToBeAdded");
}

function removeClass(el, className)
{
    document.getElementById("div1").classList.remove("w3-display-middle");
}

window.addEventListener("load", function() {
    if (window.innerWidth < 767) {
    document.getElementById("titul").classList.remove("w3-display-middle");
    document.getElementById("titul").classList.add("w3-display-topmiddle");
    document.getElementById("titul2").classList.remove("w3-display-middle");
    document.getElementById("titul2").classList.add("w3-display-topmiddle");
}
});


window.addEventListener('load', doGet(), false)

