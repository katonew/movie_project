<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>영화의 모든 것 CINEVERSE</title>
	<!-- 부트스트랩 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <!-- 사용자 정의 CSS -->
    <link href="/movie/css/admin/newMovieList.css" rel="stylesheet">
</head>
<body>
	
	<%@ include file="/header.jsp" %>
	<div class="wrap">
		<div class="infobox">
			<div class="selectbox">
				<div class="playingMovie"><!-- 상영중인 영화 출력창 -->
					<h3>현재 상영중인 영화</h3>
					<table class="table selectMovieTable"></table>
				</div>
				<div class="selectinfo">
					<!-- 영화관 선택창 -->
					<div class="selectScreen">
						<h3>영화관 선택</h3>
						<select class="form-select">
							<option>1</option>
							<option>2</option>
							<option>3</option>
							<option>4</option>
						</select>
					</div> <!-- selectScreen e -->
					<!-- 가격 선택창 -->
					<div class="selectPrice">
						<h3>가격 선택</h3>
						<select class="price form-select">
							<option>10000</option>
							<option>14000</option>
							<option>16000</option>
						</select>
					</div>
					<div class="selectday">
						<h3> 날짜 선택 </h3>
						<div class="selectdate"> <!-- 날짜 선택 창 -->
							<select class="year form-select"></select>
							<select onchange="monthchange(),setSelectday()" class="month form-select"></select>
							<select onchange="setSelectday()" class="date form-select"></select>
						</div>
						<h3> 시간 선택 </h3>
						<div class="selecttime"><!-- 시간, 분 선택 창 -->
							<select onchange="setSelecttime()" class="hour form-select"></select>
							<select onchange="setSelecttime()" class="minute form-select"></select>
						</div>
					</div><!-- selectday e -->
				</div>
				
			</div> <!-- selectbox e -->
			<div class="playlistinfo">
				<div class="movielist">
					<!-- 현재 선택 내용 창 -->
					<h3>선택한 날짜/시간 이후의 상영표</h3>
					<table class="table movielisttable"></table>
				</div> <!-- movielist e -->
				<div class="selectinfo">
					<h3>입력정보</h3>
					<table class="table">
						<tr>
							<td>영화제목</td>
							<td>스즈메의 문단속</td>
						</tr>
						<tr>
							<td>상영일시</td>
							<td>2023-04-03 16:40</td>
						</tr>
						<tr>
							<td>상영관</td>
							<td>3관</td>
						</tr>
						<tr>
							<td>가격</td>
							<td>14000원</td>
						</tr>
						<tr>
							<td>상영가능여부</td>
							<td>상영가능</td>
						</tr>
					</table>
					<button class="btn">상영등록</button>
				</div>
			</div>
			
		
		</div>
		
		
		
		
		
		
	 
	</div>
	<!-- 부트스트랩 JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
	<!-- 사용자 정의 JS -->
	<script src="/movie/js/admin/newMovieList.js" type="text/javascript"></script>
</body>
</html>