//console.log("Welcome to the console");
let dt = new Date();
let date = dt.getDate();
let month = dt.getMonth() + 1;
let year = dt.getFullYear();

date = date < 10 ? "0" + date : date;
month = month < 10 ? "0" + month : month;

let fr1 = month + "-" + date + "-" + year;
let fr2 = month + "/" + date + "/" + year;
let fr3 = date + "-" + month + "-" + year;
let fr4 = date + "/" + month + "/" + year;

document.getElementById("fr1").innerHTML = fr1;
document.getElementById("fr2").innerHTML = fr2;
document.getElementById("fr3").innerHTML = fr3;
document.getElementById("fr4").innerHTML = fr4;

   


