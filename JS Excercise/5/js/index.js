//console.log("Welcome to the console");

let arr = [3, 8, 7, 6, 5, -4, -3, 2, 1];

document.getElementById("myspn").innerHTML = arr;

arr.sort(function(a, b){return a-b});

document.getElementById("myspn2").innerHTML = arr;
   


