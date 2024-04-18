const table = document.getElementById("table-tenets");

let tenets;
$.ajax({
    url: "../jasons/tents.json",
    success: (result) => {
        // console.log(result);
        tenets = result;
        drawTenets();
    },
    error: (err) => {
        console.log(err);
    }
});

//יוצר טבלה שבא נמצאים כל דיירי הבנין

const drawTenets = () => {

    tenets.forEach(tenet => {
        const tr = document.createElement('tr');
        table.appendChild(tr);
        tr.innerHTML += drawFirstName(tenet);
        tr.innerHTML += drawLastName(tenet);
        tr.innerHTML += drawPhone(tenet);
        tr.innerHTML += drawEmail(tenet);


    });

}

const drawFirstName = (tenet) => {
    return "<td>" + tenet.tenetFirstName + "</td>";
}
const drawLastName = (tenet) => {
    return "<td>" + tenet.tenetLastName + "</td>";
}
const drawPhone = (tenet) => {
    return "<td>" + tenet.tenetPhoneNum + "</td>";
}
const drawEmail = (tenet) => {
    return "<td>" + tenet.tenetEmail + "</td>";
}

const topNav = document.getElementById("top-nav");
const printButn = document.getElementById("printButn");

//תדפיס את הרשימה
printButn.onmouseover = () => {
    topNav.style.display = "none"
    printButn.style.display = "none";
    window.print();
    topNav.style.display = ""
    printButn.style.display = "";
}


