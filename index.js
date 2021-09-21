"use strict";

// Write TypeScript code!
var appDiv = document.getElementById('app');
appDiv.innerHTML = "<h1>TypeScript Starter</h1>";
var title = document.querySelector('.title');

function handleCilck() {
    title.classList.toggle('clicked');
    
}
function handleMouseEnter() {
    alert("test")
}

function handleWindowResize() {
    document.body.style.backgroundColor = 'red';

}
function handleCopy() {
    alert("copy");
}


title.addEventListener('click', handleCilck);
