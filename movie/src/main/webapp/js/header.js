
console.log('header js 실행')

let memberInfo = null; // <-- 전역변수

// 로그인한 회원정보 호출
getLogin();
function getLogin(){
	$.ajax({
		url : "/movie/login",
		async : false ,
		method : "get" ,
		success : (r)=>{
			console.log('통신')
			console.log(r)
			memberInfo = r;
			let html = ''
			if ( r == null ){ // 로그인 안함
				html += `
						<a href="/movie/member/signup.jsp">회원가입</a>
						<a href="/movie/member/login.jsp">로그인</a>
						`
			}else{ // 로그인
				html +=`
						[ 로그인아이디 : ${r.mid} ]  memberInfo에 mno , mid , memail , mimg 있음 |
						<a href="/movie/member/logout.jsp">로그아웃</a>
						`
			}
			document.querySelector('.submenu').innerHTML = html;
		}
	})
}