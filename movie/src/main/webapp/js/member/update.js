console.log('update.js 실행')

if ( memberInfo == null ){
	alert('회원 로그인을 해주세요.');
	location.href = "/movie/member/login.jsp";
}

document.querySelector('.memail').value = memberInfo.memail;

function update(){
	console.log('update 함수 실행')
	let signupForm = document.querySelectorAll('.signupForm')[0]
	let signupFormData = new FormData(signupForm);
	
	$.ajax({
		url : "/movie/member/info",
		method : "put" ,
		data : signupFormData ,
		contentType : false , 
		processData : false ,
		success : (r)=>{
			console.log('통신')
			console.log(r)
			if ( r == 'true'){
				alert('회원정보 수정성공')
				location.href="/movie/index.jsp"
			}else{
				alert('회원정보 수정실패')
			}
		}
	})
}

function deleteMember(){
	let deletecheck = document.querySelector('.deletecheck').value
	$.ajax({
		url : "/movie/member/info" ,
		method : "delete" ,
		data : { "mpwd":deletecheck} ,
		success : (r)=>{
			console.log('통신')
			console.log(r)
			if ( r == 'true'){
				alert('회원탈퇴가 완료되었습니다.')
				location.href="/movie/member/logout.jsp"
			}else{
				alert('비밀번호가 맞지 않습니다.')
			}
		}
	})
}
	
