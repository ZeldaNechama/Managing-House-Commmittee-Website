//localStorage.setItem('presentComittee',123456789);
const sumbitButt=document.getElementById('sumbitButt');
const idComm=document.getElementById('code');
const presentComittee=localStorage.getItem('presentComittee');
//בדיקה האם  הדייר באמת הועד בית
sumbitButt.onclick=()=>{
 let id=idComm.value;
 if(id==presentComittee){
  window.location.href='./houseCommite.html'
 }
 else{
  window.alert("מצטערים אינך רשום כועד בית");
 }
}























// console.log('hellp');
// const form = document.getElementById("formSurvey");
// const divQ1 = form.divQ1;
// const divQ2 = form.divQ2;
// const divQ3 = form.divQ3;
// const divQ4 = form.divQ4;
// const divQ5 = form.divQ5;
// const divQ6 = form.divQ6;
//   const l1=document.getElementById("fsYearsOp1");
//   const l2=document.getElementById("fsYearsOp2");
//   const l3=document.getElementById("fsYearsOp3");
//  if(l1.onchange.prototype!=null){

//  }

//   console.log(divQ1);
//   divQ1.appendChild(form);
//   divQ2.appendChild(form);
//   divQ3.appendChild(form);
//   divQ4.appendChild(form);
//   divQ5.appendChild(form);
//   divQ6.appendChild(form);


//   form.appendChild(divQ1);
//   form.appendChild(divQ2);
//   form.appendChild(divQ3);
//   form.appendChild(divQ4);
//   form.appendChild(divQ5);
//   form.appendChild(divQ6);
// let x = 0;
// let dataArrr = [];
// form.onsubmit = (event) => {
  //     event.preventDefault();
  //     if(divQ1.check('l1')!=null){
  //      dataArrr[x++]=divQ1.l1;
  //      console.log(dataArrr[x].l1);
  //     }
  //     else
  //     if(divQ1.check('l2')!=null){
  //         dataArrr[x++]=divQ1.l2;
  //         console.log(dataArrr[x].l2);
  //        }
  //        else if(divQ1.check('l3')!=null){
  //         dataArrr[x++]=divQ1.l3;
  //         console.log(dataArrr[x].l3);
  //        }

  // const ans = {
    // ans1:dataArrr[0],
    // ans2:dataArrr[1],
    // ans3:dataArrr[2],
    // ans4:dataArrr[3],
    // ans5:dataArrr[4],
    // ans6:dataArrr[5]

    // ans1:document.divQ2.value,
    // ans2:document.divQ2.value,
    // ans3:document.divQ3.value,
    // ans4:document.divQ4.value,
    // ans5:document.divQ5.value,
    // ans6:document.divQ6.value,

  //   ans1: document.divQ2,
  //   ans2: document.divQ2,
  //   ans3: document.divQ3,
  //   ans4: document.divQ4,
  //   ans5: document.divQ5,
  //   ans6: document.divQ6,

  // }
  // $.ajax({
  //     url: "../tents.json",
  //     success: ( result ) => {
  //       console.log(result);
  //        ans = result;
  //         drawAns();
  //     },
  //     error: (err) => {
  //         console.log(err);
  //     }
  //   });
  // for (let index = 0; index < dataArrr.length; index++) {
  //      dataArrr[index]=ans.ans1;
  //      console.log(dataArrr[index]);

  // }
  //JSON.stringify(ans)
//   console.log(ans);
//   localStorage.setItem("ans", JSON.stringify(ans));
//   // window.location.href='../surveyResults.html';
//   window.alert("cfhf!!")
// }




