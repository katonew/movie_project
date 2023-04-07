<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>영화의 모든 것 CINEVERSE</title>
	<link href="/movie/css/index.css" rel="stylesheet">
</head>
<body>
	<%@include file="/header.jsp" %>
	
	<div class="wrap">
		<div class="boxoffice">
<!-- 			<div onclick="slidermove( 243 )" class="sliderleftbtn"> < </div> -->
<!-- 			<div onclick="slidermove( -243 )" class="sliderrightbtn"> > </div> -->
<!-- 			<div class="indextitle">박스오피스</div> -->
			<div class="boxofficeSlider">
				<div class="boxofficeinfobox">				
				</div> <!-- boxofficeinfobox end -->
			</div>
			<div class="boxofficebardiv">
				
				<div class="boxofficebar boxofficebar0" onclick="slidermovebar(0)"></div>
				<div class="boxofficebar boxofficebar5" onclick="slidermovebar(5)"></div>
	
			</div>
		</div>  
		
<!-- 		<div class="indextitle">박스오피스</div> -->
		<div class="netflixrankdiv">
			<div class="netflixtitlediv">
				<img class="netflixlogo" src="/movie/img/index/netflixlogo.png">
				<div class="netflixtitle">넷플릭스 TOP 10</div>
			</div>
			<div class="netflixrankoneinfo">
				<div class="netflixrankno"></div>
				<div class="netflixrankname"></div>
				
			</div>
			<div class="netflixsliderleftbtn" onclick="netflixslidermove(1)"> <div> < </div> </div>
			<div class="netflixsliderrightbtn" onclick="netflixslidermove(2)"> <div> > </div> </div>
			<div class="netflixtoptendiv">
				<!-- 영화포스터 출력 -->
			</div>
			
		</div>
	</div> <!-- wrap end -->
	<div class="backgroundcolortest">
	</div>
	    <div style="background-image: "></div>
	<script src="/movie/js/index.js" type="text/javascript"></script>
	
</body>
</html>




<!-- <div class="onemovie"> -->
<!-- 	<div class="mposter"> -->
<!-- 		<img alt="" src="/movie/img/indextest/poster/poster1.jpg"> -->
<!-- 		<div class="mrank">1</div> -->
<!-- 	</div>    -->
<!-- 	<div class="moviename">스즈메의 문단속</div> -->
	
<!-- 	<div class="movieinfo"> -->
<!-- 		<div class="mrate">예매율 <span class="mrateno">43.4</span>%</div> -->
<!-- 		<div> -->
<!-- 			<span><i class="fa-solid fa-star"></i> <span class="moviegrade">9.3</span> </span> -->
<!-- 		</div> -->
<!-- 	</div> -->
<!-- </div> -->