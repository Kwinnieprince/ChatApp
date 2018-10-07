<%--
  Created by IntelliJ IDEA.
  User: wilant
  Date: 9/28/18
  Time: 11:55 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<p>Welcome ${user.getFirstName()}!</p>

<p>Status:<p id="statusText"></p></p>
<p>Change status: <input type="text" id="statusInput" name="statusInput"> <button id="statusButton">Submit</button></p>