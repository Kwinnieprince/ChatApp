window.onload = function(){
  getStatus();
  getFriends();
};

let button = document.getElementById("statusButton");
button.onclick = changeStatus;

let  xHRObjectChangeStatus = new XMLHttpRequest();

function changeStatus() {
    let newStatus = document.getElementById("statusInput").value;

    if (newStatus !== "") {
        xHRObjectChangeStatus.open("POST", "Controller?action=ChangeStatus&statusText="+encodeURIComponent(newStatus), true);
        xHRObjectChangeStatus.setRequestHeader("Content-type", "application/x-www-from-urlencoded");
        xHRObjectChangeStatus.send();
        document.getElementById("statusText").innerText = newStatus;
    }
}

let xHRObjectStatus = new XMLHttpRequest();

function getStatus() {
    xHRObjectStatus.open("GET", "Controller?action=GetStatus");
    xHRObjectStatus.onreadystatechange = getData;
    xHRObjectStatus.send(null);
}

function getData() {
    if(xHRObjectStatus.status === 200){
        if(xHRObjectStatus.readyState === 4){
            document.getElementById("statusText").innerText = xHRObjectStatus.responseText;
        }
    }
}
