let users;
const sumbitBtn = document.querySelector('button');
const body = document.querySelector('body');
const table=document.getElementById("table-tenets");
table.style.display="none";
//קריאת שרת
$.ajax({
    url: "../jasons/tents.json",
    success: (result) => {
        console.log(result);
        users = result;
        // findId();
        changeTenet();
    },
    error: (err) => {
        console.log(err);
    }
});
//מוצאת את הקוד הדייר
const findId = () => {
    //  debugger
    //  const body=document.querySelector('body');
    const nav = document.querySelector('nav');
    users.forEach(element => {
        nav.innerHTML += createText(element);

    });
}
//יוצרת את שם הדייר
const createText = (element) => {
    let ID = JSON.parse(localStorage.getItem('tenetId'));
    if (element.tenetId == ID) {
        return "<task>" + element.tenetFirstName + " " + element.tenetLastName + "</task>";
    }
    return "<task>" + "</task>";

}
//מוצאת את חובות הדייר מסכום מסוים
const changeTenet = () => {
    const input = document.createElement('input');
    const button = document.createElement('button');
    body.appendChild(input);
    input.id = "write";
    input.className = "form-control";
    button.id = "savebutt";
    input.placeholder = "חיפוש הדיירים שחובם מעל";
    body.appendChild(button);
    savebutt.innerHTML = "לחיפוש";
    savebutt.class="btn btn-dark";
    savebutt.onclick = () => {
        let count = 0;
        const answer = write.value;
        users.forEach(element => {
            input.remove();
            button.remove();
            if (element.debt > answer) {
                table.style.display="";
                const br = document.createElement('br');
                body.appendChild(br);
                const tr=document.createElement('tr');
                table.appendChild(tr);
                tr.innerHTML+=drawFirstName(element);
                tr.innerHTML+=drawLastName(element);
                tr.innerHTML+=drawDebt(element);
                count++;
            }
        });
        if (count === 0) {
            const label = document.createElement('label');
            body.appendChild(label);
            label.innerHTML = "מצטערים לא מצאנו תוצאות עבור חיפוש זה";
        }
    }

}
//יוצרת עמודה בטבלה שם פרטי
const drawFirstName = (tenet) => {
    return "<td>"+tenet.tenetFirstName +"</td>";
}
//יוצרת עמודה בטבלה שם משפחה
const drawLastName = (tenet) => {
    return "<td>"+ tenet.tenetLastName +"</td>";
}
//יוצרת עמודה בטבלה סכום החוב
const drawDebt = (tenet) => {
    return "<td>"+ tenet.debt +"</td>";
}
// const addRemeinder = document.getElementById("addRemeinder");//   

