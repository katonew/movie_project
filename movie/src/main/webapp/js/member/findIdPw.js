console.log('findIdPw js실행')



function findid(){
	let emailInputFindId = document.querySelector('.emailInputFindId').value
	
	$.ajax({
		url : "/movie/findidpw" ,
		method : "get" ,
		data : { "memail":emailInputFindId , "type":1 } ,
		success : (r)=>{
			console.log('통신')
			console.log(r)
			console.log(r == 'false')
			if ( r == 'false' ){
				document.querySelector('.findidresult').innerHTML = '일치한 회원정보가 없습니다.'
			}else{
				document.querySelector('.findidresult').innerHTML = '회원님의 아이디는 '+r
			}
		}
	})
}


function findpw(){
	
	let idInputFindPw = document.querySelector('.idInputFindPw').value;
	let emailInputFindPw = document.querySelector('.emailInputFindPw').value;
	
	$.ajax({
		url : "/movie/findidpw" ,
		method : "get" ,
		data : { "mid":idInputFindPw , "memail":emailInputFindPw , "type":2 } ,
		success : (r)=>{
			console.log('통신')
			console.log(r)
		}
	})
	
}