const body = document.querySelector('body');
const mainButtn = document.getElementById("mainButtn");


let users;
$.ajax({
   url: "../jasons/tents.json",
   success: (result) => {
      users = result;
   },
   error: (err) => {
      console.log(err);
   }
});


//מציאה האם הקוד דייר נמצא בבנין זה
const findId = (ID) => {

   const nav = document.querySelector('nav');
   for (let index = 0; index < users.length; index++) {
      const element = users[index];
      console.log(element);
      let ans = checkId(element, ID);
      console.log(ans);
      if (ans == true) {
         return true;
         break;
      }

   }
   return false;
}

const checkId = (element, ID) => {

   if (element.tenetCode == JSON.parse(ID)) {
      return true;
   }
   return false;

}

const code = document.getElementById("code");

mainButtn.onclick = () => {
   const id = code.value;
   localStorage.setItem('tenetId', (id));

   const ID = (JSON.parse(localStorage.getItem('tenetId')));

   const ans = findId(ID);

   //אם הדייר קיים בבנין זה
   //תשמור לי אותו ותאתחל לי שהוא נכנסותעבור לי לעמוד הבית
   if (ans == true) {
      localStorage.setItem('tenetId', JSON.stringify(id));
      localStorage.setItem('countTimes', '0');

      window.location.href = './ourBuilding.html';
   }
   else {
      window.alert("מצטערים אינך רשום בבנין זה ");
   }



}

