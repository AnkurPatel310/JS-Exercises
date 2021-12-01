//console.log("Welcome to the console");

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

document.querySelector(".before .nm").innerHTML += student.name;
document.querySelector(".before .cls").innerHTML += student.sclass;
document.querySelector(".before .rno").innerHTML += student.rollno;

delete student.rollno;

document.querySelector(".after .nm").innerHTML += student.name;
document.querySelector(".after .cls").innerHTML += student.sclass;