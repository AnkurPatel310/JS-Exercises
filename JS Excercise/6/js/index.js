//console.log("Welcome to the console");
function myFunction(){
    let strval = document.getElementById("myspn").value;
    let arr = Array.from(strval);

    for(var i = 0; i < arr.length; i++){
        //for Uppecase
        if(arr[i].charCodeAt(0) >= 65 && arr[i].charCodeAt(0) <= 90){
            arr[i] = arr[i].toLowerCase();
        }
        //fo Lowercase
        else if(arr[i].charCodeAt(0) >= 97 && arr[i].charCodeAt(0) <= 122){
            arr[i] = arr[i].toUpperCase(); 
        }
    }
    
    let str2 = arr.join("");
    document.getElementById("myspn2").innerHTML = str2;
    console.log(str2);
}


