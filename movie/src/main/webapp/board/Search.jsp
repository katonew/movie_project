<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
	<link href="/movie/css/board/search.css" rel="stylesheet">
</head>
<body>
	<%@include file="../header.jsp" %>

	<div class="container">
		<div class="css_1">
			<div class="css_warp">
			<div class="m_list">
			<div>
				<input class="search_m" type="text" placeholder="영화검색">
				<button onclick="search_m()" type="button">검색</button>
			</div>
			
			<div class="searchresult">
				
			</div>
			
			<div class="m_title">
				<h2>박스오피스 탑 10</h2>
			</div>
			<div class="m_p css_m_p">
			</div>
		
			<div class="m_title">
				<h2>넷플릭스 영화 순위</h2>
			</div>
			<div class="m_p2 css_m_p">
			</div>
			
		</div>
		
		
		
		<!-- 모달 HTML -->
		<div class="modal_wrap overflow-auto">
		<div class="overflow_modal">
		<div class="modal_box">
			
			<div class="movie_info">
				<h3 class="modal_title">
				<!-- 제목이 들어가는 자리  -->
			</h3>
				<div class="modal_content">
				<!-- 내용이 들어가는 자리  -->
			</div>
			</div>
			
			
			<div class="review_info">
			<!-- 리뷰 출력 자리 -->
			<h3> 리뷰 </h3>
			<div class="review_print">
				
		</div>
			
		
			<!-- 댓글 작성자리 -->
			<div>
				<h3> 리뷰 작성 </h3>
			</div>
			<div class="review_container">
				
				<form class="writeForm">   
				<div>
					평점 : <input type="text" class="bscore" id="bscore">/10
				</div>
				<div>
					<textarea class="bcontent" rows="" cols="" id="bcontent"></textarea>
					<button class="bwrite" onclick="bwrite()" type="button">작성</button>
				</div>
				</form>
			</div>
			
			</div>
			
			
			<div class="modal_btns">
				<button onclick="closeModal()" class="modal_cencel" type="button">닫기</button>
			</div>
		</div>
		</div>
	</div>
		
	</div>
	</div>
	</div>
	
	<!-- 모달 HTML2 -->
		<div class="modal_wrap2 overflow-auto">
		<div class="modal_box2">
			<h3 class="modal_title2">
				댓글작성하기
			</h3>
			<div class="modal_content2">
				<!-- 내용이 들어가는 자리  -->
			</div>
			<div class="modal_btns2">
			<button class="bwrite" onclick="reply_write()" type="button">작성</button>	
			<button onclick="closeModal2()" class="modal_cencel" type="button">닫기</button>
			</div>
		</div>
			
		</div>
	



	<script type="text/javascript" src="/movie/js/board/Search.js"></script>
</body>
</html>