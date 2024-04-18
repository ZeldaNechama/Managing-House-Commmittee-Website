
const sumbitBtn = document.getElementById("sumbitBtn");
//מעבר להודעה על שא"א להוסיף דיירים אלא רק ע"י המזכירה
sumbitBtn.onclick = (event) => {
  event.preventDefault();
  location = "./noticesAndUpdate.html";
}
// const s=document.getElementById("btn");
// const Data = document.querySelectorAll('input');
// const tenetStr = localStorage.getItem("tenet");
// const tenet = JSON.parse(tenetStr);

// Data.innerHTML = tenets.values;//
// const btn = document.getElementById("sumbitBtn");
// const body = document.querySelector('body');
// body.appendChild(btn);
// btn.onsumbit = (event) =>{
//  event.preventDefult();
//   const tenet={
//       tenetDescreption:Data.tenetDescreption.value,
//   }

//   localStorage.setItem("tenet",JSON.stringify(tenet));
//   window.location.href = './ourBuilding.html';
//   //  body.btn.reset();
// }
// const sumbitBtn=document.getElementById("sumbitBtn");
// const buildingForm=document.getElementById("buildingForm");
// sumbitBtn.onclick=()=>{
//   buildingForm.style.display='none';
//   const label=document.createElement('label');
//   body.appendChild(label);
//   label.innerHTML="הנתונים נשלחים ........."

