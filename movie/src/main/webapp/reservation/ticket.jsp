<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>좌석 예약</title>
	
	<!-- 사용자 설정 css -->
	<link href="/movie/css/reservation/ticket.css" rel="stylesheet">

</head>
<body>
	<%@include file="/header.jsp" %>
	
	<% 
		int pno = Integer.parseInt( request.getParameter("pno"));
	%>
	<input type="hidden" value=<%=pno%> class="pno">
	 
	
	<div class="t_wrap"> 
		
		
		<div class="ticket_top"> <!-- 상단 -->
			<div class="top_title"> 인원/좌석 선택</div>
			
			<div class="top_content"> <!-- 상단 중심 -->
			
				<div class="movie_info"> <!-- 영화 정보 -->
					<div class="movie_title"> </div>
					<span class="date"> </span>    |<!-- 날짜 -->
					<span class="time"> </span>   <!-- 시간 -->
					<div class="screen_box">  </div>	<!-- 상영관 -->
				</div>	<!-- movie_info e -->
				
			<div class="movie_people">	<!-- 성인 인원선택 -->
					<div class="age"> 성인 </div>
					<div class="people">
						<button type="button" onclick="p_up(1)"> + </button>
						<span class="a_num"> 0 </span>
						<button type="button" onclick="p_down(1)"> - </button>
					</div>
			</div>	<!-- movie_people e -->
				
				<div class="movie_people">	<!-- 성인 인원선택 -->
					<div class="age"> 청소년 </div>
					<div class="people">
						<button type="button" onclick="p_up(2)" > + </button>
						<span class="t_num"> 0 </span>
						<button type="button" onclick="p_down(2)"> - </button>
					</div>
				</div>	<!-- movie_people e -->
				
				<div class="movie_people">	<!-- 성인 인원선택 -->
					<div class="age"> 시니어 </div>
					<div class="people">
						<button type="button" onclick="p_up(3)"> + </button>
						<span class="b_num"> 0 </span>
						<button type="button" onclick="p_down(3)"> - </button>
					</div>
				</div>	<!-- movie_people e -->
				
				
			</div> <!-- top_content e -->
		</div>	 <!-- ticket_top e --> 
		 
		<div class="middle"> 
			<div class="screen">
				SCREEN
			</div>	<!-- screen -->
			
			<div class="select_seat">
			</div>	<!-- select_screen e -->
			
			
		</div><!-- middle -->
		
		<div class="paybox">	<!-- 결제칸 -->
				총 합계 <span class="pay_money"> 50,000</span>원
		</div>	<!-- paybox -->
		
	</div>
	
	
	<%@include file="/footer.jsp" %>
	<script src="/movie/js/reservation/ticket.js"></script>
</body>
</html>