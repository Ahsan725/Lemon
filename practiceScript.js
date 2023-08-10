/*Js Day 1: 
//can inject html code by accessing the document
*/
// document.write("<h1>Hello </h1>");
document.getElementById("header").innerHTML = " Welcome to Little Lemon";

//var x is called declaring
//x= 5 is called initalizing

function orderHandler() {
  var x = "Order";
  var y = "Submitted ✓";
  document.getElementById("review").innerHTML = x + " " + y;
}

//this is how you append a value to an existing value.
// function add() {
//     var a = 5, b = 4;
//     var z = a + b;
//     document.getElementById("a1").innerHTML += z;
// }

//basic calculator function. using input by id
function add() {
    var num1 = parseInt(document.getElementById("firstnumber").value);
    var num2 = parseInt(document.getElementById("secondnumber").value);
    window.alert(num1 + num2);
}

//getting string from input and concatanating or manipulating them
function fs() {
  var first = document.getElementById("fn").value[0].toLowerCase();
  var last = document.getElementById("ln").value.substring(0, 4).toLowerCase();
  var address = "@brooklyn.cuny.edu";
  var usernames = first.concat(last);
  window.alert(Math.round(Math.random() * 1000000000)); //generates a random 8digit number.
}

function blank1() {
  var x = ["red", "green", "blue", "yellow"];
  x.sort(); //it is inplace sorting so you do not have to create a variable.
  document.getElementById("hp").innerHTML = x;
}
function blank2() {
  var x = [3, 6, 2, 89.45, 56, 23, 22, 21, 56, 1];
  x.sort(); //this will be wrong because it will take it as a string instead of numbers
  document.getElementById("hp").innerHTML = x;
}
function blank3() {
  var x = [3, 6, 2, 89.45, 56, 23, 22, 21, 56, 1];
  x.sort(function (a, b) {
    return a - b;
  });
  //this will serve kind of like a comparator. Kind of like bubble sort.
  document.getElementById("hp").innerHTML = x;
}
//float -> int
/* can be done using ceil function or floor function or round function or trunc*/
//ceil 5.6 -> 6
//floor 5.6 -> 5
// use gpt to find out the examples of all of these.

//for loop has three things initialization, condition, and step.
function generate() {
  for (var i = 1; i <= 10; i++) {
    document.write(i + "<br>");
  }
}

function generate() {
  var x = parseInt(document.getElementById("num").value); //value has no parenthesis
  for (var i = 1; i <= 10; i++) {
    document.write(i * x + "<br>");
  }
}

function date() {
  var x = new Date(); // class name should be capitalized everything else is camel case
  var y = new Date("17 Aug 2023"); // for specific dates. //starts with sunday as 0,
  document.write(x);
}

function date() {
  var x = new Date(); // class name should be capitalized everything else is camel case
  var y = new Date("17 Aug 2023"); // for specific dates. //starts with sunday as 0,
  var date_num = x.getDay();
  var day = "";
  if (date_num == 0) {
    day = "Sunday";
  }
  document.write(day);
}
//getTime() will give you time in milliseconds from Jan 1st 1970.

function giveDate() {
  var x = new Date(); // class name should be capitalized everything else is camel case
  document.getElementById("dt").innerHTML = x;
  refresh();
}

function refresh() {
  setTimeout("giveDate()", 1000);
}

function giveDate2() {
  document.getElementById("dt").innerHTML = new Date();
  setTimeout("giveDate2()", 1000); //optimized code can work without calling a second function.
}

//can use this countdown timer in your restaurant
//app to calculate the delivery time under 30 mins.
function countdown() {
  var now = new Date().getTime();
  var target = new Date("Aug 16 2023 18:00").getTime();
  var diff = target - now;

  var sec = Math.floor((diff % (1000 * 60)) / 1000);
  var min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  var hour = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var day = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("dt").innerHTML =
    days + "days" + hour + "hour" + min + "min" + sec + "sec";
  setTimeout("countdown()", 1000); //can use table to make this look better.
}

function() {
  var x = document.getElementById("ew").innerHTML = "booo";
  document.write("<div class='hello'>");
}

arr1.sort(function (a, b) { return b - a });


