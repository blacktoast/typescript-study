"use strict";

const loginForm=document.querySelector(".form-login");
let input=loginForm.querySelector(".input-field");
let btnLogin=document.querySelector(".login-btn");

function onClickLogin(){
    console.log(input.value);
}

btnLogin.addEventListener("click",onClickLogin);
