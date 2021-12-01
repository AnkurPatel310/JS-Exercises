//console.log("Welcome to the console");
let dt;
let day;
let hours;
let minutes;
let seconds;
let time;
let ampm;
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
setInterval(() => {
    dt = new Date();
    day = dt.getDay();
    hours = dt.getHours();
    minutes = dt.getMinutes();
    seconds = dt.getSeconds();

    ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    
    minutes = minutes < 10 ? "0" + minutes : minutes;

    time = hours + " " + ampm + " : " + minutes + " : " + seconds;
    document.getElementById("dayspn").innerHTML = days[day];
    document.getElementById("timespn").innerHTML = time;
}, 1000);


