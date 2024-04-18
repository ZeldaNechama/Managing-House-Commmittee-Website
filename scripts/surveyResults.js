const body = document.querySelector('body');
const res = document.getElementById("res");
// alert(JSON.parse(localStorage.getItem('voices')));

//מערך תוצאות
let results = JSON.parse(localStorage.getItem('allTenets'));
console.log(results);
//סופר כמה דיירים משתתפים בסקר
let countTenets = 0;
let x = 0;
//מונים לספירה וותיקות בבנין
let newInBuilding = 0; let mid = 0; let old = 0;
//סופר כמה דיירים ישנים בכל תשובה
let betwwen2 = 0; let sleeps = 0; let dosntsleep = 0;
//סופר את כמות הדיירים שבחרו בצבע מסוים
let blue = 0; let grey = 0; let offWhite = 0; let white = 0; let und = 0;
// מערך מונים לרמת השביעות בבנין
let satesified = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
//מונה לספירת כל הילדים בבנין
let kids = [];
//מונה לכמות הדיירים המשתתפים בסקר
let tenetCount = 0;
//מערך לועד בית
// let countComm=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let maxComm = 0;
let saveId = 0;

if (results != null) {
    //עובר על כל המערך התוצאות בשביל התשובות
    results.forEach(element => {
        console.log(element);
        // console.log(element.qustion1+","+element.qustion2+","+element.qustion3+","+
        // element.qustion4+","+element.qustion5+","+element.qustion6+","+element.qustion7);
        //  kids+=element.qustion1;
        //בודק האם האלמנט לא null כי תמיד המקום האחרון במערך התשובות הוא -null;
        if (element != null) {
            if (element.tenetId == localStorage.getItem('tenetId')) {
                tenetCount++;
            }
            //qustion1-מונה ילדים
            if (element.qustion1 != null && element.qustion1 != NaN) {
                kids = kids.concat(element.qustion1);
            }
            //qustion2-מונה וותיקות בבנין.
            if (element.qustion2 === "new") {
                newInBuilding++;
            }
            else
                if (element.qustion2 === "mid") {
                    mid++;
                }
                else {
                    old++;
                }
            //qustion5-מונה שעות שינה
            if (element.qustion5 === "dosnt-sleep") {
                dosntsleep++;
            }
            else if (element.qustion5 === "sleeps") {
                sleeps++;
            }

            else {
                betwwen2++;
            }
            console.log(element.qustion4);

            //qustion4-מונה צבע לבנין
            if (element.qustion4 == "blue") {
                blue++;

            }
            else
                if (element.qustion4 === "white") {
                    white++;

                }
                else
                    if (element.qustion4 === "grey") {
                        grey++;

                    }
                    else {
                        offWhite++;
                    }
            console.log(JSON.stringify(element.qustion4));

            //answerustion3
            console.log(element.qustion3);
            //answerqustion3-מכניס למערך מונים במקום לפי שביעות רצון של דייר-element.
            satesified[element.qustion3]++;

            //answerqustion1
            console.log(element.qustion1);
            //  kids+=(element.qustion1);
            //סופר מס' דיירים המשתתפים בסקר.   
            countTenets++;
        }
    });
}
else {
    const no = document.createElement('div');
    body.appendChild(no);
    no.innerHTML += "עדין אין דיירים שענו על סקר זה";
    no.style.backgroundColor = "#d98f89";
    no.style.padding = "170px";
    no.style.color = "#fff";
    no.style.fontSize = "48px";
    // no.style.width="70%";
    // no.style.height="auto";
}

//מס' דיירים שהשתתפו בסקר
const amountTenets = document.createElement('div');
const br = document.createElement('br');
body.appendChild(amountTenets);
body.appendChild(br);
amountTenets.innerHTML += " מס' הדיירים שהשתתפו בסקר:  " + countTenets;
amountTenets.style.color = "blue";
amountTenets.style.fontSize = "36px";
//answer1-מס' ילדים בבנין
let countKidos = 0;
kids.forEach(element => {
    if (element != null) {
        countKidos += Number(element);
        console.log(countKidos);
    }


});
const answer1Kids = document.createElement('div');
body.appendChild(answer1Kids);
answer1Kids.innerHTML = " מס' ילדים ממוצע בבנין זה:  " + countKidos / countTenets;
answer1Kids.style.color = "red";
answer1Kids.style.fontSize = "36px";
//answer 5:
const answer5Header = document.createElement('h2');
const answer5A = document.createElement('div');
const answer5B = document.createElement('div');
const answer5C = document.createElement('div');
body.appendChild(answer5Header);
body.appendChild(answer5A);
body.appendChild(answer5B);
body.appendChild(answer5C);

answer5Header.innerHTML = " :שעות שינה בצהרים בבנין  "
answer5C.innerHTML = "לא ישנים: " + dosntsleep + " דיירים ";
answer5A.innerHTML = " ישנים בין 2 ל-4 : " + betwwen2 + " דיירים ";
answer5B.innerHTML = "ישנים גמיש: " + sleeps + " דיירים ";


