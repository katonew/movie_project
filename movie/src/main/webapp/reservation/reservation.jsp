<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>예매</title>
	<link href="/movie/css/reservation/reservation.css" rel="stylesheet">
</head>
<body>
	
	<div class="wrap"> 
	
		<div class="reservation_wrap">	<!-- 영화 선택란 -->
			<div class="reservation_content">	<!-- 영화제목, 날짜 -->
				
				<div class="movie_select">	<!-- 영화선택 -->
					<div class="movie_select_font"> 영화 선택 </div>	<!-- 클릭시 클릭한 글자로 번경 -->
					<div class="movie_title">	<!-- 상영중인 영화 제목 (DB)-->
					
					</div> <!-- movie_title e -->
				</div>	<!-- movie_select e -->
				
				
				<div class="select_date">	<!-- 영화 날짜 -->
					<div class="date_font"> 날짜/시간 </div>	<!-- 클릭시 클릭한 글자로 번경 -->
					<div class="date_week">	<!-- 현재날짜~ 7일뒤 날짜 -->
					</div> <!-- date_week e -->
					
					<div class="screan">	<!-- 선택한 영화+날짜의 상영정보(DB) -->
					</div>
					
				</div>	<!-- select_date e -->
				
				
			</div>	<!-- content e -->
		</div>	<!-- reservation_wrap e -->
		
	</div>	<!-- wrap -->
	
<script  src="/movie/js/reservation/reservation.js"></script>
</body>
</html>