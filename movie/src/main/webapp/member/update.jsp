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
		<h3>회원정보수정</h3>
		<br>
		<form class="signupForm">
			아이디 <input name="mid" type="text"> <br>

			비밀번호 <input name="mpwd" type="text">  <br>

			비밀번호확인 <input name="mpwdcheck" type="text">  <br>

			이메일 <input name="memail" type="text">  <br>
			프로필 <input name="mimg" type="file">  <br>

			<button class="signupbtn" type="button" onclick="signup()"> 회원가입 </button>

		</form>
	</div>
	
	<script src="/movie/js/member/update.js" type="text/javascript"></script>
</body>
</html>