<%--
  Created by IntelliJ IDEA.
  User: wilant
  Date: 22/01/19
  Time: 09:04
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>\
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<html>
<jsp:include page="head.jsp">
    <jsp:param name="title" value="Todo" />
</jsp:include>
<body>
<jsp:include page="header.jsp">
    <jsp:param name="title" value="Todo" />
</jsp:include>
<body>
<main>
    <h3>Todo's</h3>
    <ul>
        <li><input id="dag" type="text" placeholder="dag"></li>
        <li><input id="topic" type="text" placeholder="topic"></li>
        <li><input id="naam" type="text" placeholder="naam"></li>
        <li><button id="addTodo">Add</button></li>
    </ul>
    <ul id="todos"></ul>
</main>
<script type="text/javascript" src="js/todo.js"></script>
</body>
</html>
