
const IdTenet = localStorage.getItem('tenetId');
const formSurvey = document.getElementById("formSurvey");
let voice = JSON.parse(localStorage.getItem('voices'));

let maxNum = 0;
let save = 0;

let users;
//קריאת שרת
$.ajax({
    url: "../jasons/tents.json",
    success: (result) => {
        users = result;
        findId();
    },
    error: (err) => {
        console.log(err);
    }
});
//מוצא את הקוד דייר
const findId = () => {

    let ID = JSON.parse(localStorage.getItem('tenetId'));
    const body = document.querySelector('body');
    const nav = document.querySelector('nav');
    users.forEach(element => {
        nav.innerHTML += createText(element);


    });
}
//מדפיס בניןןט את שם הדייר
const createText = (element) => {
    let ID = JSON.parse(localStorage.getItem('tenetId'));
    if (element.tenetCode == ID) {
        return "<div>" + "  -שלום לדייר - " + element.tenetFirstName + " " + element.tenetLastName + "</div>";
    }
    return "<div>" + "</div>";

}

const sumbitBtn = document.getElementById("fsOk");
let countAmountOfAns = JSON.parse(localStorage.getItem('countTimes'));
// alert(countAmountOfAns);
countAmountOfAns++;
localStorage.setItem('countTimes', JSON.stringify(countAmountOfAns));
let countAmount = JSON.parse(localStorage.getItem('countTimes'));


sumbitBtn.onclick = () => {
    // חיפוש לראות האם הדייר כבר ענה על סקר זה או לאו
    if (countAmount <= 1) {
        //קבלת ערכים ממשתמש.
        let radioButtonsYears = document.getElementsByName('radio');
        let radios;
        for (let radio of radioButtonsYears) {
            if (radio.checked) {
                radios = radio.value;
            }
        }
        localStorage.setItem('building', radios);
        const kids = document.getElementById("fsChild");
        localStorage.setItem('kidos', kids.value);
        const stasfied = document.getElementById("fsIsGood");
        localStorage.setItem('buildingCleaning', stasfied.value)
        const color = document.getElementById("fsColor");
        localStorage.setItem('painting', color.value);

        //
        let radioButtonsSleep = document.getElementsByName('sleep');
        let sleep;
        for (let radio of radioButtonsSleep) {
            if (radio.checked) {
                sleep = radio.value;

            }
        }
        localStorage.setItem('sleapingTime', sleep);


        const chooseComm = document.getElementById("fsCom");
        const commLastName = document.getElementById("fsComLastName");
        const currentCommeite = document.getElementById("fsCurrentComm");
        //alert(chooseComm.value);
        let fulllName = chooseComm.value + " " + commLastName.value;
        //ספירת הקולות לוועד בית ע"י מערך מונים
        const addVoices = (fulllName) => {
            users.forEach(element => {
                // alert(element.comm+=1);
                let name = element.tenetFirstName + " " + element.tenetLastName;
                if (name == fulllName) {
                    // element.comm++;
                    // console.log(element);
                    voice[element.tenetId]++;
                }




            });

        }
        //קריאה לפונקציה הנ"ל
        addVoices(fulllName);

        //שמירת הנתונים ב-LOCAL
        localStorage.setItem('voices', JSON.stringify(voice));
        // window.alert(JSON.parse(localStorage.getItem('voices')));

        //מערך תשובות
        let answers = [];
        answers = [
            {
                tenetId: JSON.parse(localStorage.getItem("tenetId")),
                qustion1: kids.value,
                qustion2: radios,
                qustion3: stasfied.value,
                qustion4: color.value,
                qustion5: sleep,
                qustion6A: chooseComm.value,
                qustion6B: commLastName.value,
                qustion7: currentCommeite.value
            },

        ];
        //שמירת הנתונים של הסקר ב-local storage
        console.log(JSON.stringify(answers));
        let id = localStorage.getItem('tenetId');
        let prev = localStorage.getItem("allTenets");
        let update = answers.concat(JSON.parse(prev));
        localStorage.setItem("allTenets", JSON.stringify(update));
        console.log(JSON.stringify(answers));
        let results = localStorage.getItem('allTenets');

        window.alert("תודה שענית על סקר זה !!")
    }
    else {
        window.alert(" :( מצטערים כבר ענית על סקר זה");
    }

}












