import {Greeter} from './greeter';


Greeter.greetStatic("staticContent", "Hello, from Static!!!");

Greeter.greetStatic("defaultMsg");

let greeter =  new Greeter();
greeter.greet("viewContent", "Hello, from Instance!!!");




//var element = document.getElementById("viewContent");
//setTimeout(function () {
//    element.innerText = "Hello, JSPM!!!";
//}, 500);