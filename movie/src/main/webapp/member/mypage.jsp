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
		
		<div class="">
			<h3>예약페이지</h3>
			<div class="reservationDiv">
				<!-- 출력할예약정보 : 영화제목/상영시간/상영관/좌석번호/결제금액 -->
			</div>
			<br>
			
		</div>
		
		<div>
			<a name="update"></a>
			<h3>회원정보수정</h3>
			<br>
			<form class="signupForm">
				<div><img class="mimgimg" style="width:100px" alt="" src=""> </div>
				현재비밀번호 <input name="mpwd" type="text">  <br>
				비밀번호 <input name="newmpwd" class="newmpwd" type="text">  <br>
				
				비밀번호확인 <input onkeyup="repwdcheck()"  name="newmpwdcheck" class="newmpwdcheck" type="text">  <br>
				<div class="confirminput">테스트</div>
				
				이메일 <input class="memail" name="memail" type="text">  <br>
				프로필 <input onchange="premimg(this)" class="newmimg" name="newmimg" type="file">  <br>
	
				<button class="updatebtn" type="button" onclick="update()"> 수정 </button>
				<button onclick="onpenModal()" type="button">회원탈퇴</button>
			</form>
		</div>
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
	<script src="/movie/js/member/myReservation.js" type="text/javascript"></script>
</body>
</html>



<!-- 출력할예약정보 : 영화제목/상영시간/상영관/좌석번호/결제금액 -->

<!-- 				<div class="oneReservation">
					
						<div class="title">더 퍼스트 슬램덩크</div>
						<div class="playtime">2023-03-22</div>
						<div class="sno">2관</div>
						<div class="seatnum">a1</div>
						<div class="pprice">14000원</div>
						
					</div>			
 --> 