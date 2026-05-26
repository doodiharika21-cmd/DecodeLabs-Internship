function showAlert(){
alert("Welcome Frontend Project!");
}

let count = 0;

let interval = setInterval(() => {

count++;

document.getElementById("count").innerText = count;

if(count === 150){
clearInterval(interval);
}

},20);