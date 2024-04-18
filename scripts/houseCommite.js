
// localStorage.setItem("presentComittee", "1");
// localStorage.setItem("newComittee", "11");

let users;
$.ajax({
    url: "../jasons/tents.json",
    success: (result) => {
        users = result;
        let id = findId();
    },
    error: (err) => {
        console.log(err);
    }
});
const findId = () => {
    //  debugger
    let ID = JSON.parse(localStorage.getItem('presentComittee'));//וועד בית נוכחי
    const body = document.querySelector('body');
    const top = document.getElementById("top-pic");
    users.forEach(element => {
        top.innerHTML += createText(element);
        top.style.color="rgb(32, 30, 30)";
        top.style.fontSize="69px";

    });
    return ID;
}
const createText = (element) => {
    let ID = JSON.parse(localStorage.getItem('presentComittee'));
    if (element.tenetCode == ID) {
        return "<div>" + element.tenetFirstName + " " + element.tenetLastName + "</div>";
    }
    return "<div>" + "</div>";

}

const changeAndEtc = document.getElementById("changeAndEtc");
const addRemeinder = document.getElementById("addRemeinder");//   
const sumbitBtn = document.getElementById("remainder");

// changeAndEtc.onclick = () => {
//     const presentCom = localStorage.getItem("presentComittee");
//     const newCom = localStorage.getItem("newComittee");
//     if (presentCom === newCom) {
//         alert("הידד!! מבחרת שוב---/n אנא המשך בעבודתך במסירות");
//         //    window.location.href="mailto:mail@mail.com?subject=title&body=text";
//     }
//     else {
//         alert("לא נבחרת ");
//         localStorage.setItem("presentComittee", newCom);
//         window.location.href = "../htmlPages/ourBuilding.html";

//     }

// }
//
//הוספת תזכורת .
addRemeinder.onclick = () => {
    const h5 = document.createElement('h5');
    const list = document.getElementById("list");
    const remainder = document.getElementById("remainder");
    const input = document.createElement('input');
    list.appendChild(h5);
    h5.innerHTML = "התזכורות שלי:"

    const button = document.createElement('button');
    button.id = "saveText";
    const ul = document.getElementById("lists");
    input.innerHTML = "כתיבת משימות";
    list.appendChild(input);
    input.id = "reminder";
    //    list.appendChild(li);

    button.innerHTML = "שמור תזכורת";
    list.appendChild(button);
    saveText.onclick = () => {
        // alert(remainder.value);
        const li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = reminder.value;
        const removeTask = document.createElement('button');
        removeTask.innerHTML = "להסרה";
        li.appendChild(removeTask);
        addRemeinder.remove();
        removeTask.onclick = () => {
            li.remove();
            input.innerHTML = "";
        }
    }
}
sumbitBtn.onclick = () => {
    sumbitBtn.style.display = "none";
    const tasks = document.getElementById("tasks");
    const input1 = document.createElement('input');
    const input2 = document.createElement('input');
    const br = document.createElement('br');
    tasks.appendChild(input1);
    tasks.appendChild(br);
    tasks.appendChild(input2);
    input1.id = "remeinderText";
    input2.id = "remeinderNumber";
    input1.placeholder = "רשום את התזכורת";
    input2.placeholder = "זמן להעלת התזכורת";
    const button = document.createElement("button");
    tasks.appendChild(button);
    button.innerHTML = "לאישור ";
    button.id = "ok";
    ok.onclick = () => {

        console.log("worked");

        const remeindertext = remeinderText.value;
        const remeindernumber = (remeinderNumber.value) * 60000;
        input1.remove();
        input2.remove();
        ok.remove();

        sumbitBtn.style.display = "";

        function myFunction() {
            alert(remeindertext);
        }
        setTimeout(myFunction, remeindernumber);

    }

}