//console.log("Welcome to the console")

function myFunction(){
    let strval = document.getElementById("mystr").value;
    let arr = strval.split(" ");

    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1); 
    }

    let str2 = arr.join(" ");
    console.log(str2);
    document.getElementById("myspn").innerHTML = str2;
}

