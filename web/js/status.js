window.onload = getStatus;
let button = document.getElementById("statusButton");
button.onclick = changeStatus;

let changeQuote = new XMLHttpRequest();

function changeStatus() {
    let newStatus = document.getElementById("statusInput").value;

    if (newStatus !== "") {
        changeQuote.open("POST", "Controller?action=ChangeStatus&statusText=" + encodeURIComponent(newStatus), true);
        changeQuote.setRequestHeader("Content-type", "application/x-www-from-urlencoded");
        changeQuote.send();
        document.getElementById("statusText").innerText = newStatus;
    }
}

let getQuote = new XMLHttpRequest();

function getStatus() {
    getQuote.open("GET", "Controller?action=getStatus");
    getQuote.onreadystatechange = getData;
    getQuote.send(null);
}

function getData() {
    if(getQuote.status === 200){
        if(getQuote.readyState === 4){
            document.getElementById("statusText").innerText = getQuote.responseText;
        }
    }
}
