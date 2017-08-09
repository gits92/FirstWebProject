var num1;
var num2;
var guess;
var answer;
var response;

$(document).ready(new function(){
    num1 = document.getElementById("num1");
    num2 = document.getElementById("num2");

    setNumbers();

});

function setNumbers() {
    num1.innerHTML = Math.floor(Math.random() * 10) + 1;
    num2.innerHTML = Math.floor(Math.random() * 10) + 1;
}