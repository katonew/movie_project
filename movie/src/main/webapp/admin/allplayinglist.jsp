<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Insert title here</title>
	<link href="/movie/css/admin/allplayinglist.css" rel="stylesheet">
</head>
<body>
	
	<!-- 일자에 포함된 모든 상영정보를 출력하는 모달 -->
	<div class="modal1">
		<div class="modal_box">
			<h3 class="modal_title">
				<!-- 제목이 들어가는 자리  -->
			</h3>
			<div class="modal_content">
				<!-- 내용이 들어가는 자리  -->
			</div>
			<div class="modal_btns">
				<button class="modal_check" 	type="button">확인</button>
				<button onclick="closeModal1()" class="modal_cencel" type="button">닫기</button>
			</div>
		</div>
	</div> 
	
	<div class="modal2">
		<div class="modal2_box">
			<h3 class="modal2_title">
				<!-- 제목이 들어가는 자리  -->
			</h3>
			<div class="modal2_content">
				<!-- 내용이 들어가는 자리  -->
			</div>
			<div class="modal2_btns">
				<button onclick="closeModal2()" type="button">닫기</button>
			</div>
		</div>
	</div>
	
	
	<%@ include file="/header.jsp" %>
	
	<div class="wrap">
		<div class="calender">
			<div class="selectYear"> <!-- 년도 선택부분 -->
				<button><</button>
				<select class="year"></select>
				<button>></button>
			</div>
			<div class="selectmonth">
				<button><</button>
				<select class="month"></select>
				<button>></button>
			</div>
			<div class="selectdate">
				
			</div>
		</div>
	</div>
	
	<script src="/movie/js/admin/allplayinglist.js" type="text/javascript"></script>
</body>
</html>