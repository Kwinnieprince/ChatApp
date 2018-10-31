let xHRObjectFriends = new XMLHttpRequest();

function getFriends() {
    xHRObjectFriends.open("GET", "Controller?action=GetFriends");
    xHRObjectFriends.onreadystatechange = showData;
    xHRObjectFriends.send();
}

function showData() {
    if (xHRObjectFriends.status === 200) {
        if (xHRObjectFriends.readyState === 4) {
            let serverResponse = JSON.parse(xHRObjectFriends.responseText);
            console.log(serverResponse);
            let friendsHTML = "";

            for (let i = 0; i < serverResponse.length; i++) {
                friendsHTML = friendsHTML + "<li>" + serverResponse[i].userId + ": " + serverResponse[i].status + "</li>";
            }
            document.getElementById("friends").innerHTML = friendsHTML;
            setTimeout(getFriends, 20000);
        }
    }
}
