console.log('signup js실행')



function signup(){
	console.log('signupbtn함수 실행')
	let signupForm = document.querySelectorAll('.signupForm')[0];
	let signupFormData = new FormData( signupForm );
	console.log(signupFormData)
	
	$.ajax({
		url : "/movie/member/info",
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

function idcheck(){
	// 5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.
	let mid = document.querySelector('.mid').value;
	let midj = /^(?=.*[a-z])(?=.*[0-9])(?=.*[_-])[a-z0-9_-]{5,20}$/
	if ( midj.test(mid)){
		$.ajax({
			url : "/movie/midconfirm" ,
			method : "get" ,
			data : {"mid":mid} ,
			success : (r)=>{
				console.log('통신')
				console.log(r)
				if ( r == 'true'){
					console.log('사용중인 아이디 X')
				}else{
					console.log('사용가능 아이디 O')
				}
				
			}
		})
	}else{
		console.log('5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.')	
	}
}

function pwdcheck(){
	// 8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.
	let mpwd = document.querySelector('.mpwd').value;
	let pwdj = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@\#\$%\^&*\(\)_\-+\=])[a-zA-Z0-9!@\#\$%\^&*\(\)_\-+\=]{8,16}$/
	if( pwdj.test(mpwd)){
		console.log('사용가능 비밀번호 O')
	}else{
		console.log('8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.')
	}
}

function repwdcheck(){
	let mpwd = document.querySelector('.mpwd').value;
	let rempwd = document.querySelector('.rempwd').value;
	
	if ( mpwd != rempwd ){
		console.log('비밀번호가 일치하지 않습니다.')
	}else{
		console.log('비밀번호 일치 O')
	}
}

function emailcheck(){
	let memail = document.querySelector('.memail').value;
	let memailj = /^[a-zA-Z0-9+-_.]*@[a-zA-Z0-9-]*\.[a-zA-Z]{2,3}$/
	if ( memailj.test(memail)){
		console.log('이메일 확인 O')
	}else{
		console.log('이메일 주소를 다시 확인해주세요.')
	}
}
