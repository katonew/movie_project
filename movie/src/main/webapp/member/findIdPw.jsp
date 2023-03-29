<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
	<link href="/movie/css/member/findIdPw.css" rel="stylesheet">
</head>
<body>
	<%@include file="/header.jsp" %>
	<div class="wrap">
		<div class="findidpwdiv">
		
			<!-- 메뉴div end -->
			<div class="findidpwmenu">
				<div class="findidmenu">아이디 찾기</div>
				<div class="findpwmenu">비밀번호 찾기</div>
			</div> <!-- 메뉴div end -->
			
			<!-- 아이디비번찾기 입력구역 -->
			<div class="finddiv">
				<div class="findiddiv">
					이메일 : <input class="emailInputFindId" type="text"> <br>
					<button onclick="findid()" type="button">아이디찾기</button>
					<div class="findidresult"></div>
				</div>
				<div class="findpwdiv">
					아이디 : <input class="idInputFindPw" type="text"> <br>
					이메일 : <input class="emailInputFindPw" type="text"> <br>
					<button onclick="findpw()" type="button">비밀번호찾기</button>
				</div>
				
			</div> <!-- 아이디비번찾기 입력구역 end -->
			
		</div>
	</div>
	
	<script src="/movie/js/member/findIdPw.js" type="text/javascript"></script>
</body>
</html>