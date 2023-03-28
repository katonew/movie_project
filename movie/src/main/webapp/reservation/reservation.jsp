<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>예매</title>
	
	<!-- 부트스트랩 -->
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
	
	<!-- 사용자 css -->
	<link href="/movie/css/reservation/reservation.css" rel="stylesheet">
</head>
<body>
	<div class="wrap"> 
		<%@include file="/header.jsp" %>
	
		<div class="reservation_wrap">	<!-- 영화 선택란 -->
			<div class="reservation_content">	<!-- 영화제목, 날짜 -->
				
				<div class="movie_select">	<!-- 영화선택 -->
					<div class="movie_select_font">  영화 선택  </div>	<!-- 클릭시 클릭한 글자로 변경 -->
					<div class="movie_title">	<!-- 상영중인 영화 제목 (DB)-->
							
							<!-- 임시 -->
							<div class="one_movie_title"> a </div>
							<div class="one_movie_title"> a </div>
							<div class="one_movie_title"> a </div>
							<div class="one_movie_title"> a </div>
							<div class="one_movie_title"> a </div>
							<!-- 임시 끝-->
						
					</div> <!-- movie_title e -->
				</div>	<!-- movie_select e -->
				
				
				<div class="select_date">	<!-- 영화 날짜 -->
					<div class="date_font">  날짜/시간 </div>	<!-- 클릭시 클릭한 글자로 변경 -->
					<div class="date_week">	<!-- 현재날짜~ 7일뒤 날짜 -->
						<!-- 캐러셀 전체 -->
						<div id="carouselExampleControls" class="carousel slide" data-bs-ride="false">	
						</div>	<!-- carouselExampleControlsNoTouching e -->
					</div> <!-- date_week e -->
					
					<div class="screan">	<!-- 선택한 영화+날짜의 상영정보(DB) -->
					</div>
					
				</div>	<!-- select_date e -->
				
				
			</div>	<!-- content e -->
		</div>	<!-- reservation_wrap e -->
		
		<%@include file="/footer.jsp" %>
	</div>	<!-- wrap -->
<!-- 사용자 js -->
<script  src="/movie/js/reservation/reservation.js"></script>

<!-- 부트스트랩 -->
 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
 <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"></script>

 
</body>
</html>