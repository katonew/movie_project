console.log('signup js실행')



function signup(){
	console.log('signupbtn함수 실행')
	let signupForm = document.querySelectorAll('.signupForm')[0];
	let signupFormData = new FormData( signupForm );
	console.log(signupFormData)
	
	$.ajax({
		url : "",
		method : "" ,
		data : signupFormData ,
		contentType : false , 
		processData : false ,
		success : (r)=>{
			console.log('통신')
			console.log(r)
		}
	})
}