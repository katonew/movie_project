<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	
	<%@ include file="/header.jsp" %>
	<div class="wrap">
		<div> <!-- 날짜 선택 창 -->
			<h3> 날짜 선택 </h3>
			<select class="year"></select>
			<select onchange="monthchange()" class="month"></select>
			<select class="date"></select>
			<button onclick="setSelectday()" type="button">날짜 선택</button>
		</div>
		<div><!-- 시간, 분 선택 창 -->
			<h3> 시간 선택 </h3>
			<select class="hour"></select>
			<select class="minute"></select>
			<button type="button">시간 선택</button>
		</div>
		<div><!-- 상영중인 영화 선택창 -->
			<table class="selectMovieTable"></table>
		</div>
		<!-- 영화관 선택창 -->
		<div></div>
		<!-- 가격 선택창 -->
		<div></div>
		<!-- 현재 선택 내용 창 -->
		<div>
			
		</div>
	 
	</div>
	
	<script src="/movie/js/admin/newMovieList.js" type="text/javascript"></script>
</body>
</html>