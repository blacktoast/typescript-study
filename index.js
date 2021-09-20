"use strict";

// Write TypeScript code!
var appDiv = document.getElementById('app');
appDiv.innerHTML = "<h1>TypeScript Starter</h1>";
var title = document.querySelector('.title');
function handleCilck() {
    console.log('click');
    title.style.color = 'red';
}
function handleMouseEnter() {
    console.log('click');
}
console.log(title);
title.addEventListener('click', handleCilck);
title.addEventListener('mouseenter', handleMouseEnter);
