const sumbitForm=document.getElementById("bpSumbit");
const form=document.querySelector('form');
const cardafterAlert=document.getElementById("cardafterAlert");
cardafterAlert.style.display='none';

//-שמירת הנתונים של הוועד בית בL OCAL ומעבר להודעה                                                        
sumbitForm.onclick=(event)=>{
  form.style.display='none';
    const buildingId=document.getElementById("buildingId");
    const buildingAdress=document.getElementById("buildingAdress");
    const houseCommite=document.getElementById("houseCommite");
    const emailhouseCommite=document.getElementById("emailhouseCommite");
    const telHouseCommite=document.getElementById("telHouseCommite");
    let houseCommiteProfile;
    houseCommiteProfile={one:buildingId.value,
                         two:buildingAdress.value,
                        three:houseCommite.value,
                         four:emailhouseCommite.value,
                        five:telHouseCommite.value };
    localStorage.setItem("presentComitteeProfile",JSON.stringify(houseCommiteProfile));
    window.location.href='./ourBuilding.html';
    
    
}
