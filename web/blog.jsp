<%--
  Created by IntelliJ IDEA.
  User: wilant
  Date: 14/11/18
  Time: 10:35
  To change this template use File | Settings | File Templates.
--%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<jsp:include page="head.jsp">
    <jsp:param name="title" value="Blog" />
</jsp:include>
<body>
<jsp:include page="header.jsp">
    <jsp:param name="title" value="Blog" />
</jsp:include>
<main>
    <c:if test="${errors.size()>0 }">
        <div class="danger">
            <ul>
                <c:forEach var="error" items="${errors }">
                    <li>${error }</li>
                </c:forEach>
            </ul>
        </div>
    </c:if>

    <div>
        <p>
            Hoe was de projectweek?
        </p>
        <ul id="topic1-comments"></ul>
        <ul>
            <li><input id="topic1-comment" type="text" placeholder="Enter a comment "></li>
            <li><input id="topic1-name" type="text" placeholder="name"></li>
            <li><input id="topic1-rating" type="number" min="0" max="5" placeholder="rating" ></li>
            <button id="topic1-button" onclick="send(1)">Commit</button>
        </ul>
    </div>
</main>
<script type="text/javascript" src="js/comment.js"></script>
</body>
</html>
