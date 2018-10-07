let button = document.getElementById("statusButton");
button.onclick = changeStatus;

let changeQuote = new XMLHttpRequest();

function changeStatus () {
    let newStatus = document.getElementById("statusInput").value;

    if (newStatus !== "") {
        let information = "quote=" + encodeURIComponent(newStatus);

        changeQuote.open("POST", "Controller?action=ChangeStatus", true);
        changeQuote.setRequestHeader("Content-type", "application/x-www-from-urlencoded");
        changeQuote.send(information);

        document.getElementById("statusText").innerText = newStatus;
    }
}