<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%@include file="/header.jsp" %>
	<div class="wrap">
		<h3>로그인</h3>
		아이디 <input class="mid" type="text"> <br>
		비밀번호 <input class="mpwd" type="text">  <br>
		<button class="loginbtn" type="button" onclick="login()"> 로그인 </button>
	</div>
	
	
	<script src="/movie/js/member/login.js" type="text/javascript"></script>
</body>
</html>