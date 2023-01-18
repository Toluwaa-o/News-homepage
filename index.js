let button = document.getElementById("menu");
let navBar = document.getElementById("nav-bar").style;
let exit = document.getElementById("close");
let width = window.matchMedia("(min-width: 1000px)")

button.addEventListener("click", function() {
    navBar.display = "flex";
    button.style.display = "none"
})

exit.addEventListener("click", function() {
    navBar.display = "none"
    button.style.display = "flex"
})

if (width.match){
    exit.style.display = "none"
    button.style.display = "none"
}