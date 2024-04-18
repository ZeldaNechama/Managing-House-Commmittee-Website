const body = document.querySelector('body');
const logBuilding = document.getElementById("hploginBuilding");
const logRegister = document.getElementById("hploginResiter");

logBuilding.onclick = () => {
    window.location= './ourBuilding.html';
}
logRegister.onclick = () => {
    window.location = './regisrerAndDetailes.html';
}
//
let counterTenets=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
localStorage.setItem('voices',JSON.stringify(counterTenets));




// body.style.borderTopColor="pink";
