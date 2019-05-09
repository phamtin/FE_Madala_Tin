<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form" %>

<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Form Page</title>
    <link href="<c:url value="/webjars/bootstrap/4.1.1/css/bootstrap.min.css"/>" type="text/css" rel="stylesheet" />
    <style>
        .ui-error {
            color: red;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <h2>Register</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <form:form action="${pageContext.request.contextPath}/result" method="post" modelAttribute="account" class="form-horizontal">

                    <div class="form-group">
                        <label class="control-label col-sm-2">
                            Full Name</label>
                        <div class="col-sm-8">
                            <input name="fullName" class="form-control" value="${account.fullName }" />
                            <form:errors path="fullName" cssClass="ui-error" />
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="control-label col-sm-2">
                            Password <span class="ui-error">(*)</span></label>
                        <div class="col-sm-8">
                            <input name="password" type="password" class="form-control" value="${account.password }" />
                            <form:errors path="password" cssClass="ui-error" />
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="control-label col-sm-2">
                            Detail</label>
                        <div class="col-sm-8">
                            <input name="detail" class="form-control"></input>
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="control-label col-sm-2">
                            Email <span class="ui-error">(*)</span></label>
                        <div class="col-sm-8">
                            <input type="text" name="email" class="form-control" value="${account.email }" />
                            <form:errors path="email" cssClass="ui-error" />
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="control-label col-sm-2">
                            Birth Date</label>
                        <div class="col-sm-8">
                            <input type="date" name="birthDate" class="form-control" />
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-8 col-sm-offset-2 checkbox">
                            <label>
                                <input type="checkbox" name="smoking" />
                                Smoking
                            </label>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-sm-2">
                            Country</label>
                        <div class="col-sm-8">
                            <select name="country" class="form-control">
                                <c:forEach items="${countries}" var="country">
                                    <option value="${country}">${country}</option>
                                </c:forEach>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary" type="submit">Register</button>
                    </div>
                </form:form>
            </div>
        </div>
    </div>
</body>

</html>
