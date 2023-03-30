<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
	<link href="/movie/css/member/modal.css" rel="stylesheet">
</head>
<body>
	<%@include file="/header.jsp" %>
	<div class="wrap">
	
		<h3>회원정보수정</h3>
		<br>
		<form class="signupForm">

			비밀번호 <input name="mpwd" type="text">  <br>

			비밀번호확인 <input name="mpwdcheck" type="text">  <br>

			이메일 <input class="memail" name="memail" type="text">  <br>
			프로필 <input name="mimg" type="file">  <br>

			<button class="updatebtn" type="button" onclick="update()"> 수정 </button>
			<button onclick="onpenModal()" type="button">회원탈퇴</button>
		</form>
	</div>
	
	
	
	<!-- 모달 HTML -->
	<div class="modal_wrap">
		<div class="modal_box">
			<h3 class="modal_title">
				정말 탈퇴하시겠습니까?
			</h3>
			<div class="modal_content">
				<span class="inputtitle">비밀번호 확인</span><input class="deletecheck" type="password">
			</div>
			<div class="modal_btns">
				<button onclick="deleteMember()" type="button">탈퇴</button>
				<button onclick="closeModal()" class="modal_cencel" type="button">취소</button>
			</div>
		</div>
	</div>
	
	
	<script src="/movie/js/member/update.js" type="text/javascript"></script>
	<script src="/movie/js/member/modal.js" type="text/javascript"></script>
</body>
</html>