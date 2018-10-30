window.onload = getFriends();
let xHRObjectFriends = new XMLHttpRequest();

function getFriends() {
    xHRObjectFriends.open("GET", "Controller?action=getFriends");
    xHRObjectFriends.onreadystatechange = getData;
    xHRObjectFriends.send();
}

function getData() {
    if(xHRObjectFriends.status === 200) {
        if(xHRObjectFriends.readyState === 4) {
            let serverResponse = JSON.parse(xHRObjectFriends.responseText);
            let html = '';

            for(let i =0; i < serverResponse.length; i++) {
                html += '<li>' + serverResponse[i].userid + ' : ' + serverResponse[i].status + '</li>';
            }
            document.getElementById('friends').innerHTML = html;
        }
    }
}
