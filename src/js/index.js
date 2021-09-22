"use strict";

const loginForm=document.querySelector(".form-login");
const input=document.querySelector(".input-field")
const btn=document.querySelector(".btn");
const greeting=document.querySelector("#greeting")
const HIDDEN="hidden";
const USERNAME_KEY="username";
const username=localStorage.getItem("username");

function onLoginSubmit(info) {
 info.preventDefault();
    loginForm.classList.add(HIDDEN);
    const username=input.value;
    localStorage.setItem("username",username);
    paintGreeting(username);
    console.log(info);
}

function paintGreeting(username){
    greeting.innerText=`Hello ${username}`;
    greeting.classList.remove(HIDDEN);
}

function deleteUser(){
    localStorage.removeItem(USERNAME_KEY);
}

btn.addEventListener("click",deleteUser);

if(username===null){
    loginForm.classList.remove(HIDDEN);
    loginForm.addEventListener("submit", onLoginSubmit);

}else{
    paintGreeting(username);

}