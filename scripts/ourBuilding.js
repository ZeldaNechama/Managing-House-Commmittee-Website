const body=document.querySelector('body');
const notices=document.getElementById("notices");//textArea
const button=document.getElementById("sumbitBtn");


//פונקציה שמפעילה פונקציה אחרת
button.onclick=()=>{

 const notice=notices.value;
 addNotice(notice);


 
}
//פונקציה שמייצרת מודעות בבנין
const addNotice=(notice)=>{
    const noticesDiv=document.getElementById('noticesDiv');
    const li=document.createElement('li');
    const br=document.createElement('br');
    const time=new Date().getHours()+":"+new Date().getMinutes();

    noticesDiv.appendChild(li);
    li.innerHTML+=" "+notice+"||"+" נכתב בשעה: "+time;
    noticesDiv.appendChild(br);
   
    const dataNotices=notice+"||"+time
    localStorage.setItem("notices:",dataNotices);
    notices.value=null;

}
//מעבר לאזור אישי דייר
const enterAStenet=document.getElementById("enterAStenet");
enterAStenet.onclick=()=>{
    window.location.href='./teanatPersonal.html';
}
//מעבר לאזור אישי ועש בית
const enterAsHouseComm=document.getElementById("enterAsHouseComm");
enterAsHouseComm.onclick=()=>{
            window.location.href='./loginComm.html'
        
 
}


























// localStorage.setItem('name','chaim sklar');//יצירת אובביקט ב local storage
// console.log(localStorage.getItem('name'));//קבלת האובייקט מ-  
// localStorage.removeItem('name');//מחיקת האובייקט מ-

// ///
// const btn=document.querySelector('button');
// const result=document.getElementById("value");
// let x=  Number(localStorage.getItem('count'))||0;
// result.textContent=x;


// function f(){
//     result.textContent=++x;
//     localStorage.setItem('count',x);
// }

// btn.addEventListener('click',f);
// /////////////
// const form=document.querySelector('form');

// function writeData(data){
//     let input;
//     const userName=Object.keys(data);
//     for (let user  of userName) {
//        input=form.querySelector('[user="${name}"]');//?
//        input.value=data[user];
        
//     }  
// }
// function  readForm(){
//     const data={};
//     const inputs=form.querySelectorAll('input,select');
//     for (let inp  of inputs) {
//         data[inp.user]=inp.value;  
//     }
//     return data;
// }
// function saveDataInLocal(){
//     const data=readForm();
//     localStorage.setItem('formData',JSON.stringify(data));
// }
// function loadFieldsFromLocalStorage(){
//     const data=localStorage.getItem('fromData');
//     try{
//         const parsedData=JSON.parse(data);
//         writeData(parsedData);
//     }catch(err){
//         console.log(err);
//         console.log('Invalid Data: ' + data);
//         localStorage.removeItem('fromData');
//     }
// }
// form.addEventListener('input', saveDataInLocal);
// loadFieldsFromLocalStorage();

