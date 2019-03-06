let todoButton = document.getElementById("addTodo");
todoButton.onclick = addTodo;
let xHRObjectGetTodos = new XMLHttpRequest();

function addTodo() {
    let xHRObjectAddTodo = new XMLHttpRequest();
    let dag = document.getElementById("dag").value;
    let naam = document.getElementById("naam").value;
    let topic = document.getElementById("topic").value;
    xHRObjectAddTodo.open("POST", "Controller?action=AddTodo&dag="
        + encodeURIComponent(dag) + "&topic=" + encodeURIComponent(topic) + "&naam=" + encodeURIComponent(naam), true )
    xHRObjectAddTodo.setRequestHeader("Content-type", "application/x-www-from-urlencoded");
    xHRObjectAddTodo.send();
    getTodos();
}

function getTodos() {
    xHRObjectGetTodos.open("GET", "Controller?action=GetTodos");
    xHRObjectGetTodos.onreadystatechange = showTodos;
    xHRObjectGetTodos.send();
}

function showTodos() {
    if(xHRObjectGetTodos.status === 200 && xHRObjectGetTodos.readyState === 4){
        let serverResponse = JSON.parse(xHRObjectGetTodos.responseText);
        let todosHTML = "";
        for(let i=0; i< serverResponse.length; i++){
            todosHTML += "<li>" + serverResponse[i].dag + " - " + serverResponse[i].topic + " - " + serverResponse[i].naam + "</li>"
        }
        document.getElementById("todos").innerHTML = todosHTML;

    }
}
setInterval(getTodos, 200);
