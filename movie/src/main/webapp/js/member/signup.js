console.log('signup js실행')



function signup(){
	console.log('signupbtn함수 실행')
	let signupForm = document.querySelectorAll('.signupForm')[0];
	let signupFormData = new FormData( signupForm );
	console.log(signupFormData)
	
	$.ajax({
		url : "/movie/memberinfo",
		method : "post" ,
		data : signupFormData ,
		contentType : false , 
		processData : false ,
		success : (r)=>{
			console.log('통신')
			console.log(r)
			if ( r == 'true'){
				alert('회원가입 성공')
				location.href="/movie/index.jsp"
			}else{
				alert('회원가입 실패')
			}
		}
	})
}