<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
	<link href="/movie/css/member/signup.css" rel="stylesheet">
</head>
<body>
	<%@include file="/header.jsp" %>
	<div class="wrap">
		<div class="signupdiv">
			<div class="titlediv">
				<h3 class="title">회원가입</h3>
			</div>
			<div class="formdiv">
				<form class="signupForm">
					아이디 <input onkeyup="idcheck()" class="mid" name="mid" type="text"> <br>
					<div class="confirminput">테스트</div>
					비밀번호 <input onkeyup="pwdcheck()" class="mpwd" name="mpwd" type="text">  <br>
					<div class="confirminput">테스트</div>
					비밀번호확인 <input onkeyup="repwdcheck()" class="rempwd" name="rempwd" type="text">  <br>
					<div class="confirminput">테스트</div>
					이메일 <input onkeyup="emailcheck()" class="memail" name="memail" type="text">  <br>
					<div class="confirminput">테스트</div>
					프로필 <input onchange="premimg(this)" class="mimg" name="mimg" type="file">  <br>
					<div><img style="width:100px"  class="newmimg" alt="" src="/movie/member/img/default.webp"></div>
					<button class="signupbtn" type="button" onclick="signup()"> 회원가입 </button>
		
				</form>
			</div>
		</div>
	</div>

	<script src="/movie/js/member/signup.js" type="text/javascript"></script>
</body>
</html>