answer5Header.style.color = "green";
answer5A.style.fontWeight = "bold";
answer5B.style.fontWeight = "bold";
answer5C.style.fontWeight = "bold";
//answer3-צבע לבנין
const answer3Color = document.createElement('div');
body.appendChild(answer3Color);

//בודק איזה צבע נבחר ממנו המקסימלי וכותב ע"ג המסך.
let max = 0;
max = Math.max(grey, blue, white, offWhite);
console.log(max);

if (max === grey) {
    //answer3Color.innerHTML='#fff';
    answer3Color.innerHTML = "הצבע הנבחר הוא: אפור";
    answer3Color.style.color = "grey";
    stop;
}
else if (max === blue) {
    answer3Color.innerHTML = "הצבע הנבחר הוא: כחול";
    answer3Color.style.color = "blue";
    stop;
}
else
    if (max === white) {
        answer3Color.innerHTML = "הצבע הנבחר הוא: לבן";
        answer3Color.style.backgroundColor = "black";
        answer3Color.style.color = "#fff";
        stop;

    }
    else {
        answer3Color.innerHTML = "הצבע הנבחר הוא: שמנת";
        answer3Color.style.backgroundColor = "black";
        answer3Color.style.color = "#fff";
        // answer3Color.style.webkitTextStrokeColor="black";
        stop;
    }

//answer3-שביעות רצון
console.log(satesified);
const answer3StasfiedHeader = document.createElement('h2');
answer3StasfiedHeader.innerHTML = "שביעות רצון מהבנין"
body.appendChild(answer3StasfiedHeader);
answer3StasfiedHeader.style.color = "green";
let count1 = 0;
let sum = 0;
for (let index = 0; index < satesified.length; index++) {
    const element = satesified[index];
    if (element != 0 && element != NaN) {
        const answer3Stasfied = document.createElement('div');
        body.appendChild(answer3Stasfied);
        //answer3Stasfied.innerHTML+=" מרוצים מהבנין"+element+"%"+index+"מס' דיירים";
        //  answer3Stasfied.innerHTML+=element+"דיירים"+index+"% ";
        answer3Stasfied.innerHTML += index + "%  -" + element + ":דיירים";
        answer3Stasfied.style.fontWeight = "bold";
        console.log(index * element);
        sum += (element * index);
        count1++;
    }

}

console.log(count1);
const avg = sum / count1;
const allAvg = document.createElement('div');
body.appendChild(allAvg);
allAvg.innerHTML = "אחוזים בבנין המרוצים באופן כללי מהבנין" + avg + "%";
allAvg.style.color = "orange";
allAvg.style.fontSize = "36px";

//answer2
let maxSleep = 0;
maxSleep = Math.max(newInBuilding, mid, old);
console.log(max);

const answer2Sleep = document.createElement('div');
answer2Sleep.style.color = "blue";
answer2Sleep.style.fontSize = "36px";

body.appendChild(answer2Sleep);


if (maxSleep === newInBuilding) {
    answer2Sleep.innerHTML = "רב הדיירים חדשים בבנין";
    stop;
}
else if (maxSleep === mid) {
    answer2Sleep.innerHTML = "רב הדיירים  די חדשים בבנין";
    stop;
}
else {
    answer2Sleep.innerHTML = "רב הדיירים וותיקים בבנין";
}
//answer6



let maxVoices = 0;
let saveIdComm = 0;
let newCommm;
let answer6 = document.createElement('div');

let voicesComm = JSON.parse(localStorage.getItem('voices'));
let maxCommVoices = 0;
// alert(voicesComm);
for (let index = 0; index < voicesComm.length; index++) {
    const element = voicesComm[index];

    if (element > maxCommVoices) {
        maxCommVoices = element;
        saveIdComm = index;
        // alert(saveIdComm);

    }

}

saveIdComm = saveIdComm / 2;
let tenets;
$.ajax({
    url: "../jasons/tents.json",
    success: (result) => {
        tenets = result;
        console.log(tenets);
        let ans = findNameComm();
        // alert(ans);
        if (ans != null) {
            answer6.innerHTML = "הועד בית הנבחר :" + ans;
            body.appendChild(answer6);
            answer6.style.fontSize = "36px";


        }
    },
    error: (err) => {
        console.log(err);
    }
});

const findNameComm = () => {
    for (let index = 0; index < tenets.length; index++) {
        const element = tenets[index];
        if (element.tenetId === saveIdComm + 1) {
            // alert(element.tenetId+"!!!!!!!!!!!!!!!!!!!!");
            localStorage.setItem('presentComittee', element.tenetCode);
            return element.tenetFirstName + " " + element.tenetLastName;
            break;

        }


    }
    return null;
}


